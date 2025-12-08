"use client";

import EmpoweredSection from "@/app/component/UI/BusinessesDeveloped";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* --------------------------
   PAGE CONTENT (EDIT THIS)
--------------------------- */
const serviceData = {
  title: "Web Development",
  subtitle:
    "High-performance websites and full-stack applications built with modern technologies.",
  image: "/services/web-dev.png",

  overview:
    "We build fast, scalable, and visually stunning websites that help businesses grow. Whether you're launching a startup or upgrading an existing platform, our solutions are engineered for performance and user experience.",

  features: [
    "Custom website development",
    "Frontend & backend engineering",
    "API development & integrations",
    "Responsive & mobile-first design",
    "SEO & performance optimization",
    "Secure deployment & hosting",
  ],

  process: [
    "Research & Planning",
    "Wireframing & UI Design",
    "Full-stack Development",
    "Testing & Optimization",
    "Launch & Support",
  ],

  projects: [
    {
      title: "SaaS Dashboard Platform",
      thumbnail: "/projects/pr1.png",
      href: "/projects/saas-dashboard",
    },
    {
      title: "E-commerce Store",
      thumbnail: "/projects/pr2.png",
      href: "/projects/ecommerce-store",
    },
    {
      title: "Corporate Website",
      thumbnail: "/projects/pr3.png",
      href: "/projects/corporate-site",
    },
  ],
};

/* --------------------------------
   PAGE COMPONENT
--------------------------------- */
export default function ServicePage() {
  return (
    <section className="py-20">
      {/* TOP HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-[#364153] leading-tight">
            {serviceData.title}
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            {serviceData.subtitle}
          </p>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 relative"
        >
          <Image
            src={serviceData.image}
            alt={serviceData.title}
            width={520}
            height={420}
            className="rounded-3xl shadow-xl object-cover"
          />
        </motion.div>
      </div>

      {/* OVERVIEW SECTION */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-semibold mb-6 text-[#364153]"
        >
          Overview
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 leading-relaxed text-lg"
        >
          {serviceData.overview}
        </motion.p>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-semibold text-[#364153] mb-8">
          What You Get
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceData.features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border bg-white shadow-sm flex items-start gap-3"
            >
              <span className="text-[#4A48FF] font-bold text-xl">✔</span>
              <p className="text-gray-700">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PROCESS SECTION */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-semibold text-[#364153] mb-8">Process</h2>

        <div className="grid md:grid-cols-5 gap-6">
          {serviceData.process.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="p-5 text-center bg-white rounded-xl border shadow-sm"
            >
              <div className="text-[#4A48FF] font-semibold text-lg mb-2">
                {i + 1}
              </div>
              <p className="text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <EmpoweredSection />

      {/* CTA SECTION */}
      <div className="mt-22 max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-semibold text-[#364153]"
        >
          Ready to start your project?
        </motion.h2>

        <p className="text-gray-600 mt-4">
          Let’s collaborate and build something extraordinary.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 px-8 py-4 bg-[#4A48FF] hover:bg-[#3A38D8] text-white rounded-xl font-medium transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
