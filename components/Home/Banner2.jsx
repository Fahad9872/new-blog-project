import Image from "next/image";
import { useRouter } from "next/router";
import ieltsBanner from "../../assets/Pages/Landing/landingBanner2.png";
import ieltsBannerMobile from "../../assets/Pages/Landing/landingBanner2Mobile.png";

export default function Banner2() {
  const router = useRouter();
  return (
    <section className="text-gray-800 ">
      <div className="mx-auto flex flex-col lg:flex-row items-center bg-[#E94E38] text-white rounded-[20px] overflow-hidden relative h-[70vh] md:h-[520px] w-auto md:w-[80vw]">
        {/* Background Image */}
        <div className="absolute inset-0 hidden md:block ">
          <Image
            src={ieltsBanner}
            alt="IELTS Preparation Offer"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute inset-0 block md:hidden h-[100vh] -top-[25vh] md:h-auto rounded-[20px]">
          <Image
            src={ieltsBannerMobile}
            className="rounded-[20px]"
            alt="IELTS Preparation Offer"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 md:px-20 lg:w-10/12">
          <h2 className="text-[24px] md: md:text-[45px] text-[30px] font-extrabold leading-tight text-white">
            Master IELTS & Unlock Global Opportunities
          </h2>
          <p className="text-[12px] md:text-[20px] mt-2">
            Listening | Reading | Writing | Speaking – All in One Course!
          </p>
          <p className="text-[18px] md:text-[35px] font-bold mt-2 md:mt-4">
            Flat <span className="italic">71% </span>{" "}
            <span className="text-xs md:text-[24px]">
              OFF – Early Bird Offer!{" "}
            </span>
          </p>
          <p className="text-[18px] md:text-[35px] font-bold">
            Get Trained by Chattogram’s Top IELTS Experts
          </p>
          <button
            onClick={() => router.push("/ielts")}
            className="bg-white text-[#E94E38] text-[12px] md:text-[18px] font-bold px-6 py-2 rounded-full mt-2 md:mt-6"
          >
            Explore Batches
          </button>
          <p className="text-[12px] md:text-[16px] px-2 md:px-4 mt-2 md:mt-4">
            Offer Ends on 5th March
          </p>
        </div>
      </div>
    </section>
  );
}
