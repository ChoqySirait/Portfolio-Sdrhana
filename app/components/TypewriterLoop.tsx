'use client';

import React, { useState, useEffect } from 'react';

export default function TypewriterLoop({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (!isDeleting && index === text.length) {
        // Tahan selama 2.5 detik saat teks lengkap
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && index === 0) {
        // Jeda 0.5 detik sebelum mengetik ulang
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, text]);

  return (
    <span className="inline-block relative">
      <span className="bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 bg-clip-text text-transparent font-black drop-shadow-[0_0_15px_rgba(244,63,94,0.7)]">
        {displayedText}
      </span>
      <span className="animate-pulse text-rose-500 font-mono ml-1 font-bold">|</span>
    </span>
  );
}