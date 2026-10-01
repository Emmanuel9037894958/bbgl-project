"use client";

import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [loading, setLoading] = useState(true);
  const [closing, setClosing] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress dynamically over 4.5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random incremental feel
        const diff = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    // Fade out sequence
    const timer = setTimeout(() => {
      setClosing(true);

      const closeTimer = setTimeout(() => {
        setLoading(false);
      }, 700); // Slight extra padding for smooth transition

      return () => clearTimeout(closeTimer);
    }, 4800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between overflow-hidden bg-[#040d1a] p-8 text-slate-100 transition-all duration-700 ease-in-out ${
        closing ? "scale-105 opacity-0 pointer-events-none" : "scale-100 opacity-100"
      }`}
    >
      {/* Background radial gradient mask with grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #10b981 1px, transparent 1px), linear-gradient(to right, #0b3d6e 1px, transparent 1px), linear-gradient(to bottom, #0b3d6e 1px, transparent 1px)",
            backgroundSize: "40px 40px, 40px 40px, 40px 40px",
          }}
        />
      </div>

      {/* Dynamic ambient background glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[130px] animate-pulse" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[90px]" />

      {/* Top Bar Status */}
      <div className="relative z-10 flex w-full max-w-7xl items-center justify-between text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>System Initializing</span>
        </div>
        <div>
          <span>{progress}%</span>
        </div>
      </div>

      {/* Center Core Loader */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Multilayered Animated Ring Core */}
        <div className="relative flex h-36 w-36 items-center justify-center">
          {/* Outer Pulsing Aura */}
          <div className="absolute inset-0 rounded-full bg-emerald-500/5 blur-md animate-pulse" />

          {/* Outer Track Ring */}
          <div className="absolute inset-0 rounded-full border border-slate-800" />
          <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-emerald-400 [animation-duration:2.5s]" />

          {/* Middle Counter-rotating Ring */}
          <div className="absolute inset-4 rounded-full border border-slate-800/80" />
          <div className="absolute inset-4 animate-loader-reverse rounded-full border-b-2 border-cyan-500 [animation-duration:3.5s]" />

          {/* Inner Fast Ring */}
          <div className="absolute inset-8 animate-spin rounded-full border border-emerald-500/20 border-l-2 border-l-emerald-300 [animation-duration:1.2s]" />

          {/* Glowing Center Core */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#071b2f] border border-emerald-500/30 shadow-[0_0_35px_rgba(16,185,129,0.35)]">
            <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,1)]" />
          </div>

          {/* Orbiting Satellite Glow */}
          <div className="absolute inset-0 animate-spin [animation-duration:4s]">
            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.9)]" />
          </div>
        </div>

        {/* Branding Title */}
        <div className="mt-10">
          <h1 className="text-3xl font-black tracking-[0.35em] text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
            BBGL
          </h1>

          <div className="relative mx-auto mt-4 h-0.5 w-16 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-emerald-400 transition-all duration-300 ease-out shadow-[0_0_8px_#34d399]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400/90 sm:text-[11px]">
            One Vision. Many Enterprises.
          </p>
        </div>

        {/* Dynamic Tagline */}
        <p className="mt-6 max-w-[300px] text-xs leading-6 text-slate-400">
          Building businesses, creating opportunities, and shaping a future of
          sustainable growth.
        </p>
      </div>

      {/* Footer Branding Metadata */}
      <div className="relative z-10 flex w-full max-w-7xl items-center justify-between text-[9px] font-bold uppercase tracking-[0.25em] text-slate-500">
        <p className="hidden sm:block">Baki Business Group Limited</p>
        <p className="hidden sm:block">Nigeria</p>
      </div>
    </div>
  );
}