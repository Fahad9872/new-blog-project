import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const FAQsData = [
  {
    id: 1,
    question: "Why should I choose IELTScare?",
    answer: `<p className="text-[#645D69] md:text-[18px] text-[13px] p-4 md:leading-8 leading-[25px]">
          IELTScare provides an all-in-one platform for IELTS preparation, including personalized study plans, practice tests, and expert guidance. We offer comprehensive study materials and mock tests to help you achieve your desired band score.
        </p>`,
  },
  {
    id: 2,
    question: "What courses does IELTScare offer?",
    answer: `<p className="text-[#645D69] md:text-[18px] text-[13px] p-4 md:leading-8 leading-[25px]">
          IELTScare offers courses for all four IELTS sections: Listening, Reading, Writing, and Speaking. We provide self-paced courses, live coaching sessions, and one-on-one mentorship to cater to different learning styles.
        </p>`,
  },
  {
    id: 3,
    question: "How does IELTScare help with IELTS Speaking?",
    answer: `<p className="text-[#645D69] md:text-[18px] text-[13px] p-4 md:leading-8 leading-[25px]">
          IELTScare provides AI-powered speaking assessments, live mock interviews with certified trainers, and real-time feedback to improve fluency, pronunciation, and confidence for the IELTS Speaking test.
        </p>`,
  },
  {
    id: 4,
    question: "Does IELTScare offer mock tests?",
    answer: `<p className="text-[#645D69] md:text-[18px] text-[13px] p-4 md:leading-8 leading-[25px]">
          Yes! IELTScare offers full-length IELTS mock tests that simulate the real exam experience. Our mock tests help you assess your strengths and weaknesses and provide detailed performance analysis.
        </p>`,
  },
  {
    id: 5,
    question: "Who can use IELTScare’s services?",
    answer: `<p className="text-[#645D69] md:text-[18px] text-[13px] p-4 md:leading-8 leading-[25px]">
          IELTScare’s services are available to anyone preparing for the IELTS exam, whether you're a student, working professional, or planning to migrate abroad. Our courses are designed for both Academic and General Training candidates.
        </p>`,
  },
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState([]);
  return (
    <div className="    md:p-5 px-5">
      <div className=" space-y-5 text-center">
        <p className="md:text-[48px] font-semibold  text-[24px]">
          For more understanding, visit{" "}
          <span className="font-bold text-[#f2496a]">FAQs</span>
        </p>
        {/* <p className="md:text-[18px] text-[14px] font-[400px] mx-auto text-[#725F88]  max-w-[700px] md:leading-[35px] leading-[25px]">
          FAQs enable you to deal with specific queries that your students have
          about their future coaching institutions. The FAQs also represent
          another way to reach out your favorable institutions.
        </p> */}
      </div>
      <div className="md:mt-10 mt-5 mb-8">
        {FAQsData.map((element, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                if (isOpen.includes(i)) {
                  setIsOpen(isOpen.filter((e) => e !== i));
                } else {
                  setIsOpen([...isOpen, i]);
                }
              }}
              className=" text-lg w-full md:my-5 my-3  leading-6"
            >
              <div className="flex justify-between bg-[#FBF6FF] md:p-4 p-2 rounded-md cursor-pointer">
                <div className="  ">
                  <p className="flex font-medium justify-between items-center text-[#474747] cursor-pointer  select-none md:text-[22px] text-[14px]">
                    {element?.question}
                  </p>
                </div>
                <span className="text-gray cursor-pointer text-primary text-[23px]">
                  {isOpen.includes(i) ? (
                    <CiCircleMinus className="text-primary " />
                  ) : (
                    <CiCirclePlus />
                  )}
                </span>
              </div>

              {isOpen.includes(i) && (
                <p className="text-[#645D69] md:text-[18px] text-[13px]  p-4 md:leading-8 leading-[25px]">
                  <div dangerouslySetInnerHTML={{ __html: element?.answer }} />
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
