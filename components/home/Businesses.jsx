import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
// import Typewriter from "@/components/Typewriter";

const businesses = [
  {
    // number: "01",
    name: "Don Baki Oil & Gas",
    description:
      "A c  ore BBGL business operating within the oil and gas sector, providing products and services across the energy market.",
    image: "/oil2.jpg",
    slug: "don-baki-oil-gas",
  },
  {
    // number: "02",
    name: "Don Baki Autos",
    description:
      "A specialised automotive business focused on motor batteries and related automotive products for individual and commercial customers.",
    image: "/hero7.jpg",
    slug: "don-baki-autos",
  },
  {
    // number: "03",
    name: "TLV Pharmaceuticals",
    description:
      "Through TLV Pharmaceuticals Ltd, BBGL operates across the pharmaceutical and healthcare sector, providing access to quality medicines and healthcare products through a structured distribution network.",
    image: "/tlv2.jpg",
    slug: "tlv-pharmaceuticals",
  },
  {
    // number: "04",
    name: "Top Talk Technology",
    description:
      "A technology-focused enterprise within the BBGL portfolio, pursuing opportunities across the evolving digital and technology sector.",
    image: "/talk-tech.jpeg",
    slug: "top-talk-technology",
  },
  {
    // number: "05",
    name: "Baki Beer",
    description:
      "A BBGL Beverage company,Baki Beer is a premium lager beer brand under Baki Business Group Ltd(BBGL), created to bring together quality, character,and the spirit of modern Nigerian enjoyment.",
    image: "/beer.jpg",
    slug: "baki-beer",
  },
];

export default function Businesses() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-4 md:py-28 lg:py-32">
      <div className="bbgl-container">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              {/* <span className="h-px w-9 bg-[#c79a45]" /> */}

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

        {/* Business Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {businesses.map((business) => (
            <Link
              key={business.slug}
              href={`/businesses/${business.slug}`}
              className="group relative block min-h-[390px] overflow-hidden bg-[#071a2d]"
            >

              {/* Business Image */}
              <Image
                src={business.image}
                alt={business.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d] via-[#071a2d]/65 to-[#071a2d]/10" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#0b3d6e]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <div className="absolute left-6 top-6 md:left-7 md:top-7">
                <span className="text-xs font-bold tracking-[0.2em] text-[#d9b56a]">
                  {business.number}
                </span>
              </div>

              {/* Arrow */}
              <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-white/30 transition-all duration-300 group-hover:border-[#d9b56a] group-hover:bg-[#d9b56a] md:right-7 md:top-7">
                <ArrowUpRight
                  size={18}
                  className="text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#071a2d]"
                />
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">

                {/* <div className="mb-4 h-[2px] w-9 bg-[#c79a45] transition-all duration-300 group-hover:w-16" /> */}

                <h3 className="text-2xl font-extrabold leading-tight text-white">
                  {business.name}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-white/65 transition-colors duration-300 group-hover:text-white/80">
                  {business.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d9b56a]">
                  Explore business
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

              </div>
            </Link>
          ))}

          {/* Future Businesses */}
          <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden bg-[#071a2d] p-7 md:p-8">

            {/* Decorative Element */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#c79a45]/20" />
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#c79a45]/20" />

            <div className="relative z-10 flex items-start justify-between">
             

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                Future Portfolio
              </span>
            </div>

            <div className="relative z-10">
              {/* <div className="mb-5 h-[2px] w-9 bg-[#c79a45]" /> */}

              <h3 className="max-w-sm text-2xl font-extrabold leading-tight text-white">
                More businesses.
                <br />
                More opportunities.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
                BBGL continues to identify strategic opportunities and develop
                new businesses that contribute to the Group's long-term growth.
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