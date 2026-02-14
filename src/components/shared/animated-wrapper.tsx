"use client";

import React from "react";

import { motion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Motion variants for a fade-in-up animation.
 *
 * - `hidden`: fully transparent and shifted 24 px downward.
 * - `visible`: fully opaque at the natural position.
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/** Common props shared by all animation wrapper components. */
export type AnimatedProps = {
  /** Content to animate. */
  children: React.ReactNode;
  /** Additional CSS class names. */
  className?: string | undefined;
  /** Delay in seconds before the animation starts. */
  delay?: number | undefined;
};

/**
 * Fades and slides content upward when it enters the viewport.
 *
 * Triggers once when the element scrolls into view (with a -100 px margin).
 * An optional `delay` offsets the start of the animation for stagger effects.
 *
 * @param props - See `AnimatedProps` for available options.
 */
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

/**
 * Container that staggers the entrance animation of its children.
 *
 * Each direct child using `fadeInUp` variants will animate sequentially
 * with a 100 ms offset between siblings.
 *
 * @param props - See `AnimatedProps` (without `delay`).
 */
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

/**
 * A child item intended for use inside a {@link StaggerContainer}.
 *
 * Inherits the `fadeInUp` variants from the parent stagger context
 * so it animates automatically when the container enters the viewport.
 *
 * @param props - See `AnimatedProps` (without `delay`).
 */
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
