"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* 🔥 CLEAN & ALIGNED DATA */
const services = [
  {
    title: "Web Development",
    description: "High-performance, scalable websites & web apps using modern tech.",
    image: "/services/web-dev.png",
    href: "/services/web-development",
    category: "Development",
  },
  {
    title: "UI / UX Design",
    description: "User-centered product design focused on conversion and clarity.",
    image: "/services/brand.png",
    href: "/services/ui-ux",
    category: "Design",
  },
  {
    title: "AI Solutions",
    description: "AI-powered automation, chatbots, and smart business tools.",
    image: "/services/ai.svg",
    href: "/services/ai-solutions",
    category: "AI",
  },
  {
    title: "Website Maintenance",
    description: "Ongoing monitoring, performance optimization, and updates.",
    image: "/services/maintaine.gif",
    href: "/services/website-maintenance",
    category: "Development",
  },
  {
    title: "Social Media Management",
    description: "Content strategy, posting, and growth-driven social campaigns.",
    image: "/services/smm.gif",
    href: "/services/social-media-management",
    category: "Marketing",
  },
  {
    title: "Content Creation",
    description: "High-quality visuals, videos, and written content that converts.",
    image: "/services/bd.gif",
    href: "/services/content-creation",
    category: "Marketing",
  },
  {
    title: "Smart OOH Advertising",
    description: "AI-powered outdoor advertising for maximum local impact.",
    image: "/services/ooh.jpeg",
    href: "/services/ooh-advertising",
    category: "Marketing",
  },
  {
    title: "Google Reviews Booster",
    description: "Improve trust, authority, and visibility with real reviews.",
    image: "/services/review.png",
    href: "/services/google-reviews",
    category: "Growth",
  },
  {
    title: "Complete Business Development",
    description: "End-to-end digital growth — strategy, execution & scaling.",
    image: "/services/content.gif",
    href: "/services/business-development",
    category: "Growth",
  },
];

const filters = ["All", "Development", "Design", "AI", "Marketing", "Growth"];

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices =
    activeFilter === "All"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <section className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-[#e8ecff]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ✅ FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-[#4A48FF] text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ✅ SERVICE GRID */}
        <div className="grid md:grid-cols-3 gap-12">
          {filteredServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <Link href={service.href} className="block h-full">
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-[#4A48FF]/30 to-[#7F7CFF]/30 opacity-0 group-hover:opacity-100 blur-xl transition" />

                {/* Card */}
                <div className="relative bg-white dark:bg-[#0F111A] border border-gray-200/60 dark:border-gray-700/40 rounded-3xl overflow-hidden shadow-lg flex flex-col h-full">

                  {/* Image */}
                  <div className="relative h-56">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>

                    <span className="mt-6 text-[#4A48FF] font-medium">
                      View service →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
