"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Users,
  BriefcaseBusiness,
  Headphones,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const enquiryTypes = [
  "General Enquiry",
  "Business Enquiry",
  "Partnership",
  "Sales Enquiry",
  "Career Enquiry",
  "Supplier / Vendor Enquiry",
  "Media / Press",
  "Other",
];

const businessAreas = [
  "BBGL Corporate",
  "Baki Oil & Gas",
  "TLV Pharmaceutical & Healthcare Distribution",
  "BBGL Beverage Company",
  "Automotive Batteries",
  "Not Sure / General BBGL Enquiry",
];

const contactMethods = ["Email", "Phone Call", "WhatsApp"];

const faqs = [
  {
    question: "What type of enquiries can I send to BBGL?",
    answer:
      "You can contact BBGL regarding general enquiries, business opportunities, partnerships, sales matters, supplier relationships, careers, media enquiries and other corporate matters.",
  },
  {
    question: "Can I contact a specific BBGL business?",
    answer:
      "Yes. Use the business-area selector in the enquiry form to indicate the BBGL company or business area your enquiry relates to.",
  },
  {
    question: "Can I submit a partnership proposal?",
    answer:
      "Yes. Select Partnership in the enquiry type and provide enough information about your organisation, proposal and how you believe the partnership could create value.",
  },
  {
    question: "How should I submit a career enquiry?",
    answer:
      "Select Career Enquiry in the form and clearly state the role, area of interest and relevant experience. You can also visit the Careers page for more information.",
  },
  {
    question: "Where is the BBGL head office located?",
    answer:
      "The BBGL head office is located at E9 Century Mall, Gudu, FCT Abuja, Nigeria.",
  },
];

/* =========================================================
   HELPER COMPONENTS
========================================================= */

