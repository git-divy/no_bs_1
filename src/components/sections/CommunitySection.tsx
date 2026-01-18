"use client";

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MessageCircle, Send, Users, Calendar, BookOpen, Code, ArrowRight, Sparkles } from 'lucide-react';
import { COMMUNITY_STATS } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const iconMap = {
  Users,
  Calendar,
  BookOpen,
  Code,
};

interface AnimatedCounterProps {
  value: string;
  label: string;
  icon: string;
  color: string;
}

function AnimatedCounter({ value, label, icon, color }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const IconComponent = iconMap[icon as keyof typeof iconMap];

  const numericValue = parseInt(value.replace(/[^\d]/g, ''));
  const suffix = value.replace(/[\d]/g, '');

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, numericValue]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start({ scale: 1, opacity: 1 });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`counter-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [controls, label]);

  return (
    <motion.div
      id={`counter-${label}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={controls}
      className="text-center"
    >
      <Card glass className="p-6 h-full">
        <CardContent className="p-0 text-center">
          <motion.div
            className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <IconComponent className={`w-8 h-8 ${color}`} />
          </motion.div>

          <motion.div
            className="text-4xl font-bold gradient-text mb-2"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            {count}{suffix}
          </motion.div>

          <div className="text-sm text-gray-400">
            {label}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function CommunitySection() {
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
    <section id="community" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-300">Join Our Community</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Be Part of Something
              <span className="block gradient-text">Revolutionary</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Connect with like-minded individuals, share knowledge, and build the future
              of blockchain technology together. Our community is your gateway to innovation.
            </p>
          </motion.div>

          {/* Community Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {COMMUNITY_STATS.map((stat, index) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </motion.div>

          {/* Community Platforms */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Connect With Us
              </h3>
              <p className="text-lg text-gray-400">
                Join our vibrant community across multiple platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Discord */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card glass hover className="p-8 text-center group">
                  <CardContent className="p-0">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <MessageCircle className="w-8 h-8 text-indigo-400" />
                    </motion.div>

                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      Discord Community
                    </h4>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      Join our active Discord server for real-time discussions, technical support,
                      networking, and exclusive community events.
                    </p>

                    <Button variant="glass" className="group">
                      Join Discord
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Telegram */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card glass hover className="p-8 text-center group">
                  <CardContent className="p-0">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Send className="w-8 h-8 text-cyan-400" />
                    </motion.div>

                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      Telegram Channel
                    </h4>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      Stay updated with the latest news, announcements, and opportunities
                      in our Telegram channel. Get instant notifications about events and updates.
                    </p>

                    <Button variant="glass" className="group">
                      Join Telegram
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants}>
            <Card glass className="p-8 max-w-2xl mx-auto text-center">
              <CardContent className="p-0">
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Sparkles className="w-8 h-8 text-green-400" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Stay in the Loop
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Subscribe to our newsletter for exclusive insights, early access to events,
                  and the latest updates from the blockchain world.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                  />
                  <Button variant="glow">
                    Subscribe
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