import React, { useState } from "react";
import {
  FaBook,
  FaPen,
  FaSearch,
  FaClipboardList,
  FaFileAlt,
  FaQuoteRight,
} from "react-icons/fa";
import { Footer } from "@/components/Shared/Footer";
import NavBar from "@/components/NavBar/NavBar";

const readingSections = [
  {
    id: 1,
    name: "Section 1: Everyday Conversations",
    icon: <FaSearch />,
    description:
      "You’ll read dialogues or short texts related to everyday situations like travel or booking appointments.",
    image: "/section1.jpg",
    content: [
      "📖 **In Section 1**, you'll encounter conversations or short text exchanges between people. The topics might include casual conversations about booking a ticket, making appointments, or planning a day out.",
      "🔍 The questions will assess your ability to find specific details, like dates, names, and locations.",
      "💡 **Tip**: Pay attention to details like numbers, locations, and names to answer the questions correctly.",
    ],
  },
  {
    id: 2,
    name: "Section 2: Informative Texts",
    icon: <FaBook />,
    description:
      "You’ll read informative texts on topics such as news, instructions, or general information.",
    image: "/section2.jpg",
    content: [
      "📄 **Section 2** involves reading informative texts, such as advertisements, brochures, or instructional guides.",
      "📝 The questions usually focus on understanding the overall meaning, main ideas, or sequencing of information.",
      "💡 **Tip**: Focus on identifying the key points and keywords that help you understand the flow of information.",
    ],
  },
  {
    id: 3,
    name: "Section 3: Complex Discussions",
    icon: <FaClipboardList />,
    description:
      "You’ll read texts that include multiple viewpoints or complex discussions, such as reports or opinion articles.",
    image: "/section3.jpg",
    content: [
      "📚 **In Section 3**, you’ll be reading longer, more complex discussions involving multiple viewpoints, such as articles or essays on a subject.",
      "🔑 This section assesses your ability to follow and differentiate between various viewpoints or arguments.",
      "💡 **Tip**: Identify the main arguments and how different perspectives are connected to better understand the content.",
    ],
  },
  {
    id: 4,
    name: "Section 4: Academic Articles",
    icon: <FaQuoteRight />,
    description:
      "You’ll read detailed academic texts on topics like science, history, or culture.",
    image: "/section4.jpg",
    content: [
      "📘 **Section 4** includes academic articles, typically involving research findings, scientific studies, or historical analyses.",
      "🧐 These texts will test your ability to understand complex information and the underlying arguments or conclusions.",
      "💡 **Tip**: Focus on the introduction and conclusion, as they often summarize the key findings or points of the article.",
    ],
  },
];

const ReadingSection = () => {
  const [selectedSection, setSelectedSection] = useState(readingSections[0]);

  return (
    <div className="md:max-w-[1400px] px-3 mx-auto bg-gray-50">
      <NavBar />

      {/* Hero Section with Full Image */}
      {/* Intro Section */}
      <div className="text-center py-16 px-6 bg-purple-50 ">
        <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
          General Reading & Comprehension Guide 📖
        </h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          This guide helps you improve your reading comprehension skills across
          various types of texts, from casual conversations to academic
          articles.
        </p>
      </div>

      {/* What is Reading Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          What is Reading Comprehension? 📚
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Reading comprehension is essential to understanding written texts
          across different contexts. Let’s explore each of the four sections
          you’ll encounter:
        </p>
      </section>

      {/* Sidebar Navigation for Sections */}
      <div className=" grid grid-cols-1 md:grid-cols-4  gap-12">
        {readingSections.map((section) => (
          <div
            key={section.id}
            className="relative bg-white rounded-lg shadow-xl p-8 group transition-all duration-500 hover:shadow-2xl hover:bg-gray-50"
            onClick={() => setSelectedSection(section)}
          >
            <div className="absolute top-0 left-0 p-4 bg-blue-600 text-white rounded-full shadow-lg">
              <span className="text-2xl">{section.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-6">
              {section.name}
            </h3>
            <p className="text-gray-600 mt-2">{section.description}</p>
          </div>
        ))}
      </div>

      {/* Selected Section Details */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Deep Dive into {selectedSection.name}
        </h2>
        <div className="">
          <div className="space-y-8 text-lg text-gray-700">
            {selectedSection.content.map((paragraph, index) => (
              <p key={index} className="text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Improving Reading Skills */}
      <section className="py-16 bg-gradient-to-b from-gray-200 to-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 ">
          How to Improve Your Reading Skills 📈
        </h2>
        <div className=" text-lg text-gray-700">
          <p className="mb-4">
            Enhance your reading skills and boost your score with these refined
            tips:
          </p>
          <div className="space-y-6">
            {[
              "Read Regularly and Diversely 📚",
              "Skim & Scan for Key Information 🔍",
              "Focus on Structure & Flow 📝",
              "Take Notes While Reading ✍️",
              "Practice Timed Reading Exercises ⏱️",
            ].map((tip, index) => (
              <div key={index} className="flex items-start space-x-4">
                <span className="text-2xl text-blue-600">📘</span>
                <div>
                  <h3 className="text-xl font-semibold">{tip}</h3>
                  <p className="text-gray-600 mt-2">
                    Detailed explanation of how this strategy will improve your
                    reading skills and understanding.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReadingSection;
