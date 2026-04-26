"use client";
import { motion } from "framer-motion";
import { GlowBorder, GridBg, PulsingDot } from "./nav-shared";

const cards=[
  {
    icon:"📧",title:"Email — Contribute",value:"craftedlegend25@gmail.com",
    href:"mailto:craftedlegend25@gmail.com",cta:"Send Email →",color:"#d4a22f",
    desc:"Bug reports, collabs, feature ideas — I read & reply to every message personally.",
    tags:["Contributions","Bug Reports","Partnerships"],
  },
  {
    icon:"💼",title:"LinkedIn",value:"linkedin.com/in/sameerdubey2507",
    href:"https://linkedin.com/in/sameerdubey2507",cta:"View Profile →",color:"#60a5fa",
    desc:"Follow for platform updates, dev insights, and professional project showcases.",
    tags:["Professional","Networking","Updates"],
  },
  {
    icon:"🐙",title:"GitHub",value:"github.com/sameerdubey2507",
    href:"https://github.com/sameerdubey2507",cta:"Browse Code →",color:"#a78bfa",
    desc:"Open source contributions welcome — browse the codebase and submit pull requests.",
    tags:["Open Source","PRs Welcome","Issues"],
  },
];

export function ContactPanel() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex items-center gap-2 mb-1"><PulsingDot color="#34d399"/><span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">Open to collaborations</span></div>
        <motion.h2 className="text-3xl font-black text-white tracking-tight" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}}>Contact & Contribute</motion.h2>
        <p className="mt-1 text-sm text-zinc-500">Reach out to build together — every message is read personally.</p>
      </div>

      {/* 3 contact cards */}
      <div className="grid grid-cols-3 gap-4">
        {cards.map((c,i)=>(
          <motion.div key={c.title} className="relative flex flex-col gap-4 rounded-2xl border p-5 overflow-hidden"
            style={{borderColor:`${c.color}22`,background:`${c.color}06`}}
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.12}}
            whileHover={{scale:1.03,borderColor:`${c.color}50`,boxShadow:`0 0 40px ${c.color}18`}}>
            <GlowBorder color={c.color}/>
            <div className="text-4xl">{c.icon}</div>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.25em] mb-1" style={{color:c.color}}>{c.title}</div>
              <div className="font-mono text-[11px] text-zinc-200 break-all">{c.value}</div>
              <p className="mt-2 text-[11px] text-zinc-500 leading-relaxed">{c.desc}</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {c.tags.map(t=>(
                <span key={t} className="rounded-full border px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em]" style={{borderColor:`${c.color}30`,color:c.color}}>{t}</span>
              ))}
            </div>
            <a href={c.href} target="_blank" rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center rounded-full border px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.2em] transition-all no-underline hover:scale-105"
              style={{borderColor:`${c.color}40`,color:c.color,background:`${c.color}10`}}>
              {c.cta}
            </a>
          </motion.div>
        ))}
      </div>

      {/* Info bar */}
      <div className="relative rounded-xl border border-white/8 overflow-hidden" style={{background:"rgba(255,255,255,0.02)"}}>
        <GridBg/>
        <div className="relative flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <PulsingDot color="#34d399"/>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">Typically responds within 24 hours</span>
          </div>
          <div className="flex gap-4">
            {[
              {label:"Timezone",value:"IST (UTC+5:30)"},
              {label:"Location",value:"Mumbai, India"},
              {label:"Status",value:"Open to work"},
            ].map(s=>(
              <div key={s.label} className="flex flex-col">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">{s.label}</span>
                <span className="font-mono text-[10px] text-zinc-300 mt-0.5">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large CTA email */}
      <motion.a href="mailto:craftedlegend25@gmail.com"
        className="flex items-center justify-between rounded-2xl border border-accent/25 bg-accent/6 px-6 py-5 no-underline group"
        whileHover={{scale:1.015,borderColor:"rgba(212,162,47,0.5)",boxShadow:"0 0 40px rgba(212,162,47,0.15)"}}>
        <div>
          <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent mb-1">Primary Contact</div>
          <div className="text-xl font-bold text-white">craftedlegend25@gmail.com</div>
        </div>
        <motion.span className="text-2xl" animate={{x:[0,5,0]}} transition={{repeat:Infinity,duration:1.5}}>→</motion.span>
      </motion.a>
    </div>
  );
}
