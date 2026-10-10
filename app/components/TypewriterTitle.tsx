'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterTitleProps {
  text: string;
  className?: string;
  speed?: number;
  isGradient?: boolean;
}

export default function TypewriterTitle({ 
  text, 
  className = '', 
  speed = 40,
  isGradient = false 
}: TypewriterTitleProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const hideCursorTimer = setTimeout(() => setIsDone(true), 1200);
      return () => clearTimeout(hideCursorTimer);
    }
  }, [index, text, speed]);

  return (
    <span className={`inline-block tracking-tight ${className}`}>
      <span className={isGradient ? "bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(244,63,94,0.6)] font-black" : "text-white font-black"}>
        {displayedText}
      </span>
      {!isDone && <span className="animate-pulse text-rose-500 font-mono ml-1 font-bold">|</span>}
    </span>
  );
}