"use client";

import { motion } from "framer-motion";
import { GridBg } from "./nav-shared";

const metrics = [
  { label: "Avg Platform Paycut", value: "0%", trend: "Industry lowest", isPositive: true },
  { label: "Total Educators Hired", value: "1,204", trend: "+45 this week", isPositive: true },
  { label: "Skill Match Accuracy", value: "94%", trend: "AI Verified", isPositive: true },
];

export function UsersPanel() {
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
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Talent Network</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Freelancer Benefits
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
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent`}>
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
            <h3 className="text-sm font-medium text-zinc-200">Zero-Friction Hiring Pipeline</h3>
          </div>
          
          <div className="flex-1 relative w-full flex items-center justify-center">
             {/* Abstract Pipeline Diagram */}
             <div className="flex w-full max-w-[600px] justify-between items-center relative z-10">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -z-10 -translate-y-1/2" />
                <motion.div 
                   className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent -z-10 -translate-y-1/2"
                   initial={{ x: "-100%" }}
                   animate={{ x: "100%" }}
                   transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                />

                {[
                  { icon: "👤", label: "Create Profile", active: true },
                  { icon: "🤖", label: "AI Match", active: true },
                  { icon: "🤝", label: "Direct Interview", active: true },
                  { icon: "💸", label: "Instant Payout", active: true },
                ].map((step, i) => (
                  <motion.div key={step.label} className="flex flex-col items-center gap-3"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}>
                     <div className="w-14 h-14 rounded-full bg-black border-2 border-accent flex items-center justify-center text-xl shadow-[0_0_15px_rgba(212,162,47,0.3)] relative">
                        {step.icon}
                        <div className="absolute inset-0 rounded-full border-2 border-accent animate-[ping_3s_ease-in-out_infinite]" />
                     </div>
                     <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{step.label}</span>
                  </motion.div>
                ))}
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
