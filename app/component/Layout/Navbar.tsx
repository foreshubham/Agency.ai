"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav
      className="
        w-full
        border-b border-gray-200 dark:border-gray-800
        bg-white/70 dark:bg-[#0F111A]/40
        backdrop-blur-xl
        sticky top-0 z-50
        transition-all duration-300
      "
    >
      <div className="max-w-10/12 mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          <span className="text-xl font-semibold tracking-tight">
            <span className="text-black dark:text-white">Circum </span>
            <span className="text-brand-blue">Centric</span>
          </span>
        </div>

        {/* Center Menu (Desktop) */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700 dark:text-gray-300">
          {["Home", "Services", "Our Work", "Contact Us"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className="relative group"
              >
                {item}

                {/* underline animation */}
                <span
                  className="
                    absolute left-0 -bottom-1 w-0 h-0.5
                    bg-brand-blue group-hover:w-full
                    transition-all duration-300
                  "
                ></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle 
          <button
            onClick={toggleTheme}
            className="
              w-10 h-10 rounded-full border
              flex items-center justify-center
              border-gray-400 dark:border-gray-600
              hover:scale-105 transition
            "
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          */}

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact-us"
              className="
                px-6 py-2 rounded-full text-white
                bg-[#5044E5] font-medium
                hover:bg-brand-blue transition
              "
            >
              Connect →
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="
            md:hidden px-6 pb-4 space-y-4
            bg-white/70 dark:bg-[#0F111A]/40
            backdrop-blur-xl
            border-t border-gray-200 dark:border-gray-800
          "
        >
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
            {["Home", "Services", "Our Work", "Contact Us"].map((item) => (
              <motion.li
                key={item}
                whileTap={{ scale: 0.97 }}
                whileHover={{ x: 4 }}
                className="transition"
              >
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "")}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="flex items-center gap-3 pt-3">
            {/* Toggle */}
            {/* <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border flex items-center justify-center border-gray-400 dark:border-gray-600"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}

            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact-us"
                onClick={() => setIsOpen(false)}
                className="
                  flex-1 text-center px-4 py-2 bg-[#5044E5] rounded-full text-black
                  font-medium bg-brand-cta hover:bg-brand-blue transition
                "
              >
                Connect →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
