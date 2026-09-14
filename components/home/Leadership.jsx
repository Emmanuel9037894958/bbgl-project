import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Target,
  Users,
  TrendingUp,
  BriefcaseBusiness,
  ChevronRight,
} from "lucide-react";

const leaders = [
  {
    number: "01",
    name: "Ibaki Obidike Jerry",
    role: "Founder & President",
    image: "/images/leadership/ibaki-obidike-jerry.jpg",
    description:
      "As Founder and President of Baki Business Group Limited, Ibaki Obidike Jerry provides strategic direction and leadership across the group's growing portfolio of businesses.",
    focus: [
      "Strategic direction",
      "Business development",
      "Corporate leadership",
      "Long-term growth",
    ],
  },
  {
    number: "02",
    name: "Otuh Kenneth Okechukwu",
    role: "National Sales Director",
    image: "/images/leadership/otuh-kenneth-okechukwu.jpg",
    description:
      "As National Sales Director, Otuh Kenneth Okechukwu contributes to the group's commercial direction, sales development and market-facing operations.",
    focus: [
      "Sales leadership",
      "Market development",
      "Commercial operations",
      "Customer relationships",
    ],
  },
];

const principles = [
  {
    icon: Target,
    title: "Strategic Direction",
    text:
      "Leadership at BBGL is focused on identifying meaningful opportunities and building businesses with a clear long-term direction.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Leadership",
    text:
      "We believe sustainable business growth requires accountability, discipline and responsible decision-making.",
  },
  {
    icon: Users,
    title: "People & Collaboration",
    text:
      "Strong businesses are built by people. BBGL values teamwork, communication and the contribution of its people.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    text:
      "Our leadership approach encourages improvement, adaptation and the pursuit of new opportunities across our businesses.",
  },
];

const responsibilities = [
  {
    number: "01",
    title: "Corporate Strategy",
    text:
      "Providing direction for the group's businesses and helping align individual enterprises with the broader BBGL vision.",
  },
  {
    number: "02",
    title: "Business Development",
    text:
      "Identifying opportunities for expansion, partnerships and sustainable commercial development.",
  },
  {
    number: "03",
    title: "Operational Leadership",
    text:
      "Supporting effective execution across the group's business interests and maintaining focus on performance.",
  },
  {
    number: "04",
    title: "Market Engagement",
    text:
      "Building relationships with customers, partners and stakeholders across the markets in which BBGL operates.",
  },
];

