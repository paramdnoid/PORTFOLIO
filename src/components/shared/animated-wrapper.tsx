"use client";

import React from "react";

import { motion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type AnimatedProps = {
  children: React.ReactNode;
  className?: string | undefined;
  delay?: number | undefined;
};

export function FadeIn({
  children,
  delay = 0,
  className,
}: AnimatedProps): React.ReactElement {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
}: AnimatedProps): React.ReactElement {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.1 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({
  children,
  className,
}: Omit<AnimatedProps, "delay">): React.ReactElement {
  return (
    <motion.div variants={fadeInUp} className={cn(className)}>
      {children}
    </motion.div>
  );
}
