"use client";

import { useEffect, useState } from "react";
const capabilities = [
  {
    title: "Strategic Direction",
    text: "We identify opportunities, define clear priorities and build businesses around sectors with long-term commercial potential.",
  },
  {
    title: "Business Operations",
    text: "Our approach combines disciplined management, practical execution and a focus on building businesses that can grow sustainably.",
  },
  {
    title: "Market Connection",
    text: "We develop businesses that connect products, services and opportunities with customers and markets across our areas of interest.",
  },
  {
    title: "Sustainable Growth",
    text: "We focus on strengthening our businesses, developing new opportunities and creating lasting value for the future.",
  },
];

export default function CorporateCapabilities() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[110px]" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-[35%] opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #0b3d6e 1px, transparent 1px), linear-gradient(#0b3d6e 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            {/* <span className="h-px w-10 bg-emerald-600" /> */}

            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700 sm:text-xs">
              How We Build Value
            </p>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#071b2f] sm:text-4xl lg:text-5xl">
            Building Businesses
            <span className="block text-emerald-600">
              With Purpose and Direction.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            BBGL brings together strategic thinking, business execution and
            market opportunities to develop a growing portfolio of enterprises
            across multiple sectors.
          </p>
        </div>

        {/* Capabilities */}
        <div className="mt-14 border-y border-slate-200 lg:mt-20">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className={`group grid gap-6 py-8 sm:py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10 ${
                index !== capabilities.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              {/* Title */}
              <div>
                <h3 className="text-xl font-black tracking-tight text-[#071b2f] transition-colors duration-300 group-hover:text-emerald-700 sm:text-2xl">
                  {capability.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:border-l lg:border-slate-200 lg:pl-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {capability.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-6 border-b border-slate-200 pb-10 sm:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Our Approach
            </p>

            <p className="mt-3 max-w-2xl text-lg font-bold leading-7 text-[#071b2f] sm:text-xl">
              One vision, disciplined execution and a long-term approach to
              building businesses.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Long-Term Outlook
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}