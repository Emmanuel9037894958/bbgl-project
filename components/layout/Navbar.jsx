"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Businesses", href: "/businesses" },
  { name: "Leadership", href: "/leadership" },
  { name: "News & Insights", href: "/news" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
];

const liveServices = [
  "Baki Business Group Limited",
  "One Vision. Many Enterprises. One Excellent Standard.",
  "Oil & Gas",
  "Pharmaceuticals",
  "Technology",
  "Automotive",
  "Consumer Businesses",
  "Don Baki Oil & Gas",
  "TLV Pharmaceuticals",
  "Top Talk Technology",
  "Don Baki Autos",
  "Baki Beer",
  "Growing Across Multiple Sectors",
  "Building Businesses. Creating Possibilities.",
  "A Nigerian Business Group",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent page scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky left-0 right-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      {/* MAIN NAVBAR */}
      <nav className="mx-auto flex h-[62px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Baki Business Group Limited"
          className="relative flex h-[50px] w-[140px] shrink-0 items-center transition-opacity hover:opacity-90 sm:h-[54px] sm:w-[155px]"
        >
          <Image
            src="/logo3.png"
            alt="Baki Business Group Limited"
            fill
            priority
            sizes="320px"
            className="object-contain object-left"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 xl:flex 2xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative rounded-lg px-3 py-2.5 text-xs font-semibold text-slate-600 transition-all duration-200 hover:bg-emerald-50/70 hover:text-emerald-700 2xl:px-3.5 2xl:text-sm"
            >
              {link.name}

              <span className="absolute bottom-1 left-3 right-3 h-0.5 scale-x-0 rounded-full bg-emerald-600 transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* DESKTOP CONTACT */}
        <div className="hidden items-center xl:flex">
          <Link
            href="/contact"
            className="rounded-lg bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/15 transition-all duration-200 hover:bg-emerald-700 hover:shadow-lg active:scale-95 2xl:text-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50/70 text-slate-700 transition-all duration-200 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 xl:hidden"
        >
          <div className="relative flex h-5 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* BBGL TICKER */}
      <div className="relative overflow-hidden border-t border-slate-100 bg-slate-50">
        {/* LIVE INDICATOR */}
        <div className="absolute left-0 top-0 z-20 flex h-9 items-center gap-2 bg-slate-50 px-3 shadow-[8px_0_15px_rgba(248,250,252,0.95)] sm:px-5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>

          <span className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-700 sm:text-[10px]">
            BBGL
          </span>
        </div>

        {/* MOVING TICKER */}
        <div className="flex h-9 overflow-hidden">
          <div className="flex min-w-max animate-bbgl-marquee items-center pl-20 sm:pl-24">
            {[...liveServices, ...liveServices].map((service, index) => (
              <div
                key={`${service}-${index}`}
                className="flex items-center"
              >
                <span
                  className={`whitespace-nowrap text-[10px] font-bold sm:text-xs ${
                    index % 4 === 0
                      ? "text-emerald-700"
                      : index % 4 === 1
                        ? "text-[#0b3d6e]"
                        : index % 4 === 2
                          ? "text-slate-600"
                          : "text-blue-700"
                  }`}
                >
                  {service}
                </span>

                <span className="mx-4 text-emerald-600 sm:mx-5">
                  •
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* MOBILE LEFT-SIDE DRAWER */}
      {/* ===================================================== */}

      <div
        className={`fixed inset-0 z-[100] xl:hidden ${
          menuOpen
            ? "visible pointer-events-auto"
            : "invisible pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/35 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <aside
          className={`absolute left-0 top-0 flex h-dvh w-[82%] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* DRAWER HEADER */}
          <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-slate-200 px-5 ">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="relative h-[48px] w-[140px]"
            >
              <Image
                src="/logo.jpg"
                alt="Baki Business Group Limited"
                fill
                sizes="140px"
                className="object-contain object-left"
              />
            </Link>

            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-2xl leading-none text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
            >
              ×
            </button>
          </div>

          {/* DRAWER CONTENT */}
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-6">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600">
              BBGL Navigation
            </p>

            {/* LINKS */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-4 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <span>{link.name}</span>

                  <span className="text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-emerald-600">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* CONTACT */}
            <div className="mt-6 border-t border-slate-100 pt-6">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[50px] items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-[0.98]"
              >
                Contact BBGL
              </Link>
            </div>

            {/* BRANDING */}
            <div className="mt-auto border-t border-slate-100 pt-6 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Baki Business Group Limited
              </p>

              <p className="mt-2 text-[11px] leading-5 text-slate-400">
                One Vision. Many Enterprises. One Excellent Standard.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}