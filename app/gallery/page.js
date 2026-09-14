import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const businesses = [
  {
    name: "BBGL Beverage Company",
    description:
      "A BBGL business focused on beverages and the wider consumer market, with attention to production, distribution and commercial growth.",
    image: "/beer.jpg",
  },
  {
    name: "TLV Pharmaceutical & Healthcare Distribution",
    description:
      "A healthcare-focused business involved in pharmaceuticals and healthcare distribution, supporting access to essential healthcare products.",
    image: "/tlv2.jpg",
  },
  {
    name: "Baki Oil & Gas",
    description:
      "A core BBGL business operating within the oil and gas sector, serving opportunities across energy, petroleum products and distribution.",
    image: "/image2.jpg",
  },
  {
    name: "Car Batteries",
    description:
      "A BBGL automotive business focused on car batteries and battery solutions for individual and commercial vehicle users.",
    image: "/battary.jpg",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative min-h-[430px] overflow-hidden bg-[#071b2f]">
          <div className="absolute inset-0">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_35%)]" />

          <div className="relative mx-auto flex min-h-[430px] w-full max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                BBGL Gallery
              </p>

              <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Businesses
                <span className="block text-emerald-400">in Focus.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                A visual look at the businesses and sectors that form part of
                the BBGL portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY WITH BACKGROUND IMAGE */}
        <section
          className="relative overflow-hidden bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('/hero3.jpg')",
          }}
        >
          {/* BACKGROUND OVERLAY */}
          <div className="absolute inset-0 bg-white/50" />

          {/* EXTRA SOFT OVERLAY */}
          <div className="absolute inset-0 bg-slate-50/30" />

          <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            {/* SECTION INTRO */}
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                Business Portfolio
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                What BBGL Does
              </h2>

              <p className="mt-4 text-lg leading-7 sm:text-base">
                BBGL operates across multiple areas, building businesses around
                practical products, services and commercial opportunities.
              </p>
            </div>

            {/* BUSINESS GALLERY */}
            <div className="grid gap-7 lg:grid-cols-2">
              {businesses.map((business) => (
                <article
                  key={business.name}
                  className="group overflow-hidden rounded-2xl border border-white/80 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-[280px] overflow-hidden sm:h-[340px] lg:h-[380px]">
                    <Image
                      src={business.image}
                      alt={business.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* BUSINESS TITLE */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                        BBGL Business
                      </span>

                      <h3 className="mt-3 max-w-xl text-2xl font-black leading-tight text-white sm:text-3xl">
                        {business.name}
                      </h3>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="p-6 sm:p-8">
                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      {business.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Part of the BBGL Portfolio
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  One Vision. Many Enterprises.
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  Building businesses across sectors.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  BBGL continues to develop its business portfolio with a
                  focus on sustainable commercial opportunities and long-term
                  growth.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit shrink-0 items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:bg-emerald-700 hover:shadow-xl active:scale-[0.98]"
              >
                Contact BBGL
                <span className="ml-2 text-lg">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}