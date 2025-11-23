"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

import Lenis from "@studio-freight/lenis";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // AOS
    AOS.init({
      duration: 800,
      easing: "ease-out",
      offset: 40,
    });

    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Math.random()} // page transition
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
