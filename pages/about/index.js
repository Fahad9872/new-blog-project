import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import History from "@/components/About/HIstory";
import OurStory from "@/components/About/OurStory";
import OurPurpose from "@/components/About/OurPurpose";
import WeCare from "@/components/About/WeCare";
import LeadershipTeam from "@/components/About/LeadershipTeam";
import PromiseSection from "@/components/Engage/PromiseSection";
import IndustryDemands from "@/components/Engage/IndustryDemands";

const heroData = {
  title: "Transform Your Business with Innovation 🚀",
  subtitle:
    "We deliver AI, Cloud, and Modernization solutions that empower your growth.",
  buttonText: "Get Started",
  gradient: "from-purple-600 to-pink-500",
  textColor: "text-white",
  height: 500, // px
};

export default function About() {
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

      {/* Page content */}
      <div className="w-full max-w-[1400px] mx-auto px-3 md:px-6 relative z-10">
        <OurStory />
        <OurPurpose />
        <WeCare />
        <LeadershipTeam />
        <History />
        <PromiseSection />
        <IndustryDemands />
      </div>
      <Footer />
    </div>
  );
}
