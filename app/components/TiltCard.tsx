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

  // Blok kode ini untuk menghitung rotasi miring yang halus dan tidak menghentak
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Rotasi dibatasi maksimal 5 derajat agar gerakan terasa lembut dan stabil
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.015)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  // Blok kode ini untuk mengembalikan posisi card ke semula secara mulus saat kursor keluar
  const handleMouseLeave = () => {
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
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {/* Blok kode ini untuk efek cahaya kilap Spider-Man yang sangat halus */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-20"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(225, 29, 72, 0.18), transparent 70%)`,
          opacity: glare.opacity,
        }}
      />
    </div>
  );
}