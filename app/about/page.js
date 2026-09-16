import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  Layers,
  Building2,
  Globe2,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white selection:bg-[#c79a45] selection:text-white">
      {/* =========================================================
          HERO SECTION (With Background Image & Overlay)
      ========================================================= */}
      <section className="relative min-h-[75vh] overflow-hidden bg-[#071a2d] text-white">
        {/* 1. BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/beer2.jpg" // Replace with your image path (e.g., /images/hero-bg.jpg)
            alt="BBGL Corporate Background"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-overlay"
          />
        </div>

        {/* 2. GRADIENT OVERLAY (Ensures high contrast & text readability) */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#071a2d] via-[#071a2d]/40 to-[#071a2d]/30" />

        {/* Visual Blur Artifacts */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#c79a45]/15 to-transparent blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#0b3d6e]/40 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        {/* HERO CONTENT */}
        <div className="bbgl-container relative z-10 flex min-h-[75vh] flex-col justify-end pb-16 pt-16 sm:pt-20 md:pt-24 lg:pb-24">
          <div className="max-w-4xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#c79a45]/30 bg-[#c79a45]/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#d9b56a] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b56a]">
                About BBGL
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl lg:leading-[1.05]">
              Building businesses.{" "}
              <span className="bg-gradient-to-r from-[#d9b56a] via-[#f3e1b6] to-[#c79a45] bg-clip-text text-transparent">
                Creating value.
              </span>
            </h1>

            <p className=" max-w-2xl text-base font-light leading-relaxed text-slate-300 md:text-lg py-4">
              Baki Business Group Limited is a premier enterprise group
              developing high growth portfolio companies across oil & gas,
              automotive supply chains, pharmaceuticals, and technology sectors.
            </p>

            {/* CTA Group */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="#who-we-are"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-gradient-to-r from-[#c79a45] to-[#9a732d] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#c79a45]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#c79a45]/30 hover:-translate-y-0.5"
              >
                <span>Discover BBGL</span>
                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </Link>

              <Link
                href="/businesses"
                className="group inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight
                  size={16}
                  className="text-slate-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEW FEATURE: KEY GROUP STATS / METRICS BAR
      ========================================================= */}
      <section className="relative z-20 -mt-10 border-b border-slate-200 bg-white shadow-lg">
        <div className="bbgl-container py-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="border-l-2 border-[#c79a45] pl-5">
              <span className="block text-3xl font-extrabold text-[#071a2d]">
                4+
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Core Sectors
              </span>
            </div>
            <div className="border-l-2 border-[#c79a45] pl-5">
              <span className="block text-3xl font-extrabold text-[#071a2d]">
                100%
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Operational Integrity
              </span>
            </div>
            <div className="border-l-2 border-[#c79a45] pl-5">
              <span className="block text-3xl font-extrabold text-[#071a2d]">
                National
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Distribution Reach
              </span>
            </div>
            <div className="border-l-2 border-[#c79a45] pl-5">
              <span className="block text-3xl font-extrabold text-[#071a2d]">
                Multi-Sector
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Growth Portfolio
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section id="who-we-are" className="relative bg-white py-20 md:py-28">
        <div className="bbgl-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-4">
                <div className="flex items-center gap-3">
                  {/* <span className="h-0.5 w-8 bg-[#c79a45]" /> */}
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9a732d]">
                    Who We Are
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#071a2d]">
                  Disciplined operations. Strategic capital.
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  Focused on sustainable execution across high-barrier markets.
                </p>
              </div>
            </div>

            <div className="space-y-8 lg:col-span-8">
              <h2 className="text-3xl font-extrabold leading-snug tracking-tight text-[#071a2d] sm:text-4xl md:text-5xl">
                A conglomerate built around long-term enterprise development and
                economic impact.
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-slate-600 md:text-lg">
                <p>
                  Baki Business Group Limited (BBGL) operates as a central
                  engine for enterprise development. We combine sector expertise
                  with institutional governance to scale footprint companies
                  across vital market sectors.
                </p>
                <p>
                  By deploying strategic resource management and operating
                  discipline, our portfolio companies deliver sustainable growth
                  in energy, retail automotive components, healthcare
                  distribution, and technology systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP (GREEN BACKGROUND FOR CEO MESSAGE)
      ========================================================= */}
      <section className="bg-slate-50 py-2 md:py-28">
        <div className="bbgl-container">
          <div className="mb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9a732d]">
                Executive Governance
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#071a2d] sm:text-4xl">
              Group Leadership
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 lg:grid lg:grid-cols-12">
            {/* CEO Image */}
            <div className="relative min-h-[420px] bg-[#071a2d] lg:col-span-5 lg:min-h-full">
              <Image
                src="/ceo2.jpg"
                alt="Ibaki Obidike Jerry - Founder & President of BBGL"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d]/80 via-transparent to-transparent lg:hidden" />
            </div>

            {/* CEO Content */}
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-7 lg:p-16">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c79a45]">
                  Founder & President
                </span>
                <h3 className="mt-2 text-3xl font-extrabold text-[#071a2d] sm:text-4xl">
                  Ibaki Obidike Jerry
                </h3>

                <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
                  Guiding the vision and capital allocation strategy for BBGL.
                  Under his leadership, the Group has expanded its operational
                  footprint while establishing strategic positions across
                  critical growth industries.
                </p>
              </div>

              {/* CEO MESSAGE WITH EMERALD GREEN BACKGROUND */}
              <div className="mt-8 rounded-xl border border-emerald-600/20 bg-emerald-900/95 p-6 shadow-md text-white">
                <p className="mt-2 italic text-emerald-50 text-sm md:text-base leading-relaxed">
                  “Our goal is to build self-sustaining enterprises that drive
                  industrial value, deliver superior quality, and create lasting
                  economic impact across markets.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP (NATIONAL SALES DIRECTOR)
      ========================================================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="bbgl-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c79a45]">
                Commercial Operations
              </span>
              <h3 className="mt-2 text-3xl font-extrabold text-[#071a2d] sm:text-4xl">
                Otuh Kenneth Okechukwu
              </h3>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                National Sales Director
              </p>

              <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
                Overseeing national commercial strategy, market access, and
                retail enterprise expansion. Directs sales performance and
                distribution logistics across all commercial subsidiaries.
              </p>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                <Image
                  src="/national.jpg"
                  alt="Otuh Kenneth Okechukwu - National Sales Director of BBGL"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEW FEATURE: CORE OPERATING VALUES
      ========================================================= */}
      <section className="border-t border-slate-200 bg-slate-50 py-4 md:py-28">
        <div className="bbgl-container">
          <div className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9a732d]">
                Institutional Strengths
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#071a2d] sm:text-4xl">
              Our Core Operating Framework
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <ShieldCheck className="h-10 w-10 text-[#c79a45]" />
              <h3 className="mt-5 text-xl font-bold text-[#071a2d]">
                Strict Governance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Maintaining corporate governance and risk assessment guidelines
                across all operating units.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <TrendingUp className="h-10 w-10 text-[#c79a45]" />
              <h3 className="mt-5 text-xl font-bold text-[#071a2d]">
                Capital Discipline
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Deploying strategic growth capital to ensure sustainable,
                high-yield expansion.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <Layers className="h-10 w-10 text-[#c79a45]" />
              <h3 className="mt-5 text-xl font-bold text-[#071a2d]">
                Synergistic Assets
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Unlocking shared enterprise value across automotive, energy, and
                tech verticals.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <Globe2 className="h-10 w-10 text-[#c79a45]" />
              <h3 className="mt-5 text-xl font-bold text-[#071a2d]">
                Market Execution
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Establishing direct distribution channels and high-performance
                commercial networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BUSINESS FOCUS
      ========================================================= */}
      <section className="bg-slate-900 py-20 text-white md:py-28">
        <div className="bbgl-container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b56a]">
              Sector Engagement
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Diversified Portfolio, Unified Excellence.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-[#c79a45]/50 hover:bg-white/10">
              <h3 className="mt-4 text-xl font-bold">Oil & Gas</h3>
              <p className="mt-2 text-sm text-slate-400">
                Energy distribution and infrastructure commercial operations.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-[#c79a45]/50 hover:bg-white/10">
              <h3 className="mt-4 text-xl font-bold">Automotive</h3>
              <p className="mt-2 text-sm text-slate-400">
                Motor battery systems and supply chain assets via Don Baki
                Autos.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-[#c79a45]/50 hover:bg-white/10">
              <h3 className="mt-4 text-xl font-bold">Pharmaceuticals</h3>
              <p className="mt-2 text-sm text-slate-400">
                Supply chain logistics for essential health and medical
                products.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-[#c79a45]/50 hover:bg-white/10">
              <h3 className="mt-4 text-xl font-bold">Technology</h3>
              <p className="mt-2 text-sm text-slate-400">
                Strategic investments in digital infrastructure and scalable
                platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CALL TO ACTION
      ========================================================= */}
      <section className="bg-white py-2 md:py-28">
        <div className="bbgl-container">
          <div className="rounded-3xl bg-gradient-to-r from-[#071a2d] to-[#0b3d6e] p-10 text-white shadow-2xl md:p-16">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9b56a]">
                  Partner With Us
                </span>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  Ready to build value together?
                </h2>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#c79a45] to-[#9a732d] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-[#c79a45]/20 hover:-translate-y-0.5 animate-pulse"
              >
                <span>Contact BBGL Team</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
