"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  { name: "Haley Carter", role: "CEO & founder" },
  { name: "James Walker", role: "Ads manager" },
  { name: "Jessica Morgan", role: "Vice president" },
  { name: "Ashley Bennett", role: "Marketing & sales" },
  { name: "Emily Parker", role: "Content marketer" },
  { name: "Ryan Mitchell", role: "Content writer" },
  { name: "Megan Brooks", role: "Performance manager" },
  { name: "Amber Foster", role: "Senior writer" },
];

export default function MeetTheTeam() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl text-[#1E2939]"
        >
          Meet the team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-gray-600/90 max-w-xl mx-auto"
        >
          A passionate team of digital experts dedicated to your brand’s success.
        </motion.p>

        {/* Team Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-16 justify-center">

          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-5 flex items-center gap-4"
            >
              <Image
                src="/mnt/data/4096e3a4-705c-4c7f-814f-d3608de37a6d.png"
                width={70}
                height={70}
                alt={member.name}
                className="rounded-full object-cover"
              />

              <div className="text-left">
                <h4 className="font-semibold text-gray-900">{member.name}</h4>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
