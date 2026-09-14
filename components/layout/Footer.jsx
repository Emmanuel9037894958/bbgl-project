"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ChevronUp,
  Send,
  ShieldCheck,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

import { useState } from "react";

const companyLinks = [
  { label: "About BBGL", href: "/about" },
  { label: "Our Businesses", href: "/businesses" },
  { label: "Leadership", href: "/leadership" },
  { label: "News & Updates", href: "/news" },
  { label: "Careers", href: "/careers" },
];

const businessLinks = [
  {
    label: "Don Baki Oil & Gas",
    href: "/businesses/don-baki-oil-gas",
  },
  {
    label: "TLV Pharmaceuticals",
    href: "/businesses/tlv-pharmaceuticals",
  },
  {
    label: "Top Talk Technology",
    href: "/businesses/top-talk-technology",
  },
  {
    label: "Don Baki Autos",
    href: "/businesses/don-baki-autos",
  },
  {
    label: "Baki Beer",
    href: "/businesses/baki-beer",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Investor Relations", href: "/investor-relations" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
    label: "LinkedIn",
    color: "text-[#0A66C2]",
    hover:
      "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white hover:shadow-[0_0_18px_rgba(10,102,194,0.35)]",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com",
    label: "X (Twitter)",
    color: "text-white",
    hover:
      "hover:bg-white hover:border-white hover:text-[#040e1a] hover:shadow-[0_0_18px_rgba(255,255,255,0.25)]",
  },
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
    color: "text-[#1877F2]",
    hover:
      "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white hover:shadow-[0_0_18px_rgba(24,119,242,0.35)]",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
    color: "text-[#E4405F]",
    hover:
      "hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white hover:shadow-[0_0_18px_rgba(228,64,95,0.35)]",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email) {
      setSubscribed(true);
      setEmail("");

      setTimeout(() => {
        setSubscribed(false);
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040e1a] text-slate-300">
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#c79a45]/10 blur-[120px]" />

        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#0b3d6e]/25 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* NEWSLETTER / CTA */}
        <div className="border-b border-white/10 py-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Stay Updated with BBGL Insights
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Subscribe to our newsletter for major corporate updates,
                strategic business expansions, and press releases.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form
                onSubmit={handleSubscribe}
                className="relative flex max-w-md gap-2 sm:max-w-lg"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email address..."
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 backdrop-blur-md outline-none transition duration-200 focus:border-[#c79a45] focus:ring-1 focus:ring-[#c79a45]"
                />

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#c79a45] px-5 py-3 text-sm font-semibold text-[#040e1a] transition-all duration-300 hover:bg-[#d9ab54] active:scale-[0.98]"
                >
                  <span>Subscribe</span>

                  <Send size={16} />
                </button>
              </form>

              {subscribed && (
                <p className="mt-2 text-xs text-emerald-400">
                  Thank you! You have successfully subscribed to group
                  updates.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* MAIN FOOTER NAVIGATION */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* BRAND INFO */}
          <div className="flex flex-col justify-between sm:col-span-2 lg:col-span-4">
            <div>
              <Link
                href="/"
                className="inline-flex transition-opacity duration-200 hover:opacity-90"
              >
                <Image
                  src="/logo3.png"
                  alt="Baki Business Group Limited"
                  width={190}
                  height={55}
                  className="h-auto max-h-[50px] w-auto max-w-[175px] rounded-full object-contain mb-5"
                />
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
                Baki Business Group Limited is a diversified enterprise group
                driving sustainable growth, innovation, and strategic
                investments across key industries.
              </p>
            </div>

            {/* CORPORATE PHILOSOPHY */}
            <div className="mt-8 border-l-2 border-[#c79a45] pl-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c79a45]">
                Group Philosophy
              </p>

              <p className="mt-1 text-xs font-medium leading-5 text-slate-200">
                One Vision. Many Enterprises. One Excellent Standard.
              </p>
            </div>
          </div>

          {/* COMPANY LINKS */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Company
            </h4>

            <ul className="mt-6 space-y-3 text-sm">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-400 transition-colors duration-200 hover:text-[#c79a45]"
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BUSINESS UNITS */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Our Businesses
            </h4>

            <ul className="mt-6 space-y-3 text-sm">
              {businessLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-400 transition-colors duration-200 hover:text-[#c79a45]"
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT DETAILS */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Headquarters
            </h4>

            <div className="mt-6 space-y-4 text-sm text-slate-400">
              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#c79a45]"
                />

                <p className="leading-relaxed">
                  E9 Century Mall, Gudu FCT
                  <br />
                  Abuja, Nigeria
                </p>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-[#c79a45]"
                />

                <a
                  href="mailto:bbglheadquarters@gmail.com"
                  className="break-all transition-colors duration-200 hover:text-white"
                >
                  bbglheadquarters@gmail.com
                </a>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-[#c79a45]"
                />

                <a
                  href="tel:+2349113030331"
                  className="transition-colors duration-200 hover:text-white"
                >
                  +234 911 303 0331
                </a>
              </div>
            </div>

            {/* CORPORATE ENQUIRIES */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg border border-[#c79a45]/40 bg-[#c79a45]/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#d9b56a] backdrop-blur-sm transition-all duration-300 hover:border-[#c79a45] hover:bg-[#c79a45] hover:text-[#040e1a]"
              >
                <span>Corporate Enquiries</span>

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* CORPORATE COMPLIANCE NOTE */}
        <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs text-slate-400 sm:flex-row sm:items-center">
          <div className="flex items-start gap-2 sm:items-center">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#c79a45] sm:mt-0" />

            <span>
              Baki Business Group Limited is a fully registered conglomerate
              adhering to global governance and corporate standards.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-[#c79a45] hover:bg-[#c79a45] hover:text-[#040e1a]"
          >
            <ChevronUp
              size={16}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-8 border-t border-white/10 bg-[#020810]">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-400 sm:px-6 md:flex-row lg:px-8">
          {/* COPYRIGHT */}
          <p className="order-3 text-center md:order-1 md:text-left">
            © {new Date().getFullYear()} Baki Business Group Limited. All
            rights reserved.
          </p>

          {/* SOCIAL LINKS */}
          <div className="order-1 flex items-center gap-2 md:order-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 ${social.color} ${social.hover}`}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

          {/* LEGAL LINKS */}
          <div className="order-2 flex flex-wrap justify-center gap-4 md:order-3 md:gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}