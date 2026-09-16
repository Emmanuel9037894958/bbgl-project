"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const businesses = [
  {
    name: "Don Baki Oil & Gas",
    description:
      "A core BBGL business operating within the oil and gas sector, providing products and services across the energy market.",
    logo: "/logo2.png",
    images: ["/image2.jpg", "/oil2.jpg", "/oil3.jpg"],
    slug: "don-baki-oil-gas",
  },
  {
    name: "Don Baki Autos",
    description:
      "A specialised automotive business focused on motor batteries and related automotive products for individual and commercial customers.",
    logo: "/hero111.png",
    images: ["/hero7.jpg", "/image3.jpg"],
    slug: "don-baki-autos",
  },
  {
    name: "TLV Pharmaceuticals",
    description:
      "Through TLV Pharmaceuticals Ltd, BBGL operates across the pharmaceutical and healthcare sector, providing access to quality medicines and healthcare products through a structured distribution network.",
    logo: "/tlv.png",
    images: ["/drug.jpg", "/tlv2.jpg"],
    slug: "tlv-pharmaceuticals",
  },
  {
    name: "Top Talk Technology",
    description:
      "A technology-focused enterprise within the BBGL portfolio, pursuing opportunities across the evolving digital and technology sector.",
    logo: "/tech1.png",
    images: ["/talk-tech.jpeg", "/don.jpg"],
    slug: "top-talk-technology",
  },
  {
    name: "Baki Beer",
    description:
      "A BBGL beverage company, Baki Beer is a premium lager beer brand under Baki Business Group Ltd (BBGL), created to bring together quality, character, and the spirit of modern Nigerian enjoyment.",
    logo: "/beer11.png",
    images: ["/one1.jpg", "/beer.jpg"],
    slug: "baki-beer",
  },
];

function BusinessImageSlider({ images, name }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative h-[230px] overflow-hidden bg-[#071a2d]">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d]/70 via-transparent to-transparent" />

      {/* Arrow */}
      <div className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/10 backdrop-blur-sm transition-all duration-300 group-hover:border-[#d9b56a] group-hover:bg-[#d9b56a]">
        <ArrowUpRight
          size={19}
          className="text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#071a2d]"
        />
      </div>

      {/* Slider indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-5 left-6 z-20 flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-8 bg-[#d9b56a]"
                  : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Businesses() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-1 md:py-28 lg:py-32">
      <div className="bbgl-container">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#c79a45]">
                Our Businesses
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-[#071a2d] sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              A diversified portfolio of{" "}
              <span className="text-[#0b3d6e]">
                growing businesses.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085] md:text-[17px]">
              Baki Business Group Limited operates across a growing range of
              industries, with established interests in oil and gas, motor
              batteries and other strategic sectors.
            </p>
          </div>

          <Link
            href="/businesses"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#0b3d6e] pb-2 text-sm font-bold text-[#0b3d6e] transition-all duration-300 hover:border-[#c79a45] hover:text-[#c79a45]"
          >
            View all businesses
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* BUSINESS CARDS */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business) => (
            <Link
              key={business.slug}
              href={`/businesses/${business.slug}`}
              className="group relative flex min-h-[560px] flex-col overflow-hidden rounded-sm bg-[#e8f1f7] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* LOGO AREA */}
              <div className="relative flex h-[150px] items-center justify-center overflow-hidden border-b border-[#0b3d6e]/10 bg-gradient-to-br from-[#dceaf3] via-[#e8f1f7] to-[#d2e3ee] px-8">

                {/* Decorative circles */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full border border-[#0b3d6e]/10 transition-transform duration-700 group-hover:scale-125" />

                <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full border border-[#c79a45]/15 transition-transform duration-700 group-hover:scale-125" />

                {/* Logo */}
                <div className="relative z-10 h-[95px] w-[210px]">
                  <Image
                    src={business.logo}
                    alt={`${business.name} logo`}
                    fill
                    sizes="210px"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* SLIDING BUSINESS IMAGES */}
              <BusinessImageSlider
                images={business.images}
                name={business.name}
              />

              {/* CONTENT */}
              <div className="flex flex-1 flex-col bg-gradient-to-br from-[#e8f1f7] via-[#e3eef5] to-[#dceaf3] p-6 md:p-7">

                {/* Gold accent */}
                <div className="mb-4 h-[2px] w-9 bg-[#c79a45] transition-all duration-300 group-hover:w-16" />

                <h3 className="text-2xl font-extrabold leading-tight text-[#071a2d]">
                  {business.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#526579]">
                  {business.description}
                </p>

                {/* Explore */}
                <div className="mt-auto pt-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0b3d6e] transition-colors duration-300 group-hover:text-[#c79a45]">
                    Explore business

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* FUTURE PORTFOLIO */}
          <div className="relative flex min-h-[560px] flex-col justify-between overflow-hidden rounded-sm bg-[#071a2d] p-7 md:p-8">

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#c79a45]/20" />

            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#c79a45]/20" />

            <div className="absolute bottom-[-80px] left-[-80px] h-56 w-56 rounded-full border border-white/5" />

            <div className="relative z-10 flex items-start justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Future Portfolio
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c79a45]/30">
                <ArrowUpRight size={17} className="text-[#d9b56a]" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="mb-5 h-[2px] w-9 bg-[#c79a45]" />

              <h3 className="max-w-sm text-3xl font-extrabold leading-tight text-white">
                More businesses.
                <br />
                More opportunities.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
                BBGL continues to identify strategic opportunities and develop
                new businesses that contribute to the Group&apos;s long-term
                growth.
              </p>

              <Link
                href="/businesses"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#d9b56a] transition-colors hover:text-white"
              >
                Explore the Group
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}