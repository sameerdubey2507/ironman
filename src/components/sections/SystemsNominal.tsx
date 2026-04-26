"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { useModal } from "@/components/providers/ModalProvider";

export function SystemsNominal() {
  const { openModal } = useModal();

  return (
    <section
      id="systems"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32"
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center gap-16">
        <AnimatedSection className="flex flex-col items-center gap-8">
          <AnimatedItem>
            <EyebrowBadge>PLATFORM // LIVE STATUS</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[16ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              &ldquo;The best teams aren&apos;t hired, they&apos;re{" "}
              <span className="text-accent">Built.</span>&rdquo;
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[54ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              We&apos;ve created a ecosystem where talent meets opportunity. Whether you&apos;re 
              looking to hire elite developers or find your next big project, 
              Sameer Dubey&apos;s network is the place where startups scale and 
              freelancers thrive.
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <button
              onClick={() => openModal("Analytics")}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] active:translate-y-[1px] cursor-pointer"
            >
              Open Job Board
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
