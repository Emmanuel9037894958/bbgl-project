"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const businesses = [
  {
    name: "Don Baki Oil & Gas",
    description: `Don Baki Oil And Gas Ltd.

Through Don Baki Oil And Gas Ltd., BBGL operates across the midstream and downstream segments of the oil and gas industry, with bulk diesel supply across Nigeria.

The company operates Db-Plus Oil, its lubricant brand, offering engine oils, gear oils, transmission fluids, hydraulic oils, greases, and other automotive lubricants for the automotive and industrial markets.`,
    logo: "/logo2.png",
    images: ["/image2.jpg", "/oil2.jpg", "/gas2.jpg", "/gas1.jpg"],
    slug: "don-baki-oil-gas",

    theme: {
      background: "from-[#fff4e8] via-[#fff8f2] to-[#f3e5d5]",
      logoBackground: "from-[#fff0df] via-[#fff8f0] to-[#ead8c5]",
      text: "#171717",
      secondary: "#5c5148",
      accent: "#e87518",
      accentSoft: "#e87518",
      border: "#e87518",
      imageOverlay: "from-black/75 via-black/10 to-transparent",
      button: "#171717",
      buttonHover: "#e87518",
    },
  },

  {
    name: "TLV Pharmaceuticals",
    description: `Pharmaceutical & Healthcare Distribution

Through TLV Pharmaceuticals Ltd., BBGL operates across the pharmaceutical and healthcare sector, providing access to quality medicines and healthcare products through a structured distribution network.`,
    logo: "/tlv.png",
    images: [
      "/hero4.jpg",
      "/goko.jpg",
      "/drugs.jpg",
      "/drug.jpg",
      "/koko.jpg",
    ],
    slug: "tlv-pharmaceuticals",

    theme: {
      background: "from-[#fff1f2] via-[#fff8f8] to-[#f7e2e5]",
      logoBackground: "from-[#ffe8eb] via-[#fff5f6] to-[#f4d8dc]",
      text: "#7f1722",
      secondary: "#665257",
      accent: "#d7193f",
      accentSoft: "#d7193f",
      border: "#d7193f",
      imageOverlay: "from-[#7f1722]/75 via-black/10 to-transparent",
      button: "#7f1722",
      buttonHover: "#d7193f",
    },
  },

  {
    name: "Baki Beer",
    description:
      "A BBGL beverage company, Baki Beer is a premium lager beer brand under Baki Business Group Ltd (BBGL), created to bring together quality, character, and the spirit of modern Nigerian enjoyment.",
    logo: "/beer11.png",
    images: ["/hero3.jpg", "/one1.jpg", "/beer.jpg", "/beer2.jpg"],
    slug: "baki-beer",

    theme: {
      background: "from-[#edf8ef] via-[#f7fcf8] to-[#dcefe0]",
      logoBackground: "from-[#dff3e3] via-[#f2faf4] to-[#cfe7d4]",
      text: "#075b32",
      secondary: "#52655a",
      accent: "#168447",
      accentSoft: "#168447",
      border: "#168447",
      imageOverlay: "from-[#064b2b]/75 via-black/10 to-transparent",
      button: "#075b32",
      buttonHover: "#168447",
    },
  },

  {
    name: "Don Baki Autos",
    description: `DON BAKI AUTOS

Automotive Sales & Mobility

Don Baki Autos is the automotive subsidiary of Baki Business Group Ltd (BBGL), established to provide customers with access to quality automobiles and essential automotive products.

The company specializes in the sale of brand-new and tokunbo vehicles, offering a range of carefully selected automobiles to meet different customer needs, preferences and budgets.

Don Baki Autos also operates in the automotive battery market, with a focus on the distribution of quality, reliable and durable vehicle batteries. The company is currently a distribution partner of German Panther Batteries Nigeria, strengthening its position within Nigeria’s automotive products and aftermarket sector.

Through a commitment to quality, genuine products and dependable customer service, Don Baki Autos is building a trusted automotive business under the BBGL brand.`,
    logo: "/hero111.png",
    images: [
      "/hero7.jpg",
      "/car2.jpg",
      "/car1.jpg",
      "/image3.jpg",
      "/gas4.jpg",
    ],
    slug: "don-baki-autos",

    theme: {
      background: "from-[#eeeeee] via-[#f8f8f8] to-[#dcdcdc]",
      logoBackground: "from-[#111111] via-[#242424] to-[#050505]",
      text: "#111111",
      secondary: "#555555",
      accent: "#111111",
      accentSoft: "#333333",
      border: "#111111",
      imageOverlay: "from-black/80 via-black/10 to-transparent",
      button: "#111111",
      buttonHover: "#333333",
    },
  },

  {
    name: "Top Talk Technology",
    description:
      "A technology-focused enterprise within the BBGL portfolio, pursuing opportunities across the evolving digital and technology sector.",
    logo: "/tech1.png",
    images: ["/tech4.jpg", "/tech1.jpg", "/tech5.jpg", "/talk-tech.jpeg"],
    slug: "top-talk-technology",

    theme: {
      background: "from-[#eaf4ff] via-[#f6faff] to-[#dcecff]",
      logoBackground: "from-[#dcecff] via-[#eef7ff] to-[#cfe4fa]",
      text: "#063b70",
      secondary: "#526579",
      accent: "#1677c8",
      accentSoft: "#1677c8",
      border: "#1677c8",
      imageOverlay: "from-[#063b70]/75 via-black/10 to-transparent",
      button: "#063b70",
      buttonHover: "#1677c8",
    },
  },
];