export default function LeadershipPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[620px] overflow-hidden bg-[#12304a] sm:min-h-[680px] lg:min-h-[740px]">

        <Image
          src="/images/leadership/ibaki-obidike-jerry.jpg"
          alt="Ibaki Obidike Jerry - Founder and President of BBGL"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d]/95 via-[#071a2d]/45 to-transparent" />

        <div className="bbgl-container relative z-10 flex min-h-[620px] items-end pb-14 sm:min-h-[680px] sm:pb-20 lg:min-h-[740px]">

          <div className="max-w-4xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9b56a]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#d9b56a]">
                Leadership
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Leadership that
              <span className="text-[#d9b56a]"> moves business forward.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Meet the leadership guiding Baki Business Group Limited,
              shaping its strategic direction and supporting the continued
              development of its businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="#executives"
                className="inline-flex items-center gap-2 bg-[#c79a45] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b68936]"
              >
                Meet our leadership
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#071a2d]"
              >
                About BBGL
                <ChevronRight size={17} />
              </Link>

            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#c79a45] to-transparent" />

      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white py-20 sm:py-24">

        <div className="bbgl-container">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b78938]">
                Our Leadership
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#071a2d] sm:text-4xl lg:text-5xl">
                Direction,
                <br />
                responsibility
                <br />
                and execution.
              </h2>
            </div>

            <div className="max-w-2xl lg:ml-auto">

              <p className="text-lg leading-8 text-slate-600">
                The strength of a business group depends not only on the
                businesses it operates, but also on the quality of leadership
                guiding those businesses.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-500">
                At BBGL, leadership is about establishing direction, making
                responsible decisions, developing people and creating an
                environment where businesses can grow with purpose.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          EXECUTIVES
      ====================================================== */}
      <section
        id="executives"
        className="bg-[#f7f9fb] py-20 sm:py-24 lg:py-28"
      >

        <div className="bbgl-container">

          <div className="mb-14 max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b78938]">
              Executive Leadership
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071a2d] sm:text-4xl">
              The people behind the direction.
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              BBGL's leadership structure brings together strategic and
              commercial responsibilities to support the group's businesses.
            </p>

          </div>


          <div className="space-y-8">

            {leaders.map((leader) => (

              <article
                key={leader.name}
                className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="grid lg:grid-cols-[420px_1fr]">

                  {/* IMAGE */}
                  <div className="relative min-h-[430px] overflow-hidden bg-[#12304a] sm:min-h-[520px] lg:min-h-[580px]">

                    <Image
                      src={leader.image}
                      alt={`${leader.name} - ${leader.role}`}
                      fill
                      className="object-cover object-center transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d]/75 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6">
                      <span className="text-5xl font-light text-white/40">
                        {leader.number}
                      </span>
                    </div>

                  </div>


                  {/* CONTENT */}
                  <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">

                    <div>

                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b78938]">
                        {leader.role}
                      </p>

                      <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#071a2d] sm:text-4xl">
                        {leader.name}
                      </h3>

                      <div className="mt-6 h-px w-16 bg-[#c79a45]" />

                      <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
                        {leader.description}
                      </p>

                    </div>


                    <div className="mt-10">

                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Leadership Focus
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">

                        {leader.focus.map((item) => (

                          <div
                            key={item}
                            className="flex items-center gap-3 border border-slate-200 bg-slate-50 px-4 py-3"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c79a45]" />

                            <span className="text-sm font-medium text-slate-700">
                              {item}
                            </span>
                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LEADERSHIP PRINCIPLES
      ====================================================== */}
      <section className="bg-[#071a2d] py-20 sm:py-24 lg:py-28">

        <div className="bbgl-container">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b56a]">
                Leadership Principles
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                How we think about leadership.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-slate-400">
                Leadership at BBGL is built around clarity of direction,
                responsible execution and a commitment to developing the
                businesses and people within the group.
              </p>

            </div>


            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">

              {principles.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group bg-[#0b243b] p-7 transition duration-300 hover:bg-[#12304a] sm:p-8"
                  >

                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#d9b56a]"
                    />

                    <h3 className="mt-7 text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.text}
                    </p>

                  </div>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESPONSIBILITIES
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <div className="bbgl-container">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b78938]">
                Leadership Scope
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#071a2d] sm:text-4xl">
                Turning direction into action.
              </h2>

              <p className="mt-6 leading-7 text-slate-500">
                BBGL leadership spans strategic planning, business
                development, operations and engagement with the markets and
                stakeholders connected to the group's businesses.
              </p>

            </div>


            <div className="divide-y divide-slate-200 border-y border-slate-200">

              {responsibilities.map((item) => (

                <div
                  key={item.number}
                  className="group grid gap-5 py-7 sm:grid-cols-[80px_220px_1fr] sm:items-start"
                >

                  <span className="text-sm font-bold text-[#c79a45]">
                    {item.number}
                  </span>

                  <h3 className="text-lg font-semibold text-[#071a2d] transition group-hover:text-[#b78938]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GOVERNANCE
      ====================================================== */}
      <section className="bg-[#f7f9fb] py-20 sm:py-24">

        <div className="bbgl-container">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c79a45]/30 bg-white">
              <BriefcaseBusiness
                size={24}
                strokeWidth={1.5}
                className="text-[#b78938]"
              />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#b78938]">
              Corporate Governance
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071a2d] sm:text-4xl">
              Building with accountability.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-500">
              As BBGL continues to develop its portfolio, effective
              governance remains important to how the group approaches
              decision-making, accountability, business performance and
              stakeholder relationships.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#12304a] py-20 sm:py-24">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#c79a45]/10 blur-3xl" />

        <div className="bbgl-container relative z-10">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b56a]">
                Explore BBGL
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Discover the businesses behind the group.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                Explore the companies and sectors that form the growing BBGL
                portfolio.
              </p>

            </div>

            <Link
              href="/businesses"
              className="inline-flex w-fit items-center gap-2 bg-[#c79a45] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#b68936]"
            >
              View our businesses
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}