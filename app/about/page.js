"use client";

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
  Users,
  BriefcaseBusiness,
  Handshake,
  PackageCheck,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white selection:text-white">

      {/* =========================================================
          HERO
      ========================================================= */}
     {/* =========================================================
    HERO
========================================================= */}
<section className="relative min-h-[80vh] overflow-hidden bg-[#071a2d]">

  <Image
    src="/beer2.jpg"
    alt="Baki Business Group Limited"
    fill
    priority
    className="object-cover object-center"
  />

  {/* Image overlay - keeps text readable without hiding the image */}
  <div className="absolute inset-0 bg-[#071a2d]/45" />

  {/* Slight left-side gradient for text readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#071a2d]/85 via-[#071a2d]/50 to-transparent" />

  {/* Bottom gradient */}
  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071a2d]/80 to-transparent" />

  {/* Decorative glow */}
  <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#c79a45]/10 blur-3xl" />
  <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

  {/* Content */}
  <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">

    <div className="max-w-4xl">

      <div className="mb-7 flex items-center gap-3">
        {/* <span className="h-px w-12 bg-[#c79a45]" /> */}

        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c79a45]">
          About BBGL
        </span>
      </div>

      <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Building businesses.
        <span className="block text-[#c79a45]">
          Creating value.
        </span>
      </h1>

      <p className="mt-7 max-w-3xl text-base leading-8 text-slate-100 sm:text-lg">
        Baki Business Group Limited is a premier enterprise group
        developing high growth portfolio companies across oil & gas,
        automotive supply chains, pharmaceuticals, and technology
        sectors.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <Link
          href="#who-we-are"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c79a45] px-7 py-4 text-sm font-bold text-[#071a2d] transition hover:bg-white"
        >
          Discover BBGL

          <ArrowDown
            size={17}
            className="transition-transform group-hover:translate-y-1"
          />
        </Link>

        <Link
          href="/businesses"
          className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:border-[#c79a45] hover:bg-[#c79a45] hover:text-[#071a2d]"
        >
          Explore Portfolio

          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>

      </div>

    </div>
  </div>

  <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

</section>

      {/* =========================================================
          METRICS
      ========================================================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-4 md:divide-y-0">
          {[
            ["4+", "Core Sectors"],
            ["100%", "Operational Integrity"],
            ["National", "Distribution Reach"],
            ["Multi-Sector", "Growth Portfolio"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="px-5 py-8 sm:px-8 md:py-10"
            >
              <div className="text-2xl font-bold text-[#071a2d] sm:text-3xl">
                {number}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section
        id="who-we-are"
        className="bg-white py-11 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

            <div>
              <div className="mb-5 flex items-center gap-3">
                {/* <span className="h-px w-10 bg-[#c79a45]" /> */}
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c79a45]">
                  Who We Are
                </span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Disciplined operations. Strategic capital.
              </p>

              <p className="mt-3 text-lg font-medium text-slate-600">
                Focused on sustainable execution across high-barrier markets.
              </p>

              <div className="mt-8 h-px w-full bg-slate-200" />

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <Building2 className="text-[#c79a45]" size={24} />
                  <p className="mt-4 text-sm font-bold text-[#071a2d]">
                    Enterprise Development
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <Layers className="text-emerald-700" size={24} />
                  <p className="mt-4 text-sm font-bold text-[#071a2d]">
                    Diversified Portfolio
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#071a2d] sm:text-4xl lg:text-5xl">
                A conglomerate built around long-term enterprise development
                and economic impact.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
                <p>
                  Baki Business Group Limited (BBGL) operates as a central
                  engine for enterprise development. We combine sector
                  expertise with institutional governance to scale footprint
                  companies across vital market sectors.
                </p>

                <p>
                  By deploying strategic resource management and operating
                  discipline, our portfolio companies deliver sustainable
                  growth in energy, retail automotive components, healthcare
                  distribution, and technology systems.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP
      ========================================================= */}
      <section className="bg-slate-50 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              {/* <span className="h-px w-10 bg-[#c79a45]" /> */}
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c79a45]">
                Executive Governance
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#071a2d] sm:text-4xl lg:text-5xl">
              Group Leadership
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">

            <div className="relative min-h-[480px] overflow-hidden">
              <Image
                src="/ceo2.jpg"
                alt="Ibaki Obidike Jerry"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d]/80 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#c79a45]">
                  Founder & President
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Ibaki Obidike Jerry
                </h3>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071a2d] text-[#c79a45]">
                <ShieldCheck size={24} />
              </div>

              <h3 className="text-2xl font-bold text-[#071a2d]">
                Guiding the vision and capital allocation strategy for BBGL.
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                Under his leadership, the Group has expanded its operational
                footprint while establishing strategic positions across
                critical growth industries.
              </p>

              <div className="mt-8 border-l-2 border-[#c79a45] pl-5">
                <p className="text-lg font-medium italic leading-8 text-[#071a2d]">
                  “Our goal is to build self-sustaining enterprises that drive
                  industrial value, deliver superior quality, and create
                  lasting economic impact across markets.”
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          NATIONAL SALES DIRECTOR
      ========================================================= */}
      <section className="bg-white py-11 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            <div className="order-2 lg:order-1">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#c79a45]" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c79a45]">
                  Commercial Operations
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#071a2d] sm:text-4xl">
                Otuh Kenneth Okechukwu
              </h2>

              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-emerald-700">
                National Sales Director
              </p>

              <p className="mt-7 text-base leading-8 text-slate-600">
                Overseeing national commercial strategy, market access, and
                retail enterprise expansion. Directs sales performance and
                distribution logistics across all commercial subsidiaries.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <TrendingUp size={22} className="text-[#c79a45]" />
                  <p className="mt-3 font-bold text-[#071a2d]">
                    Sales Strategy
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <Globe2 size={22} className="text-emerald-700" />
                  <p className="mt-3 font-bold text-[#071a2d]">
                    Market Access
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 relative min-h-[420px] overflow-hidden rounded-3xl lg:order-2">
              <Image
                src="/national.jpg"
                alt="Otuh Kenneth Okechukwu"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CORE OPERATING FRAMEWORK
      ========================================================= */}
      <section className="bg-[#071a2d] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c79a45]">
              How We Operate
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Core Operating Framework
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Strict Governance",
                text: "Maintaining corporate governance and risk assessment guidelines across all operating units.",
              },
              {
                icon: TrendingUp,
                title: "Capital Discipline",
                text: "Deploying strategic growth capital to ensure sustainable, high-yield expansion.",
              },
              {
                icon: Layers,
                title: "Synergistic Assets",
                text: "Unlocking shared enterprise value across automotive, energy, and tech verticals.",
              },
              {
                icon: Building2,
                title: "Market Execution",
                text: "Establishing direct distribution channels and high-performance commercial networks.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-[#c79a45]/50"
                >
                  <Icon size={28} className="text-[#c79a45]" />

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          BUSINESS FOCUS
      ========================================================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c79a45]">
              Sector Engagement
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2d] sm:text-4xl lg:text-5xl">
              Diversified Portfolio, Unified Excellence.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {[
              {
                number: "01",
                title: "Oil & Gas",
                text: "Energy distribution and infrastructure commercial operations.",
              },
              {
                number: "02",
                title: "Automotive",
                text: "Motor battery systems and supply chain assets via Don Baki Autos.",
              },
              {
                number: "03",
                title: "Pharmaceuticals",
                text: "Supply chain logistics for essential health and medical products.",
              },
              {
                number: "04",
                title: "Technology",
                text: "Strategic investments in digital infrastructure and scalable platforms.",
              },
            ].map((sector) => (
              <div
                key={sector.number}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-[#071a2d] sm:p-9"
              >
                <span className="text-sm font-bold text-[#c79a45]">
                  {sector.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-[#071a2d] transition group-hover:text-white">
                  {sector.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-slate-600 transition group-hover:text-slate-300">
                  {sector.text}
                </p>

                <div className="mt-7 h-px w-12 bg-[#c79a45] transition-all group-hover:w-20" />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          HOW BBGL SERVES PEOPLE
      ========================================================= */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#c79a45]" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c79a45]">
                  How BBGL Serves People
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#071a2d] sm:text-4xl">
                Building businesses that create practical value.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                BBGL serves people and businesses by developing enterprises
                that respond to real market needs. Through its diversified
                businesses, the Group connects customers, suppliers,
                distributors, professionals, and business partners with
                products, services, and commercial opportunities.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  icon: Users,
                  title: "People",
                  text: "Creating access to products, services, and opportunities across the markets where our businesses operate.",
                },
                {
                  icon: BriefcaseBusiness,
                  title: "Businesses",
                  text: "Supporting commercial activity through distribution, partnerships, enterprise development, and market participation.",
                },
                {
                  icon: PackageCheck,
                  title: "Products",
                  text: "Connecting markets with products across our different business areas and operating sectors.",
                },
                {
                  icon: Handshake,
                  title: "Partnerships",
                  text: "Building relationships that support sustainable business activity and long-term enterprise development.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071a2d] text-[#c79a45]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-[#071a2d]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          HOW BBGL SERVES — EXTENDED IMPACT
      ========================================================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c79a45]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c79a45]">
                Serving the Market
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#071a2d] sm:text-4xl lg:text-5xl">
              Businesses built around people, products, and opportunity.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              BBGL serves the market through a growing portfolio of businesses
              that operate in different sectors while sharing a common
              commitment to practical value, responsible operations, and
              sustainable enterprise development.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: BriefcaseBusiness,
                title: "Commercial Opportunities",
                text: "Creating platforms for business activity, partnerships, distribution, and enterprise development.",
              },
              {
                icon: PackageCheck,
                title: "Product Availability",
                text: "Supporting the movement of products from businesses and suppliers toward the markets and customers that need them.",
              },
              {
                icon: Handshake,
                title: "Stronger Business Networks",
                text: "Connecting different participants within the business ecosystem to encourage productive commercial relationships.",
              },
              {
                icon: Users,
                title: "People at the Center",
                text: "Keeping customers, partners, employees, suppliers, and communities connected to the value created by our businesses.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-[#c79a45]/50 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071a2d] text-[#c79a45] transition group-hover:bg-[#c79a45] group-hover:text-[#071a2d]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#071a2d]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          WHO BBGL SERVES
      ========================================================= */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c79a45]">
              Our Stakeholders
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2d] sm:text-4xl lg:text-5xl">
              Connecting different parts of the business ecosystem.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              BBGL operates within an ecosystem of people and organizations.
              Each business serves different market participants while
              contributing to the wider enterprise vision of the Group.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: Users,
                title: "Customers",
                text: "Individuals and organizations seeking products and services from BBGL businesses.",
              },
              {
                icon: Handshake,
                title: "Business Partners",
                text: "Organizations and individuals working with BBGL to develop commercial relationships and opportunities.",
              },
              {
                icon: Building2,
                title: "Suppliers & Distributors",
                text: "Businesses supporting the movement of products, services, resources, and commercial activity.",
              },
              {
                icon: BriefcaseBusiness,
                title: "Entrepreneurs & Enterprises",
                text: "Businesses and entrepreneurs participating in markets where BBGL operates and invests.",
              },
              {
                icon: TrendingUp,
                title: "Growing Markets",
                text: "Market segments where changing needs create opportunities for responsible enterprise development.",
              },
              {
                icon: Globe2,
                title: "Wider Economy",
                text: "The broader commercial environment within which BBGL develops businesses and creates economic value.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071a2d] text-[#c79a45]">
                      <Icon size={21} />
                    </div>

                    <h3 className="font-bold text-[#071a2d]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTOR-BASED SERVICE
      ========================================================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c79a45]">
              Across Our Businesses
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2d] sm:text-4xl lg:text-5xl">
              Serving different needs through a diversified portfolio.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our diversified portfolio allows BBGL to participate across
              different areas of the economy. Each business has its own role,
              market, and operational focus while contributing to the wider
              Group vision.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-[#071a2d] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#c79a45]">
                  01
                </span>
                <ArrowUpRight
                  size={22}
                  className="text-slate-400 transition group-hover:text-[#c79a45]"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#071a2d] group-hover:text-white">
                Oil & Gas
              </h3>

              <p className="mt-4 leading-7 text-slate-600 group-hover:text-slate-300">
                Energy distribution and infrastructure commercial operations.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-[#071a2d] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#c79a45]">
                  02
                </span>
                <ArrowUpRight
                  size={22}
                  className="text-slate-400 transition group-hover:text-[#c79a45]"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#071a2d] group-hover:text-white">
                Automotive
              </h3>

              <p className="mt-4 leading-7 text-slate-600 group-hover:text-slate-300">
                Motor battery systems and supply chain assets via Don Baki
                Autos.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-[#071a2d] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#c79a45]">
                  03
                </span>
                <ArrowUpRight
                  size={22}
                  className="text-slate-400 transition group-hover:text-[#c79a45]"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#071a2d] group-hover:text-white">
                Pharmaceuticals
              </h3>

              <p className="mt-4 leading-7 text-slate-600 group-hover:text-slate-300">
                Supply chain logistics for essential health and medical
                products.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-[#071a2d] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#c79a45]">
                  04
                </span>
                <ArrowUpRight
                  size={22}
                  className="text-slate-400 transition group-hover:text-[#c79a45]"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#071a2d] group-hover:text-white">
                Technology
              </h3>

              <p className="mt-4 leading-7 text-slate-600 group-hover:text-slate-300">
                Strategic investments in digital infrastructure and scalable
                platforms.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          HOW THE GROUP CREATES VALUE
      ========================================================= */}
      <section className="bg-[#071a2d] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c79a45]">
                Group Strategy
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                How the Group creates value.
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                BBGL creates value by bringing together businesses operating
                across complementary markets and providing the strategic
                direction, operational discipline, and resources required to
                develop them.
              </p>
            </div>

            <div className="space-y-4">

              {[
                "Developing businesses around practical market opportunities.",
                "Supporting operational growth through disciplined management.",
                "Building relationships across customers, suppliers, and partners.",
                "Creating connections between businesses within the wider Group.",
                "Expanding into future enterprise opportunities.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c79a45] text-sm font-bold text-[#071a2d]">
                    {index + 1}
                  </div>

                  <p className="pt-1 text-sm leading-6 text-slate-200">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071a2d] text-[#c79a45]">
            <CheckCircle2 size={27} />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#c79a45]">
            Partner With Us
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2d] sm:text-4xl lg:text-5xl">
            Ready to build value together?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            Connect with the BBGL team to explore our businesses, partnerships,
            and opportunities for enterprise development.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#071a2d] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#c79a45] hover:text-[#071a2d]"
            >
              Contact BBGL Team
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/businesses"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-4 text-sm font-bold text-[#071a2d] transition hover:border-[#c79a45] hover:bg-[#c79a45]"
            >
              Explore Our Businesses
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}