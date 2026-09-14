import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChevronRight,
  Factory,
  Globe2,
  Layers3,
  TrendingUp,
} from "lucide-react";

const businesses = [
  {
    
    name: "Don Baki Oil & Gas",
    category: "Energy",
    description:
      "A core business within the BBGL portfolio, operating across opportunities within the oil and gas sector.",
    image: "/oil2.jpg",
    href: "/businesses/don-baki-oil-gas",
  },
  {
   
    name: "Don Baki Autos",
    category: "Automotive",
    description:
      "An automotive-focused business serving the growing demand for motor batteries and related automotive products.",
    image: "/images/businesses/don-baki-autos.jpg",
    href: "/businesses/don-baki-autos",
  },
  {
    
    name: "TLV Pharmaceuticals",
    category: "Healthcare",
    description:
      "A business operating within the pharmaceutical sector, contributing to BBGL's interests in healthcare and related markets.",
    image: "/images/businesses/tlv-pharmaceuticals.jpg",
    href: "/businesses/tlv-pharmaceuticals",
  },
  {
    
    name: "Top Talk Technology",
    category: "Technology",
    description:
      "A technology-focused enterprise positioned to explore opportunities within the rapidly evolving digital economy.",
    image: "/images/businesses/top-talk-technology.jpg",
    href: "/businesses/top-talk-technology",
  },
  {
    number: "05",
    name: "Baki Beer",
    category: "Consumer",
    description:
      "A consumer-oriented business forming part of the group's broader portfolio of commercial interests.",
    image: "/images/businesses/baki-beer.jpg",
    href: "/businesses/baki-beer",
  },
];

const sectors = [
  {
    icon: Factory,
    title: "Energy",
    text: "Strategic participation in the energy and oil & gas value chain.",
  },
  {
    icon: Building2,
    title: "Automotive",
    text: "Automotive products and solutions serving individuals and businesses.",
  },
  {
    icon: Globe2,
    title: "Healthcare",
    text: "Building opportunities across pharmaceutical and healthcare markets.",
  },
  {
    icon: Layers3,
    title: "Technology",
    text: "Exploring technology-driven opportunities shaping the future economy.",
  },
];

export default function BusinessesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* =========================================================
    HERO
