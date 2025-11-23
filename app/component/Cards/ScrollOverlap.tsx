"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Digital Brand Consulting",
    number: "01",
  },
  {
    title: "Eco-Friendly Business Transformation",
    number: "02",
  },
  {
    title: "Cost-Effective Strategy & Planning",
    number: "03",
  },
  {
    title: "Sustainable Growth Roadmapping",
    number: "04",
  },
  {
    title: "Green Technology Integration",
    number: "05",
  },
];

export default function ScrollServices() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
        <Image
          src="/bgImage2.png"   // <-- replace with your image
          alt="background"
            fill 
            className=" opacity-100 -z-10"
            priority
        />

      <div className="max-w-6xl mx-auto px-6">

        {/* Small Tag */}
        <p className="text-center text-sm tracking-wide text-gray-500 mb-4">
          [ What we offer ]
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-medium text-center text-[#364153] leading-tight">
          Strategic Solutions Designed for  
          <br />
          Growth, Innovation,  
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4A48FF] to-[#7F7CFF]">
            & Long-Term Impact.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-5">
          Helping businesses grow responsibly through modern design, technology,
          and eco-friendly transformation — ensuring long-lasting digital and environmental impact.
        </p>

    

      

       
       
      </div>
    </section>
  );
}
