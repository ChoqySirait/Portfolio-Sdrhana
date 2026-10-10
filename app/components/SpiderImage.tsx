'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface SpiderImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
}

export default function SpiderImage({ lightSrc, darkSrc, alt, className = '' }: SpiderImageProps) {
  const { theme, mounted } = useTheme();

  // Mencegah glitch SSR
  const currentSrc = !mounted ? lightSrc : theme === 'dark' ? darkSrc : lightSrc;

  return (
    <img
      key={currentSrc}
      src={currentSrc}
      alt={alt}
      className={`${className} spider-mask-radial transition-all duration-300`}
    />
  );
}