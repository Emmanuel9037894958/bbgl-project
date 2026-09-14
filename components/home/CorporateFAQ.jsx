"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Search,
  Building2,
  BriefcaseBusiness,
  Handshake,
  Users,
  ShoppingBag,
  Globe2,
  ShieldCheck,
  MessageCircle,
  HelpCircle,
  X,
} from "lucide-react";

const faqCategories = [
  {
    id: "general",
    label: "General",
    icon: Building2,
  },
  {
    id: "business",
    label: "Our Businesses",
    icon: BriefcaseBusiness,
  },
  {
    id: "partnership",
    label: "Partnerships",
    icon: Handshake,
  },
  {
    id: "careers",
    label: "Careers",
    icon: Users,
  },
  {
    id: "products",
    label: "Products & Services",
    icon: ShoppingBag,
  },
  {
    id: "corporate",
    label: "Corporate",
    icon: Globe2,
  },
];

const faqs = [
  {
    id: 1,
    category: "general",
    question: "What is Baki Business Group Limited?",
    answer:
      "Baki Business Group Limited (BBGL) is a Nigerian business group developing and managing business interests across multiple sectors. The Group's approach is centred on building businesses, creating commercial opportunities and developing enterprises with a long-term outlook.",
  },
  {
    id: 2,
    category: "general",
    question: "What does BBGL do?",
    answer:
      "BBGL operates through a growing portfolio of businesses and business interests. Its areas of activity include oil and gas, pharmaceuticals and healthcare distribution, beverages, automotive products and other commercial opportunities.",
  },
  {
    id: 3,
    category: "general",
    question: "Where is BBGL based?",
    answer:
      "BBGL is based in Nigeria, with its corporate office located in Gudu, Abuja, Federal Capital Territory.",
  },
  {
    id: 4,
    category: "general",
    question: "Is BBGL a single business or a group of businesses?",
    answer:
      "BBGL is structured as a business group with interests across multiple sectors. Individual businesses and enterprises can operate within their respective markets while forming part of the broader BBGL portfolio.",
  },

  {
    id: 5,
    category: "business",
    question: "What businesses are part of the BBGL portfolio?",
    answer:
      "BBGL's portfolio includes interests such as Baki Oil & Gas, TLV Pharmaceutical & Healthcare Distribution, BBGL Beverage Company and automotive battery activities. The Group may also develop additional businesses and opportunities as its portfolio expands.",
  },
  {
    id: 6,
    category: "business",
    question: "What sectors does BBGL operate in?",
    answer:
      "The Group's current areas of business interest include energy and oil & gas, healthcare and pharmaceuticals, beverages and consumer businesses, automotive products and related commercial opportunities.",
  },
  {
    id: 7,
    category: "business",
    question: "Does BBGL plan to enter more industries?",
    answer:
      "BBGL's business model allows room for continued development and expansion into additional sectors where appropriate commercial opportunities exist and where the Group can build sustainable value.",
  },
  {
    id: 8,
    category: "business",
    question: "Are BBGL's businesses independently operated?",
    answer:
      "Individual businesses may have their own operational activities, products, services and market responsibilities while operating within the broader strategic direction of the BBGL Group.",
  },

  {
    id: 9,
    category: "partnership",
    question: "Can companies partner with BBGL?",
    answer:
      "Yes. Businesses, organisations and individuals with relevant commercial opportunities can contact BBGL regarding potential partnerships, collaborations, supplier relationships, investment-related discussions or other legitimate business proposals.",
  },
  {
    id: 10,
    category: "partnership",
    question: "How can I submit a business proposal to BBGL?",
    answer:
      "Business proposals can be submitted through the BBGL contact page. Provide clear information about your organisation, the proposed opportunity, the intended business area and the value or purpose of the proposed relationship.",
  },
  {
    id: 11,
    category: "partnership",
    question: "Does BBGL work with suppliers and vendors?",
    answer:
      "BBGL may engage suppliers, vendors and service providers across its business activities. Organisations interested in establishing a supplier or vendor relationship can submit an enquiry through the contact page.",
  },
  {
    id: 12,
    category: "partnership",
    question: "Can I propose a joint venture or strategic collaboration?",
    answer:
      "You can submit information about a proposed joint venture or strategic collaboration through the contact page. The proposal should clearly explain the parties involved, the opportunity, the intended market and the proposed structure.",
  },

  {
    id: 13,
    category: "careers",
    question: "Can I apply for a job at BBGL?",
    answer:
      "Career opportunities may be available across different areas of the Group. Interested candidates should visit the Careers page and follow the instructions provided for available opportunities.",
  },
  {
    id: 14,
    category: "careers",
    question: "Does BBGL recruit across different business areas?",
    answer:
      "As a growing business group, staffing requirements can vary according to business operations and organisational needs. Opportunities may arise across corporate, operational, commercial, technical and administrative functions.",
  },
  {
    id: 15,
    category: "careers",
    question: "Can I send a general career enquiry?",
    answer:
      "Yes. If you have a career-related question or would like to make a general employment enquiry, you can use the BBGL contact page or visit the Careers section of the website.",
  },

  {
    id: 16,
    category: "products",
    question: "What products and services are associated with BBGL?",
    answer:
      "The Group's portfolio covers different products and services depending on the business involved. These areas include oil and gas activities, pharmaceutical and healthcare distribution, beverages and automotive battery products.",
  },
  {
    id: 17,
    category: "products",
    question: "Can customers make enquiries about a specific BBGL business?",
    answer:
      "Yes. Visitors can identify the relevant business or area when submitting an enquiry through the contact page. This helps the enquiry reach the appropriate area of the organisation.",
  },
  {
    id: 18,
    category: "products",
    question: "Does BBGL sell directly to individual customers?",
    answer:
      "Customer and distribution arrangements vary according to the specific business and product involved. For information about a particular product or business activity, visitors can submit an enquiry through the contact page.",
  },
  {
    id: 19,
    category: "products",
    question: "Can businesses enquire about bulk or commercial opportunities?",
    answer:
      "Yes. Businesses interested in commercial supply, distribution, procurement or other business-to-business opportunities can submit an enquiry through the contact page with details of their requirements.",
  },

  {
    id: 20,
    category: "corporate",
    question: "What is BBGL's vision?",
    answer:
      "BBGL's vision is centred on building a group of enduring businesses, developing opportunities across strategic sectors and creating long-term value through disciplined business development.",
  },
  {
    id: 21,
    category: "corporate",
    question: "What approach does BBGL take to business development?",
    answer:
      "BBGL focuses on identifying opportunities, developing businesses around viable markets, strengthening operations and pursuing sustainable growth over the long term.",
  },
  {
    id: 22,
    category: "corporate",
    question: "How does BBGL approach growth?",
    answer:
      "Growth is approached through business development, operational execution, market opportunities and the continued strengthening of businesses within the Group's portfolio.",
  },
  {
    id: 23,
    category: "corporate",
    question: "Does BBGL accept media or press enquiries?",
    answer:
      "Yes. Media organisations and journalists with legitimate enquiries relating to BBGL or its businesses can submit their request through the contact page.",
  },
  {
    id: 24,
    category: "corporate",
    question: "Can organisations request corporate information?",
    answer:
      "Corporate information requests can be submitted through the contact page. Providing the purpose of the request and the specific information required helps BBGL understand and route the enquiry appropriately.",
  },
];

