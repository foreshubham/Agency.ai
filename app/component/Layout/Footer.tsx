"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F8F9FB] dark:bg-[#0F111A] border-t border-gray-200 dark:border-gray-800 py-12">

      {/* LOW-OPACITY BLUE ACCENT DOT (Bottom-left) */}
      <div className="absolute bottom-3 left-3 w-6 h-6 rounded-full bg-[#5044E5]/20 blur-sm pointer-events-none"></div>

      <div className="max-w-[85%] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SECTION – Animated From Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="logo" className="w-8 h-8" />
            <span className="text-xl font-semibold tracking-tight">
              <span className="text-black dark:text-white">agency</span>
              <span className="text-brand-blue">.ai</span>
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>

          <ul className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-300 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/work">Our Work</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>

          {/* Divider */}
          <div className="w-full h-px bg-gray-300 dark:bg-gray-700 my-6"></div>

          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Copyright © 2025 · All Rights Reserved.
          </p>
        </motion.div>

        {/* RIGHT SECTION – Animated From Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-start"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F111A] text-black dark:text-white"
            />
            <button className="px-6 py-3 rounded-lg bg-[#5044E5] text-white font-medium hover:bg-brand-blue transition">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-6">
            <Link href="#"><Facebook size={22} className="text-gray-600 dark:text-gray-300 hover:text-[#5044E5] transition" /></Link>
            <Link href="#"><Twitter size={22} className="text-gray-600 dark:text-gray-300 hover:text-[#5044E5] transition" /></Link>
            <Link href="#"><Instagram size={22} className="text-gray-600 dark:text-gray-300 hover:text-[#5044E5] transition" /></Link>
            <Link href="#"><Linkedin size={22} className="text-gray-600 dark:text-gray-300 hover:text-[#5044E5] transition" /></Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
