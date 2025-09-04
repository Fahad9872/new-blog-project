import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import ContactSection from "@/components/Home/ContactSection";
import ClientChatter from "@/components/Home/ClientChatter";
import TabSection from "@/components/Home/TabSection";
import BannerSection from "@/components/OurWork/BannerSection";
import MediaEnterprises from "@/components/AdTech/MediaEnterprises";
import ScrollCards from "@/components/AdTech/ScrollCards";
import SuccessStory from "@/components/AdTech/SuccessStory";
import Services from "@/components/AdTech/Services";
import Faq from "@/components/Shared/Faq";
import FaqSection from "@/components/AdTech/FaqSection";
import GlobalClients from "@/components/AdTech/GlobalClients";
import AdTechInsights from "@/components/AdTech/AdTechInsights";
import CTASection from "@/components/AdTech/CTASection";
import History from "@/components/About/HIstory";

const heroData = {
  title: "Transform Your Business with Innovation 🚀",
  subtitle:
    "We deliver AI, Cloud, and Modernization solutions that empower your growth.",
  buttonText: "Get Started",
  gradient: "from-purple-600 to-pink-500",
  textColor: "text-white",
  height: 500, // px
};

export default function Adtech() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Layout constants
  const heroOffset = 80; // matches top-20 (5rem = 80px)
  const heroHeight = heroData.height;

  // Animation math
  const progress = Math.min(scrollY / heroHeight, 1);
  const heroTranslateY = progress * heroHeight; // move up to its full height
  const heroOpacity = Math.max(1 - progress, 0); // fade out as you scroll
  const heroClickable = heroOpacity > 0.3; // stop catching clicks once mostly faded

  return (
    <div className="relative">
      <NavBar />

      {/* Fixed, fading hero pinned near the top */}
      <div
        className={[
          "fixed left-1/2 -translate-x-1/2",
          "top-20 w-full max-w-[1400px]",
          "flex items-center justify-center text-center rounded-b-lg",
          "px-6 md:px-12 bg-gradient-to-r",
          heroData.gradient,
          heroClickable
            ? "pointer-events-auto z-30"
            : "pointer-events-none z-0",
        ].join(" ")}
        style={{
          height: `${heroHeight}px`,
          transform: `translate(-50%, -${heroTranslateY}px)`,
          opacity: heroOpacity,
          transition: "transform 120ms linear, opacity 120ms linear",
          willChange: "transform, opacity",
        }}
      >
        <div className="max-w-3xl">
          <h1
            className={`text-3xl md:text-6xl font-bold mb-4 ${heroData.textColor}`}
          >
            {heroData.title}
          </h1>
          <p className={`text-lg md:text-xl mb-6 ${heroData.textColor}`}>
            {heroData.subtitle}
          </p>
          <button className="px-6 py-3 rounded-lg bg-white text-purple-600 font-semibold shadow-md hover:bg-gray-100 transition">
            {heroData.buttonText}
          </button>
        </div>
      </div>

      {/* Spacer so content starts BELOW the fixed hero */}
      <div style={{ height: heroHeight + heroOffset }} aria-hidden="true" />

      {/* Page content */}
      <div className="w-full max-w-[1400px] mx-auto px-3 md:px-6 relative z-10">
        <SuccessStory />
        <Services />
        <FaqSection />
        <GlobalClients />
        <History />
        <AdTechInsights />
        <ScrollCards />
        <MediaEnterprises />
        <CTASection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
