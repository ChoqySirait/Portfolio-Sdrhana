'use client';

import React, { useState, useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Blok kode ini untuk menghitung rotasi miring secara instan dan sensitif
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    setIsHovered(true);

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Angka 7 menentukan sensitivitas sudut kemiringan
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.2,
    });
  };

  // Blok kode ini untuk mengembalikan posisi card ke semula secara lembut dan mulus
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transform, 
        // Transisi instan saat kursor di atas card, dan meluncur mulus saat kursor keluar
        transition: isHovered 
          ? 'transform 0.08s linear' 
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform',
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {/* Blok kode ini untuk efek pendaran cahaya merah Spider-Man */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-20"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(225, 29, 72, 0.2), transparent 65%)`,
          opacity: glare.opacity,
        }}
      />
    </div>
  );
}