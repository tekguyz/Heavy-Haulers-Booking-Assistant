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

      {/* The Double "HH" letters with dynamic skew */}
      <motion.g
        transform="skewX(-12) translate(4, 0)"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } }
        }}
      >
        {/* First "H" - Left Pillar */}
        <motion.rect
          x="20"
          y="32"
          width="8"
          height="36"
          rx="1"
          fill="var(--color-brand-light)"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } }
          }}
        />
        
        {/* First "H" - Right Pillar */}
        <motion.rect
          x="34"
          y="32"
          width="8"
          height="36"
          rx="1"
          fill="var(--color-brand-light)"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }
          }}
        />
        
        {/* First "H" - Crossbar */}
        <motion.rect
          x="28"
          y="46"
          width="6"
          height="8"
          fill="var(--color-brand-light)"
          variants={{
            hidden: { opacity: 0, scaleX: 0 },
            visible: { opacity: 1, scaleX: 1, transition: { duration: 0.4, delay: 0.5 } }
          }}
        />

        {/* Second "H" - Left Pillar */}
        <motion.rect
          x="50"
          y="32"
          width="8"
          height="36"
          rx="1"
          fill="var(--color-brand-orange)"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.5 } }
          }}
        />
        
        {/* Second "H" - Right Pillar */}
        <motion.rect
          x="64"
          y="32"
          width="8"
          height="36"
          rx="1"
          fill="var(--color-brand-orange)"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.6 } }
          }}
        />
        
        {/* Second "H" - Crossbar */}
        <motion.rect
          x="58"
          y="46"
          width="6"
          height="8"
          fill="var(--color-brand-orange)"
          variants={{
            hidden: { opacity: 0, scaleX: 0 },
            visible: { opacity: 1, scaleX: 1, transition: { duration: 0.4, delay: 0.7 } }
          }}
        />
      </motion.g>
      
      {/* Dynamic Forward Speed / Movement indicator lines (matching the flyer logo) */}
      <motion.line
        x1="8"
        y1="42"
        x2="18"
        y2="42"
        stroke="var(--color-brand-orange)"
        strokeWidth="3"
        strokeLinecap="round"
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.8 } }
        }}
      />
      <motion.line
        x1="4"
        y1="50"
        x2="15"
        y2="50"
        stroke="var(--color-brand-orange)"
        strokeWidth="3.5"
        strokeLinecap="round"
        variants={{
          hidden: { opacity: 0, x: -12 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.9 } }
        }}
      />
      <motion.line
        x1="8"
        y1="58"
        x2="18"
        y2="58"
        stroke="var(--color-brand-orange)"
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
