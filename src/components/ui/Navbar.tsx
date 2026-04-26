"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/components/providers/ModalProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        
        {/* Left: Logo */}
        <div className="w-1/4 flex justify-start">
          <Link
            href="/"
            className="group flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-foreground transition-all"
          >
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(212,162,47,0.9)]"
            />
            <span className="opacity-90 group-hover:opacity-100 group-hover:tracking-[0.45em] transition-all duration-300">
              Sameer Dubey
            </span>
          </Link>
        </div>

        {/* Center: 4 Nav Items */}
        <div className="flex-1 hidden md:flex justify-center">
          <div className="flex items-center gap-8">
            {["Dashboard", "Users", "Institute", "Developer"].map((item, i) => (
              <motion.button 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                onClick={() => openModal(item)}
                className="group relative font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 transition-colors hover:text-white"
              >
                {item}
                <span className="absolute -bottom-1.5 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(212,162,47,0.8)]" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right: Auth Buttons */}
        <div className="w-1/4 flex justify-end">
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }} 
            className="flex gap-2 lg:gap-3"
          >
             <Link 
               href="#" 
               className="relative px-3 lg:px-4 py-1.5 font-mono text-[9px] lg:text-[10px] uppercase tracking-[0.15em] lg:tracking-widest text-zinc-300 transition-all duration-300 hover:text-white flex items-center justify-center rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
             >
                Login
             </Link>
             <Link 
               href="#" 
               className="group relative flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 lg:px-5 py-1.5 font-mono text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-accent backdrop-blur-md transition-all duration-300 hover:bg-accent hover:text-black hover:shadow-[0_0_20px_rgba(212,162,47,0.6)] hover:scale-105 animate-[pulse_4s_ease-in-out_infinite]"
             >
                <span className="h-1.5 w-1.5 rounded-full bg-accent group-hover:bg-black transition-colors" />
                Register
             </Link>
          </motion.div>
        </div>

      </div>
    </header>
  );
}
