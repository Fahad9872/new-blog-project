import Image from "next/image";
import React from "react";
import ExamCategories1 from "../../assets/Pages/Landing/ExamCategories1.png";
import ExamCategories2 from "../../assets/Pages/Landing/ExamCategories2.png";
import ExamCategories3 from "../../assets/Pages/Landing/ExamCategories3.png";
import ExamCategories4 from "../../assets/Pages/Landing/ExamCategories4.png";
import ExamCategories5 from "../../assets/Pages/Landing/ExamCategories5.png";
import { useRouter } from "next/router";

const ExamCategories = () => {
  const router = useRouter();
  return (
    <div className=" p-5">
      <div className="flex flex-col items-center pb-8">
        <h1 className=" font-bold text-4xl p-4 text-center ">
          Exam Categories{" "}
        </h1>
        <h2 className=" font-normal text-xl text-[#787878] ">
          Ostello is preparing students for 35+ exam categories. Scroll down to
          find the one you are preparing for
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:mx-28">
        <div
          className="flex flex-col items-center text-center p-4 rounded-xl bg-[#FFEDEE] border-2 border-[#EAECF0] cursor-pointer"
          onClick={() => {
            router.push("/cuet");
          }}
        >
          <div className="bg-[#E31B25] p-4 rounded-full mb-4 mt-3">
            <Image
              src={ExamCategories5}
              height={0}
              width={0}
              className=" w-10  h-10  object-scale-down"
              alt="img"
            />
          </div>
          <h3 className="font-bold text-xl  mb-1 text-[#E31B25]">CUET/CLAT</h3>
          <p className="text-base text-[#787878]">Class 12th </p>
        </div>

        <div
          className="flex flex-col items-center text-center p-4 rounded-xl bg-[#C6FFD6] border-2 border-[#EAECF0] h-[230px] cursor-pointer"
          onClick={() => {
            router.push("/neet");
          }}
        >
          <div className="bg-[#2AAA4D] p-4 rounded-full mb-4 mt-3 ">
            <Image
              src={ExamCategories1}
              height={0}
              width={0}
              className=" w-10  h-10 object-scale-down"
              alt="img"
            />
          </div>
          <h3 className="font-bold text-xl mb-1 text-[#2AAA4D]"> NEET</h3>
          <p className="text-base text-[#787878]">Class 11,12 & Dropper</p>
        </div>

        <div
          className="flex flex-col items-center text-center p-4 rounded-xl bg-[#E7F1FF] border-2 border-[#EAECF0] cursor-pointer"
          onClick={() => {
            router.push("/iit-jee");
          }}
        >
          <div className="bg-[#4898FF] p-4 rounded-full mb-4 mt-3 ">
            <Image
              src={ExamCategories2}
              height={0}
              width={0}
              className=" w-10  h-10  object-scale-down"
              alt="img"
            />
          </div>
          <h3 className="font-bold text-xl mb-1 text-[#4898FF]">IIT/JEE</h3>
          <p className="text-base text-[#787878]">Class 11,12 & Dropper</p>
        </div>

        <div
          className="flex flex-col items-center text-center p-4 rounded-xl bg-[#FFF5E5] border-2 border-[#EAECF0] cursor-pointer"
          onClick={() => {
            router.push("/school-preparation");
          }}
        >
          <div className="bg-[#FABB3A] p-4 rounded-full mb-4 mt-3">
            <Image
              src={ExamCategories3}
              height={0}
              width={0}
              className=" w-10  h-10  object-scale-down"
              alt="img"
            />
          </div>
          <h3 className="font-bold text-xl  mb-1 text-[#FABB3A]">
            School Preparation
          </h3>
          <p className="text-base text-[#787878] ">Class 6th - 12th</p>
        </div>

        <div
          className="flex flex-col items-center text-center p-4 rounded-xl bg-[#F6EFFF] border-2 border-[#EAECF0] cursor-pointer"
          onClick={() => {
            router.push("/defence-exams");
          }}
        >
          <div className="bg-[#7D23E0] p-4 rounded-full mb-4 mt-3">
            <Image
              src={ExamCategories4}
              height={0}
              width={0}
              className=" w-10  h-10  object-scale-down"
              alt="img"
            />
          </div>
          <h3 className="font-bold text-xl  mb-1 text-[#7D23E0]">Defence</h3>
          <p className="text-base text-[#787878]">Class 11,12 & Dropper</p>
        </div>
      </div>
    </div>
  );
};

export default ExamCategories;
