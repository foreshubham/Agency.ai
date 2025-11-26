"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full pt-24 pb-16 overflow-hidden">

      {/* --- Blue Background Image Behind Everything --- */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bgImage1.png"
          alt="background glow"
          fill
          priority
          className="object-cover opacity-80"
        />
      </div>

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#e8ecff]/50 to-transparent pointer-events-none" />

      {/* Decorative Blobs */}
      <div className="absolute left-10 top-48 w-3 h-3 rounded-full bg-[#4A48FF]/40 blur-[2px]" />
      <div className="absolute left-40 top-80 w-5 h-5 rounded-full border border-[#4A48FF]/40" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Small Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-full border border-gray-200/60">
            <img src="/group_profile.png" alt="users" className="w-18 rounded-full" />
            <span className="text-gray-600 text-sm">
              Trusted by 10k+ people
            </span>
          </div>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-[5.2rem] font-medium text-[#364153] tracking-tight leading-tight"
        >
          Turning imagination into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A48FF] to-[#7F7CFF]">
            digital
          </span>{" "}
          impact.
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Creating meaningful connections and turning big ideas into interactive digital experiences.
        </motion.p>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/hero_img.png"
              alt="Hero"
              width={1000}
              height={600}
              className="rounded-3xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
