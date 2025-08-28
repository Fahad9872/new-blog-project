import React, { useState } from "react";
import { FaPen, FaImage, FaRegLightbulb } from "react-icons/fa"; // Importing React Icons
import Image from "next/image"; // Use Next.js Image component for optimized images (optional)
import writingTaskImage from "../../assets/Pages/Home/images/writing-task-1.jpg"; // Path to an image related to IELTS Writing Task 1
import { Footer } from "@/components/Shared/Footer";
import NavBar from "@/components/NavBar/NavBar";
import {
  FaChartBar,
  FaChartLine,
  FaTable,
  FaChartPie,
  FaCog,
  FaMapMarkedAlt,
  FaLayerGroup,
} from "react-icons/fa";
import Carousel from "react-elastic-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import useScreenWidth from "@/components/hooks/useScreenWidth";

const questionTypes = [
  {
    id: 1,
    name: "Bar Chart",
    icon: <FaChartBar />,
    description: "Compare values using bars.",
    image: "",
  },
  {
    id: 2,
    name: "Line Graph",
    icon: <FaChartLine />,
    description: "Show trends over time.",
    image: "",
  },
  {
    id: 3,
    name: "Table",
    icon: <FaTable />,
    description: "Display structured data.",
    image: "",
  },
  {
    id: 4,
    name: "Pie Chart",
    icon: <FaChartPie />,
    description: "Show percentage distribution.",
    image: "",
  },
  {
    id: 5,
    name: "Process Diagram",
    icon: <FaCog />,
    description: "Illustrate step-by-step processes.",
    image: "",
  },
  {
    id: 6,
    name: "Map",
    icon: <FaMapMarkedAlt />,
    description: "Represent geographic information.",
    image: "",
  },
  {
    id: 7,
    name: "Multiple Graphs",
    icon: <FaLayerGroup />,
    description: "Combination of multiple data types.",
    image: "",
  },
];

const WritingTask1 = () => {
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

  const [selectedType, setSelectedType] = useState(questionTypes[0]);
  const { screenWidth } = useScreenWidth();

  return (
    <div className="md:max-w-[1400px] px-3 md:mx-auto">
      <NavBar />

      <div className="text-center py-16 px-6  bg-purple-50">
        <h1 className=" md:text-[45px] text-[30px] font-extrabold tracking-wide drop-shadow-lg">
          IELTS Writing Task 1
        </h1>
        <p className="text-lg text-gray-200 mt-3 max-w-3xl mx-auto">
          A task that requires you to describe visual information.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        {/* Use Tailwind CSS for responsive image */}
        <Image
          src={writingTaskImage}
          alt="IELTS Writing Task 1"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          What is Writing Task 1?
        </h2>
        <p className="text-gray-600 mb-6">
          In IELTS Writing Task 1, you are presented with a graph, chart,
          diagram, or map. Your task is to summarize the information by
          describing the main features, making comparisons where relevant, and
          organizing your answer logically.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg shadow-md">
            <FaPen className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tip 1: Understand the Data
            </h3>
            <p className="text-gray-600">
              Before writing, take a moment to understand the data. Focus on the
              trends, patterns, and comparisons.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg shadow-md">
            <FaImage className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tip 2: Describe Clearly
            </h3>
            <p className="text-gray-600">
              Describe the key features of the visual data. Avoid unnecessary
              details. Be clear and concise in your writing.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg shadow-md">
            <FaRegLightbulb className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tip 3: Practice Time Management
            </h3>
            <p className="text-gray-600">
              Practice writing within the time limit (20 minutes). This helps
              you improve speed and ensures you cover all the essential points.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          How to Approach IELTS Writing Task 1
        </h2>
        <p className="text-gray-600 mb-6">
          Follow this structure for your answer:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>
            <strong>Introduction :</strong> Paraphrase the question and
            introduce the visual data.
          </li>
          <li>
            <strong>Overview :</strong> Summarize the main trends or differences
            you can observe.
          </li>
          <li>
            <strong>Details - 1 :</strong> Describe the key data points and make
            comparisons where necessary.
          </li>
          <li>
            <strong>Details - 2 :</strong> Describe the key data points and make
            comparisons where necessary.
          </li>
        </ul>
        <p className="text-gray-600">
          Make sure to avoid personal opinions and always focus on the data
          presented.
        </p>
      </section>

      <section className="py-6 ">
        {/* Tabs for Selecting Question Type */}
        <div className="w-full bg-gray-100 p-3 rounded-lg shadow-md">
          <Swiper
            slidesPerView={screenWidth > 768 ? 5 : 2}
            spaceBetween={10}
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
            {questionTypes.map((type) => (
              <SwiperSlide key={type.i}>
                <button
                  onClick={() => setSelectedType(type)}
                  className={`flex flex-col w-full items-center px-4 py-2 rounded-lg transition-all duration-300
                ${
                  selectedType.id === type.id
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-500 hover:bg-gray-200"
                }`}
                >
                  <span className="text-2xl">{type.icon}</span>
                  <span className="text-sm font-medium mt-1">{type.name}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Selected Question Type Blog Card */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
          {questionTypes.slice(0, 3).map((type) => (
            <div
              key={type.id}
              className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={type.image}
                alt={type.name}
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-700 mt-3 flex items-center gap-2">
                {type.icon} {type.name}
              </h3>
              <p className="text-gray-600 mt-2">{type.description}</p>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WritingTask1;
