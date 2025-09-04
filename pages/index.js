import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import DragAndDrop from "@/components/Home/DragAndDrop";
import NavBar from "@/components/NavBar/NavBar";
import Banner from "@/components/Home/Banner";
import { Footer } from "@/components/Shared/Footer";
import ChooseOstello from "@/components/Home/ChooseOstello";
import EducationalResources from "@/components/Home/EducationalResources";
import Carousel from "react-elastic-carousel";
import Banner2 from "@/components/Home/Banner2";
import Faq from "@/components/Shared/Faq";
import Vision from "@/components/Home/Vision";
import SuccessStory from "@/components/Home/SuccessStory";
import Together from "@/components/Home/Together";
import ContactSection from "@/components/Home/ContactSection";
import LatestInsights from "@/components/Home/LatestInsights";
import ClientChatter from "@/components/Home/ClientChatter";
import BannerSection from "@/components/Home/BannerSection";
import TabSection from "@/components/Home/TabSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="md:max-w-[1400px] px-3 md:mx-auto">
      <NavBar />
      <div className="mb-5">
        <BannerSection />
        {/* <Carousel itemsToShow={1} showArrows={false} loop={true}>
          <Banner />
          <Banner2 />
        </Carousel> */}
      </div>
      <Vision />
      <Together />
      <SuccessStory />
      <ChooseOstello />
      <ClientChatter />
      <LatestInsights />

      {/* <EducationalResources /> */}
      {/* <Faq /> */}
      <ContactSection />
      <Footer />
      {/* <DragAndDrop /></div> */}
    </div>
  );
}
