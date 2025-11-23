"use client";

import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="relative w-full py-24 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

        {[ 
          { label: "Projects", value: "120+" },
          { label: "Clients", value: "90+" },
          { label: "Countries", value: "14" },
          { label: "Awards", value: "6+" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <h3 className="text-5xl md:text-6xl font-semibold 
            text-transparent bg-clip-text bg-linear-to-r from-[#4A48FF] to-[#7F7CFF]">
              {item.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}
