import Image from "next/image";
import React from "react";
import ChooseOstello1 from "../../assets/Pages/Landing/ChooseOstello1.png";
import ChooseOstello2 from "../../assets/Pages/Landing/ChooseOstello2.png";
import ChooseOstello3 from "../../assets/Pages/Landing/ChooseOstello3.png";
import ChooseOstello4 from "../../assets/Pages/Landing/ChooseOstello4.png";

const ChooseOstello = () => {
  return (
    <div className=" p-5">
      <div className="flex flex-col items-center pb-8">
        <div>
          <h1 className=" font-medium text-xs p-2 rounded-2xl bg-[#EFF4F8B8] border border-[#DFE5EB] text-[#5B6D83] ">
            Why choose us ?
          </h1>
        </div>
        <h1 className=" font-bold text-4xl p-4 text-center ">
          Learn Smart, Grow Fast – Choose IELTScare!{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-2 md:mx-20">
        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#FAF5FF] border-2 border-[#EAECF0] md:h-[250px] md:px-8">
          <div className="bg-[#EDDCFF] p-4 rounded-full mb-4">
            <Image
              src={ChooseOstello1}
              height={0}
              width={0}
              className=" w-10 h-10 object-scale-down"
              alt="img"
            />
          </div>
          <h3 className="font-bold text-base mb-1">Goal-Based Learning</h3>
          <p className="text-xs text-[#787878]">
            Stay on track with structured learning paths designed to help you
            achieve your academic goals
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#FAF5FF] border-2 border-[#EAECF0] md:h-[250px] md:px-8">
          <div className="bg-[#EDDCFF] p-4 rounded-full mb-4">
            <Image
              src={ChooseOstello2}
              height={0}
              width={0}
              className=" w-10 h-10 object-scale-down"
              alt="img"
            />
          </div>
          <h3 className="font-bold text-base mb-1">Short Concept Videos</h3>
          <p className="text-xs text-[#787878]">
            Master key concepts quickly with concise, easy-to-understand video
            lessons
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#FAF5FF] border-2 border-[#EAECF0] md:h-[250px] md:px-8">
          <div className="bg-[#EDDCFF] p-4 rounded-full mb-4">
            <Image
              src={ChooseOstello3}
              height={0}
              width={0}
              className=" w-10 h-10 object-scale-down"
              alt="img"
            />
          </div>
          <h3 className="font-bold text-base mb-1">Expert Educators</h3>
          <p className="text-xs text-[#787878] ">
            Learn from experienced teachers who simplify complex topics for
            better understanding.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#FAF5FF] border-2 border-[#EAECF0] md:h-[250px] md:px-8">
          <div className="bg-[#EDDCFF] p-4 rounded-full mb-4">
            <Image
              src={ChooseOstello4}
              height={0}
              width={0}
              className=" w-10 h-10 object-scale-down"
              alt="img"
            />
          </div>
          <h3 className="font-bold text-base mb-1">
            Extended Learning Support
          </h3>
          <p className="text-xs text-[#787878]">
            Get additional guidance beyond the classroom with personalized
            study resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseOstello;
