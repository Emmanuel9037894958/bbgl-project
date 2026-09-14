"use client";

import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [loading, setLoading] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);

      const closeTimer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(closeTimer);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#f8fafc] transition-opacity duration-500 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#0b3d6e 1px, transparent 1px), linear-gradient(90deg, #0b3d6e 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Soft green glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/5 blur-[100px]" />

      <div className="relative flex flex-col items-center text-center">
        {/* Advanced rotating loader */}
        <div className="relative flex h-28 w-28 items-center justify-center">
          
          {/* Outer ring */}
          <div className="absolute inset-0 animate-spin rounded-full border border-slate-200 border-t-emerald-500" />

          {/* Second ring */}
          <div className="absolute inset-3 animate-loader-reverse rounded-full border border-slate-200 border-b-[#0b3d6e]" />

          {/* Inner ring */}
          <div className="absolute inset-7 animate-spin rounded-full border border-emerald-500/10 border-l-emerald-400 [animation-duration:1.8s]" />

          {/* Center */}
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#071b2f] shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
          </div>

          {/* Orbiting green light */}
          <span className="absolute h-2 w-2 animate-loader-orbit rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.9)]" />
        </div>

        {/* BBGL branding */}
        <div className="mt-8">
          <h1 className="text-2xl font-black tracking-[0.28em] text-[#071b2f]">
            BBGL
          </h1>

          <div className="mx-auto mt-3 h-px w-10 bg-emerald-500" />

          <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.24em] text-slate-400 sm:text-[10px]">
            One Vision. Many Enterprises.
          </p>
        </div>

        {/* Short write-up */}
        <p className="mt-7 max-w-[280px] text-xs leading-6 text-slate-500">
          Building businesses, creating opportunities and shaping a future of
          sustainable growth.
        </p>
      </div>

      {/* Bottom branding */}
      <div className="absolute bottom-6 left-6 hidden sm:block">
        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-300">
          Baki Business Group Limited
        </p>
      </div>

      <div className="absolute bottom-6 right-6 hidden sm:block">
        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-300">
          Nigeria
        </p>
      </div>
    </div>
  );
}