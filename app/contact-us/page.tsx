'use client'
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative w-full pt-32 pb-24 bg-white dark:bg-[#0F111A] overflow-hidden">

      {/* Subtle top gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f3f4ff] via-transparent to-transparent dark:from-[#1a1c2b] pointer-events-none -z-10"></div>

      {/* Page Container */}
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-semibold text-center text-[#1a1a1a] dark:text-white tracking-tight"
        >
          Get in touch
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-center text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
        >
          We're here to help. Reach out for collaborations, support, or to start your next big digital project.
        </motion.p>

        {/* FULL-WIDTH FORM (Apple Style) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 w-full max-w-3xl mx-auto"
        >
          <form className="grid grid-cols-1 gap-6">

            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F111A] text-black dark:text-white focus:ring-2 focus:ring-[#4A48FF] outline-none transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F111A] text-black dark:text-white focus:ring-2 focus:ring-[#4A48FF] outline-none transition"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone (optional)</label>
              <input
                type="tel"
                placeholder="Your contact number"
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F111A] text-black dark:text-white focus:ring-2 focus:ring-[#4A48FF] outline-none transition"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us how we can help you"
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F111A] text-black dark:text-white focus:ring-2 focus:ring-[#4A48FF] outline-none transition"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-4 mt-4 text-lg font-medium rounded-xl bg-[#4A48FF] hover:bg-[#3c3ae7] text-white shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}


// <!-- Background Image Section -->
// <div class="absolute inset-0 -z-10 bg-cover bg-center opacity-20" style="background-image: url('/mnt/data/3bb4e33a-9336-499b-85ff-252686b5a677.png');"></div>

// <!-- Additional Sections -->
// <section class="py-20 w-full bg-white/60 backdrop-blur-xl mt-10 rounded-2xl shadow-xl">
//   <h2 class="text-3xl font-semibold mb-6 text-gray-900 text-center">Why Choose Us?</h2>
//   <p class="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">We bring modern design, seamless user experience, and professional-grade execution to every project we build. Quality, precision, and creativity define our work.</p>
// </section>

// <section class="py-20 w-full bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-pink-500/10 rounded-2xl shadow-xl mt-10">
//   <h2 class="text-3xl font-semibold mb-6 text-gray-900 text-center">What You Can Expect</h2>
//   <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//     <div class="p-6 bg-white/70 backdrop-blur-xl shadow-lg rounded-xl">
//       <h3 class="text-xl font-semibold mb-2">Fast Responses</h3>
//       <p class="text-gray-700">We get back to you quickly with clear communication and instant support.</p>
//     </div>
//     <div class="p-6 bg-white/70 backdrop-blur-xl shadow-lg rounded-xl">
//       <h3 class="text-xl font-semibold mb-2">Professional Support</h3>
//       <p class="text-gray-700">Every message you send is handled with care and attention to detail.</p>
//     </div>
//     <div class="p-6 bg-white/70 backdrop-blur-xl shadow-lg rounded-xl">
//       <h3 class="text-xl font-semibold mb-2">Creative Collaboration</h3>
//       <p class="text-gray-700">We work with you to transform ideas into polished, high-quality results.</p>
//     </div>
//   </div>
// </section>