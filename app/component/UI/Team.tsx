"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  { name: "Haley Carter", role: "CEO & Founder" },
  { name: "James Walker", role: "Ads Manager" },
  { name: "Jessica Morgan", role: "Vice President" },
  { name: "Ashley Bennett", role: "Marketing & Sales" },
];

export default function MeetTheTeam() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold text-[#1E2939]"
        >
          Meet the Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-3 text-gray-600 max-w-lg mx-auto"
        >
          A focused team dedicated to scaling brands and delivering results.
        </motion.p>

        {/* 4-Card Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-14">

          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all rounded-xl p-6"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/mnt/data/4096e3a4-705c-4c7f-814f-d3608de37a6d.png"
                  width={80}
                  height={80}
                  alt={member.name}
                  className="object-cover"
                />
              </div>

              <h4 className="font-semibold text-gray-900 text-lg">{member.name}</h4>
              <p className="text-gray-500 text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
