"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#0F382C] text-slate-100 ">
      {/* ================================
          HERO IMAGE
      ================================= */}
      <div className="relative w-full overflow-hidden bg-slate-900 shadow-xl">
        <Image
          src="/emma.jpg"
          alt="Baki Business Group Limited and its subsidiaries"
          width={1920}
          height={1500}
          priority
          className="h-auto w-full object-cover object-center brightness-[0.98]"
        />
      </div>

      {/* ================================
          COMPANY INTRODUCTION
      ================================= */}
      <section className="bg-[#0F382C]">
        <div className="mx-auto max-w-[1250px] px-5 py-6 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          {/* Section Heading */}
          <div className="max-w-[1100px]">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-400 sm:text-sm">
                About Baki Business Group Limited
              </p>
            </div>

            {/* Company Introduction */}
            <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-slate-200 sm:mt-10 sm:text-lg sm:leading-9">
              <p className="font-semibold text-white">
                BBGL is a diversified business group with interests spanning Oil
                & Gas, Pharmaceuticals, Automobiles, Technology and Consumer
                Products.
              </p>

              <p>
                The Group brings together businesses operating across sectors
                under a shared vision, strong leadership, and a commitment to
                building enduring enterprises with distinct identities and
                standards.
              </p>
            </div>
          </div>

          {/* ================================
              VISION & MISSION
          ================================= */}
          <div className="mt-8 border-t border-emerald-800/80 sm:mt-24">
            {/* Vision */}
            <div className="grid items-start border-b border-emerald-800/80 py-8 sm:py-14 lg:grid-cols-[280px_1fr] lg:gap-16 lg:py-16">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-400 sm:text-sm">
                  OUR VISION
                </p>
              </div>

              <div className="mt-4 lg:mt-0">
                <p className="max-w-4xl border-l-4 border-emerald-400 pl-5 text-base font-medium leading-8 text-slate-100 sm:pl-7 sm:text-xl sm:leading-9">
                  To build enduring enterprises that define industries, create
                  meaningful value, and stand as a legacy for generations.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="grid items-start border-b border-emerald-800/80 py-4 sm:py-14 lg:grid-cols-[280px_1fr] lg:gap-16 lg:py-16">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-400 sm:text-sm">
                  OUR MISSION
                </p>
              </div>

              <div className="mt-4 lg:mt-0">
                <p className="max-w-4xl border-l-4 border-emerald-400 pl-5 text-base font-medium leading-8 text-slate-100 sm:pl-7 sm:text-xl sm:leading-9">
                  To build, operate, and grow high performing businesses across
                  diverse industries, delivering trusted products and services,
                  creating sustainable value, and setting a standard of
                  excellence in every market we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}