import React from "react";
import assets, { company_logos } from "@/public/assets.js";
import Image from "next/image";

export default function HowCanWeHelp() {
  return (
    <section className="w-full py-24 bg-white text-center relative overflow-hidden">

      {/* Background gradient + noise */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-purple-50 to-white opacity-90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Trusted Logos */}
        <p className="text-gray-500 mb-6 text-sm">Trusted by Leading Companies</p>

        <div className="flex flex-wrap justify-center items-center gap-10 mb-20">
          {company_logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="company logo"
              height={24}
              className="h-6 w-auto"
            />
          ))}
        </div>

        {/* Title */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          How can we help?
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto mb-16">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Advertising */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex gap-6 items-start border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center shadow-inner">
              <Image src={assets.ads_icon} alt="Ads Icon" className="h-8 w-8" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2 text-[#364153]">Advertising</h3>
              <p className="text-gray-500 text-sm">
                We turn bold ideas into powerful digital solutions that connect,
                engage...
              </p>
            </div>
          </div>

          {/* Content Marketing */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex gap-6 items-start border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center shadow-inner">
              <Image src={assets.marketing_icon} alt="Marketing Icon" className="h-8 w-8" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2 text-[#364153]">Content marketing</h3>
              <p className="text-gray-500 text-sm">
                We help you execute your plan and deliver results.
              </p>
            </div>
          </div>

          {/* Content Writing */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex gap-6 items-start border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center shadow-inner">
              <Image src={assets.content_icon} alt="Content Icon" className="h-8 w-8" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2 text-[#364153]">Content writing</h3>
              <p className="text-gray-500 text-sm">
                We help you create a marketing strategy that drives results.
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex gap-6 items-start border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center shadow-inner">
              <Image src={assets.social_icon} alt="Social Icon" className="h-8 w-8" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2 text-[#364153]  ">Social media</h3>
              <p className="text-gray-500 text-sm">
                We help you build a strong social media presence and engage with
                your audience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
