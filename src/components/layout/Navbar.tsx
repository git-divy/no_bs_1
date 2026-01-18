"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Send, Github, Twitter, Linkedin } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { useMobileMenu } from '@/lib/hooks/useMobileMenu';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const iconMap = {
  MessageCircle,
  Send,
  Github,
  Twitter,
  Linkedin,
};

export function Navbar() {
  const { isScrolled } = useScrollAnimation();
  const { isOpen, toggle, close } = useMobileMenu();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      close();
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Link href="#home" className="text-2xl font-bold gradient-text font-inter">
                HBTU Crypto
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {NAV_LINKS.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group font-inter font-medium text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full" />
                </motion.button>
              ))}
            </div>

            {/* Social Links & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Social Links - Hidden on mobile */}
              <div className="hidden lg:flex items-center space-x-3">
                {SOCIAL_LINKS.slice(0, 3).map((social) => {
                  const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </div>

              {/* Join Button */}
              <Button
                variant="glass"
                className="hidden sm:flex"
                onClick={() => scrollToSection('#community')}
              >
                Join Club
              </Button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={toggle}
                className="md:hidden p-3 text-gray-400 hover:text-white transition-all duration-200 rounded-xl hover:bg-white/10"
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={close}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-80 glass-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold gradient-text">Menu</h3>
                  <button
                    onClick={close}
                    className="p-2 text-gray-400 hover:text-white"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-4 mb-8">
                  {NAV_LINKS.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Social Links */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {SOCIAL_LINKS.map((social, index) => {
                      const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/10 hover:bg-white/20 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IconComponent size={20} />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Join Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    variant="glass"
                    className="w-full"
                    onClick={() => scrollToSection('#community')}
                  >
                    Join Club
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}