function ContactCard({ icon: Icon, label, title, text, href, action }) {
  return (
    <div className="group bg-white p-6 transition-all duration-300 hover:bg-[#071a2d] sm:p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[#071a2d] transition-all duration-300 group-hover:bg-white/10 group-hover:text-[#d9b56a]">
        <Icon size={20} />
      </div>
      <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#b3832f] group-hover:text-[#d9b56a]">
        {label}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-[#071a2d] group-hover:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-300">
        {text}
      </p>
      <a
        href={href}
        className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#071a2d] group-hover:text-white"
      >
        {action}
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}

function InfoRow({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#071a2d]">
        <Icon size={18} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-[#071a2d]">{title}</h4>
        <p className="mt-1 text-xs leading-5 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function FormInput({ label, name, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#071a2d]">
        {label}
      </label>
      <input
        name={name}
        {...props}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#c79a45] focus:bg-white focus:ring-4 focus:ring-[#c79a45]/10"
      />
    </div>
  );
}

function FormSelect({ label, name, options, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#071a2d]">
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          {...props}
          className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all focus:border-[#c79a45] focus:bg-white focus:ring-4 focus:ring-[#c79a45]/10"
        >
          <option value="">Select option</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN CONTACT PAGE
========================================================= */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    enquiryType: "",
    businessArea: "",
    contactMethod: "",
    subject: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        enquiryType: "",
        businessArea: "",
        contactMethod: "",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <main className="bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#071a2d]">
        <div className="absolute inset-0">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#c79a45]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.025]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9b56a]">
              <MessageCircle size={14} />
              Contact BBGL
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Let&apos;s start a{" "}
              <span className="text-[#d9b56a]">conversation.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Whether you are looking to work with BBGL, explore a business
              opportunity, make an enquiry or connect with one of our businesses,
              our team is available to receive your message.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c79a45] px-6 py-3.5 text-sm font-bold text-[#071a2d] transition-all duration-300 hover:bg-[#d9b56a]"
              >
                Send an Enquiry
                <ArrowRight size={17} />
              </a>

              <a
                href="https://wa.me/2348146993407"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-green-600 transition-all duration-300 hover:bg-green-50"
              >
                <MessageCircle size={17} />
                WhatsApp BBGL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="bg-white py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[400px] lg:h-[520px]">
            <Image
              src="/hero2.jpg"
              alt="Baki Business Group Limited"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071a2d]/85 via-[#071a2d]/40 to-transparent" />
            <div className="absolute inset-0 flex items-end">
              <div className="max-w-2xl p-6 sm:p-10 lg:p-14">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b56a]">
                  Connect with BBGL
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Building relationships that create opportunity.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">
                  Reach out to Baki Business Group Limited for corporate, commercial and business enquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={Mail}
            label="Email"
            title="Send us an email"
            text="For general and corporate enquiries."
            href="mailto:bbglheadquarters@gmail.com"
            action="Email BBGL"
          />

          <ContactCard
            icon={Phone}
            label="Phone"
            title="Speak with BBGL"
            text="Call our team directly on either of our official contact numbers."
            href="tel:+2348100257804"
            action="Call BBGL"
          />

          <div className="group bg-white p-6 transition-all duration-300 hover:bg-[#071a2d] sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[#071a2d] transition-all duration-300 group-hover:bg-white/10 group-hover:text-[#d9b56a]">
              <MessageCircle size={20} />
            </div>
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#b3832f] group-hover:text-[#d9b56a]">
              WhatsApp
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[#071a2d] group-hover:text-white">
              Message our team
            </h3>
            <div className="mt-3 space-y-2">
              <a
                href="https://wa.me/2348146993407"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-medium text-slate-600 transition-colors hover:text-green-600 group-hover:text-slate-300 group-hover:hover:text-green-400"
              >
                +234 814 699 3407
              </a>
              <a
                href="https://wa.me/2349113030331"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-medium text-slate-600 transition-colors hover:text-green-600 group-hover:text-slate-300 group-hover:hover:text-green-400"
              >
                +234 911 303 0331
              </a>
            </div>
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#071a2d] group-hover:text-white">
              Start Chat
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>

          <ContactCard
            icon={MapPin}
            label="Head Office"
            title="Visit BBGL"
            text="E9 Century Mall, Gudu, FCT Abuja, Nigeria."
            href="#office"
            action="View Information"
          />
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="contact-form" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b3832f]">
                Get in touch
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071a2d] sm:text-4xl">
                Tell us how we can help.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Use the enquiry form to send your message to BBGL. Providing clear information helps us understand your request and direct it to the appropriate area.
              </p>

              <div className="mt-8 space-y-4">
                <InfoRow
                  icon={Building2}
                  title="Corporate Enquiries"
                  text="General information, business relationships and corporate matters."
                />
                <InfoRow
                  icon={BriefcaseBusiness}
                  title="Business Opportunities"
                  text="Partnerships, commercial opportunities, suppliers and business proposals."
                />
                <InfoRow
                  icon={Users}
                  title="Careers"
                  text="Questions relating to employment and opportunities within BBGL."
                />
                <InfoRow
                  icon={Headphones}
                  title="Customer Support"
                  text="Questions relating to products, services or specific BBGL businesses."
                />
              </div>

              <div className="mt-8 rounded-2xl border border-[#c79a45]/20 bg-green-500 p-5 sm:p-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071a2d] text-[#f9f8f5]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#071a2d]">Official BBGL Contact</h3>
                    <div className="mt-3 space-y-2 text-sm leading-6 text-slate-800">
                      <a
                        href="mailto:bbglheadquarters@gmail.com"
                        className="flex items-center gap-2 transition-colors hover:text-[#b3832f]"
                      >
                        <Mail size={15} />
                        bbglheadquarters@gmail.com
                      </a>
                      <a
                        href="tel:+2349113030331"
                        className="flex items-center gap-2 transition-colors hover:text-[#b3832f]"
                      >
                        <Phone size={15} />
                        +234 911 303 0331
                      </a>
                      <a
                        href="tel:+2348100257803"
                        className="flex items-center gap-2 transition-colors hover:text-[#b3832f]"
                      >
                        <Phone size={15} />
                        +234 810 025 7804
                      </a>
                      <p className="flex items-start gap-2">
                        <MapPin size={15} className="mt-1 shrink-0" />
                        E9 Century Mall, Gudu, FCT Abuja, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(7,26,45,0.08)] sm:p-8 lg:p-10">
              {!submitted ? (
                <>
                  <div className="mb-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b3832f]">
                      Enquiry Form
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#071a2d]">
                      Send us a message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormInput
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                      <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormInput
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234..."
                      />
                      <FormInput
                        label="Company / Organisation"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormSelect
                        label="Enquiry Type"
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        options={enquiryTypes}
                        required
                      />
                      <FormSelect
                        label="Business Area"
                        name="businessArea"
                        value={formData.businessArea}
                        onChange={handleChange}
                        options={businessAreas}
                        required
                      />
                    </div>

                    <FormSelect
                      label="Preferred Contact Method"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      options={contactMethods}
                    />

                    <FormInput
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is your enquiry about?"
                      required
                    />

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#071a2d]">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us more about your enquiry..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#c79a45] focus:bg-white focus:ring-4 focus:ring-[#c79a45]/10"
                      />
                    </div>

                    <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#b3832f]"
                      />
                      <p className="text-xs leading-5 text-slate-500">
                        Please provide accurate contact information so the appropriate BBGL team can respond to your enquiry.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#071a2d] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0d2a45] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {sending ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending Enquiry...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <Send size={17} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold text-[#071a2d]">
                    Enquiry received
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                    Thank you for contacting BBGL. Your message has been submitted successfully.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-[#071a2d] transition hover:border-[#c79a45] hover:text-[#b3832f]"
                  >
                    Send Another Enquiry
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="bg-[#071a2d] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b56a]">
              Our businesses
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Looking for a specific BBGL business?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              BBGL is developing a growing portfolio of businesses across strategic sectors. Select the area relevant to your enquiry when using our contact form.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessAreas.slice(0, 5).map((business) => (
              <div
                key={business}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c79a45]/50 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">{business}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      BBGL Business Portfolio
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-[#c79a45] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICE & AVAILABILITY */}
      <section id="office" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#071a2d] p-7 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#d9b56a]">
                <MapPin size={22} />
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#d9b56a]">
                Head Office
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                BBGL Head Office
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                E9 Century Mall,
                <br />
                Gudu,
                <br />
                FCT Abuja,
                <br />
                Nigeria.
              </p>
              <a
                href="mailto:bbglheadquarters@gmail.com"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#d9b56a]"
              >
                <Mail size={17} />
                bbglheadquarters@gmail.com
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[#071a2d]">
                <Clock3 size={22} />
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#b3832f]">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#071a2d]">
                Connect with BBGL
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                For meetings, business discussions and office visits, we recommend contacting BBGL in advance to confirm the appropriate arrangements.
              </p>
              <div className="mt-7 space-y-4 border-t border-slate-100 pt-6">
                <a
                  href="tel:+2349113030331"
                  className="flex items-center gap-3 text-sm font-semibold text-[#071a2d] transition-colors hover:text-[#b3832f]"
                >
                  <Phone size={17} />
                  +234 911 303 0331
                </a>
                <a
                  href="tel:+2348100257804"
                  className="flex items-center gap-3 text-sm font-semibold text-[#071a2d] transition-colors hover:text-[#b3832f]"
                >
                  <Phone size={17} />
                  +234 810 025 7804
                </a>
                <a
                  href="https://wa.me/2348146993407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-semibold text-[#071a2d] transition-colors hover:text-green-600"
                >
                  <MessageCircle size={17} />
                  WhatsApp: +234 814 699 3407
                </a>
                <a
                  href="https://wa.me/+447508793483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-semibold text-[#071a2d] transition-colors hover:text-green-600"
                >
                  <MessageCircle size={17} />
                  WhatsApp: +44 7508 793483
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b3832f]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#071a2d] sm:text-4xl">
              Before you contact us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Here are answers to some common questions about contacting BBGL.
            </p>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7"
                  >
                    <span className="text-sm font-semibold text-[#071a2d] sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-[#b3832f] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}