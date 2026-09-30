'use client';

import React, { useState, useRef, useEffect } from 'react';

interface SpiderTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SpiderTerminal({ isOpen, onClose }: SpiderTerminalProps) {
  const [inputCommand, setInputCommand] = useState('');
  const [history, setHistory] = useState<Array<{ cmd?: string; output: string | React.ReactNode }>>([
    { output: "🕷️ PETER'S TECH LAB // SPIDER-WEB CONSOLE v2.0" },
    { output: 'Type "help" to list all available system commands.' },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  // Blok kode ini untuk melakukan auto-scroll ke baris paling bawah terminal
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  // Blok kode ini untuk memproses eksekusi perintah terminal dari pengguna
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputCommand.trim().toLowerCase();
    setInputCommand('');

    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    let response: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-rose-400 font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-emerald-400">whoami</span> — Display author bio & profile summary.</p>
            <p><span className="text-emerald-400">securai</span> — View SecurAI SOC Assistant status & specs.</p>
            <p><span className="text-emerald-400">skills</span> — List core tech stack competencies.</p>
            <p><span className="text-emerald-400">projects</span> — View summary of key portfolio projects.</p>
            <p><span className="text-emerald-400">clear</span> — Clear terminal output history.</p>
            <p><span className="text-emerald-400">exit</span> — Close the tech lab console.</p>
          </div>
        );
        break;
      case 'whoami':
        response = "Choqy Pananda Sirait — Information Systems Student at IT Del. Focused on Cybersecurity, System Analysis, and Fullstack Web Dev.";
        break;
      case 'securai':
        response = "SecurAI: SOC L1 Incident Triage & Threat Intelligence Assistant. Built with FastAPI, Python 3.10+, Gemini AI, and MITRE ATT&CK framework mapping.";
        break;
      case 'skills':
        response = "Core Skills: Java, C, JavaScript, Next.js, React, Tailwind CSS, Python, FastAPI, SQL Server, System Analysis, UI/UX Design (Figma).";
        break;
      case 'projects':
        response = "Key Works: [1] SecurAI (Cybersecurity AI), [2] TRIPORIA (Travel Guide UI/UX), [3] SupplySync (Warehouse Management), [4] MSME Parcel Pickup.";
        break;
      case 'exit':
        onClose();
        return;
      default:
        response = `Command not recognized: "${cmd}". Type "help" for valid commands.`;
        break;
    }

    setHistory((prev) => [...prev, { cmd, output: response }]);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-rose-600/40 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden font-mono text-xs text-slate-200">
        
        {/* Header Modal Console */}
        <div className="bg-slate-950 px-4 py-3 border-b border-rose-900/40 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-600 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            <span className="ml-2 text-slate-400 text-[11px] font-bold">peter@tech-lab:~</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white font-bold transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Output Console History */}
        <div className="p-4 h-80 overflow-y-auto space-y-3 bg-slate-950/90">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.cmd && (
                <div className="flex items-center space-x-2 text-rose-400">
                  <span>spider-web:~$</span>
                  <span className="text-white font-bold">{item.cmd}</span>
                </div>
              )}
              <div className="text-slate-300 leading-relaxed">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar Terminal */}
        <form onSubmit={handleCommandSubmit} className="bg-slate-950 border-t border-rose-900/40 p-3 flex items-center space-x-2">
          <span className="text-rose-500 font-bold">spider-web:~$</span>
          <input
            type="text"
            value={inputCommand}
            onChange={(e) => setInputCommand(e.target.value)}
            placeholder='Type "help"...'
            autoFocus
            className="w-full bg-transparent text-white focus:outline-none font-mono text-xs"
          />
        </form>
      </div>
    </div>
  );
}