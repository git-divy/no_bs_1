"use client";

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimationWrapperProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  duration?: number;
}

export function AnimationWrapper({
  children,
  variants,
  className = "",
  delay = 0,
  duration = 0.6
}: AnimationWrapperProps) {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInUp({
  children,
  delay = 0,
  className = ""
}: Omit<AnimationWrapperProps, 'variants'>) {
  const variants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimationWrapper variants={variants} className={className}>
      {children}
    </AnimationWrapper>
  );
}

export function FadeInLeft({
  children,
  delay = 0,
  className = ""
}: Omit<AnimationWrapperProps, 'variants'>) {
  const variants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimationWrapper variants={variants} className={className}>
      {children}
    </AnimationWrapper>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  className = ""
}: Omit<AnimationWrapperProps, 'variants'>) {
  const variants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimationWrapper variants={variants} className={className}>
      {children}
    </AnimationWrapper>
  );
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = ""
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}