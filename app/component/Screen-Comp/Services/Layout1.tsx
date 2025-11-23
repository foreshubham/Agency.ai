"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Stats from "./Layout2";

export default function Features() {
  return (
    <section className="relative w-full py-24 overflow-hidden">

      {/* Background Image */}
      {/* <div className="-z-10">
        <Image
          src="/bgImage2.png"   
          alt="background"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div> */}

      {/* Soft Background linear */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b 
      from-transparent via-[#e8ecff]/40 to-transparent dark:via-[#1a1c2b]/50" />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Heading */}
        {/* <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-medium text-center text-[#364153]"
        >
          What we{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4A48FF] to-[#7F7CFF]">
            offer
          </span>
        </motion.h2> */}

        {/* Subtext */}
        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-lg text-center mt-4 max-w-2xl mx-auto"
        >
          We create powerful digital experiences with modern technology and beautiful design.
        </motion.p> */}

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-white/80 dark:bg-[#0F111A]/80 backdrop-blur-lg 
              shadow-lg border border-gray-200/60 dark:border-gray-700/40"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl 
              bg-linear-to-br from-[#4A48FF]/20 to-[#7F7CFF]/20 text-[#4A48FF] mb-6">
                <span className="text-3xl font-bold">{i}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-[#364153]">
                Feature Title {i}
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                A short description about this feature explaining how it helps the user.
              </p>
            </motion.div>
          ))}

        </div>
 <Stats/>
      </div>
    </section>
  );
}
