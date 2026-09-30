"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#EAF0F5]">
      {/* ================================
          HERO IMAGE
      ================================= */}
      <div className="relative w-full overflow-hidden bg-slate-100">
        <Image
          src="/bbgl.jpg"
          alt="Baki Business Group Limited and its subsidiaries"
          width={1920}
          height={1500}
          priority
          className="h-auto w-full object-cover object-center"
        />
      </div>

      {/* ================================
          COMPANY INTRODUCTION
      ================================= */}
      <section className="bg-[#EAF0F5]">
        <div className="mx-auto max-w-[1250px] px-5 py-8 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          {/* Section Heading */}
          <div className="max-w-[1100px]">
            <div className="flex items-center gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 sm:text-sm">
                About Baki Business Group Limited
              </p>
            </div>

            {/* Company Introduction */}
            <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-slate-700 sm:mt-10 sm:text-lg sm:leading-9">
              <p>
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
          <div className=" border-t border-slate-300 sm:mt-28">
            {/* Vision */}
            <div className="grid items-start border-b border-slate-300 py-5 sm:py-16 lg:grid-cols-[280px_1fr] lg:gap-16 lg:py-20">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                  OUR VISION
                </p>
              </div>

              <div className="mt-5 lg:mt-0">
                <p className="max-w-4xl border-l-2 border-emerald-600 pl-5 text-base leading-8 text-slate-700 sm:pl-7 sm:text-lg sm:leading-9">
                  To build enduring enterprises that define industries, create
                  meaningful value, and stand as a legacy for generations.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="grid items-start border-b border-slate-300 py-2 sm:py-16 lg:grid-cols-[280px_1fr] lg:gap-16 lg:py-20">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                  OUR MISION
                </p>
              </div>

              <div className="mt-5 lg:mt-0">
                <p className="max-w-4xl border-l-2 border-emerald-600 pl-5 text-base leading-8 text-slate-700 sm:pl-7 sm:text-lg sm:leading-9">
                  To build, operate, and grow high-performing businesses across
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