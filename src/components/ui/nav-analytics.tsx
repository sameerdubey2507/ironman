"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GridBg } from "./nav-shared";

// Utility for formatting numbers
const formatNumber = (num: number) => new Intl.NumberFormat('en-US').format(num);

// Data
// Data Variations
const dataSets: Record<string, { metrics: any[], chart: number[] }> = {
  "24h": {
    metrics: [
      { label: "Total Network Users", value: 45280, trend: "+2.1%", isPositive: true },
      { label: "Active Job Postings", value: 8420, trend: "+0.5%", isPositive: true },
      { label: "Talent Match Rate", value: 76, suffix: "%", trend: "-0.2%", isPositive: false },
    ],
    chart: [20, 25, 22, 30, 28, 45, 40, 60, 55, 70]
  },
  "7d": {
    metrics: [
      { label: "Total Network Users", value: 45280, trend: "+5.4%", isPositive: true },
      { label: "Active Job Postings", value: 8420, trend: "+1.2%", isPositive: true },
      { label: "Talent Match Rate", value: 78, suffix: "%", trend: "+1.5%", isPositive: true },
    ],
    chart: [30, 45, 35, 70, 55, 85, 70, 95, 80, 100]
  },
  "30d": {
    metrics: [
      { label: "Total Network Users", value: 45280, trend: "+12.5%", isPositive: true },
      { label: "Active Job Postings", value: 8420, trend: "+5.2%", isPositive: true },
      { label: "Talent Match Rate", value: 76, suffix: "%", trend: "-1.4%", isPositive: false },
    ],
    chart: [20, 35, 25, 60, 45, 80, 55, 90, 75, 100]
  },
  "All": {
    metrics: [
      { label: "Total Network Users", value: 45280, trend: "+340%", isPositive: true },
      { label: "Active Job Postings", value: 8420, trend: "+120%", isPositive: true },
      { label: "Talent Match Rate", value: 82, suffix: "%", trend: "+5.0%", isPositive: true },
    ],
    chart: [5, 10, 8, 25, 20, 50, 45, 80, 70, 100]
  }
};

// Animated Sparkline Component
function Sparkline({ data, color }: { data: number[], color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((d - min) / range) * 100;
    return `${x},${y}`;
  }).join(" ");

  const fillPoints = `0,100 ${points} 100,100`;

  return (
    <svg className="w-full h-full overflow-visible absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polygon
        key={`poly-${data.join('-')}`}
        points={fillPoints}
        fill="url(#areaGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      />
      <motion.polyline
        key={`line-${data.join('-')}`}
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ filter: `drop-shadow(0 4px 6px ${color}40)` }}
      />
    </svg>
  );
}

// Live Heatmap Component
function LiveHeatmap() {
  const [activeNodes, setActiveNodes] = useState<Set<number>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const newNodes = new Set<number>();
      for (let i = 0; i < 8; i++) {
        newNodes.add(Math.floor(Math.random() * 84));
      }
      setActiveNodes(newNodes);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-12 gap-1 w-full max-w-[200px]">
      {Array.from({ length: 84 }).map((_, i) => (
        <motion.div
          key={i}
          className="aspect-square rounded-[1px] bg-white/5"
          animate={{
            backgroundColor: activeNodes.has(i) ? "#d4a22f" : "rgba(255, 255, 255, 0.05)",
            opacity: activeNodes.has(i) ? [0.5, 1, 0.5] : 1,
            scale: activeNodes.has(i) ? [1, 1.2, 1] : 1
          }}
          transition={{ duration: 1.5 }}
        />
      ))}
    </div>
  );
}

export function AnalyticsPanel() {
  const [range, setRange] = useState("30d");
  const currentData = dataSets[range];

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
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Live Dashboard</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Platform Analytics
          </motion.h1>
        </div>
        <div className="flex gap-2">
          {["24h", "7d", "30d", "All"].map((r) => (
            <button 
              key={r} 
              onClick={() => setRange(r)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${range === r ? 'bg-white text-black' : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-6 flex-1">
        {/* Top KPI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentData.metrics.map((metric, i) => (
            <motion.div
              key={`${metric.label}-${range}`}
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
                {formatNumber(metric.value)}{metric.suffix}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Chart Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex-1 bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 flex flex-col min-h-[250px] backdrop-blur-sm"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-medium text-zinc-200">Network Traffic (Requests/sec)</h3>
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
          </div>
          <div className="flex-1 relative w-full pt-4">
             <Sparkline data={currentData.chart} color="#d4a22f" />
          </div>
        </motion.div>

        {/* Bottom Bento Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Live Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5 flex items-center justify-between backdrop-blur-sm"
          >
            <div className="flex flex-col gap-2">
              <span className="text-zinc-400 text-xs font-medium">Global Activity</span>
              <span className="text-2xl font-semibold">1,204</span>
              <span className="text-[10px] text-zinc-500 font-mono mt-2">Active connections</span>
            </div>
            <LiveHeatmap />
          </motion.div>

          {/* System Health */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5 flex flex-col gap-5 backdrop-blur-sm justify-center"
          >
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400 font-medium">System Health</span>
              <span className="text-green-400 font-mono bg-green-500/10 px-2 py-0.5 rounded-full">Optimal</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "API Latency", val: "24ms", pct: 15 },
                { label: "Database Load", val: "42%", pct: 42 },
              ].map(stat => (
                <div key={stat.label} className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>{stat.label}</span>
                    <span>{stat.val}</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-accent rounded-full" 
                      initial={{ width: 0 }} animate={{ width: `${stat.pct}%` }} transition={{ duration: 1, delay: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
