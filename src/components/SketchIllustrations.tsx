import React from 'react';
import { motion, Variants } from 'motion/react';

interface IllustrationProps {
  className?: string;
  animate?: boolean;
  delay?: number;
}

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.15, type: 'spring' as const, duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.15, duration: 0.01 },
    },
  }),
};


// Hand-Drawn Coffee Cup Matching the exact reference style from original-96b0f3bccfbd7470c2d38deb25b7bda2.jpg
export const SketchCoffeeCup: React.FC<IllustrationProps> = ({
  className = 'w-36 h-36',
  animate = true,
  delay = 0,
}) => {
  return (
    <motion.svg
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={animate ? 'hidden' : 'visible'}
      animate="visible"
    >
      {/* 3 Steam squiggles rising */}
      <motion.path
        d="M62 38 C58 28 72 20 64 8"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        variants={draw}
        custom={delay + 0}
      />
      <motion.path
        d="M80 34 C76 24 90 16 82 4"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        variants={draw}
        custom={delay + 0.1}
      />
      <motion.path
        d="M98 38 C94 28 108 20 100 8"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        variants={draw}
        custom={delay + 0.2}
      />

      {/* Coffee Lid Top */}
      <motion.rect
        x="42"
        y="42"
        width="76"
        height="10"
        rx="2"
        stroke="#141414"
        strokeWidth="2.4"
        fill="transparent"
        variants={draw}
        custom={delay + 0.3}
      />
      {/* Lid small rim */}
      <motion.path
        d="M48 42 L52 36 L108 36 L112 42"
        stroke="#141414"
        strokeWidth="2.2"
        strokeLinejoin="round"
        variants={draw}
        custom={delay + 0.4}
      />

      {/* Main Cup Body (tapered downward) */}
      <motion.path
        d="M46 54 L58 170 L102 170 L114 54"
        stroke="#141414"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        variants={draw}
        custom={delay + 0.5}
      />

      {/* Cup Sleeve upper & lower border */}
      <motion.line
        x1="51"
        y1="85"
        x2="109"
        y2="85"
        stroke="#141414"
        strokeWidth="2.2"
        variants={draw}
        custom={delay + 0.6}
      />
      <motion.line
        x1="54"
        y1="135"
        x2="106"
        y2="135"
        stroke="#141414"
        strokeWidth="2.2"
        variants={draw}
        custom={delay + 0.7}
      />

      {/* Sleeve Emblem Circle */}
      <motion.circle
        cx="80"
        cy="110"
        r="16"
        stroke="#141414"
        strokeWidth="2.2"
        fill="transparent"
        variants={draw}
        custom={delay + 0.8}
      />
    </motion.svg>
  );
};

// Hand-Drawn Smash Burger Sketch
export const SketchBurger: React.FC<IllustrationProps> = ({
  className = 'w-36 h-36',
  animate = true,
  delay = 0.2,
}) => {
  return (
    <motion.svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={animate ? 'hidden' : 'visible'}
      animate="visible"
    >
      {/* Top Bun Dome */}
      <motion.path
        d="M24 85 C24 45 48 30 90 30 C132 30 156 45 156 85 Z"
        stroke="#141414"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        variants={draw}
        custom={delay + 0}
      />

      {/* Sesame Seeds */}
      <motion.circle cx="65" cy="52" r="1.5" fill="#141414" variants={draw} custom={delay + 0.1} />
      <motion.circle cx="90" cy="45" r="1.5" fill="#141414" variants={draw} custom={delay + 0.15} />
      <motion.circle cx="115" cy="55" r="1.5" fill="#141414" variants={draw} custom={delay + 0.2} />
      <motion.circle cx="78" cy="68" r="1.5" fill="#141414" variants={draw} custom={delay + 0.25} />
      <motion.circle cx="104" cy="66" r="1.5" fill="#141414" variants={draw} custom={delay + 0.3} />

      {/* Wavy Lettuce / Pickle Line */}
      <motion.path
        d="M20 95 Q35 88 50 95 Q65 102 80 95 Q95 88 110 95 Q125 102 140 95 Q155 88 160 95"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        variants={draw}
        custom={delay + 0.35}
      />

      {/* Melted Cheese Triangle Drip */}
      <motion.path
        d="M26 102 L154 102 L138 118 L124 102 L95 125 L75 102 L26 102"
        stroke="#141414"
        strokeWidth="2.2"
        strokeLinejoin="round"
        variants={draw}
        custom={delay + 0.45}
      />

      {/* Smashed Patty with Crispy Edge texture */}
      <motion.path
        d="M18 116 C30 112 50 114 80 113 C110 114 140 112 162 116 C166 122 158 128 135 129 C100 130 50 130 25 129 C16 126 14 120 18 116 Z"
        stroke="#141414"
        strokeWidth="2.4"
        strokeLinejoin="round"
        variants={draw}
        custom={delay + 0.55}
      />

      {/* Bottom Bun */}
      <motion.path
        d="M26 135 L154 135 C154 152 136 158 90 158 C44 158 26 152 26 135 Z"
        stroke="#141414"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        variants={draw}
        custom={delay + 0.65}
      />
    </motion.svg>
  );
};

// Hand-Drawn Fries Box Sketch
export const SketchFries: React.FC<IllustrationProps> = ({
  className = 'w-36 h-36',
  animate = true,
  delay = 0.3,
}) => {
  return (
    <motion.svg
      viewBox="0 0 160 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={animate ? 'hidden' : 'visible'}
      animate="visible"
    >
      {/* Individual Fries sticking out */}
      <motion.path d="M50 35 L58 100" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" variants={draw} custom={delay + 0} />
      <motion.path d="M66 22 L72 100" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" variants={draw} custom={delay + 0.1} />
      <motion.path d="M82 15 L84 100" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" variants={draw} custom={delay + 0.15} />
      <motion.path d="M98 26 L94 100" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" variants={draw} custom={delay + 0.2} />
      <motion.path d="M112 38 L104 100" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" variants={draw} custom={delay + 0.25} />
      <motion.path d="M60 45 L78 95" stroke="#141414" strokeWidth="2" strokeLinecap="round" variants={draw} custom={delay + 0.3} />
      <motion.path d="M102 48 L88 95" stroke="#141414" strokeWidth="2" strokeLinecap="round" variants={draw} custom={delay + 0.35} />

      {/* Fries Container / Scoop Box */}
      <motion.path
        d="M38 90 L48 165 C48 168 112 168 112 165 L122 90 C122 90 98 105 80 105 C62 105 38 90 38 90 Z"
        stroke="#141414"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        variants={draw}
        custom={delay + 0.45}
      />

      {/* Front curved arch or emblem on box */}
      <motion.path
        d="M58 135 C68 122 92 122 102 135"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        variants={draw}
        custom={delay + 0.55}
      />
      <motion.circle cx="80" cy="144" r="3" fill="#141414" variants={draw} custom={delay + 0.65} />
    </motion.svg>
  );
};

// Hand-Drawn Sketch Arrow
export const SketchArrow: React.FC<{ className?: string }> = ({ className = 'w-10 h-6' }) => (
  <svg viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M2 12 H52 M42 4 L54 12 L42 20"
      stroke="#141414"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Scribble Circle / Underline highlighter
export const SketchHighlightCircle: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M10 32 C12 12 188 6 192 28 C196 50 18 56 8 36 C4 26 50 16 110 14"
      stroke="#141414"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeDasharray="4 2"
      opacity="0.8"
    />
  </svg>
);
