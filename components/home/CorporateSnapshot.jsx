"use client";

import { useEffect, useState } from "react";

const focusAreas = [
  "Don Baki Autos",
  "TLV Pharmaceuticals",
  "Baki Oil & Gas",
  "BBGL Beverage Company",
  "Automotive Batteries",
  "Healthcare Distribution",
];

export default function CorporateSnapshot() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % focusAreas.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#071b2f] py-2 sm:py-24 lg:py-28">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* LEFT */}
          <div>

            <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              One Group.
              <span className="block text-emerald-400">
                Multiple Business Frontiers.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Baki Business Group Limited is developing a diversified business
              portfolio across strategic sectors, with a focus on building
              businesses for long-term value and sustainable growth.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="border-y border-white/10 py-8 sm:py-10">

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                Our Business Portfolio
              </p>

              <div className="mt-5 min-h-[80px] overflow-hidden">
                <p
                  key={focusAreas[active]}
                  className="animate-pulse text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
                >
                  {focusAreas[active]}
                </p>
              </div>

              {/* Portfolio indicators */}
              <div className="mt-7 flex gap-2">
                {focusAreas.map((area, index) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show ${area}`}
                    className="group h-8 flex-1"
                  >
                    <span
                      className={`block h-[2px] w-full transition-all duration-500 ${
                        index === active
                          ? "bg-emerald-400"
                          : "bg-white/10 group-hover:bg-white/30"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Bottom information */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Nigeria
                </span>

                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  Expanding Outlook
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CORPORATE FOCUS */}
        <div className="mt-14 border-t border-white/10 pt-7 sm:mt-16">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
            <span>Business Development</span>

            <span className="text-emerald-500">•</span>

            <span>Strategic Growth</span>

            <span className="text-emerald-500">•</span>

            <span>Commercial Opportunities</span>

            <span className="text-emerald-500">•</span>

            <span>Long-Term Value</span>
          </div>
        </div>
      </div>
    </section>
  );
}