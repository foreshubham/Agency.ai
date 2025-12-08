"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TicTacToe() {
  const empty = Array(9).fill(null);
  const [board, setBoard] = useState(empty);
  const [winner, setWinner] = useState<string | null>(null);
  const [noWin, setNoWin] = useState(false);

  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  const checkWin = (b: string[]) => {
    for (let [a,b1,c] of lines) {
      if (b[a] === "X" && b[b1] === "X" && b[c] === "X") return true;
    }
    return false;
  };

  const cpuMove = (b: string[]) => {
    const preferredMoves = [4,0,2,6,8,1,3,5,7];
    for (let i of preferredMoves) {
      if (b[i] === null) {
        b[i] = "O";
        break;
      }
    }
    return b;
  };

  const handleClick = (i: number) => {
    if (board[i] || winner || noWin) return;

    let newBoard = [...board];
    newBoard[i] = "X";

    if (checkWin(newBoard)) {
      setWinner("Sarita");
      setBoard([...newBoard]);
      return;
    }

    // CPU move
    newBoard = cpuMove(newBoard);

    if (checkWin(newBoard)) {
      setWinner("Sarita");
      setBoard([...newBoard]);
      return;
    }

    // If board is full and still no win
    if (!newBoard.includes(null)) {
      setNoWin(true);
      setBoard([...newBoard]);
      return;
    }

    setBoard([...newBoard]);
  };

  const reset = () => {
    setBoard(empty);
    setWinner(null);
    setNoWin(false);
  };

  return (
    <div className="mt-10 w-full max-w-xs mx-auto">

      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
        ✨ A little surprise is waiting for you ✨
      </h2>

      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleClick(idx)}
            className="w-20 h-20 bg-white/80 backdrop-blur text-black text-3xl font-bold rounded-xl shadow flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
          >
            {cell}
          </motion.button>
        ))}
      </div>

      {/* WINNER MESSAGE */}
      <AnimatePresence>
        {winner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-4 bg-pink-100 text-pink-700 rounded-xl text-center shadow-md"
          >
            <p className="font-semibold text-lg">
              🎉 Sarita, you’ve won Dairy Milk Bubbly! 🍫💗
            </p>
            <p className="text-sm mt-1">From Shubham</p>

            <a
              href="https://wa.me/919650141380?text=Shubham%2C%20I%20won%20your%20Tic%20Tac%20Toe%20surprise%20game!%20🍫💗"
              target="_blank"
            >
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                📩 Click to share your winning
              </button>
            </a>

            <button
              onClick={reset}
              className="mt-4 w-full px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600"
            >
              Play Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NO-WIN (DRAW) MESSAGE */}
      <AnimatePresence>
        {noWin && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-4 bg-blue-100 text-blue-700 rounded-xl text-center shadow-md"
          >
            <p className="font-semibold text-lg">
              💛 It’s okay Sarita… let’s try again.
            </p>
            <p className="text-sm mt-1">I'm still cheering for you — Shubham 💗</p>

            <button
              onClick={reset}
              className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
            >
              Try Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
