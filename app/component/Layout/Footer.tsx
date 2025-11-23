"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F9FAFB] dark:bg-[#0F111A] border-t border-gray-200 dark:border-gray-800 py-12">

      <div className="max-w-10/12 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="logo" className="w-9 h-9" />
            <span className="text-2xl font-semibold tracking-tight">
              <span className="text-black dark:text-white">agency</span>
              <span className="text-[#4A48FF]">.ai</span>
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
            From strategy to execution, we build digital solutions that help businesses grow sustainably and go eco-friendly with modern technology.
          </p>

          {/* Footer links */}
          <ul className="flex  flex-wrap gap-8 text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">
            <li><Link className="text-[15px]" href="/">Home</Link></li>
            <li><Link className="text-[15px]" href="/services">Services</Link></li>
            <li><Link className="text-[15px]" href="/work">Our Work</Link></li>
            <li><Link className="text-[15px]" href="/contact">Contact Us</Link></li>
          </ul>

          <div className="w-full h-px bg-gray-300 dark:bg-gray-700 my-6"></div>

          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Copyright © 2025 · All Rights Reserved.
          </p>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-start md:items-end text-left"
        >
          <h3 className="text-lg text-gray-900 dark:text-white mb-2">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm max-w-xs md:text-right">
            The latest news, insights, and eco-friendly tech resources—delivered weekly.
          </p>

          <div className="flex w-full md:w-auto items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-64 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F111A] text-black dark:text-white"
            />
            <button className="px-6 py-3 rounded-lg bg-[#4A48FF] text-white font-medium hover:bg-[#3a38e0] transition">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-6 md:justify-end">
            <Link href="#"><Facebook size={22} className="text-gray-600 hover:text-[#4A48FF] transition" /></Link>
            <Link href="#"><Twitter size={22} className="text-gray-600 hover:text-[#4A48FF] transition" /></Link>
            <Link href="#"><Instagram size={22} className="text-gray-600 hover:text-[#4A48FF] transition" /></Link>
            <Link href="#"><Linkedin size={22} className="text-gray-600 hover:text-[#4A48FF] transition" /></Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
