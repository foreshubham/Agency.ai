"use client";

import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹25,000",
    duration: "one time",
    description: "Perfect for startups and small teams",
    features: [
      "Landing page or small website",
      "Responsive design",
      "Basic SEO setup",
      "1 week delivery",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹75,000",
    duration: "one time",
    description: "For growing businesses & SaaS products",
    features: [
      "Full-stack web application",
      "Admin dashboard",
      "SEO & performance optimization",
      "Authentication",
      "2–3 weeks delivery",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "project based",
    description: "Tailored solutions for enterprises",
    features: [
      "Custom architecture",
      "Scalable backend",
      "Security best practices",
      "Advanced admin controls",
      "Dedicated support",
      "Flexible timeline",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-[#e8ecff]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-center"
        >
          Simple & Transparent <span className="text-[#4A48FF]">Pricing</span>
        </motion.h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Choose a plan that fits your business needs. No hidden costs.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 border backdrop-blur-md shadow-xl transition-all
                ${
                  plan.popular
                    ? "border-[#4A48FF] bg-white"
                    : "border-gray-200 bg-white/90"
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm rounded-full bg-[#4A48FF] text-white shadow-md">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="text-gray-600 mt-2">{plan.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2">/ {plan.duration}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-[#4A48FF] font-bold">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-xl font-medium transition ${
                  plan.popular
                    ? "bg-[#4A48FF] text-white hover:bg-[#3a38d8]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
