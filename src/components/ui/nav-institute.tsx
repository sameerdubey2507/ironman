"use client";

import { motion } from "framer-motion";
import { GridBg } from "./nav-shared";

const metrics = [
  { label: "Avg Time to Hire", value: "2.4 Days", trend: "-12% vs last month", isPositive: true },
  { label: "Agency Fees Saved", value: "$45k", trend: "YTD", isPositive: true },
  { label: "Verified Talent Pool", value: "12,400+", trend: "Growing", isPositive: true },
];

export function InstitutePanel() {
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
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Enterprise Hub</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Institute Features
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
            <h3 className="text-sm font-medium text-zinc-200">Automated Smart Contract & Payroll Escrow</h3>
          </div>
          
          <div className="flex-1 relative w-full flex items-center justify-center">
             {/* Abstract Payroll Escrow Diagram */}
             <div className="flex w-full max-w-[500px] justify-between items-center relative z-10">
                {/* Connecting Lines */}
                <div className="absolute top-1/2 left-0 w-[50%] h-[2px] bg-white/10 -z-10 -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-[50%] h-[2px] bg-white/10 -z-10 -translate-y-1/2 border-t-2 border-dashed border-white/20" />
                
                {/* Animated Flow */}
                <motion.div 
                   className="absolute top-1/2 left-0 w-8 h-2 bg-accent rounded-full -z-10 -translate-y-1/2 shadow-[0_0_10px_#d4a22f]"
                   initial={{ x: 0, opacity: 1 }}
                   animate={{ x: 230, opacity: 0 }}
                   transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />

                <motion.div 
                   className="absolute top-1/2 right-0 w-8 h-2 bg-green-500 rounded-full -z-10 -translate-y-1/2 shadow-[0_0_10px_#22c55e]"
                   initial={{ x: 0, opacity: 0 }}
                   animate={{ x: -230, opacity: 1 }}
                   transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
                />

                {[
                  { icon: "🏛️", label: "Institute Funds", active: true },
                  { icon: "🔒", label: "Secure Escrow", active: true, center: true },
                  { icon: "🎓", label: "Educator Payout", active: true },
                ].map((step, i) => (
                  <motion.div key={step.label} className="flex flex-col items-center gap-3"
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.1 }}>
                     <div className={`w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-2xl ${step.center ? 'border-accent shadow-[0_0_20px_rgba(212,162,47,0.2)]' : ''} relative`}>
                        {step.icon}
                        {step.center && <div className="absolute inset-0 rounded-2xl border border-accent animate-ping opacity-20" />}
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
