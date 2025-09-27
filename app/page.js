import Image from "next/image";
import HeroSection from "../components/HeroSection";
// import Index from "./(pages)";
import PartnerLogos from "../components/Partners";
import AboutInnovation from "../components/AboutInnovation";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import Team from "../components/Team";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import BlurryBackground from "@/components/BlurryBG";
 
export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    <div className="relative">
      <BlurryBackground />
      <span className="theme-bejamas" />
      <HeroSection />
      <PartnerLogos />
      {/* <AboutInnovation /> */}
      <CaseStudies />
      <Services />
      {/* <Team /> */}
      <Testimonials />
      <ContactSection />
      {/* <Footer /> */}
    </div>

  );
}
