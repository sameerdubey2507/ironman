"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GridBg, Particles, ScanLine } from "./nav-shared";
import { OverviewPanel } from "./nav-overview";
import { DashboardPanel } from "./nav-dashboard";
import { DeveloperPanel } from "./nav-developer";
import { ContactPanel } from "./nav-contact";
import { AnalyticsPanel } from "./nav-analytics";
import { UsersPanel } from "./nav-users";
import { InstitutePanel } from "./nav-institute";
import { useModal } from "@/components/providers/ModalProvider";

const PANELS: Record<string, React.ReactNode> = {
  Overview: <OverviewPanel />,
  Dashboard: <DashboardPanel />,
  Developer: <DeveloperPanel />,
  Contact: <ContactPanel />,
  Analytics: <AnalyticsPanel />,
  Users: <UsersPanel />,
  Institute: <InstitutePanel />,
};

export function NavModals() {
  const { activePanel, closeModal } = useModal();

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [closeModal]);

  return (
    <AnimatePresence>
      {activePanel && (
        <>
          {/* Backdrop and Wrapper */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              key="bd"
              className="absolute inset-0 pointer-events-auto"
              style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(16px)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={closeModal}
            />

            {/* Modal Container */}
            <motion.div
              key={activePanel}
              className="relative z-[101] w-full max-w-[1000px] pointer-events-auto overflow-hidden flex flex-col rounded-3xl"
              style={{
                background: "rgba(10,10,12,0.6)",
                backdropFilter: "blur(40px) saturate(150%)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 48px -12px rgba(0,0,0,0.5)",
                maxHeight: "min(900px, 90vh)"
              }}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Minimalist Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 transition-all hover:bg-white/10 hover:text-white hover:scale-105"
              >
                ✕
              </button>

              {/* Scrollable Content */}
              <div className="relative flex-1 overflow-y-auto hide-scrollbar">
                <motion.div 
                  initial={{ opacity: 0, filter: "blur(8px)" }} 
                  animate={{ opacity: 1, filter: "blur(0px)" }} 
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="h-full"
                >
                  {PANELS[activePanel]}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