function BusinessImageSlider({ images, name, theme }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative h-[230px] overflow-hidden bg-black">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current
              ? "scale-100 opacity-100"
              : "scale-105 opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`${name} - image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Image overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${theme.imageOverlay}`}
      />

      {/* Brand accent strip */}
      <div
        className="absolute left-0 top-0 z-20 h-1.5 w-full"
        style={{ backgroundColor: theme.accent }}
      />

      {/* Arrow */}
      <div
        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
        style={{
          borderColor: `${theme.accent}`,
        }}
      >
        <ArrowUpRight
          size={19}
          className="text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </div>

      {/* Slider indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-5 left-6 z-20 flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: index === current ? "32px" : "8px",
                backgroundColor:
                  index === current ? theme.accent : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Businesses() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-6 md:py-28 lg:py-32">

      <div className="bbgl-container">

        {/* =================================
            HEADER
        ================================= */}
        <div className=" flex flex-col justify-between gap-8 md:mb-14 md:flex-row md:items-end">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-4">
              {/* <span className="h-1.5 w-14 rounded-full bg-emerald-600" /> */}

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
                Our Businesses
              </span>
            </div>


          </div>

        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {businesses.map((business) => (
            <Link
              key={business.slug}
              href={`/businesses/${business.slug}`}
              className="group relative flex min-h-[650px] flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                borderColor: `${business.theme.border}35`,
              }}
            >

              {/* =================================
                  LOGO AREA
              ================================= */}
              <div
                className={`relative flex h-[125px] shrink-0 items-center justify-center overflow-hidden border-b bg-gradient-to-br px-8`}
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  borderColor: `${business.theme.border}25`,
                }}
              >

                {/* Decorative brand circle */}
                <div
                  className="absolute -right-14 -top-14 h-36 w-36 rounded-full border-2 transition-transform duration-700 group-hover:scale-125"
                  style={{
                    borderColor: `${business.theme.accent}25`,
                  }}
                />

                <div
                  className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full border transition-transform duration-700 group-hover:scale-125"
                  style={{
                    borderColor: `${business.theme.accent}20`,
                  }}
                />

                {/* Brand accent line */}
                <div
                  className="absolute left-0 top-0 h-2 w-full"
                  style={{
                    backgroundColor: business.theme.accent,
                  }}
                />

                {/* Logo */}
                <div className="relative z-10 h-[90px] w-[195px]">
                  <Image
                    src={business.logo}
                    alt={`${business.name} logo`}
                    fill
                    sizes="195px"
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

              </div>

              {/* =================================
                  CONTENT
              ================================= */}
              <div
                className={`flex flex-1 flex-col bg-gradient-to-br px-6 pb-6 pt-5 md:px-7 md:pb-7`}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${business.theme.background
                    .replace("from-", "")
                    .split(" ")[0]
                    .replace("[", "")
                    .replace("]", "")}, ${business.theme.background
                    .replace("to-", "")
                    .split(" ")
                    .pop()
                    .replace("[", "")
                    .replace("]", "")})`,
                }}
              >

                {/* Brand marker */}
                <div
                  className="mb-4 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20"
                  style={{
                    backgroundColor: business.theme.accent,
                  }}
                />

                {/* Business Name */}
                <h3
                  className="text-2xl font-extrabold leading-tight"
                  style={{
                    color: business.theme.text,
                  }}
                >
                  {business.name}
                </h3>

                {/* Business Write-up */}
                <div
                  className="mt-4 whitespace-pre-line text-sm leading-7"
                  style={{
                    color: business.theme.secondary,
                  }}
                >
                  {business.description}
                </div>

                {/* =================================
                    SLIDING BUSINESS IMAGES
                ================================= */}
                <div className="mt-6 -mx-6 md:-mx-7">
                  <BusinessImageSlider
                    images={business.images}
                    name={business.name}
                    theme={business.theme}
                  />
                </div>

                {/* =================================
                    EXPLORE
                ================================= */}
                <div className="mt-auto pt-6">

                  <div
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 group-hover:gap-3"
                    style={{
                      color: business.theme.button,
                    }}
                  >
                    Explore business

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}