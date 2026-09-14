import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe2,
  GraduationCap,
  Handshake,
  Lightbulb,
  Mail,
  Users,
} from "lucide-react";

const careerAreas = [
  {
    icon: BriefcaseBusiness,
    title: "Business & Operations",
    description:
      "Opportunities across business operations, administration, coordination and organisational support.",
  },
  {
    icon: Building2,
    title: "Commercial & Sales",
    description:
      "Build relationships, develop markets and contribute to the commercial growth of BBGL businesses.",
  },
  {
    icon: Globe2,
    title: "Energy & Industrial",
    description:
      "Explore opportunities connected to oil and gas, automotive products and other strategic business areas.",
  },
  {
    icon: Lightbulb,
    title: "Technology",
    description:
      "Contribute to technology-driven initiatives and digital opportunities across the wider group.",
  },
  {
    icon: Users,
    title: "People & Administration",
    description:
      "Support the people, systems and processes that help the organisation operate effectively.",
  },
  {
    icon: GraduationCap,
    title: "Graduate & Emerging Talent",
    description:
      "Opportunities for ambitious young professionals looking to develop practical experience and grow their careers.",
  },
];

const values = [
  "Integrity in how we work and make decisions",
  "Professionalism in our relationships and responsibilities",
  "Commitment to quality and continuous improvement",
  "Respect for people, ideas and different perspectives",
  "A growth mindset focused on learning and development",
  "Accountability for results and responsibilities",
];

const process = [
  {
    number: "01",
    title: "Submit your interest",
    description:
      "Introduce yourself and share your professional background, skills and area of interest.",
  },
  {
    number: "02",
    title: "Initial review",
    description:
      "Our team reviews applications and considers candidates against current or future opportunities.",
  },
  {
    number: "03",
    title: "Engagement",
    description:
      "Selected candidates may be contacted for further discussions, interviews or assessments.",
  },
  {
    number: "04",
    title: "Opportunity",
    description:
      "Successful candidates move forward into an appropriate role or opportunity within the group.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#12304a]">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c79a45]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              {/* <span className="h-px w-12 bg-[#d9b56a]" /> */}

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#d9b56a]">
                Careers at BBGL
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Build your
              <span className="block text-[#d9b56a]">
                future with us.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Join a growing business group building opportunities across
              multiple sectors. At BBGL, we believe strong businesses are
              built by capable people with the ambition to make a difference.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#opportunities"
                className="inline-flex items-center gap-2 rounded-full bg-[#c79a45] px-6 py-3.5 text-sm font-bold text-[#071a2d] transition hover:bg-[#d9b56a]"
              >
                Explore Opportunities
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#how-to-apply"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
              >
                How to Apply
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#c79a45] to-transparent" />
      </section>

      {/* MAIN CAREERS IMAGE */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-[300px] overflow-hidden rounded-2xl sm:h-[420px] lg:h-[560px]">
            <Image
              src="/carrer.jpg"
              alt="Careers at Baki Business Group Limited"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d]/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 sm:p-10 lg:p-14">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b56a]">
                People. Purpose. Progress.
              </p>

              <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Building businesses through people.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-slate-50 py-11 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              {/* <span className="h-px w-10 bg-[#c79a45]" /> */}

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#12304a]">
                Why BBGL
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#071a2d] sm:text-4xl lg:text-5xl">
              More than a job.
              <span className="block text-[#c79a45]">
                A place to grow.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Baki Business Group Limited operates across a growing portfolio
              of businesses and sectors. As the group develops, we are
              committed to attracting people who bring competence, initiative
              and a willingness to learn.
            </p>

            <p>
              Whether you are an experienced professional, a young graduate
              or someone developing your career, we value people who take
              responsibility, solve problems and contribute positively to the
              organisation.
            </p>

            <p className="font-medium text-[#12304a]">
              Your next opportunity could be part of the journey we are
              building.
            </p>
          </div>
        </div>
      </section>

      {/* CAREER AREAS */}
      <section
        id="opportunities"
        className="scroll-mt-20 bg-white py-11 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              {/* <span className="h-px w-10 bg-[#c79a45]" /> */}

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#12304a]">
                Career Areas
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#071a2d] sm:text-4xl">
              Where your skills can make an impact.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our growing portfolio creates opportunities across different
              professional disciplines and business functions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {careerAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c79a45]/50 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#12304a] text-[#d9b56a] transition group-hover:bg-[#c79a45] group-hover:text-[#071a2d]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-[#071a2d]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#12304a] transition group-hover:text-[#c79a45]">
                    Explore
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-[#071a2d] py-11 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              {/* <span className="h-px w-10 bg-[#c79a45]" /> */}

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b56a] pb-3">
                Our Culture
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The standard we expect from ourselves.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-300">
              We want people who are willing to learn, take ownership and
              contribute to a professional working environment.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={value}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#c79a45]/40 hover:bg-white/[0.07]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#c79a45]" />

                <div>
                  <span className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-slate-500">
                    0{index + 1}
                  </span>

                  <p className="text-sm leading-6 text-slate-200">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                {/* <span className="h-px w-10 bg-[#c79a45]" /> */}

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#12304a] pb-4">
                  Development
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#071a2d] sm:text-4xl lg:text-5xl">
                We believe capable people create stronger businesses.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Career development is built through experience, responsibility,
                collaboration and continuous learning. As BBGL grows, we aim
                to create an environment where people can develop their skills
                while contributing to meaningful business objectives.
              </p>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#12304a] transition hover:text-[#c79a45]"
                >
                  Learn more about BBGL
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-[#12304a] p-8 sm:p-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#c79a45]/10 blur-3xl" />

              <div className="relative">
                <GraduationCap className="h-10 w-10 text-[#d9b56a]" />

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  Learn. Contribute. Grow.
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  We encourage people to develop practical knowledge, take on
                  responsibility and grow through real-world business
                  experience.
                </p>

                <div className="mt-8 h-px bg-white/10" />

                <div className="mt-7 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#d9b56a]">
                      Learn
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Build knowledge
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#d9b56a]">
                      Contribute
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Create value
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#d9b56a]">
                      Grow
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Build your career
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section
        id="how-to-apply"
        className="scroll-mt-20 bg-white py-11 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              {/* <span className="h-px w-10 bg-[#c79a45]" /> */}

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#12304a] pb-4">
                How to Apply
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#071a2d] sm:text-4xl">
              Start a conversation with BBGL.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our recruitment process may vary depending on the opportunity.
              The following provides a general guide for prospective
              candidates.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <span className="text-4xl font-semibold text-slate-200">
                  {item.number}
                </span>

                <h3 className="mt-6 text-lg font-semibold text-[#071a2d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12304a] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#c79a45] text-[#071a2d]">
            <Handshake className="h-6 w-6" />
          </div>

          <h2 className="mt-7 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to explore your next opportunity?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Send us your professional profile and tell us where you believe
            you can contribute to the growth of Baki Business Group Limited.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:bbglheadquarters@gmail.com?subject=Career%20Enquiry%20-%20BBGL"
              className="inline-flex items-center gap-2 rounded-full bg-[#c79a45] px-7 py-3.5 text-sm font-bold text-[#071a2d] transition hover:bg-[#d9b56a]"
            >
              <Mail className="h-4 w-4" />
              Send Your CV
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white px-7 py-3.5 text-sm  font-semibold text-white transition hover:border-white/40"
            >
              Contact BBGL
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}