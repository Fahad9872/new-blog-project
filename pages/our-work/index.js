import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import ContactSection from "@/components/Home/ContactSection";
import ClientChatter from "@/components/Home/ClientChatter";
import TabSection from "@/components/Home/TabSection";
import BannerSection from "@/components/OurWork/BannerSection";

export default function OurWork() {
  return (
    <div className="md:max-w-[1400px] px-3 md:mx-auto">
      <NavBar />
      <div className="mb-5">
        <BannerSection />
      
      </div>
      <TabSection />
      <ContactSection />
      <Footer />
     
    </div>
  );
}
