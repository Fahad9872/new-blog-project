import Image from "next/image";
import React, { useState } from "react";

import EducationalResources1 from "../../assets/Pages/Landing/Educational Resources1.png";
import EducationalResources2 from "../../assets/Pages/Landing/Educational Resources2.png";
import EducationalResources3 from "../../assets/Pages/Landing/Educational Resources3.png";

import ERBanner1 from "./Educational Resource Banners/ERBanner1";
import ERBanner2 from "./Educational Resource Banners/ERBaneer2";
import ERBanner3 from "./Educational Resource Banners/ERBaneer3";

const EducationalResources = () => {
  const [banner1, showBanner1] = useState(false);
  const [banner2, showBanner2] = useState(false);
  const [banner3, showBanner3] = useState(false);

  return (
    <div className=" p-5 pb-12 bg-purple-50">
      <div className=" text-center pb-8">
        <h1 className=" font-bold text-4xl p-4 ">Educational Resources </h1>
        <h2 className=" font-normal text-xl text-[#787878] ">
          A diverse array of learning materials to enhance your educational
          journey.
        </h2>
      </div>

      {(banner1 || banner2 || banner3) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative p-6 rounded-lg shadow-lg">
            {banner1 && (
              <ERBanner1
                Close={() => {
                  showBanner1(false);
                }}
              />
            )}
            {banner2 && (
              <ERBanner2
                Close={() => {
                  showBanner2(false);
                }}
              />
            )}
            {banner3 && (
              <ERBanner3
                Close={() => {
                  showBanner3(false);
                }}
              />
            )}
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-3  items-center justify-items-center">
        <div
          className=" bg-white rounded-md p-8 w-[340px] h-[340px] cursor-pointer"
          onClick={() => {
            showBanner1(true);
          }}
        >
          <h1 className=" font-semibold text-2xl pb-1">Notes/PYQs </h1>
          <h2 className="font-medium text-base text-[#787878] ">
            Use Ostello’s detailed study materials that simplify complex ideas
            into easily understandable language
          </h2>
          <div className="grid justify-center items-center pt-4">
            <Image
              src={EducationalResources1}
              alt="image"
              heigh={0}
              width={0}
              className=" w-44 h-36 "
            />
          </div>
        </div>
        <div
          className=" bg-white rounded-md p-8 w-[340px] h-[340px] cursor-pointer"
          onClick={() => {
            showBanner2(true);
          }}
        >
          <h1 className=" font-semibold text-2xl pb-1">
            Live & Free Lectures{" "}
          </h1>
          <h2 className="font-medium text-base text-[#787878] ">
            Our experts have created thorough study materials that break down
            complicated concepts into easily understandable content
          </h2>
          <div className="grid justify-center items-center pt-4">
            <Image
              src={EducationalResources2}
              alt="image"
              heigh={0}
              width={0}
              className=" w-44 h-36"
            />
          </div>
        </div>
        <div
          className=" bg-white rounded-md p-8 w-[340px] h-[340px] cursor-pointer"
          onClick={() => {
            showBanner3(true);
          }}
        >
          <h1 className=" font-semibold text-2xl pb-1">NCERT Books </h1>
          <h2 className="font-medium text-base text-[#787878] ">
            Unlock academic excellence with Physics Wallah’s NCERT Solutions
            which provides you step-by-step solutions
          </h2>
          <div className="grid justify-center items-center pt-4">
            <Image
              src={EducationalResources3}
              alt="image"
              heigh={0}
              width={0}
              className=" w-44 h-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;
