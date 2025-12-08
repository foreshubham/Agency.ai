"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function EmpoweredSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Text fades from gray → #364153
  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#9ca3af", "#364153"]
  );

  return (
    <section
      ref={sectionRef}
      className="w-full py-32 text-[#36415]"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2
    
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#364153]"
        >
          BUSINESS WE HAVE<br />EMPOWERED DIGITALLY
        </h2>

        {/* Red underline */}
        <div className="w-28 h-[3px] bg-red-500 mx-auto mt-5"></div>

        {/* Subtext */}
        <motion.p
          style={{ color: textColor }}
          className="mt-6 text-lg max-w-2xl mx-auto text-gray-300"
        >
          Our innovative business framework is faster, superior, and tested 
          to help unlock your digital growth.
        </motion.p>

        {/* Grid section */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-20">
          {[
            "/web/pr1.png",
            "/web/pr2.png",
            "/web/pr3.png",
            "/web/pr9.jpg",
            "/web/pr5.webp",
            "/web/pr8.jpg"
          ].map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="overflow-hidden rounded-xl shadow-lg group"
            >
              <Image
                src={src}
                alt="project showcase"
                width={500}
                height={350}
                className="object-cover w-full h-64 group-hover:scale-110 transition duration-700"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