========================================================= */}
      <section className="relative min-h-[620px] overflow-hidden bg-[#06182a] sm:min-h-[680px] lg:min-h-[760px]">
        {/* Hero Image */}
        <Image
          src="/hero3.jpg"
          alt="Baki Business Group Limited businesses"
          fill
          priority
          className="object-cover object-[center_5%]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#03111f]/45" />

        {/* Bottom Gradient - makes text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03111f] via-[#03111f]/65 to-transparent" />

        {/* Subtle Gold Glow */}
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#c79a45]/10 blur-3xl" />

        {/* Hero Content */}
        <div className="bbgl-container relative z-10 flex min-h-[620px] items-end pb-14 sm:min-h-[680px] sm:pb-16 lg:min-h-[760px] lg:pb-20">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              {/* <span className="h-px w-10 bg-[#c79a45]" /> */}

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#d9b56a]">
                BBGL Portfolio
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Our
              <span className="text-[#d9b56a]"> Businesses</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              A growing portfolio of businesses operating across strategic
              sectors, united by one group vision and a commitment to long-term
              value.
            </p>

            {/* Bottom Information */}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/20 pt-6">
              <div>
                <p className="text-2xl font-semibold text-white">05</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Businesses
                </p>
              </div>

              <div className="h-8 w-px bg-white/20" />

              <div>
                <p className="text-2xl font-semibold text-white">04+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Strategic Sectors
                </p>
              </div>

              <div className="hidden h-8 w-px bg-white/20 sm:block" />

              <div className="hidden sm:block">
                <p className="text-sm font-medium text-white">
                  One Group. Multiple Enterprises.
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Explore the BBGL portfolio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gold Line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#c79a45] to-transparent" />
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="bbgl-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b1873d]">
                Our Portfolio
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#071a2d] sm:text-4xl lg:text-5xl">
                More than individual businesses.
                <span className="block text-slate-400">
                  A connected portfolio.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-base leading-8 text-slate-600">
                BBGL brings together businesses with distinct capabilities,
                markets and opportunities under one group structure. This
                portfolio approach allows each enterprise to develop according
                to its market while benefiting from the direction, standards and
                broader perspective of the group.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                From energy and automotive products to healthcare, technology
                and consumer markets, our businesses represent different avenues
                through which BBGL seeks to create sustainable commercial value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BUSINESS PORTFOLIO
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="bbgl-container">
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b1873d]">
                Portfolio Companies
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071a2d] sm:text-4xl">
                Our businesses
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Explore the businesses that form part of the Baki Business Group
              portfolio.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business, index) => (
              <Link
                key={business.href}
                href={business.href}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-slate-200 ${
                    index === 0
                      ? "h-[360px] sm:h-[420px]"
                      : "h-[300px] sm:h-[340px]"
                  }`}
                >
                  <Image
                    src={business.image}
                    alt={business.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03101d] via-[#03101d]/30 to-transparent" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
                    {business.number}
                  </div>

                  {/* Category */}
                  <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {business.category}
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d9b56a]">
                      BBGL Business
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                      {business.name}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/80 transition-colors group-hover:text-[#d9b56a]">
                      <span>Explore business</span>

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Description */}
                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-500">
                    {business.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTOR FOCUS
      ========================================================= */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="bbgl-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Left */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b1873d]">
                Strategic Focus
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#071a2d] sm:text-4xl">
                Operating across sectors with opportunity.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                Our portfolio reflects a deliberate interest in sectors that
                serve important markets and present opportunities for
                sustainable business development.
              </p>
            </div>

            {/* Right */}
            <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {sectors.map((sector) => {
                const Icon = sector.icon;

                return (
                  <div
                    key={sector.title}
                    className="bg-white p-7 transition-colors duration-300 hover:bg-[#071a2d]"
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#b1873d]"
                    />

                    <h3 className="mt-6 text-lg font-semibold text-[#071a2d] transition-colors group-hover:text-white">
                      {sector.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {sector.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PORTFOLIO PHILOSOPHY
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#071a2d] py-20 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#0b3d6e]/20 to-transparent" />

        <div className="bbgl-container relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b56a]">
                The BBGL Approach
              </p>

              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Build strong businesses.
                <span className="block text-[#d9b56a]">
                  Create lasting value.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-300">
                We believe sustainable growth is built through disciplined
                business development, strong leadership and a clear
                understanding of the markets we serve.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Each BBGL business has its own identity and operating focus,
                while remaining connected to the group's broader standards and
                long-term direction.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="border-l border-[#c79a45] pl-5">
                  <TrendingUp size={20} className="text-[#d9b56a]" />

                  <p className="mt-3 text-sm font-semibold text-white">
                    Sustainable Growth
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Focused on building businesses with long-term potential.
                  </p>
                </div>

                <div className="border-l border-[#c79a45] pl-5">
                  <Layers3 size={20} className="text-[#d9b56a]" />

                  <p className="mt-3 text-sm font-semibold text-white">
                    Diversified Strength
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Multiple sectors creating a broader business platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GROWTH STATEMENT
      ========================================================= */}
      <section className="bg-white py-2 sm:py-24">
        <div className="bbgl-container">
          <div className="relative overflow-hidden rounded-3xl bg-slate-100 px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#c79a45]/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b1873d]">
                Looking Ahead
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#071a2d] sm:text-4xl">
                The portfolio continues to evolve.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                As opportunities emerge, BBGL remains focused on strengthening
                existing businesses while identifying new avenues for growth,
                innovation and strategic investment.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0b3153]"
              >
                Discuss a Partnership
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#c79a45]">
        <div className="bbgl-container flex flex-col gap-7 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#071a2d]/70">
              Baki Business Group Limited
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071a2d] sm:text-3xl">
              Explore what comes next.
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-lg border border-[#071a2d]/30 bg-[#d1f4ea] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0d2943]"
          >
            Corporate Enquiries
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
