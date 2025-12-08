"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for startups and small teams",
    oneTime: "₹25,000",
    monthly: "₹4,000",
    durationOneTime: "one time",
    durationMonthly: "per month",
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
    description: "For growing businesses & SaaS products",
    oneTime: "₹75,000",
    monthly: "₹12,000",
    durationOneTime: "one time",
    durationMonthly: "per month",
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
    description: "Tailored solutions for enterprises",
    oneTime: "Custom",
    monthly: "Custom",
    durationOneTime: "project based",
    durationMonthly: "subscription",
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
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section className="py-24 relative">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-[#f5f7ff] to-white" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl text-[#364153]">
            Simple & Transparent{" "}
            <span className="text-[#4A48FF]">Pricing</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
            Choose a plan that fits your business needs. No hidden costs.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <div className="flex justify-center mt-10">
          <div className="bg-gray-200 rounded-full p-1 flex items-center">
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                !isMonthly ? "bg-white shadow text-[#4A48FF]" : "text-gray-600"
              }`}
            >
              One-time
            </button>
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                isMonthly ? "bg-white shadow text-[#4A48FF]" : "text-gray-600"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {pricingPlans.map((plan, index) => {
            const price = isMonthly ? plan.monthly : plan.oneTime;
            const duration = isMonthly ? plan.durationMonthly : plan.durationOneTime;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 border shadow-xl transition-all text-[#364153] bg-white ${
                  plan.popular ? "border-[#4A48FF]" : "border-gray-200"
                }`}
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
                  <span className="text-4xl font-bold">{price}</span>
                  <span className="text-gray-500 ml-2">/ {duration}</span>
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
                      ? "bg-[#4A48FF] text-white hover:bg-[#3937da]"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
