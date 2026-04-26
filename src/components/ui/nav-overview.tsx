"use client";
import { motion } from "framer-motion";
import { Donut, GlowBorder, GridBg, PulsingDot, ScanLine } from "./nav-shared";

function N8NFlow() {
  const nodes=[
    {label:"Sign Up",icon:"👤",x:10,y:14,color:"#d4a22f"},
    {label:"Webhook",icon:"⚡",x:155,y:14,color:"#a78bfa"},
    {label:"AI Match",icon:"🤖",x:300,y:14,color:"#60a5fa"},
    {label:"Notify",icon:"🔔",x:445,y:14,color:"#34d399"},
    {label:"Contract",icon:"📝",x:155,y:110,color:"#d4a22f"},
    {label:"Escrow",icon:"🔒",x:300,y:110,color:"#f87171"},
    {label:"Pay ✓",icon:"💰",x:445,y:110,color:"#34d399"},
  ];
  const edges=[[0,1],[1,2],[2,3],[0,4],[4,5],[5,6],[3,6]];
  const nc=(i:number)=>({x:nodes[i].x+55,y:nodes[i].y+28});
  return (
    <div className="relative w-full rounded-xl border border-white/8 p-4 overflow-hidden" style={{height:185,background:"rgba(255,255,255,0.02)"}}>
      <GlowBorder color="#a78bfa"/>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 640 165" preserveAspectRatio="xMidYMid meet">
        {edges.map(([a,b],i)=>{
          const f=nc(a),t=nc(b);
          const d=`M${f.x} ${f.y} C${(f.x+t.x)/2} ${f.y},${(f.x+t.x)/2} ${t.y},${t.x} ${t.y}`;
          return <motion.path key={i} d={d} fill="none" stroke="rgba(167,139,250,0.35)" strokeWidth={1.5} strokeDasharray="5 3"
            initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}} transition={{duration:1.2,delay:i*0.1}}/>;
        })}
      </svg>
      {nodes.map((n,i)=>(
        <motion.div key={n.label} className="absolute flex h-14 w-[120px] flex-col items-center justify-center gap-0.5 rounded-xl border cursor-default"
          style={{left:n.x,top:n.y,borderColor:`${n.color}35`,background:`${n.color}0E`,boxShadow:`0 0 20px ${n.color}22`}}
          initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:i*0.07,type:"spring"}}
          whileHover={{scale:1.1,boxShadow:`0 0 30px ${n.color}50`}}>
          <span className="text-xl leading-none">{n.icon}</span>
          <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-center mt-0.5" style={{color:n.color}}>{n.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

function ActivityFeed() {
  const feed=[
    {icon:"🧑‍💻",msg:"Alex hired React Dev in 4 min",t:"2s ago",c:"#60a5fa"},
    {icon:"🚀",msg:"StartupX formed a 5-person team",t:"18s ago",c:"#34d399"},
    {icon:"💰",msg:"$3,200 escrow released to Maria",t:"41s ago",c:"#d4a22f"},
    {icon:"📋",msg:"12 new jobs posted in Web3",t:"1m ago",c:"#a78bfa"},
    {icon:"✅",msg:"Priya matched in 7 min",t:"2m ago",c:"#34d399"},
  ];
  return (
    <div className="flex flex-col gap-1">
      {feed.map((f,i)=>(
        <motion.div key={i} className="flex items-center gap-3 rounded-lg border border-white/6 px-3 py-2"
          style={{background:"rgba(255,255,255,0.02)"}}
          initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:0.6+i*0.1}}>
          <span className="text-sm">{f.icon}</span>
          <span className="flex-1 font-mono text-[10px] text-zinc-300">{f.msg}</span>
          <span className="font-mono text-[9px]" style={{color:f.c}}>{f.t}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function OverviewPanel() {
  const donuts=[
    {label:"Active Projects",value:"4.2K",pct:85,color:"#d4a22f"},
    {label:"Global Talent",value:"15K+",pct:92,color:"#60a5fa"},
    {label:"Success Rate",value:"98.8%",pct:99,color:"#34d399"},
    {label:"Startups",value:"340+",pct:60,color:"#a78bfa"},
  ];
  const pillars=[
    {icon:"🔍",label:"Find Talent",color:"#d4a22f",desc:"Browse verified experts"},
    {icon:"💼",label:"Post Work",color:"#60a5fa",desc:"Get matched instantly"},
    {icon:"🚀",label:"Scale Up",color:"#34d399",desc:"Build startup teams"},
    {icon:"🤖",label:"n8n Auto",color:"#a78bfa",desc:"Smart workflows"},
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <PulsingDot color="#34d399"/>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">Platform Live</span>
          </div>
          <motion.h2 className="text-3xl font-black text-white tracking-tight" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}}>
            Elite Freelance Ecosystem
          </motion.h2>
          <p className="mt-1 text-sm text-zinc-500">Full-stack · AI-matched · n8n powered</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {pillars.map((p,i)=>(
            <motion.div key={p.label} className="flex flex-col gap-1 rounded-xl border border-white/8 p-3 cursor-default"
              style={{background:"rgba(255,255,255,0.02)"}}
              initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:i*0.1}}
              whileHover={{scale:1.06,borderColor:`${p.color}50`,boxShadow:`0 0 20px ${p.color}20`}}>
              <span className="text-xl">{p.icon}</span>
              <span className="font-mono text-[8px] uppercase tracking-[0.15em] leading-none" style={{color:p.color}}>{p.label}</span>
              <span className="font-mono text-[8px] text-zinc-600">{p.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Donuts */}
      <div className="relative flex justify-around rounded-2xl border border-white/8 py-6 px-2 overflow-hidden" style={{background:"rgba(255,255,255,0.02)"}}>
        <GridBg/>
        <ScanLine/>
        {donuts.map((d,i)=><Donut key={d.label} {...d} delay={i*0.15}/>)}
      </div>

      {/* n8n flow */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">n8n Automation Workflow</span>
          <PulsingDot color="#a78bfa"/>
        </div>
        <N8NFlow/>
      </div>

      {/* Live feed */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">Live Activity</span>
          <PulsingDot color="#34d399"/>
        </div>
        <ActivityFeed/>
      </div>
    </div>
  );
}
