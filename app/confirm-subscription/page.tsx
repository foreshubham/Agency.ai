"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ConfirmSubscription() {
  return (
    <section className="min-h-screen bg-[#f4f6f8] flex flex-col items-center justify-center px-6 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-lg bg-white rounded-xl shadow-lg p-10"
      >
        <img
          src="/logo.png"
          alt="Circumcentric Logo"
          className="mx-auto mb-6 w-32"
        />
        <h1 className="text-3xl font-bold text-[#4A48FF] mb-4">
          Confirm Your Subscription
        </h1>
        <p className="text-gray-700 mb-6">
          Thanks for subscribing to the <strong>Circumcentric</strong> newsletter! 
          Please check your email and click the confirmation link to start receiving the latest news, insights, and eco-friendly tech resources.
        </p>

        <button
          onClick={() => window.location.href = "/"}
          className="bg-[#4A48FF] hover:bg-[#3a38e0] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition"
        >
          Return to Homepage
        </button>

        <p className="text-gray-500 mt-6 text-sm">
          If you don't see the email, please check your spam or promotions folder.
        </p>
      </motion.div>
    </section>
  );
}