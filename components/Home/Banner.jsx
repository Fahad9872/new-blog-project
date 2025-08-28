import Image from "next/image";
import { useRouter } from "next/router";
import banner from "../../assets/Pages/Home/images/ielts-banner.png";
export default function Banner({ name }) {
  const router = useRouter();
  return (
    <section className=" text-gray-800">
      {/* Top banner */}

      {/* Main content */}
      <div className=" mx-auto md:px-16 px-3  flex flex-col lg:flex-row items-end bg-purple-50 md:max-w-[1740px] mx-auto rounded-[20px]">
        {/* Text content */}
        <div className="lg:w-7/12 py-5 lg:py-16">
          <div className="mb-4 text-[#f2496a] font-medium md:text-sm text-[12px] border border-[#f2496a] rounded-[20px] w-fit px-3 py-1 ">
            ⭐ Your Gateway to IELTS Success
          </div>
          <p className="text-[24px] md: md:text-[45px] text-[30px] font-semibold md:leading-[50px] leading-[30px] mb-6">
            Achieve Your Dream Score with{" "}
            <span className="text-[#f2496a]">{name}</span>{" "}
            <br className="md:block hidden" /> The Ultimate IELTS Preparation
            Platform
          </p>
          <p className="md:text-[20px] md:block hidden text-[14px] text-[#868686] md:leading-[25px] mb-6">
            Get expert guidance, practice tests, and personalized strategies to
            ace <br className="" /> the IELTS exam with confidence.
          </p>
          <p className="md:text-[20px] block md:hidden text-[14px] text-[#868686] md:leading-[25px] mb-6">
            Get expert guidance, practice tests, and personalized strategies to
            ace the IELTS exam with confidence.
          </p>

          <button
            onClick={() => {
              router.push("/");
            }}
            className="bg-[#f2496a] text-white md:px-16 px-10 rounded-[20px] py-3 "
          >
            Start Preparing Now
          </button>
        </div>

        {/* Image content */}
        <div className="lg:w-5/12 md:my-[50px] flex justify-center w-min-h-[420px]">
          <Image
            width={550}
            height={420}
            sizes="(max-width: 768px) 100vw, 550px"
            priority={true} // If the image isn't above the fold, set priority to false
            fetchPriority="high"
            src={banner.src}
            alt="Ostello App Mockup"
            // Retaining z-index only
          />
        </div>
      </div>

      {/* CTA buttons
      <div className="container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
        <button className="bg-[#7D23E0] text-white px-6 py-3 rounded-md shadow-lg hover:bg-purple-700 transition duration-200">
          Become an Instructor
        </button>
        <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md shadow-lg hover:bg-gray-200 transition duration-200">
          Download Ostello App
        </button>
      </div> */}
    </section>
  );
}
