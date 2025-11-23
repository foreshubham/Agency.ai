"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    if (!executeRecaptcha) {
      setMsg("reCAPTCHA not ready. Please try again.");
      setLoading(false);
      return;
    }

    const token = await executeRecaptcha("contact_form");

    const form = new FormData(e.target);

    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone") || "",
      message: form.get("message"),
      recaptcha: token,
    };

    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.ok) {
      setMsg("Message sent successfully!");
      e.target.reset();
    } else {
      setMsg(data.error || "Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <section className="relative w-full pt-32 pb-24 bg-white dark:bg-[#0F111A] overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#f3f4ff] via-transparent to-transparent dark:from-[#1a1c2b] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-semibold text-center text-[#1a1a1a] dark:text-white tracking-tight"
        >
          Get in touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-center text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
        >
          We're here to help. Reach out for collaborations, support, or to start your next big digital project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 w-full max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                required
                name="name"
                type="text"
                placeholder="Your full name"
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F111A] text-black dark:text-white focus:ring-2 focus:ring-[#4A48FF] outline-none transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                required
                name="email"
                type="email"
                placeholder="your@email.com"
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F111A] text-black dark:text-white focus:ring-2 focus:ring-[#4A48FF] outline-none transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone (optional)</label>
              <input
                name="phone"
                type="tel"
                placeholder="Your contact number"
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F111A] text-black dark:text-white focus:ring-2 focus:ring-[#4A48FF] outline-none transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell us how we can help you"
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F111A] text-black dark:text-white focus:ring-2 focus:ring-[#4A48FF] outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 mt-4 text-lg font-medium rounded-xl bg-[#4A48FF] hover:bg-[#3c3ae7] text-white shadow-md transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {msg && (
              <p className="text-center text-[#4A48FF] dark:text-green-300 font-medium pt-2">
                {msg}
              </p>
            )}

          </form>
        </motion.div>
      </div>
    </section>
  );
}
