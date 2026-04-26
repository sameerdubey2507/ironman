import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ModalProvider } from "@/components/providers/ModalProvider";
import { NavModals } from "@/components/ui/NavModals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sameer Dubey — Elite Freelance Network",
  description:
    "Connecting visionaries with builders. Post jobs, find work, and build your startup team with verified experts.",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body className="relative min-h-full bg-background text-foreground grain">
        <SmoothScrollProvider>
          <ModalProvider>
            {children}
            <NavModals />
          </ModalProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
