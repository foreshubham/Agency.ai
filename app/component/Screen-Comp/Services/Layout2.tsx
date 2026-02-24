"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  value: number;
}

function AnimatedNumber({ value }: AnimatedNumberProps) {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1200;
      const increment = value / (duration / 16);
      const interval = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(interval);
        }
        setCurrent(Math.floor(start));
      }, 16);
    }
  }, [inView, value]);

  return <span ref={ref}>{current}</span>;
}

const stats = [
  { label: "Projects", value: 50 },
  { label: "Clients", value: 25 },
  { label: "Countries", value: 3 },
  { label: "Awards", value: 6 },
];

export default function Stats() {
  const controls = useAnimation(); // ✅ correct
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section className="relative w-full py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-12">
          Our Impact in Numbers
        </h2>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: index * 0.2 },
                },
              }}
            >
              <h3 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
                <AnimatedNumber value={item.value} />
                {item.label !== "Countries" ? "+" : ""}
              </h3>
              <p className="text-gray-600 mt-2 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}