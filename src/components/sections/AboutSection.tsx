"use client";

import { motion } from 'framer-motion';
import { BookOpen, Code, Search, TrendingUp, Target, Users, Award, Rocket } from 'lucide-react';
import { CLUB_INFO, SERVICES } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';

const iconMap = {
  BookOpen,
  Code,
  Search,
  TrendingUp,
};

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <Target className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-300">About Our Club</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Empowering the Next
              <span className="block gradient-text">Generation of Blockchain</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {CLUB_INFO.description} We're committed to fostering innovation,
              education, and collaboration in the rapidly evolving world of blockchain technology.
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          >
            <Card glass hover className="p-8">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {CLUB_INFO.mission}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card glass hover className="p-8">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                    <p className="text-gray-400 leading-relaxed">
                      To become the leading blockchain community at HBTU, recognized globally for
                      innovation, technical excellence, and contributions to the decentralized ecosystem.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* What We Do */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What We Do
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Through hands-on learning, collaborative projects, and industry connections,
                we prepare our members for leadership roles in the blockchain space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service, index) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={service.title}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card glass hover className="p-6 h-full group">
                      <CardContent className="p-0 text-center">
                        <motion.div
                          className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 5 }}
                        >
                          <IconComponent className={`w-8 h-8 ${service.color}`} />
                        </motion.div>

                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                          {service.title}
                        </h4>

                        <p className="text-gray-400 leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Founded", value: CLUB_INFO.established, icon: "Calendar" },
              { label: "Active Members", value: "500+", icon: "Users" },
              { label: "Events This Year", value: "25+", icon: "Calendar" },
              { label: "Success Rate", value: "95%", icon: "Award" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <Card glass className="p-6">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}