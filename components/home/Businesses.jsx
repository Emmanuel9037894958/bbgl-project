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
    images: ["/image2.jpg", "/oil2.jpg", "/gas2.jpg","/gas1.jpg"],
    slug: "don-baki-oil-gas",
  },
  {
    name: "TLV Pharmaceuticals",
    description:
      "Through TLV Pharmaceuticals Ltd, BBGL operates across the pharmaceutical and healthcare sector, providing access to quality medicines and healthcare products through a structured distribution network.",
    logo: "/tlv.png",
    images: ["/hero4.jpg", "/goko.jpg","/drugs.jpg","/drug.jpg","/koko.jpg"],
    slug: "tlv-pharmaceuticals",
  },
  {
    name: "Baki Beer",
    description:
      "A BBGL beverage company, Baki Beer is a premium lager beer brand under Baki Business Group Ltd (BBGL), created to bring together quality, character, and the spirit of modern Nigerian enjoyment.",
    logo: "/beer11.png",
    images: [ "/hero3.jpg","/one1.jpg", "/beer.jpg","/beer2.jpg"],
    slug: "baki-beer",
  },
  {
    name: "Don Baki Autos",
    description:
      "A specialised automotive business focused on motor batteries and related automotive products for individual and commercial customers.",
    logo: "/hero111.png",
    images: ["/hero7.jpg", "/car2.jpg","/car1.jpg","/image3.jpg","/gas4.jpg"],
    slug: "don-baki-autos",
  },
  {
    name: "Top Talk Technology",
    description:
      "A technology-focused enterprise within the BBGL portfolio, pursuing opportunities across the evolving digital and technology sector.",
    logo: "/tech1.png",
    images: ["/tech4.jpg", "/tech1.jpg", "/tech5.jpg", "/talk-tech.jpeg"],
    slug: "top-talk-technology",
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
              <span className="text-xs pt-7 font-bold uppercase tracking-[0.24em] text-[#c79a45]">
                Our Businesses
              </span>
            </div>
          </div>
        </div>

        {/* BUSINESS CARDS */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business) => (
            <Link
              key={business.slug}
              href={`/businesses/${business.slug}`}
              className="group relative flex min-h-[650px] flex-col overflow-hidden rounded-sm bg-[#e8f1f7] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* LOGO AREA */}
              <div className="relative flex h-[110px] shrink-0 items-center justify-center overflow-hidden border-b border-[#0b3d6e]/10 bg-gradient-to-br from-[#dceaf3] via-[#e8f1f7] to-[#d2e3ee] px-8">

                {/* Decorative circles */}
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full border border-[#0b3d6e]/10 transition-transform duration-700 group-hover:scale-125" />

                <div className="absolute -bottom-14 -left-14 h-28 w-28 rounded-full border border-[#c79a45]/15 transition-transform duration-700 group-hover:scale-125" />

                {/* Professional logo */}
                <div className="relative z-10 h-[85px] w-[190px]">
                  <Image
                    src={business.logo}
                    alt={`${business.name} logo`}
                    fill
                    sizes="190px"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col bg-gradient-to-br from-[#e8f1f7] via-[#e3eef5] to-[#dceaf3] px-6 pb-6 pt-4 md:px-7 md:pb-7 md:pt-4">

                {/* Business Name */}
                <h3 className="text-2xl font-extrabold leading-tight text-[#071a2d]">
                  {business.name}
                </h3>

                {/* Business Write-up */}
                <p className="mt-3 text-sm leading-7 text-[#526579]">
                  {business.description}
                </p>

                {/* SLIDING BUSINESS IMAGES */}
                <div className="mt-6 -mx-6 md:-mx-7">
                  <BusinessImageSlider
                    images={business.images}
                    name={business.name}
                  />
                </div>

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

         
        </div>
      </div>
    </section>
  );
}