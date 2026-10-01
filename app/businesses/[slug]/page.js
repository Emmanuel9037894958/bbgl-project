import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Handshake,
  PackageCheck,
  Users,
  Target,
  ShieldCheck,
  TrendingUp,
  Layers3,
  ChevronRight,
} from "lucide-react";

const businesses = {
  "don-baki-oil-gas": {
    name: "Don Baki Oil & Gas",
    sector: "Oil & Gas",
    logo: "/logo2.png",
    image: "/image2.jpg",

    theme: {
      accent: "#f97316",
      accentSoft: "#fff7ed",
      accentBorder: "#fed7aa",
      dark: "#111827",
    },

    description:
      "A core BBGL business operating within the oil and gas sector, providing products and services across the energy market.",
    about:
      "Don Baki Oil & Gas represents one of the core business interests within the BBGL portfolio, operating across the oil and gas sector with a focus on building sustainable commercial opportunities.",
    focus: [
      "Oil and gas products and services",
      "Energy market opportunities",
      "Commercial distribution",
      "Long-term business growth",
    ],
    highlights: [
      {
        icon: Building2,
        title: "Core BBGL Enterprise",
        text: "A key business interest within the diversified BBGL portfolio.",
      },
      {
        icon: TrendingUp,
        title: "Market Opportunities",
        text: "Focused on opportunities within the evolving energy market.",
      },
      {
        icon: PackageCheck,
        title: "Commercial Operations",
        text: "Supporting commercial activity through products and services.",
      },
    ],
    role:
      "Don Baki Oil & Gas contributes to BBGL's presence within the energy sector and forms part of the group's broader strategy of developing businesses across important commercial industries.",
    gallery: ["/image2.jpg", "/oil2.jpg", "/gas2.jpg", "/gas1.jpg"],
  },

  "tlv-pharmaceuticals": {
    name: "TLV Pharmaceuticals",
    sector: "Pharmaceuticals & Healthcare",
    logo: "/tlv.png",
    image: "/hero4.jpg",

    theme: {
      accent: "#dc2626",
      accentSoft: "#fef2f2",
      accentBorder: "#fecaca",
      dark: "#172033",
    },

    description:
      "Through TLV Pharmaceuticals Ltd, BBGL operates across the pharmaceutical and healthcare sector, providing access to quality medicines and healthcare products through a structured distribution network.",
    about:
      "TLV Pharmaceuticals Ltd forms part of BBGL's diversified business portfolio, operating within the pharmaceutical and healthcare sector and contributing to the group's wider commercial vision.",
    focus: [
      "Pharmaceutical products",
      "Healthcare products",
      "Product distribution",
      "Healthcare market opportunities",
    ],
    highlights: [
      {
        icon: ShieldCheck,
        title: "Healthcare Focus",
        text: "Operating within the pharmaceutical and healthcare space.",
      },
      {
        icon: PackageCheck,
        title: "Product Access",
        text: "Supporting access to medicines and healthcare products.",
      },
      {
        icon: Layers3,
        title: "Structured Distribution",
        text: "Building a structured approach to pharmaceutical distribution.",
      },
    ],
    role:
      "TLV Pharmaceuticals expands BBGL's portfolio into the healthcare sector, contributing to the group's diversified approach to business development and market opportunities.",
    gallery: [
      "/hero4.jpg",
      "/goko.jpg",
      "/drugs.jpg",
      "/drug.jpg",
      "/koko.jpg",
    ],
  },

  "baki-beer": {
    name: "Baki Beer",
    sector: "Consumer Products",
    logo: "/beer11.png",
    image: "/beer2.jpg",

    theme: {
      accent: "#15803d",
      accentSoft: "#f0fdf4",
      accentBorder: "#bbf7d0",
      dark: "#172033",
    },

    description:
      "A BBGL beverage company, Baki Beer is a premium lager beer brand under Baki Business Group Ltd (BBGL), created to bring together quality, character, and the spirit of modern Nigerian enjoyment.",
    about:
      "Baki Beer is part of BBGL's growing consumer products portfolio. The brand represents the group's interest in developing recognizable products that connect with the modern Nigerian consumer.",
    focus: [
      "Premium beverage products",
      "Consumer market development",
      "Brand development",
      "Commercial growth opportunities",
    ],
    highlights: [
      {
        icon: Target,
        title: "Consumer Focus",
        text: "Designed around the expectations and interests of modern consumers.",
      },
      {
        icon: Building2,
        title: "BBGL Brand",
        text: "A consumer-facing brand within the wider BBGL portfolio.",
      },
      {
        icon: TrendingUp,
        title: "Market Development",
        text: "Focused on building opportunities within the beverage market.",
      },
    ],
    role:
      "Baki Beer represents BBGL's consumer products interest and adds a brand-focused dimension to the group's diversified portfolio of enterprises.",
    gallery: ["/hero3.jpg", "/one1.jpg", "/beer.jpg", "/beer2.jpg"],
  },

  "don-baki-autos": {
    name: "Don Baki Autos",
    sector: "Automotive",
    logo: "/hero111.png",
    image: "/hero7.jpg",

    theme: {
      accent: "#111827",
      accentSoft: "#f3f4f6",
      accentBorder: "#d1d5db",
      dark: "#0f172a",
    },

    description:
      "A specialised automotive business focused on motor batteries and related automotive products for individual and commercial customers.",
    about:
      "Don Baki Autos operates within BBGL's automotive portfolio, with a particular focus on motor batteries and related automotive products serving individual and commercial customers.",
    focus: [
      "Motor batteries",
      "Automotive products",
      "Individual customers",
      "Commercial customers",
    ],
    highlights: [
      {
        icon: PackageCheck,
        title: "Motor Batteries",
        text: "Focused on motor batteries as a core automotive product category.",
      },
      {
        icon: Users,
        title: "Customer Focus",
        text: "Serving both individual and commercial automotive customers.",
      },
      {
        icon: Building2,
        title: "Automotive Enterprise",
        text: "A dedicated automotive business within the BBGL group.",
      },
    ],
    role:
      "Don Baki Autos strengthens BBGL's presence in the automotive space, with its focus on motor batteries and related products supporting the group's diversified business structure.",
    gallery: [
      "/hero7.jpg",
      "/car2.jpg",
      "/car1.jpg",
      "/image3.jpg",
      "/gas4.jpg",
    ],
  },

  "top-talk-technology": {
    name: "Top Talk Technology",
    sector: "Technology",
    logo: "/tech1.png",
    image: "/talk-tech.jpeg",

    theme: {
      accent: "#2563eb",
      accentSoft: "#eff6ff",
      accentBorder: "#bfdbfe",
      dark: "#172033",
    },

    description:
      "A technology-focused enterprise within the BBGL portfolio, pursuing opportunities across the evolving digital and technology sector.",
    about:
      "Top Talk Technology represents BBGL's presence within the technology sector, supporting the group's wider vision of participating in emerging digital and technology opportunities.",
    focus: [
      "Technology solutions",
      "Digital opportunities",
      "Technology market development",
      "Innovation and growth",
    ],
    highlights: [
      {
        icon: Target,
        title: "Digital Focus",
        text: "Focused on opportunities within the evolving digital economy.",
      },
      {
        icon: TrendingUp,
        title: "Technology Growth",
        text: "Exploring opportunities across the technology sector.",
      },
      {
        icon: Layers3,
        title: "Innovation",
        text: "Supporting BBGL's wider interest in technology and innovation.",
      },
    ],
    role:
      "Top Talk Technology gives BBGL a presence within the technology sector and reflects the group's interest in emerging digital opportunities and innovation.",
    gallery: [
      "/tech4.jpg",
      "/tech1.jpg",
      "/tech5.jpg",
      "/talk-tech.jpeg",
    ],
  },
};

