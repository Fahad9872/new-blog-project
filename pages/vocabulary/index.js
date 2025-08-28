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

const vocabularySections = [
  {
    id: 1,
    name: "Basic Vocabulary",
    icon: <FaSearch />,
    description:
      "Learn common words used in everyday conversations and their meanings.",
    image: "/basic-vocab.jpg",
    content: [
      "📖 **Basic Vocabulary** includes essential words and phrases used for daily communication.",
      "🔍 Mastering basic vocabulary allows you to build a strong foundation for advanced language skills.",
      "💡 **Tip**: Focus on learning words related to greetings, daily tasks, and basic objects to get comfortable with conversation.",
    ],
  },
  {
    id: 2,
    name: "Academic Vocabulary",
    icon: <FaBook />,
    description:
      "Explore academic words used in professional, educational, and formal settings.",
    image: "/academic-vocab.jpg",
    content: [
      "📚 **Academic Vocabulary** includes words that are commonly used in academic texts and lectures.",
      "📝 Understanding academic vocabulary will help you with reading and writing essays or understanding scholarly articles.",
      "💡 **Tip**: Pay attention to words like 'analyze', 'evaluate', and 'synthesize' to enhance your academic communication.",
    ],
  },
  {
    id: 3,
    name: "Contextual Vocabulary",
    icon: <FaClipboardList />,
    description: "Learn how words change meaning depending on their context.",
    image: "/contextual-vocab.jpg",
    content: [
      "📘 **Contextual Vocabulary** refers to how words can take on different meanings depending on the context in which they are used.",
      "🔑 This section focuses on understanding the nuances of words and their usage in various situations.",
      "💡 **Tip**: Try to see words in different contexts to fully grasp their meanings and correct usage.",
    ],
  },
  {
    id: 4,
    name: "Idiomatic Expressions",
    icon: <FaQuoteRight />,
    description:
      "Master common idioms and expressions used by native speakers.",
    image: "/idioms-vocab.jpg",
    content: [
      "🗣️ **Idiomatic Expressions** are phrases that do not mean exactly what the individual words suggest.",
      "💡 Mastering idioms will help you sound more natural and fluent in your speech and writing.",
      "🔍 **Tip**: Learn popular idioms like 'break the ice', 'call it a day', and 'piece of cake' to improve your understanding of English.",
    ],
  },
];

const VocabularyPage = () => {
  const [selectedSection, setSelectedSection] = useState(vocabularySections[0]);

  return (
    <div className="md:max-w-[1400px] px-3 mx-auto bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <div className="text-center py-16 px-6 bg-blue-50">
        <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
          Vocabulary Development Guide 📚
        </h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          This guide will help you strengthen your vocabulary through various
          themes, from everyday words to academic terms and idiomatic
          expressions.
        </p>
      </div>

      {/* What is Vocabulary Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          What is Vocabulary? 🧐
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Vocabulary refers to the words we use to communicate, whether in
          speaking, writing, or reading. Each section focuses on a different
          area of vocabulary mastery.
        </p>
      </section>

      {/* Sidebar Navigation for Sections */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {vocabularySections.map((section) => (
          <div
            key={section.id}
            className="relative bg-white rounded-lg shadow-xl p-8 group transition-all duration-500 hover:shadow-2xl hover:bg-gray-50"
            onClick={() => setSelectedSection(section)}
          >
            <div className="absolute top-0 left-0 p-4 bg-green-600 text-white rounded-full shadow-lg">
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
        <div>
          <div className="space-y-8 text-lg text-gray-700">
            {selectedSection.content.map((paragraph, index) => (
              <p key={index} className="text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Improving Vocabulary */}
      <section className="py-16 bg-gradient-to-b from-gray-200 to-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          How to Improve Your Vocabulary 📝
        </h2>
        <div className="text-lg text-gray-700">
          <p className="mb-4">
            Boost your vocabulary by adopting these proven techniques:
          </p>
          <div className="space-y-6">
            {[
              "Read Regularly 📚",
              "Use Flashcards 📑",
              "Engage in Conversations 🗣️",
              "Write More 📝",
              "Practice with Synonyms & Antonyms 🔄",
            ].map((tip, index) => (
              <div key={index} className="flex items-start space-x-4">
                <span className="text-2xl text-blue-600">📘</span>
                <div>
                  <h3 className="text-xl font-semibold">{tip}</h3>
                  <p className="text-gray-600 mt-2">
                    Detailed explanation of how this strategy will improve your
                    vocabulary and language skills.
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

export default VocabularyPage;
