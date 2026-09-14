import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Typewriter from "@/components/Typewriter";

export default function ContactCTA() {
  return (
    <section className="bbgl-section bg-white">
      <div className="">
        <div className="relative overflow-hidden bg-[#0b3d6e] px-7 py-7 text-white md:px-14 md:py-20">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-[#145a96] to-transparent opacity-50" />

          <div className="relative max-w-3xl">
            <div className="bbgl-eyebrow !text-[#d9b56a]">
              Corporate Enquiries
            </div>
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              <Typewriter
                text="Let's build what comes next."
                speed={80}
                startDelay={500}
              />
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Connect with BBGL for corporate enquiries, partnerships and
              opportunities across our growing group of enterprises.
            </p>

            <Link href="/contact" className="bbgl-button bbgl-button-gold mt-8">
              Contact BBGL
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