export default function CorporateFAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;

      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenFaq(null);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <section className="relative overflow-hidden bg-white py-11 sm:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-emerald-500/[0.035] blur-[100px]" />

        <div className="absolute right-[-180px] bottom-[10%] h-[460px] w-[460px] rounded-full bg-[#0b3d6e]/[0.035] blur-[110px]" />
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[45%] opacity-[0.018]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#0b3d6e 1px, transparent 1px), linear-gradient(90deg, #0b3d6e 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-emerald-600" />

            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-emerald-700 sm:text-xs">
              Frequently Asked Questions
            </p>

            <span className="h-px w-10 bg-emerald-600" />
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#071b2f] sm:text-4xl lg:text-5xl">
            Answers to the questions
            <span className="block text-emerald-600">
              that matter.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Learn more about Baki Business Group Limited, our businesses,
            partnerships, career opportunities and the areas in which we
            operate.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="group relative">
            <Search
              size={19}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-emerald-600"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-13 pr-12 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={17} />
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-max items-center justify-center gap-2">
            {faqCategories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                    active
                      ? "border-[#071b2f] bg-[#071b2f] text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-600 hover:border-emerald-500 hover:text-emerald-700"
                  }`}
                >
                  <Icon size={15} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          {/* Left information */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden border-y border-slate-200 py-8">
              <div className="absolute left-0 top-0 h-full w-[2px] bg-emerald-500" />

              <div className="pl-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071b2f] text-emerald-400">
                  <HelpCircle size={20} />
                </div>

                <p className="mt-7 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">
                  BBGL Information Centre
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#071b2f] sm:text-3xl">
                  Need to understand
                  <span className="block text-emerald-600">
                    BBGL better?
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Browse the questions below to learn more about the Group,
                  its business portfolio, partnerships, careers and corporate
                  activities.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />

                    <p className="text-xs leading-6 text-slate-500">
                      Information is organised by business and corporate
                      topics for easier navigation.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />

                    <p className="text-xs leading-6 text-slate-500">
                      For questions not covered here, you can send a direct
                      enquiry to the BBGL team.
                    </p>
                  </div>
                </div>

                {/* Direct contact button */}
                <Link
                  href="/contact"
                  className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#4b688b] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b3d6e]"
                >
                  Contact BBGL
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ accordion */}
          <div>
            {filteredFaqs.length > 0 ? (
              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openFaq === faq.id;

                  return (
                    <div
                      key={faq.id}
                      className="group"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(isOpen ? null : faq.id)
                        }
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className={`mt-1 h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                              isOpen
                                ? "bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.08)]"
                                : "bg-slate-300 group-hover:bg-emerald-400"
                            }`}
                          />

                          <span
                            className={`text-sm font-bold leading-6 transition-colors duration-300 sm:text-base ${
                              isOpen
                                ? "text-emerald-700"
                                : "text-[#071b2f] group-hover:text-emerald-700"
                            }`}
                          >
                            {faq.question}
                          </span>
                        </div>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "rotate-180 border-emerald-500 bg-emerald-500 text-white"
                              : "border-slate-200 bg-white text-slate-500 group-hover:border-emerald-400 group-hover:text-emerald-600"
                          }`}
                        >
                          <ChevronDown size={17} />
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pb-7 pl-6 sm:pl-10">
                            <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="border-y border-slate-200 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                  <Search size={21} />
                </div>

                <h3 className="mt-5 text-xl font-black text-[#071b2f]">
                  No matching questions
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  We could not find an FAQ matching your search. Try a
                  different keyword or browse another category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("general");
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-xs font-bold text-[#071b2f] transition hover:border-emerald-500 hover:text-emerald-700"
                >
                  Reset FAQ
                  <ArrowRight size={15} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border-t border-slate-200 pt-10 sm:mt-20 sm:pt-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Still have a question?
              </p>

              <h3 className="mt-2 text-xl font-black tracking-tight text-[#071b2f] sm:text-2xl">
                Let&apos;s continue the conversation.
              </h3>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Go to Contact Page
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}