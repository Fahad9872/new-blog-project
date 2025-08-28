import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ERBannerImage from "../../../assets/Pages/Landing/ERBanner3.png";
import qrcode from "../../../assets/Pages/Landing/QR Code.png";
import playStoreImage from "../../../assets/Pages/Home/images/playstore.png";
import appStoreImage from "../../../assets/Pages/Home/images/appstore.png";

const ERBanner3 = ({ Close }) => {
  const router = useRouter();

  return (
    <div className="relative h-screen md:h-auto bg-[#F5F5F5] md:bg-white shadow-lg px-6 pt-12 sm:px-4 md:px-8 rounded-lg md:rounded-xl overflow-hidden w-screen md:w-[80vw] mx-auto z-50">
      {/* Close Button */}
      <button
        onClick={Close}
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-3xl font-bold md:text-2xl"
      >
        ✕
      </button>

      <div className="flex flex-col md:flex-row md:space-x-6 items-center md:justify-between md:pl-5  pt-10 md:pt-0 h-full ">
        {/* Left Section */}
        <div className="flex flex-col items-center sm:items-start text-left md:w-2/3 space-y-4 md:space-y-6 h-full">
          <h1 className="text-2xl sm:text-4xl leading-[30px] font-extrabold text-purple-700 ">
            📥 Download the Ostello App & Get NCERT Books!
          </h1>
          <p className="text-[#182627] text-[15px] sm:text-base ">
            Access all your courses in one place with our app.
            <br /> Easier navigation, better organization, and a seamless
            learning experience.
          </p>

          <div className="flex flex-row sm:space-x-4 mt-4 sm:mt-0 justify-center md:justify-start w-full ">
            <Image
              width={100}
              height={100}
              priority
              src={qrcode}
              alt="QR Code"
              className="w-36 sm:w-44 h-36 sm:h-44 mx-auto sm:mx-0"
            />
            <div className="flex flex-col  items-center sm:items-start justify-around md:justify-center md:space-y-3  sm:mt-0 w-full">
              <Image
                width={200}
                height={60}
                className="cursor-pointer w-40 md:w-48 "
                src={playStoreImage.src}
                onClick={() =>
                  router.push(
                    "https://play.google.com/store/apps/details?id=com.ostello.mentors.mentorify"
                  )
                }
                alt="Google Play"
              />
              <Image
                width={200}
                height={60}
                className="cursor-pointer w-40 md:w-48 "
                src={appStoreImage.src}
                onClick={() =>
                  router.push(
                    "https://apps.apple.com/in/app/ostello/id6451157739"
                  )
                }
                alt="App Store"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-2/5 flex justify-center items-end md:items-center">
          <Image
            width={300}
            height={500}
            priority
            src={ERBannerImage}
            alt="Ostello App Preview"
            className="w-[100vw]  h-[45vh] md:w-[50vw] md:h-[400px] mx-auto object-cover  absolute md:relative bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ERBanner3;
