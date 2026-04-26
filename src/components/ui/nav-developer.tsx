"use client";

import { motion } from "framer-motion";
import { GridBg } from "./nav-shared";

const info = [
  { 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ), 
    label: "Email", 
    value: "craftedlegend25@gmail.com", 
    href: "mailto:craftedlegend25@gmail.com" 
  },
  { 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ), 
    label: "LinkedIn", 
    value: "in/sameerdubey2507", 
    href: "https://linkedin.com/in/sameerdubey2507" 
  },
  { 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ), 
    label: "GitHub", 
    value: "sameerdubey2507", 
    href: "https://github.com/sameerdubey2507" 
  },
];

export function DeveloperPanel() {
  return (
    <div className="flex flex-col h-full bg-[#0a0a0c] text-white p-6 md:p-10 font-sans relative overflow-hidden rounded-3xl">
      <GridBg />
      
      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-2"
          >
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Developer Profile</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Sameer Dubey
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
             className="text-zinc-400 mt-2 text-sm"
          >
            Full-Stack Engineer • UI/UX Architect • Automation Specialist
          </motion.p>
        </div>
        <div className="flex gap-2">
           <a href="https://github.com/sameerdubey2507" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full text-xs font-semibold bg-white text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
             View GitHub
           </a>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        
        {/* Left Col: Info & Bio */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 flex flex-col gap-8 backdrop-blur-sm flex-1 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-accent/10 transition-colors duration-700" />
             <h3 className="text-sm font-medium text-zinc-200">Contact Information</h3>
             <div className="flex flex-col gap-6">
               {info.map((item, i) => (
                 <motion.a 
                   key={item.label} 
                   href={item.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-5 group/item relative"
                   initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 100 }}
                 >
                   {/* Hover line indicator */}
                   <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-0 bg-accent rounded-r-full group-hover/item:h-full transition-all duration-300 opacity-0 group-hover/item:opacity-100" />
                   
                   <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-accent border border-white/10 group-hover/item:border-accent/50 group-hover/item:shadow-[0_0_15px_rgba(212,162,47,0.3)] group-hover/item:scale-110 transition-all duration-300 z-10">
                     {item.icon}
                   </div>
                   <div className="flex-1">
                     <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">{item.label}</div>
                     <div className="text-sm font-medium text-zinc-300 group-hover/item:text-white transition-colors">{item.value}</div>
                   </div>
                 </motion.a>
               ))}
             </div>
          </motion.div>
        </div>

        {/* Right Col: Tech Stack Orbital Visual */}
        <motion.div
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
           className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-sm overflow-hidden relative min-h-[300px]"
        >
          <div className="flex justify-between items-center z-20">
            <h3 className="text-sm font-medium text-zinc-200">Core Architecture Matrix</h3>
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
          </div>
          
          <div className="flex-1 relative flex items-center justify-center -mt-4">
             {/* Orbital SVG Visualization */}
             <svg className="w-full h-full max-w-[400px] overflow-visible" viewBox="-150 -150 300 300">
               <defs>
                  <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#d4a22f" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d4a22f" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
               </defs>

               {/* Background Grid */}
               <path d="M-150 0 L150 0 M0 -150 L0 150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />

               {/* Outer Orbital Ring */}
               <motion.circle cx="0" cy="0" r="120" fill="none" stroke="rgba(212,162,47,0.15)" strokeWidth="1" strokeDasharray="10 5"
                  animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} style={{ originX: "0px", originY: "0px" }} />
               
               {/* Middle Orbital Ring */}
               <motion.circle cx="0" cy="0" r="80" fill="none" stroke="rgba(212,162,47,0.3)" strokeWidth="1" strokeDasharray="4 12"
                  animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} style={{ originX: "0px", originY: "0px" }} />

               {/* Inner Reactor Core */}
               <circle cx="0" cy="0" r="30" fill="rgba(0,0,0,0.8)" stroke="#d4a22f" strokeWidth="2" filter="url(#glow)" />
               <motion.circle cx="0" cy="0" r="20" fill="none" stroke="#d4a22f" strokeWidth="4" strokeDasharray="15 30"
                  animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} style={{ originX: "0px", originY: "0px" }} />
               <circle cx="0" cy="0" r="8" fill="#d4a22f" className="animate-pulse" filter="url(#glow)" />
               <text x="0" y="4" fill="#000" fontSize="10" fontWeight="bold" textAnchor="middle" opacity="0.8">OS</text>

               {/* Orbital Nodes */}
               {[
                 { tech: "Next.js", r: 120, angle: 0, delay: 0 },
                 { tech: "Python", r: 120, angle: 120, delay: 0 },
                 { tech: "React", r: 120, angle: 240, delay: 0 },
                 { tech: "Node", r: 80, angle: 60, delay: 1 },
                 { tech: "Tailwind", r: 80, angle: 180, delay: 1 },
                 { tech: "Framer", r: 80, angle: 300, delay: 1 },
               ].map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = node.r * Math.cos(rad);
                  const y = node.r * Math.sin(rad);
                  
                  return (
                    <motion.g 
                      key={node.tech} 
                      initial={{ opacity: 0, scale: 0 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    >
                      {/* Connecting Line to Core */}
                      <motion.line 
                        x1="0" y1="0" x2={x} y2={y} stroke="url(#orbitGrad)" strokeWidth="1" opacity="0.5"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                      />
                      
                      {/* Node Circle */}
                      <circle cx={x} cy={y} r="16" fill="#0a0a0c" stroke="#d4a22f" strokeWidth="1.5" className="hover:scale-125 transition-transform origin-center cursor-pointer" style={{ transformOrigin: `${x}px ${y}px` }}/>
                      <circle cx={x} cy={y} r="6" fill="rgba(212,162,47,0.3)" />
                      <circle cx={x} cy={y} r="2" fill="#d4a22f" />
                      
                      {/* Label Box */}
                      <rect x={x - 24} y={y + 22} width="48" height="16" rx="4" fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <text x={x} y={y + 33} fill="#a1a1aa" fontSize="8" fontFamily="monospace" textAnchor="middle">{node.tech}</text>
                    </motion.g>
                  );
               })}
             </svg>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
