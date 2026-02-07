import React from 'react';
import { motion } from 'framer-motion';
import { ColorScheme } from '../types';

interface SciFiCardProps {
  children: React.ReactNode;
  colors: ColorScheme;
  className?: string;
  delay?: number;
}

const SciFiCard: React.FC<SciFiCardProps> = ({ children, colors, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ scale: 1.02 }}
      className={`relative group ${className}`}
    >
      {/* Background with Glassmorphism */}
      <div className={`absolute inset-0 ${colors.bg} backdrop-blur-md rounded-xl opacity-90 transition-all duration-300 group-hover:opacity-100`} />
      
      {/* Glowing Border Container */}
      <div className={`absolute inset-0 rounded-xl border ${colors.border} transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] ${colors.shadow}`} />

      {/* Corner Accents - Top Left */}
      <div className={`absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 ${colors.border.replace('/50', '')} rounded-tl-xl`} />
      {/* Corner Accents - Bottom Right */}
      <div className={`absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 ${colors.border.replace('/50', '')} rounded-br-xl`} />
      
      {/* Scanline Effect on Hover */}
      <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-300">
         <div className={`w-full h-[2px] ${colors.bg.replace('bg-', 'bg-')} shadow-[0_0_10px_currentColor] animate-scanline`} />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export default SciFiCard;