export default async function BusinessPage({ params }) {
  const { slug } = await params;
  const business = businesses[slug];

  if (!business) {
    return (
      <main className="min-h-screen bg-slate-50">
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <Building2 size={30} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              BBGL Businesses
            </p>

            <h1 className="mt-4 text-4xl font-bold text-slate-900">
              Business Not Found
            </h1>

            <p className="mt-5 leading-7 text-slate-600">
              The business page you are looking for could not be found.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-600"
            >
              <ArrowLeft size={17} />
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section
        className="relative min-h-[680px] overflow-hidden"
        style={{ backgroundColor: business.theme.dark }}
      >
        <Image
          src={business.image}
          alt={business.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark readable image overlay */}
        <div className="absolute inset-0 bg-black/45" />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              90deg,
              ${business.theme.dark}F5 0%,
              ${business.theme.dark}D9 42%,
              ${business.theme.dark}88 70%,
              transparent 100%
            )`,
          }}
        />

        {/* Brand accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1.5"
          style={{ backgroundColor: business.theme.accent }}
        />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24">
          <div className="w-full max-w-4xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              <ArrowLeft size={17} />
              Back to BBGL Businesses
            </Link>

            {/* Logo */}
            <div
              className="mb-7 flex h-20 w-48 items-center rounded-2xl border bg-white px-5 shadow-2xl"
              style={{
                borderColor: business.theme.accentBorder,
              }}
            >
              <Image
                src={business.logo}
                alt={`${business.name} logo`}
                width={190}
                height={80}
                className="max-h-16 w-full object-contain"
              />
            </div>

            {/* Sector */}
            <div
              className="mb-5 inline-flex rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]"
              style={{
                color: business.theme.accent,
                backgroundColor: business.theme.accentSoft,
                borderColor: business.theme.accentBorder,
              }}
            >
              {business.sector}
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-7xl">
              {business.name}
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              {business.description}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] hover:brightness-110"
                style={{
                  backgroundColor: business.theme.accent,
                }}
              >
                Corporate Enquiries
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="#overview"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Explore Business
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {[
            {
              icon: Building2,
              label: "Business",
              value: business.name,
            },
            {
              icon: Layers3,
              label: "Sector",
              value: business.sector,
            },
            {
              icon: ShieldCheck,
              label: "Group",
              value: "Baki Business Group Ltd",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`flex items-center gap-4 px-6 py-7 ${
                  index < 2
                    ? "border-b border-slate-200 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: business.theme.accentSoft,
                    color: business.theme.accent,
                  }}
                >
                  <Icon size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* OVERVIEW */}
      <section
        id="overview"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: business.theme.accent }}
            >
              Business Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Building with purpose.
              <span
                className="mt-1 block"
                style={{ color: business.theme.accent }}
              >
                Growing with vision.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-600">
              {business.about}
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              As part of BBGL, the business operates within a wider portfolio
              built around diversification, commercial opportunity and
              long-term enterprise development.
            </p>

            <div
              className="mt-8 h-1 w-16 rounded-full"
              style={{ backgroundColor: business.theme.accent }}
            />
          </div>

          {/* Strategic role */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-xl sm:p-10">
            <div
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full border"
              style={{
                borderColor: `${business.theme.accent}35`,
              }}
            />

            <div
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border"
              style={{
                borderColor: `${business.theme.accent}20`,
              }}
            />

            <div className="relative">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                style={{
                  backgroundColor: business.theme.accent,
                }}
              >
                <Target size={28} />
              </div>

              <p
                className="mt-7 text-xs font-bold uppercase tracking-[0.2em]"
                style={{
                  color: business.theme.accent,
                }}
              >
                Strategic Role
              </p>

              <p className="mt-4 text-lg leading-8 text-white">
                {business.role}
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <p className="mt-6 text-sm font-semibold text-slate-400">
                One Vision. Many Enterprises. One Excellent Standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: business.theme.accent }}
            >
              Business Highlights
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              What defines this enterprise
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Key areas that describe the business and its place within the
              broader BBGL portfolio.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {business.highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    borderColor: business.theme.accentBorder,
                  }}
                >
                  <div
                    className="absolute left-0 top-0 h-1 w-full"
                    style={{
                      backgroundColor: business.theme.accent,
                    }}
                  />

                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: business.theme.accentSoft,
                      color: business.theme.accent,
                    }}
                  >
                    <Icon size={27} />
                  </div>

                  <p
                    className="mt-6 text-xs font-bold uppercase tracking-wider"
                    style={{
                      color: business.theme.accent,
                    }}
                  >
                    0{index + 1}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
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
      </section>

      {/* BUSINESS FOCUS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{
                color: business.theme.accent,
              }}
            >
              Areas of Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Focused on meaningful opportunities.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The business operates with a clear focus on the products,
              services and opportunities relevant to its sector.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {business.focus.map((item, index) => (
              <div
                key={item}
                className="group flex items-start gap-4 rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  borderColor: business.theme.accentBorder,
                }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: business.theme.accentSoft,
                    color: business.theme.accent,
                  }}
                >
                  0{index + 1}
                </div>

                <div>
                  <CheckCircle2
                    size={19}
                    className="mb-2"
                    style={{
                      color: business.theme.accent,
                    }}
                  />

                  <p className="font-semibold leading-7 text-slate-900">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute left-0 right-0 top-0 h-1"
          style={{
            backgroundColor: business.theme.accent,
          }}
        />

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p
                className="text-sm font-bold uppercase tracking-[0.2em]"
                style={{
                  color: business.theme.accent,
                }}
              >
                Business Gallery
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                A closer look
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              Explore selected visuals representing this BBGL enterprise and
              its business environment.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {business.gallery.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 ? "h-[420px] sm:h-full" : "h-[220px]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${business.name} gallery image ${index + 1}`}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, 25vw"
                    }
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div
                    className="absolute bottom-5 left-5 h-1 w-10 rounded-full"
                    style={{
                      backgroundColor: business.theme.accent,
                    }}
                  />

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">
                      {business.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS APPROACH */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <p
            className="text-sm font-bold uppercase tracking-[0.2em]"
            style={{
              color: business.theme.accent,
            }}
          >
            Business Approach
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Part of a connected business group
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Each BBGL enterprise operates within its own market while
            contributing to the group's broader vision of building and
            developing multiple businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Users,
              title: "Customers & Markets",
              text: "Responding to customers and opportunities within the relevant market and sector.",
            },
            {
              icon: Handshake,
              title: "Enterprise Network",
              text: "Operating as part of the wider BBGL portfolio of businesses and commercial interests.",
            },
            {
              icon: TrendingUp,
              title: "Long-Term Growth",
              text: "Supporting BBGL's broader objective of sustainable enterprise development and expansion.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{
                  borderColor: business.theme.accentBorder,
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-105"
                  style={{
                    backgroundColor: business.theme.accentSoft,
                    color: business.theme.accent,
                  }}
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CORPORATE CTA */}
      <section className="relative overflow-hidden bg-slate-900">
        <div
          className="absolute left-1/2 top-0 h-1 w-40 -translate-x-1/2"
          style={{
            backgroundColor: business.theme.accent,
          }}
        />

        <div
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full border"
          style={{
            borderColor: `${business.theme.accent}25`,
          }}
        />

        <div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border"
          style={{
            borderColor: `${business.theme.accent}20`,
          }}
        />

        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">
          <p
            className="text-sm font-bold uppercase tracking-[0.25em]"
            style={{
              color: business.theme.accent,
            }}
          >
            Baki Business Group Limited
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            One Vision. Many Enterprises.
            <span
              className="block"
              style={{
                color: business.theme.accent,
              }}
            >
              One Excellent Standard.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Interested in learning more about {business.name} or engaging
            with BBGL? Our corporate team is available for enquiries and
            business opportunities.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] hover:brightness-110"
              style={{
                backgroundColor: business.theme.accent,
              }}
            >
              Contact BBGL
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/20"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* OTHER BUSINESSES */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{
                  color: business.theme.accent,
                }}
              >
                Explore BBGL
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Explore other businesses
              </h2>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:opacity-70"
            >
              View Portfolio
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {Object.entries(businesses)
              .filter(([businessSlug]) => businessSlug !== slug)
              .map(([businessSlug, otherBusiness]) => (
                <Link
                  key={businessSlug}
                  href={`/businesses/${businessSlug}`}
                  className="rounded-full border bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    borderColor: business.theme.accentBorder,
                  }}
                >
                  {otherBusiness.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}