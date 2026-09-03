'use client';

import React, { useState } from 'react';

// Mendefinisikan struktur & tipe data props (TypeScript Interface)
interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({ title, category, description, tags }: ProjectCardProps) {
  const [likes, setLikes] = useState<number>(0);

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl hover:border-indigo-500 transition-all duration-300 flex flex-col justify-between">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800/50">
          {category}
        </span>

        <h2 className="text-xl font-bold mt-4 mb-2 text-white">
          {title}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag: string, index: number) => (
            <span 
              key={index} 
              className="text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-md font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-700 pt-4 mt-auto">
        <button
          onClick={() => setLikes(likes + 1)}
          className="flex items-center gap-2 text-sm bg-slate-700/50 hover:bg-rose-950/50 text-slate-300 hover:text-rose-400 px-3 py-1.5 rounded-lg border border-slate-600 hover:border-rose-800 transition-colors cursor-pointer"
        >
          <span>❤️</span>
          <span className="font-semibold">{likes}</span>
        </button>

        <a
          href="#demo"
          className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 hover:underline"
        >
          Lihat Detail &rarr;
        </a>
      </div>
    </div>
  );
}