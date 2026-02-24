"use client";
import React from "react";
import assets, { company_logos } from "@/public/assets.js";
import Image from "next/image";

const services = [
  {
    title: "Advertising",
    description:
      "Performance-driven campaigns engineered to scale revenue across modern digital platforms.",
    icon: assets.ads_icon,
  },
  {
    title: "Content Marketing",
    description:
      "Strategic storytelling systems that attract, nurture, and convert high-value audiences.",
    icon: assets.marketing_icon,
  },
  {
    title: "Brand Strategy",
    description:
      "Positioning and messaging frameworks that make your brand unforgettable.",
    icon: assets.content_icon,
  },
  {
    title: "Web Experience",
    description:
      "Conversion-focused websites designed with clarity, speed, and elegance.",
    icon: assets.social_icon,
  },
];

export default function HowCanWeHelp() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* Soft radial light */}
      <div className="absolute inset-0 -z-10 bg-[radial-linear(circle_at_top,rgba(99,102,241,0.08),transparent_65%)]" />

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">
          How can we <span className="text-[#4A48FF] italic underline ">help?</span>
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          We create refined digital systems that feel effortless and drive meaningful growth.
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-24 opacity-70">
          {company_logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="company logo"
              height={28}
              className="h-7 w-auto  transition duration-300"
            />
          ))}
        </div>

        {/* Horizontal Auto Scroller */}
        <div className="relative w-full overflow-hidden">

          {/* Edge Fade Effect */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-white to-transparent z-10" />

          <div className="flex gap-10 animate-scroll w-max hover:[animation-play-state:paused]">

            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="min-w-[520px] backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_15px_60px_rgba(0,0,0,0.12)]"
              >
                <div className="flex items-start gap-6 text-left">

                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      className="h-8 w-8"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}