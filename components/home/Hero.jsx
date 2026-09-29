"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full overflow-hidden bg-slate-100 ">
        {" "}
        <Image
          src="/bbgl.jpg"
          alt="Baki Business Group Limited and its subsidiaries"
          width={1920}
          height={1500}
          priority
          className="h-auto object-center w-full object-cover"
        />
      </div>
      {/* ================================
    COMPANY INTRODUCTION
================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="max-w-[1000px]">
            {/* Small Label */}
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-emerald-600 sm:text-base">
              About Baki Business Group Limited
            </p>

           

            {/* Company Introduction */}
            <div className="mt-7 max-w-4xl space-y-5 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">
              <p>
                BBGL is a diversified business group with interests spanning Oil
                & Gas, Pharmaceuticals, Automobiles, Technology and Consumer
                Products.
              </p>

              <p>
                The Group brings together businesses operating across sectors
                under a shared vision, strong leadership, and a commitment to
                building enduring enterprises with distinct identities and
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
