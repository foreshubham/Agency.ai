"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We provide end-to-end digital solutions including app development, UI/UX design, marketing strategy, and long-term performance support.",
  },
  {
    question: "How long does a project typically take?",
    answer:
      "Most projects take between 4–12 weeks depending on complexity, scope, and collaboration requirements.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We provide continuous support, performance monitoring, optimization, and growth consulting.",
  },
  {
    question: "Can you work with my existing team?",
    answer:
      "Absolutely. We frequently collaborate with in-house design, product, and marketing teams.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer fixed-price quotes, retainers, and hourly consulting depending on your project's needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold leading-tight text-gray-900 text-center">
          Frequently asked questions
        </h2>

        <p className="mt-4 text-base text-gray-600 text-center max-w-xl mx-auto">
          Quick answers to the most common questions about our process and services.
        </p>

        {/* FAQ Items */}
        <div className="mt-14 divide-y divide-gray-200 border border-gray-200 rounded-xl bg-white">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="px-6 py-5 cursor-none select-none "
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[17px] font-medium text-gray-900">
                    {item.question}
                  </h3>

                  {/* Minimal chevron icon */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="text-gray-500 text-lg"
                  >
                    ▾
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.28,
                        ease: [0.4, 0.0, 0.2, 1], // smoother & more professional
                      }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-[15px] leading-relaxed text-gray-600 pr-6">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
