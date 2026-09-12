'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delayClass?: string;
  className?: string;
}

export default function ScrollReveal({ children, delayClass = '', className = '' }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const currentRef = ref.current;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (currentRef) observer.unobserve(currentRef);
      }
    },
    { threshold: 0.15 }
  );

  if (currentRef) {
    observer.observe(currentRef);
  }

  return () => {
    if (currentRef) observer.unobserve(currentRef);
  };
}, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `animate-fade-up ${delayClass}` : 'opacity-0 translate-y-7'
      } transition-all duration-300`}
    >
      {children}
    </div>
  );
}