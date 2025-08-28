import React, { useState } from "react";
import {
  FaBookOpen,
  FaUsers,
  FaLightbulb,
  FaBalanceScale,
  FaQuestionCircle,
  FaClipboardList,
  FaClock,
  FaRegComments,
} from "react-icons/fa";
import { Footer } from "@/components/Shared/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Carousel from "react-elastic-carousel";
import Image from "next/image";
import useScreenWidth from "@/components/hooks/useScreenWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
const essayTypes = [
  {
    id: 1,
    name: "Opinion Essay",
    icon: <FaBookOpen />,
    description: "Express your opinion with logical reasons & examples.",
    image: "/opinion-essay.jpg",
  },
  {
    id: 2,
    name: "Discussion Essay",
    icon: <FaUsers />,
    description: "Discuss both views and give your own opinion.",
    image: "/discussion-essay.jpg",
  },
  {
    id: 3,
    name: "Problem-Solution Essay",
    icon: <FaLightbulb />,
    description: "Identify a problem & suggest effective solutions.",
    image: "/problem-solution.jpg",
  },
  {
    id: 4,
    name: "Advantage-Disadvantage Essay",
    icon: <FaBalanceScale />,
    description: "Discuss the pros & cons with practical examples.",
    image: "/adv-disadvantage.jpg",
  },
  {
    id: 5,
    name: "Double Question Essay",
    icon: <FaQuestionCircle />,
    description: "Answer two related questions with clarity.",
    image: "/double-question.jpg",
  },
];

const WritingTask2 = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 850, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const { screenWidth } = useScreenWidth();

  const [selectedType, setSelectedType] = useState(essayTypes[0]);
  return (
    <div className="md:max-w-[1400px] px-3 md:mx-auto">
      <NavBar />
      <div className="text-center py-16 px-6  bg-purple-50 ">
        <h1 className=" md:text-[45px] text-[30px] font-extrabold tracking-wide drop-shadow-lg">
          IELTS Writing Task 2
        </h1>
        <p className="text-lg text-gray-200 mt-3 max-w-3xl mx-auto">
          Task 2 requires you to write a formal essay in response to a statement
          or question. Your response must be well-structured, supported by
          examples, and maintain a formal tone.
        </p>
      </div>

      <section className="py-12 ">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          What is Writing Task 2?
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          In IELTS Writing Task 2, you need to write an essay responding to a
          question that asks for your opinion, a solution to a problem, or a
          discussion of an argument. Your answer must be well-structured and
          supported with relevant examples.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 p-6 border-t-4 border-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaRegComments className=" md:text-[45px] text-[30px] text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Tip 1: Understand the Question
            </h3>
            <p className="text-gray-600">
              Break down the question to ensure you fully understand what is
              being asked. Identify whether it’s asking for your opinion, a
              solution, or a discussion.
            </p>
          </div>
          <div className="flex-1 p-6 border-t-4 border-green-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaClipboardList className=" md:text-[45px] text-[30px] text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Tip 2: Plan Your Answer
            </h3>
            <p className="text-gray-600">
              Organize your thoughts before writing. A clear plan for your
              introduction, body paragraphs, and conclusion will make your
              writing more effective.
            </p>
          </div>
          <div className="flex-1 p-6 border-t-4 border-yellow-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaClock className=" md:text-[45px] text-[30px] text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Tip 3: Manage Your Time
            </h3>
            <p className="text-gray-600">
              Allocate your time wisely. Spend a few minutes on planning, a
              majority on writing, and save some time to review and edit your
              essay.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 ">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          How to Approach IELTS Writing Task 2
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Here's a suggested approach to writing your essay for Task 2:
        </p>
        <div className="space-y-6 text-lg text-gray-700 mb-8">
          <div>
            <strong className="text-xl">1. Introduction:</strong>
            <p className="text-gray-600">
              Paraphrase the question and provide a brief overview of your
              answer. Make sure to clearly state your opinion or the approach
              you're taking.
            </p>
          </div>
          <div>
            <strong className="text-xl">2. Body Paragraph 1:</strong>
            <p className="text-gray-600">
              Present your first argument or idea. Support it with relevant
              examples and clear reasoning.
            </p>
          </div>
          <div>
            <strong className="text-xl">3. Body Paragraph 2:</strong>
            <p className="text-gray-600">
              Introduce your second argument or idea, providing additional
              examples and further explanation.
            </p>
          </div>
          <div>
            <strong className="text-xl">4. Conclusion:</strong>
            <p className="text-gray-600">
              Summarize your key points and restate your opinion or solution.
              Avoid adding new information here.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          Keep your writing clear, concise, and well-organized. Avoid excessive
          detail and focus on the main ideas.
        </p>
      </section>

      {/* Carousel Navigation */}
      <section className="py-6 mt-10">
        <div className="w-full bg-white bg-opacity-20 p-4 rounded-lg shadow-lg backdrop-blur-md">
          <Swiper
            slidesPerView={screenWidth > 768 ? 5 : 2}
            spaceBetween={5}
            onSlideChange={handleSlideChange}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper merchant-landing"
          >
            {essayTypes.map((type) => (
              <SwiperSlide key={type.id}>
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type)}
                  className={`flex  w-full flex-col items-center px-4 py-2 rounded-lg transition-all duration-300 transform
                ${
                  selectedType.id === type.id
                    ? "bg-blue-500 text-white shadow-md scale-105"
                    : "text-gray-200 hover:text-blue-300 hover:bg-gray-700 bg-opacity-30"
                }`}
                >
                  <span className="text-2xl">{type.icon}</span>
                  <span className="text-sm font-medium mt-1">{type.name}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Cards Grid with 3D Effects */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-12 px-6">
        {essayTypes.map((type) => (
          <div
            key={type.id}
            className="relative bg-white bg-opacity-25 backdrop-blur-md rounded-lg shadow-lg p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-40"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 p-3 rounded-full shadow-lg">
              <span className="text-3xl text-white">{type.icon}</span>
            </div>

            <h3 className="text-xl font-semibold text-white mt-5 text-center">
              {type.name}
            </h3>
            <p className="text-gray-200 mt-2 text-center">{type.description}</p>
            <button className="block w-full mt-4 bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
              Read More
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default WritingTask2;
