"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe } from 'lucide-react';
import { CLUB_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/button';

// Array of popular cryptocurrencies for floating cards
const CRYPTO_NAMES = [
  'Bitcoin',
  'Ethereum',
  'Binance Coin',
  'Dogecoin',
  'Litecoin',
  'Monero'
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate random crypto names for floating cards
  const getRandomCryptoNames = () => {
    const names = [];
    for (let i = 0; i < 8; i++) {
      names.push(CRYPTO_NAMES[Math.floor(Math.random() * CRYPTO_NAMES.length)]);
    }
    return names;
  };

  const cryptoNames = getRandomCryptoNames();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-slate-950" />

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-blue-400/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute bottom-32 right-16 w-24 h-24 border border-purple-400/20 rounded-lg rotate-45"
          animate={{
            rotate: [45, 135, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-12 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-yellow-400 mr-3" />
            <span className="text-base font-semibold text-gray-200 font-inter">
              Building Tomorrow's Blockchain Leaders
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 font-inter leading-tight"
          >
            <span className="block gradient-text mb-4">
              {CLUB_INFO.name.split(' ')[0]}
            </span>
            <span className="block text-white">
              {CLUB_INFO.name.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed font-inter font-medium"
          >
            {CLUB_INFO.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-inter"
          >
            Join a vibrant community of blockchain enthusiasts, developers, and innovators at HBTU.
            Learn, build, and shape the future of decentralized technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              variant="glass"
              onClick={() => scrollToSection('#community')}
              className="group"
            >
              Join Our Community
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#events')}
              className="group"
            >
              <Zap className="mr-2 w-5 h-5" />
              Explore Events
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { label: "Active Members", value: "500+" },
              { label: "Events Hosted", value: "25+" },
              { label: "Projects Built", value: "30+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Cards Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute glass-card p-4 max-w-xs"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              rotate: [-10, 10, -10],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-gray-300 font-medium">
                {cryptoNames[i]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}