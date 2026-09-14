import Image from "next/image";

export default function Vision() {
  return (
    <section className="relative overflow-hidden ">

      {/* Fixed Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/vision.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#071a2d]/85" />

      {/* Background Accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full max-w-2xl">
        <div className="absolute right-[-15%] top-[-20%] h-[600px] w-[600px] rounded-full bg-[#c79a45]/10 blur-3xl" />

        <div className="absolute right-0 top-0 h-full w-[45%] bg-gradient-to-l from-[#0b3d6e]/30 to-transparent" />
      </div>

      {/* Top Border */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#c79a45]/50 to-transparent" />

      <div className="bbgl-container relative py-24 md:py-32 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">

          {/* Main Content */}
          <div>
            <div className="mb-7 flex items-center gap-4">
              {/* <span className="h-px w-10 bg-[#c79a45]" /> */}

              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#d9b56a]">
                Our Vision
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Building a group of

              <span className="block text-[#d9b56a]">
                enduring businesses.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white md:text-lg md:leading-9">
              To build enduring enterprises that define industries, create meaningful value,and as legacy for generations, grow businesses that create meaningful
              value, serve their markets effectively and contribute to
              sustainable economic development.
            </p>
          </div>

          {/* Vision Statement Area */}
          <div className="border-l border-white/10 pl-7 lg:mb-2 lg:pl-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c79a45]">
              The BBGL Mission
            </span>

            <p className="mt-5 text-lg font-medium leading-8 text-white md:text-xl md:leading-9">
              To build,operate and grow high performing businesses across diverse industries,delivering trusted products and services, creating sustainable value,and setting a standard of excellence in every market we serve.
            </p>

            {/* <div className="mt-8 h-px w-12 bg-[#c79a45]" /> */}
          </div>

        </div>
      </div>
    </section>
  );
}