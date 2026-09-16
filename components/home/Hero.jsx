"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-117px)] overflow-hidden bg-[#071a2d] py-6">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/logo3.jpg"
          alt="Baki Business Group Limited"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#020b12]/4" />

        {/* LEFT GRADIENT FOR TEXT READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b14]/90 via-[#071a2d]/65 to-[#071a2d]/25" />

        {/* BOTTOM GRADIENT */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020b14]/70 to-transparent" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid min-h-[calc(100svh-117px)] items-center py-12 sm:py-16 lg:py-20">
          {/* LEFT CONTENT */}
          <div className="max-w-[720px]">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300 sm:mb-5 sm:text-xs">
              Baki Business Group Limited
            </p>

            <h1 className="text-[2.6rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              One Vision.
              <br />
              <span className="text-emerald-400">Many Enterprises.</span>
            </h1>

            <p className="mt-5 max-w-[620px] text-sm leading-7 text-slate-200 sm:mt-6 sm:text-base sm:leading-8">
              Baki Business Group Limited is a growing Nigerian business group
              with interests across multiple sectors, building businesses with a
              long-term vision and one excellent standard.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex w-full flex-row gap-2.5 sm:mt-8 sm:w-auto sm:gap-3">
              <Link
                href="/businesses"
                className="inline-flex min-h-[49px] flex-1 items-center justify-center gap-1.5 rounded-md bg-emerald-600 px-3 text-[11px] font-bold text-white shadow-lg shadow-emerald-900/30 transition-all duration-200 hover:bg-emerald-500 sm:min-h-[54px] sm:flex-none sm:px-7 sm:text-sm"
              >
                <span>Explore Businesses</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-[49px] flex-1 items-center justify-center rounded-md border border-white bg-white/10 px-3 text-[11px] font-bold !text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:!text-white sm:min-h-[54px] sm:flex-none sm:px-7 sm:text-sm"
              >
                About BBGL
              </Link>
            </div>

            {/* BUSINESS INDICATOR */}
            <div className="mt-8 flex items-center gap-3 sm:mt-10">
              {/* <span className="h-px w-10 bg-emerald-400" /> */}

              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-300 sm:text-[10px]">
                Building Across Sectors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BBGL STATUS */}
      <div className="absolute bottom-6 right-4 z-10 hidden items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 backdrop-blur-md sm:flex">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>

        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/80">
          BBGL
        </span>
      </div>
    </section>
  );
}
