"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Users, Crown, Shield, Wrench } from 'lucide-react';
import { TEAM_MEMBERS } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const roleIcons = {
  President: Crown,
  'Vice President': Shield,
  'Technical Lead': Wrench,
  'Events Coordinator': Users,
  'Research Head': Wrench,
  'Community Manager': Users,
};

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
};

export function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="team" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6"
            >
              <Users className="w-4 h-4 text-pink-400 mr-2" />
              <span className="text-sm font-medium text-pink-300">Meet Our Team</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Minds Behind
              <span className="block gradient-text">Our Success</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of passionate blockchain enthusiasts brings together expertise
              in technology, research, community building, and innovation to drive our mission forward.
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {TEAM_MEMBERS.map((member, index) => {
              const RoleIcon = roleIcons[member.role as keyof typeof roleIcons];
              return (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card glass hover className="h-full overflow-hidden group">
                    <CardContent className="p-0">
                      {/* Profile Image Placeholder */}
                      <div className="relative h-64 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden">
                        <motion.div
                          className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </motion.div>

                        {/* Floating Particles */}
                        <div className="absolute inset-0">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white/30 rounded-full"
                              style={{
                                left: `${20 + Math.random() * 60}%`,
                                top: `${20 + Math.random() * 60}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 0.8, 0.3],
                              }}
                              transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <RoleIcon className="w-5 h-5 text-blue-400 mr-2" />
                          <span className="text-sm font-medium text-blue-300 bg-blue-500/10 px-2 py-1 rounded-full">
                            {member.role}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {member.name}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {member.bio}
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-3">
                          {Object.entries(member.social).map(([platform, url]) => {
                            const SocialIcon = socialIcons[platform as keyof typeof socialIcons];
                            return (
                              <motion.a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <SocialIcon className="w-4 h-4" />
                              </motion.a>
                            );
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Join Team CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <Card glass className="p-8 max-w-2xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Want to Join Our Team?
                </h3>
                <p className="text-gray-400 mb-6">
                  We're always looking for passionate individuals who share our vision
                  of advancing blockchain technology and building amazing communities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="glass">
                    Apply Now
                  </Button>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}