"use client";

import { motion } from "framer-motion";
import { GridBg } from "./nav-shared";

const metrics = [
  { label: "Active Nodes", value: "142", trend: "+12", isPositive: true },
  { label: "Avg Sync Time", value: "14ms", trend: "-2ms", isPositive: true },
  { label: "Security Status", value: "Optimal", trend: "100%", isPositive: true },
];

export function DashboardPanel() {
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
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Command Center</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            System Dashboard
          </motion.h1>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-6 flex-1">
        {/* Top KPI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5 flex flex-col gap-4 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start">
                <span className="text-zinc-400 text-xs font-medium">{metric.label}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${metric.isPositive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {metric.trend}
                </span>
              </div>
              <div className="text-3xl font-semibold tracking-tight">
                {metric.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Visual Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex-1 bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 flex flex-col min-h-[250px] backdrop-blur-sm relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-6 z-10 relative">
            <h3 className="text-sm font-medium text-zinc-200">Global Infrastructure Topology</h3>
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
          </div>
          
          <div className="flex-1 relative w-full flex items-center justify-center">
             {/* Abstract Network Diagram */}
             <svg className="w-full h-full max-w-[600px] max-h-[300px] overflow-visible" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#d4a22f" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#d4a22f" stopOpacity="1" />
                    <stop offset="100%" stopColor="#d4a22f" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Connecting Lines */}
                <motion.path d="M50 100 Q 150 20 200 100 T 350 100" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" 
                   animate={{ strokeDashoffset: [0, -100] }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} />
                <motion.path d="M50 100 Q 150 180 200 100 T 350 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <motion.path d="M200 20 L 200 180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                
                {/* Nodes */}
                {[
                  { x: 50, y: 100, label: "Client Node" },
                  { x: 200, y: 100, label: "Core Router", pulse: true },
                  { x: 200, y: 20, label: "Auth Server" },
                  { x: 200, y: 180, label: "DB Cluster" },
                  { x: 350, y: 100, label: "Edge Node" }
                ].map((node, i) => (
                  <g key={i}>
                    {node.pulse && (
                       <circle cx={node.x} cy={node.y} r="15" fill="#d4a22f" opacity="0.2">
                         <animate attributeName="r" values="10;25;10" dur="2s" repeatCount="indefinite" />
                         <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                       </circle>
                    )}
                    <circle cx={node.x} cy={node.y} r="6" fill="#0a0a0c" stroke="#d4a22f" strokeWidth="2" />
                    <circle cx={node.x} cy={node.y} r="2" fill="#d4a22f" />
                    <text x={node.x} y={node.y + 20} fill="#71717a" fontSize="10" fontFamily="monospace" textAnchor="middle">{node.label}</text>
                  </g>
                ))}
             </svg>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
