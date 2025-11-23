"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full py-28 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/about_img.png"
            alt="About"
            width={600}
            height={450}
            className="rounded-3xl"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-medium text-[#364153] leading-tight">
            Building digital experiences  
            that create <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4A48FF] to-[#7F7CFF]">impact</span>.
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
            We’re a team of passionate creators helping businesses turn their 
            ideas into meaningful digital products and experiences.
          </p>

          <button className="mt-10 px-8 py-4 bg-[#4A48FF] hover:bg-[#3a38e0] text-white rounded-xl text-lg shadow-lg transition-all">
            Know More
          </button>
        </motion.div>

      </div>
    </section>
  );
}
