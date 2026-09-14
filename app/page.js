import Navbar from "@/components/layout/Navbar";
import MarketTicker from "@/components/layout/MarketTicker";
// import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import GroupIntro from "@/components/home/GroupIntro";
import Businesses from "@/components/home/Businesses";
import Vision from "@/components/home/Vision";
import ContactCTA from "@/components/home/ContactCTA";
import CorporateSnapshot from "@/components/home/CorporateSnapshot";
import CorporateCapabilities from "@/components/home/CorporateCapabilities";
import CorporateFAQ from "@/components/home/CorporateFAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <MarketTicker />

      <main>
        <Hero />
        <GroupIntro />
        <CorporateSnapshot />
        <CorporateCapabilities />
        <Businesses />
        <Vision />
        <CorporateFAQ />
        <ContactCTA />
      </main>

      {/* <Footer /> */}
    </>
  );
}