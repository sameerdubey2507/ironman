"use client";
import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

export function Num({ to, suffix="" }: { to:number; suffix?:string }) {
  const [v,setV]=useState(0);
  useEffect(()=>{ const c=animate(0,to,{duration:1.6,ease:"easeOut",onUpdate:n=>setV(Math.floor(n))}); return ()=>c.stop(); },[to]);
  return <>{v.toLocaleString()}{suffix}</>;
}

export function Donut({ pct,color,size=130,thick=14,label,value,delay=0 }:{pct:number;color:string;size?:number;thick?:number;label:string;value:string;delay?:number}) {
  const r=(size-thick)/2, circ=2*Math.PI*r;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{width:size,height:size}}>
        <svg width={size} height={size} style={{transform:"rotate(-90deg)",position:"absolute"}}>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={thick}/>
          <motion.circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={thick} strokeLinecap="round"
            strokeDasharray={circ} initial={{strokeDashoffset:circ}} animate={{strokeDashoffset:circ*(1-pct/100)}}
            transition={{duration:1.5,ease:[0.16,1,0.3,1],delay}} style={{filter:`drop-shadow(0 0 14px ${color})`}}/>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span className="text-xl font-black" style={{color}} initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{delay:delay+0.6,type:"spring"}}>
            {value}
          </motion.span>
          <span className="font-mono text-[8px] text-zinc-600 mt-0.5">{pct}%</span>
        </div>
      </div>
      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400 text-center">{label}</span>
    </div>
  );
}

export function Radar() {
  const skills=[
    {label:"React/Next",pct:90,color:"#60a5fa"},
    {label:"Python",pct:82,color:"#34d399"},
    {label:"UI/UX",pct:78,color:"#a78bfa"},
    {label:"Cloud",pct:70,color:"#fb923c"},
    {label:"n8n",pct:85,color:"#d4a22f"},
  ];
  const S=220,cx=S/2,cy=S/2,R=80;
  const pt=(i:number,r:number)=>{const a=(i*2*Math.PI)/skills.length-Math.PI/2;return{x:cx+r*Math.cos(a),y:cy+r*Math.sin(a)};};
  const pts=skills.map((s,i)=>pt(i,(s.pct/100)*R));
  const poly=pts.map((p,i)=>`${i===0?"M":"L"} ${p.x} ${p.y}`).join(" ")+" Z";
  return (
    <svg width={S} height={S}>
      {[0.25,0.5,0.75,1].map((l,i)=><circle key={i} cx={cx} cy={cy} r={R*l} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1}/>)}
      {skills.map((_,i)=>{const o=pt(i,R);return <line key={i} x1={cx} y1={cy} x2={o.x} y2={o.y} stroke="rgba(255,255,255,0.06)"/>;}) }
      <motion.path d={poly} fill="rgba(212,162,47,0.12)" stroke="#d4a22f" strokeWidth={1.5}
        initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1}}
        style={{transformOrigin:`${cx}px ${cy}px`,filter:"drop-shadow(0 0 10px rgba(212,162,47,0.5))"}}/>
      {pts.map((p,i)=>(
        <motion.circle key={i} cx={p.x} cy={p.y} r={5} fill={skills[i].color}
          initial={{scale:0}} animate={{scale:1}} transition={{delay:0.9+i*0.1,type:"spring"}}
          style={{filter:`drop-shadow(0 0 8px ${skills[i].color})`}}/>
      ))}
      {skills.map((s,i)=>{const p=pt(i,R+22);return(
        <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill={s.color} fontSize={9} fontFamily="monospace">{s.label}</text>
      );})}
    </svg>
  );
}

export function GlowBorder({ color="#d4a22f" }:{color?:string}) {
  return (
    <motion.div className="pointer-events-none absolute inset-0 rounded-2xl"
      style={{boxShadow:`inset 0 0 0 1px ${color}20`}}
      animate={{boxShadow:[`inset 0 0 0 1px ${color}10`,`inset 0 0 0 1px ${color}40`,`inset 0 0 0 1px ${color}10`]}}
      transition={{repeat:Infinity,duration:2.5}}/>
  );
}

export function ScanLine() {
  return (
    <motion.div className="pointer-events-none absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      initial={{top:"0%"}} animate={{top:["0%","100%","0%"]}} transition={{repeat:Infinity,duration:4,ease:"linear"}}/>
  );
}

export function GridBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-20"
      style={{backgroundImage:"linear-gradient(rgba(212,162,47,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(212,162,47,0.08) 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
  );
}

export function Particles() {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  // Actually, I'll just use the mounted state to render null on server.
  if (!mounted) return null;

  // Since it only renders on client now, I can use a one-time random generation.
  // But to keep it stable across re-renders of the component on the client:
  return <ParticlesClient />;
}

function ParticlesClient() {
  const dots = useState(() => Array.from({length:18},(_,i)=>({
    id:i,
    x:Math.random()*100,
    y:Math.random()*100,
    s:Math.random()*2+1,
    d:Math.random()*4+3
  })))[0];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      {dots.map(d=>(
        <motion.div key={d.id} className="absolute rounded-full bg-accent/30"
          style={{left:`${d.x}%`,top:`${d.y}%`,width:d.s,height:d.s}}
          animate={{y:[-10,10,-10],opacity:[0.2,0.7,0.2]}} transition={{duration:d.d,repeat:Infinity,ease:"easeInOut"}}/>
      ))}
    </div>
  );
}

export function PulsingDot({color="#34d399"}:{color?:string}) {
  return (
    <motion.span className="inline-block h-1.5 w-1.5 rounded-full" style={{background:color}}
      animate={{boxShadow:[`0 0 0 0 ${color}60`,`0 0 0 8px ${color}00`],opacity:[1,0.6,1]}}
      transition={{repeat:Infinity,duration:1.4}}/>
  );
}
