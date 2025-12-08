"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ComfortPage() {
  const [message, setMessage] = useState(
    "Hey… I know today feels heavy. It's okay to pause. You're not alone."
  );

  const messages = [
    "You're stronger than you feel right now.",
    "It’s okay to rest. You deserve gentleness today.",
    "Even small steps count. You’re doing enough.",
    "You matter — more than you realize.",
    "I'm proud of you for making it this far."
  ];

  const handleClick = () => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setMessage(random);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-purple-300 via-pink-200 to-blue-200 animate-bgSlow px-4">
      <motion.div
        className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-md text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-2xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          💗 Just for You
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {message}
        </motion.p>

        <motion.button
          onClick={handleClick}
          className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-all shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Give me another gentle thought
        </motion.button>
      </motion.div>
    </div>
  );
}
