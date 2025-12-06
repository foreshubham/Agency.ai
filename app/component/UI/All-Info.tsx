"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiArrowRight,
} from "react-icons/fi";
import { Copyright } from "lucide-react";

export default function CircumCentricLinks() {
  const links = [
    { title: "Visit Our Website", url: "/" },
    { title: "Portfolio", url: "/our-work" },
    { title: "Book a Consultation", url: "#" },
    { title: "Contact Us", url: "/contact-us" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-6 bg-[#f8f8f8] pb-16">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/bgImage1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.32,
        }}
      />

      {/* Glows */}
      <motion.div
        className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full bg-purple-300/40 blur-3xl"
        initial={{ x: -200, y: -150, opacity: 0 }}
        animate={{ x: -120, y: -100, opacity: 0.45 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      <motion.div
        className="absolute bottom-[-100px] right-[-60px] w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full bg-indigo-200/40 blur-3xl"
        initial={{ x: 100, y: 120, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 0.4 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative backdrop-blur-2xl bg-white/55 border border-white/40 shadow-xl rounded-3xl px-6 sm:px-10 py-10 sm:py-14 w-full max-w-md mb-8 sm:mb-16"
      >
        {/* Logo Orb */}
        <motion.div
          className="relative flex items-center justify-center mx-auto mb-6 sm:mb-8 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-white/60 backdrop-blur-2xl border border-white/50 shadow-lg"
          animate={{ y: [0, -8, 0], opacity: [1, 0.95, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-white/40 blur-2xl opacity-70"></div>
          <Image
            src="/logo.png"
            width={110}
            height={110}
            alt="Circum Centric Logo"
            className="relative z-10 object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[22px] sm:text-[26px] text-gray-900 font-normal tracking-wide"
        >
          Circum Centric
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 font-normal tracking-wide text-[12px] sm:text-[14px] mt-1 sm:mt-2 mb-6 sm:mb-10"
        >
          Creative Agency • Branding • Web Experiences
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-6 sm:gap-7 text-gray-700 mb-6 sm:mb-10"
        >
          <a href="https://instagram.com/circum.centric">
            <FiInstagram size={20} className="text-pink-500" />
          </a>
          <a href="https://linkedin.com/company/circum-centric">
            <FiLinkedin size={20} className="text-blue-700" />
          </a>
          <a href="https://x.com/circumcentric">
            <FiTwitter size={20} className="text-black" />
          </a>
        </motion.div>

        {/* Links */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
                duration: 0.55,
                ease: "easeOut",
              }}
              className="relative w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white/85 backdrop-blur-xl border border-gray-200 text-gray-900 font-normal tracking-wide transition-all duration-300 hover:shadow-md"
            >
              <span>{link.title}</span>

              {/* Circular Arrow */}
              <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                <FiArrowRight
                  size={16}
                  className="text-gray-700 transform -rotate-45"
                />
              </div>
            </motion.a>
          ))}
        </div>
      <div className="flex gap-2 justify-center items-center pt-10 text-sm text-black/50">
        {" "}
        <Copyright /> by Circum Centric {new Date().getFullYear()} | All right reserved{" "}
      </div>
      </motion.div>

    </div>
  );
}
