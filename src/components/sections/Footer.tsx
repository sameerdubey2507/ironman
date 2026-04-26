import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/5 bg-background px-6 py-14 md:px-10 md:py-16"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(212,162,47,0.9)]"
              />
              Sameer / Dubey
            </div>
            <p className="max-w-[38ch] font-sans text-sm leading-relaxed text-zinc-400">
              &copy; {new Date().getFullYear()} Sameer Dubey &mdash; Elite Freelance Network.
              Connecting top talent with visionary projects worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Developer Info</span>
              <h3 className="font-sans text-lg font-medium text-white">Sameer Dubey</h3>
              <p className="font-sans text-sm text-zinc-400">
                3rd Year Computer Science Engineering Student at Terna Engineering College.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Connect</span>
              <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-300">
                <a href="mailto:craftedlegend25@gmail.com" className="hover:text-accent transition-colors">craftedlegend25@gmail.com</a>
                <a href="https://linkedin.com/in/sameerdubey2507" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                <a href="https://github.com/sameerdubey2507" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Accomplishments</span>
              <p className="font-sans text-sm text-zinc-400">
                Earned 8+ professional certifications from Deloitte and other leading institutions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <span>Build 2026.04.25 &nbsp;&middot;&nbsp; v2.0 &nbsp;&middot;&nbsp; Online</span>
          <span>Elite Freelance Network &mdash; Powered by Sameer Dubey</span>
        </div>
      </div>
    </footer>
  );
}
