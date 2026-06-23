'use client';

import { motion } from 'motion/react';

interface BrandIconProps {
  className?: string;
}

export function BrandIcon({ className = "w-10 h-10" }: BrandIconProps) {
  return (
    <motion.svg
      xmlns="http://www.w-svg.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      initial="hidden"
      animate="visible"
      aria-label="Heavy Haulers Moving Company Logo"
      role="img"
    >
      <title>Heavy Haulers Moving Company</title>
      
      {/* Background Circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="var(--color-brand-steel)"
        strokeWidth="2"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
        }}
      />
      
      {/* Outer Ring Accents */}
      <motion.path
        d="M 10 50 A 40 40 0 0 1 50 10"
        fill="none"
        stroke="var(--color-brand-orange)"
        strokeWidth="4"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
        }}
      />
      <motion.path
        d="M 90 50 A 40 40 0 0 1 50 90"
        fill="none"
        stroke="var(--color-brand-orange)"
        strokeWidth="4"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, delay: 0.4 } }
        }}
      />

      {/* The Letter "H" - Left Pillar */}
      <motion.rect
        x="30"
        y="30"
        width="12"
        height="40"
        fill="currentColor"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
        }}
      />
      
      {/* The Letter "H" - Right Pillar */}
      <motion.rect
        x="58"
        y="30"
        width="12"
        height="40"
        fill="currentColor"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
        }}
      />
      
      {/* The Letter "H" - Crossbar with Arrow Cutout */}
      <motion.path
        d="M 42 44 H 58 V 56 H 42 Z"
        fill="currentColor"
        variants={{
          hidden: { opacity: 0, scaleX: 0 },
          visible: { opacity: 1, scaleX: 1, transition: { duration: 0.5, delay: 0.5 } }
        }}
      />
      
      {/* Forward Action Arrow overlaying the H */}
      <motion.path
        d="M 45 50 L 53 42 V 48 L 65 48 V 52 L 53 52 V 58 Z"
        fill="var(--color-brand-orange)"
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.7, type: 'spring', stiffness: 200 } }
        }}
        whileHover={{
          x: 4,
          transition: { duration: 0.2, repeat: Infinity, repeatType: "reverse" }
        }}
      />
      
      {/* Speed Lines / Truck movement indicator */}
      <motion.line
        x1="15"
        y1="50"
        x2="25"
        y2="50"
        stroke="var(--color-brand-orange)"
        strokeWidth="3"
        strokeLinecap="round"
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.9 } }
        }}
      />
      <motion.line
        x1="20"
        y1="60"
        x2="28"
        y2="60"
        stroke="var(--color-brand-steel)"
        strokeWidth="3"
        strokeLinecap="round"
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 1.0 } }
        }}
      />
    </motion.svg>
  );
}
