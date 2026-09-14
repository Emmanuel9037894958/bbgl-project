import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function GroupIntro() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 md:py-28 lg:py-32">
      <div className="bbgl-container">
        <div className="mx-auto max-w-5xl">
          {/* Section Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c79a45]">
              The Group
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-4xl text-3xl font-extrabold leading-[1.12] tracking-[-0.02em] text-[#071a2d] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            A diversified group built around{" "}
            <span className="text-[#0b3d6e]">
              long-term value.
            </span>
          </h2>

          {/* Description */}
          <div className="mt-7 max-w-3xl space-y-5">
            <p className="text-base leading-8 text-[#667085] md:text-[17px]">
              Baki Business Group Limited is a diversified business group
              with interests spanning multiple sectors through its
              subsidiaries and associated ventures.
            </p>

            <p className="text-base leading-8 text-[#667085] md:text-[17px]">
              We bring together businesses with distinct capabilities under
              a shared commitment to disciplined execution, sustainable
              growth and responsible value creation.
            </p>

            <p className="text-base leading-8 text-[#667085] md:text-[17px]">
              As the Group continues to expand, our focus remains clear:
              building resilient businesses, developing strategic
              opportunities and creating lasting value for our stakeholders.
            </p>
          </div>

          {/* Corporate Image */}
          <div className="relative mt-10 overflow-visible">
            <div className="relative aspect-[16/8] overflow-hidden rounded-xl bg-[#0a2238]">
              <Image
                src="/image1.jpg"
                alt="Baki Business Group Limited"
                fill
                className="object-cover"
                priority
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#071a2d]/40 via-transparent to-[#c79a45]/10" />
            </div>

            {/* Decorative Corner */}
            <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 border-b border-r border-[#c79a45] md:block" />

            {/* Image Caption */}
            <div className="absolute -bottom-5 left-5 bg-white px-5 py-4 shadow-lg md:left-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c79a45]">
                Baki Business Group
              </p>

              <p className="mt-1 text-xs text-[#667085]">
                Building businesses. Creating value.
              </p>
            </div>
          </div>

          {/* Discover Button */}
          <div className="mt-10">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 border-b border-[#0b3d6e] pb-2 text-sm font-bold text-[#0b3d6e] transition-all duration-300 hover:border-[#c79a45] hover:text-[#c79a45]"
            >
              Discover the Group

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}