"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TicTacToe from "../component/Game";

export default function ComfortPage() {
  const [message, setMessage] = useState(
    "Sarita… come here for a moment. I want you to breathe, relax, and let me hold the heaviness for you. — Macchar"
  );

  // More personal, real messages
  const messages = [
    "Sarita… I know some days feel heavier than others. You don’t have to carry everything alone. I’m right here.",
    "Let me give you a good head message to make you feel relax with my tiny mosquito hands. Macchar hoon maiiii",
    "I wish I could sit beside you right now, gently hold your hand. and that’s enough.",
    "I am here for you always I’m not going anywhere.",
    "You matter to me… not just when you’re smiling, but also when you're tired, quiet, overwhelmed—every version of you is safe with me."
  ];

  const handleClick = () => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setMessage(random);
  };

  // One button -> random song each time she clicks
  const songs = [
    "https://open.spotify.com/embed/track/5cF0dROlMOK5uNZtivgu50",
    "https://open.spotify.com/embed/track/3TAhWtQnpoL5Vl9VQPl9fU",
    "https://open.spotify.com/embed/track/0TK2YIli7K1leLovkQiNik",
    "https://open.spotify.com/embed/track/39LLxExYz6ewLAcYrzQQyP",
    "https://open.spotify.com/embed/track/7JJmb5XwzOO8jgpou264Ml"
  ];

  const [songUrl, setSongUrl] = useState<string | null>(null);

  const playRandomSong = () => {
    const random = songs[Math.floor(Math.random() * songs.length)];
    setSongUrl(random);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 bg-linear-to-br py-10 from-purple-300 via-pink-200 to-blue-200 animate-bgSlow px-4">

      {/* Single Secret Song Button */}
      <div className="w-full max-w-md">
        <motion.button
          onClick={playRandomSong}
          className="w-full bg-purple-600 text-white py-3 rounded-xl shadow-lg hover:bg-purple-700 transition font-medium"
          whileTap={{ scale: 0.95 }}
        >
          🎧 Secret Song from Macchar
        </motion.button>

        <AnimatePresence>
          {songUrl && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <iframe
                style={{ borderRadius: "12px" }}
                src={`${songUrl}?utm_source=generator`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Message Card */}
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
          💗 For Sarita — From Macchar
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
          Send another message
        </motion.button>
      </motion.div>

      <TicTacToe />
    </div>
  );
}
