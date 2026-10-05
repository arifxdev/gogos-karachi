import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

// Precision SVG Pencil Arrow Data URI for fallback/native CSS pointer
export const PENCIL_ARROW_CURSOR_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><defs><clipPath id="c"><path d="M 2,2 L 2,25 L 8,19 L 14,31 L 20,28 L 14,16 L 23,16 Z"/></clipPath></defs><g clip-path="url(%23c)"><rect x="0" y="0" width="34" height="34" fill="%23E5A65E"/><path d="M 5,5 L 5,26 L 11,20 L 16,30 L 18,29 L 12,17 L 16,17 Z" fill="%23D98A32" opacity="0.6"/><path d="M 2,2 L 2,13 Q 8,11 14,14 L 14,2 Z" fill="%23F5E6D3"/><path d="M 2,13 Q 5,11 8,12 Q 11,11 14,14" fill="none" stroke="%23D7BA98" stroke-width="1"/><path d="M 2,2 L 2,7 L 7,2 Z" fill="%23141414"/><path d="M 10,23 L 13,29 L 17,27 L 14,21 Z" fill="%23D4D4D8"/><line x1="11.5" y1="26" x2="15.5" y2="24" stroke="%23A1A1AA" stroke-width="0.8"/><path d="M 12.5,28 L 14,31 L 20,28 L 18.5,25 Z" fill="%23141414"/></g><path d="M 2,2 L 2,25 L 8,19 L 14,31 L 20,28 L 14,16 L 23,16 Z" fill="none" stroke="%23141414" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>`;

interface CustomCursorProps {
  isDoodleActive: boolean;
  onDoodleToggle?: () => void;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ isDoodleActive }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth responsive spring for pointer movement
  const springX = useSpring(mouseX, { damping: 30, stiffness: 600, mass: 0.15 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 600, mass: 0.15 });

  useEffect(() => {
    // Detect touch screens
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = Boolean(
        target.closest('button, a, input, select, textarea, [role="button"], .clickable')
      );
      setIsHoveringInteractive(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision Graphite Point Target Indicator */}
      <motion.div
        className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
        style={{
          left: springX,
          top: springY,
          scale: isClicking ? 1.5 : isHoveringInteractive ? 1.2 : 0.8,
          opacity: isDoodleActive ? 0.9 : 0.45,
        }}
      />

      {/* Pencil-Arrow Cursor (Hotspot at 2, 2) */}
      <motion.div
        className="absolute origin-top-left"
        style={{
          left: springX,
          top: springY,
        }}
        animate={{
          scale: isClicking ? 0.92 : isHoveringInteractive ? 1.08 : 1,
          rotate: isClicking ? -3 : isHoveringInteractive ? 2 : 0,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 450 }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[1px_3px_4px_rgba(0,0,0,0.22)]"
          style={{ transform: 'translate(-2px, -2px)' }}
        >
          <defs>
            {/* Clip path defining the classic mouse arrow silhouette */}
            <clipPath id="pencilArrowBodyClip">
              <path d="M 2,2 L 2,25 L 8,19 L 14,31 L 20,28 L 14,16 L 23,16 Z" />
            </clipPath>
          </defs>

          {/* Pencil textures and elements inside the Arrow silhouette */}
          <g clipPath="url(#pencilArrowBodyClip)">
            {/* 1. Golden Yellow Hexagonal Pencil Shaft */}
            <rect x="0" y="0" width="34" height="34" fill="#E5A65E" />

            {/* Pencil Facet shading for 3D hexagonal look */}
            <path
              d="M 5,5 L 5,26 L 11,20 L 16,30 L 18,29 L 12,17 L 16,17 Z"
              fill="#D98A32"
              opacity="0.6"
            />
            {/* Subtle pencil facet line */}
            <line
              x1="5"
              y1="5"
              x2="11"
              y2="20"
              stroke="#B36B18"
              strokeWidth="0.75"
              strokeDasharray="2 1"
            />

            {/* 2. Sharpened Bare Wood Cone at the Arrow Head */}
            <path d="M 2,2 L 2,13 Q 8,11 14,14 L 14,2 Z" fill="#F5E6D3" />
            {/* Scalloped wooden blade cut */}
            <path
              d="M 2,13 Q 5,11 8,12 Q 11,11 14,14"
              fill="none"
              stroke="#D7BA98"
              strokeWidth="1.2"
            />

            {/* 3. Graphite Lead Tip at the Arrow's Point (0,0 to 7,7) */}
            <path d="M 2,2 L 2,7.5 L 7.5,2 Z" fill="#141414" />
            <path d="M 2,2 L 2,5.5 L 5.5,2 Z" fill="#2E2E2E" />
            {/* Lead reflection highlight */}
            <line x1="2" y1="2" x2="3.5" y2="3.5" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />

            {/* 4. Silver Ferrule Band at the Arrow Tail */}
            <path
              d="M 10,23 L 13,29 L 17,27 L 14,21 Z"
              fill="#D4D4D8"
              stroke="#141414"
              strokeWidth="0.8"
            />
            <line x1="11.5" y1="26" x2="15.5" y2="24" stroke="#A1A1AA" strokeWidth="1" />

            {/* 5. Black Rubber Eraser at the very tail of the Arrow */}
            <path d="M 12.5,28 L 14,31 L 20,28 L 18.5,25 Z" fill="#141414" />
          </g>

          {/* Crisp Black Pencil Line Outer Border */}
          <path
            d="M 2,2 L 2,25 L 8,19 L 14,31 L 20,28 L 14,16 L 23,16 Z"
            fill="none"
            stroke="#141414"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Tactile Graphite Click Ripple */}
      {isClicking && (
        <motion.div
          initial={{ scale: 0.3, opacity: 0.9 }}
          animate={{ scale: 2.4, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/50"
          style={{ left: springX, top: springY }}
        />
      )}
    </div>
  );
};
