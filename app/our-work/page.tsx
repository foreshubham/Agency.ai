"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- TYPES ---------- */
interface Project {
  id: string;
  title: string;
  category: string;
  short: string;
  hero: string;
}

interface ProjectCardProps {
  p: Project;
  onOpen: (id: string) => void;
}

interface CaseStudyProps {
  id: string;
  onClose: () => void;
}

/* ---------- DATA ---------- */
const projects: Project[] = [
  {
    id: "ride-booking",
    title: "Ride Booking Platform",
    category: "Product",
    short:
      "EV-first ride booking app built for reliability and low carbon impact.",
    hero: "https://cdn.dribbble.com/userupload/5099275/file/original-c2290a915086242b19dd5e92d034999f.png?resize=400x0",
  },
  {
    id: "food-delivery",
    title: "Food Delivery Platform",
    category: "Product",
    short:
      "Fast, efficient delivery with eco-routing and low-emission fleet support.",
    hero: "https://www.hubspot.com/hubfs/web-development.webp",
  },
  {
    id: "vehicle-qr",
    title: "Vehicle QR System",
    category: "Platform",
    short:
      "QR-driven civic communication system for vehicles — builds engagement and responsibility.",
    hero: "https://mikekhorev.com/wp-content/uploads/2018/10/social-paid-advertising.jpg",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard for Brands",
    category: "SaaS",
    short:
      "Scalable analytics dashboard optimized for performance and sustainability.",
    hero: "https://s3.fr-par.scw.cloud/plecto-prod-plecto-website-2025/images/image_71-min.max-1280x960.png",
  },
  {
    id: "branding",
    title: "Branding & Identity",
    category: "Design",
    short: "Eco-conscious brand systems with clear visual language and motion.",
    hero: "https://static.wixstatic.com/media/84b06e_c6eba792b09f4cf2bc555f26a381e1cb~mv2.png",
  },
];

/* ---------- CARD ---------- */
function ProjectCard({ p, onOpen }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white cursor-pointer"
      onClick={() => onOpen(p.id)}
    >
      <div className="h-48 w-full relative">
        <img
          src={p.hero}
          alt={p.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
          <span className="text-sm text-gray-500">{p.category}</span>
        </div>
        <p className="text-gray-600 mt-3 text-sm">{p.short}</p>
      </div>
    </motion.div>
  );
}

/* ---------- CASE STUDY ---------- */
function CaseStudy({ id, onClose }: CaseStudyProps) {
  const p = projects.find((x) => x.id === id);
  if (!p) return null;

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-200"
    >
      <div className="flex items-start gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900">{p.title}</h2>
          <p className="text-gray-600 mt-4">{p.short}</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {["Challenge", "Solution", "Impact"].map((title, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="rounded-lg p-6 bg-[#F7F8FF]"
              >
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-sm text-gray-600">
                  {title === "Challenge" &&
                    "Build a resilient product that reduces emissions and improves user experience while maintaining high reliability."}
                  {title === "Solution" &&
                    "Designed EV-first routing, lightweight clients, energy-efficient backend processes."}
                  {title === "Impact" &&
                    "Reduced idle time, improved fleet utilization, and measurable CO₂ reductions."}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <h4 className="font-semibold">Process & Timeline</h4>
            <ol className="mt-4 space-y-3 text-sm text-gray-600">
              <li>Discovery & Research — 3 weeks</li>
              <li>Prototyping & UX — 4 weeks</li>
              <li>Engineering & QA — 8 weeks</li>
              <li>Launch & Iteration — ongoing</li>
            </ol>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-200"
            >
              Back to projects
            </button>

            <a
              href="#"
              className="px-5 py-3 rounded-lg bg-gradient-to-r from-[#4A48FF] to-[#7F7CFF] text-white"
            >
              View Live (Demo)
            </a>
          </div>
        </div>

        <div className="w-80 hidden md:block">
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <img
              src={p.hero}
              alt={p.title}
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <strong>Role:</strong> Product, Design, Engineering <br />
            <strong>Team:</strong> 6 people <br />
            <strong>Year:</strong> 2024
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- MAIN PAGE ---------- */
export default function OurWorkFull() {
  const [filter, setFilter] = useState<string>("All");
  const [open, setOpen] = useState<string | null>(null);

  const filters = ["All", "Product", "Platform", "SaaS", "Design"];
  const list = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <div className="w-full min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500">
            Selected Works • Sustainable Digital Products
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Our Work
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Projects where design, technology and sustainability converge —
            case studies that show measurable business and environmental impact.
          </p>
        </div>

        {/* ---------- RESPONSIVE FILTERS ---------- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">

          {/* Filter Buttons */}
          <div className="flex gap-3 overflow-x-auto md:flex-wrap md:overflow-visible pb-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium ${
                  filter === f
                    ? "bg-gradient-to-r from-[#4A48FF] to-[#7F7CFF] text-white"
                    : "bg-gray-50 text-gray-700 border border-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project Count */}
          <div className="text-sm text-gray-500 mt-2 md:mt-0">
            Showing {list.length} projects
          </div>
        </div>

        {/* ---------- GRID / CASE STUDY ---------- */}
        <AnimatePresence mode="wait">
          {open ? (
            <CaseStudy key={open} id={open} onClose={() => setOpen(null)} />
          ) : (
            <motion.div
              key="grid"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className="grid md:grid-cols-3 gap-8"
            >
              {list.map((p) => (
                <ProjectCard key={p.id} p={p} onOpen={(id) => setOpen(id)} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
