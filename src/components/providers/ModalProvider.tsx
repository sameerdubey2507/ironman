"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface ModalContextType {
  activePanel: string | null;
  openModal: (panel: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const openModal = useCallback((panel: string) => {
    setActivePanel(panel);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setActivePanel(null);
    document.body.style.overflow = "auto";
  }, []);

  return (
    <ModalContext.Provider value={{ activePanel, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
