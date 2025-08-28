import React from "react";
import {
  FaMicrophone,
  FaRegComments,
  FaClipboardList,
  FaLightbulb,
  FaCommentDots,
  FaChalkboardTeacher,
  FaGlobe,
  FaRegClock,
  FaBookOpen,
} from "react-icons/fa";
import { Footer } from "@/components/Shared/Footer";
import NavBar from "@/components/NavBar/NavBar";

const SpeakingSection = () => {
  return (
    <div className="md:max-w-[1400px] px-3 md:mx-auto">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-purple-50 py-16 px-6 text-center">
        <h2 className=" md:text-[45px] text-[30px] font-extrabold mb-6 drop-shadow-lg">
          IELTS Speaking Test Overview
        </h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto">
          The IELTS Speaking test evaluates your spoken English through a series
          of structured tasks. It consists of three parts focused on assessing
          fluency, coherence, vocabulary, and pronunciation.
        </p>
      </section>

      {/* Speaking Test Parts Section */}
      <section className="py-12 px-6">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-10">
          Understanding the Test Parts
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow p-8 rounded-lg">
            <FaMicrophone className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Part 1: Introduction
            </h3>
            <p className="text-gray-600">
              A brief introduction where you'll talk about familiar topics such
              as your home, work, or studies. This section will help the
              examiner gauge your speaking ease.
            </p>
            <h4 className="font-semibold mt-4 text-gray-900">
              Sample Questions:
            </h4>
            <ul className="text-gray-600">
              <li>Where do you live?</li>
              <li>What do you like to do in your free time?</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow p-8 rounded-lg">
            <FaRegComments className="text-6xl text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Part 2: Long Turn
            </h3>
            <p className="text-gray-600">
              You’ll be given a task card and have 1 minute to prepare. Then,
              you must talk uninterrupted for 1-2 minutes. This section tests
              your ability to develop ideas.
            </p>
            <h4 className="font-semibold mt-4 text-gray-900">Sample Task:</h4>
            <p className="text-gray-600">
              Describe a memorable trip you took. Explain where you went, who
              you were with, and why it was memorable.
            </p>
          </div>
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow p-8 rounded-lg">
            <FaClipboardList className="text-6xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Part 3: Discussion
            </h3>
            <p className="text-gray-600">
              A two-way discussion about issues raised in Part 2. This section
              focuses on critical thinking and deeper responses.
            </p>
            <h4 className="font-semibold mt-4 text-gray-900">
              Sample Questions:
            </h4>
            <ul className="text-gray-600">
              <li>What are the benefits of traveling?</li>
              <li>How does tourism impact local culture?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips for Success Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-10">
          Tips for Achieving Success
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow p-8 rounded-lg">
            <FaLightbulb className="text-6xl text-purple-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Be Clear and Natural
            </h3>
            <p className="text-gray-600">
              Speak confidently without rushing. Clear and natural speech is
              more valued than memorized answers.
            </p>
          </div>
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow p-8 rounded-lg">
            <FaCommentDots className="text-6xl text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Provide Detailed Answers
            </h3>
            <p className="text-gray-600">
              Avoid short responses. Elaborate with examples and details to
              demonstrate your language proficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-10">
          Timing and Practice Strategies
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow p-8 rounded-lg">
            <FaRegClock className="text-6xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Timing is Key
            </h3>
            <p className="text-gray-600">
              Practice keeping your answers within the time limit. Part 1 lasts
              about 4-5 minutes, Part 2 is a 2-minute monologue, and Part 3
              lasts 4-5 minutes for the discussion.
            </p>
            <h4 className="font-semibold mt-4 text-gray-900">Tip:</h4>
            <p className="text-gray-600">
              Use a timer when practicing to ensure you're not exceeding the
              given time, especially in Part 2.
            </p>
          </div>
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow p-8 rounded-lg">
            <FaBookOpen className="text-6xl text-teal-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Regular Practice
            </h3>
            <p className="text-gray-600">
              The more you practice, the more fluent you’ll become. Record
              yourself speaking on various topics and listen for areas to
              improve.
            </p>
            <h4 className="font-semibold mt-4 text-gray-900">
              Practice Resources:
            </h4>
            <ul className="text-gray-600">
              <li>IELTS Speaking apps</li>
              <li>Online speaking clubs</li>
              <li>Mock interviews with a partner</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Topics Section */}
      <section className="py-12 px-6">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-10">
          Common Topics & Sample Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow p-8 rounded-lg">
            <FaChalkboardTeacher className="text-6xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Education
            </h3>
            <p className="text-gray-600">
              "What do you think is the most important thing to learn at
              school?" <br /> "How has education changed in your country?"
            </p>
          </div>
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow p-8 rounded-lg">
            <FaGlobe className="text-6xl text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Travel & Culture
            </h3>
            <p className="text-gray-600">
              "Do you enjoy traveling to new places?" <br /> "What cultural
              differences do you find interesting?"
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SpeakingSection;
