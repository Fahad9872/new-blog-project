import React, { useState } from "react";
import {
  FaHeadphonesAlt,
  FaVolumeUp,
  FaClock,
  FaMusic,
  FaBullhorn,
  FaMicroscope,
  FaFileAudio,
} from "react-icons/fa";
import { Footer } from "@/components/Shared/Footer";
import NavBar from "@/components/NavBar/NavBar";

const listeningSections = [
  {
    id: 1,
    name: "Section 1: Conversation",
    icon: <FaHeadphonesAlt />,
    description:
      "You’ll hear a conversation about everyday topics like travel arrangements or accommodation.",
    image: "/section1.jpg",
    content: [
      "🎧 **In Section 1**, you’ll listen to a conversation between two speakers. The conversation is usually about social topics like booking a hotel room, making arrangements, or discussing travel plans.",
      "🔍 The questions will test your ability to understand specific details, such as dates, numbers, locations, and names.",
      "💡 **Tip**: Focus on identifying specific information. Pay attention to questions like 'When?', 'Where?', 'Who?', and 'How many?' to find the answers.",
    ],
  },
  {
    id: 2,
    name: "Section 2: Monologue",
    icon: <FaVolumeUp />,
    description:
      "You’ll hear a speaker talking about a specific topic such as a guide giving instructions.",
    image: "/section2.jpg",
    content: [
      "🗣️ **Section 2** is a monologue where you’ll hear a single speaker talking about a topic. The speaker might be giving directions, explaining a process, or offering information about a specific place or service.",
      "📚 The questions in this section usually require you to understand general ideas, sequence of events, or detailed descriptions.",
      "💡 **Tip**: Listen for keywords that describe sequences like 'first,' 'next,' and 'finally.' These help you identify the order of events.",
    ],
  },
  {
    id: 3,
    name: "Section 3: Academic Discussion",
    icon: <FaClock />,
    description:
      "You’ll hear an academic discussion with several people discussing research, studies, or lectures.",
    image: "/section3.jpg",
    content: [
      "🎓 **In Section 3**, you’ll hear a group of people discussing an academic topic, such as a lecture or a research study. This could involve students discussing a subject or researchers presenting their findings.",
      "🔑 This section assesses your ability to follow an academic conversation, understand main ideas, and distinguish between different viewpoints.",
      "💡 **Tip**: Take note of the different perspectives being shared. The answers often relate to specific opinions or ideas discussed by the speakers.",
    ],
  },
  {
    id: 4,
    name: "Section 4: Lecture",
    icon: <FaMusic />,
    description:
      "Listen to a lecture or a formal talk about academic topics like science or history.",
    image: "/section4.jpg",
    content: [
      "🎤 **Section 4** features a lecture on an academic subject, often related to science, history, or general knowledge. This section will test your ability to understand detailed information and key ideas presented in a formal academic setting.",
      "📖 You will be required to follow the lecture, understand complex concepts, and extract important points from the speaker’s talk.",
      "💡 **Tip**: Focus on the main ideas and details mentioned in the lecture. Pay attention to introductory statements, as they often provide a summary of key points.",
    ],
  },
];

const ListeningSection = () => {
  const [selectedSection, setSelectedSection] = useState(listeningSections[0]);

  return (
    <div className="md:max-w-[1400px] px-3 mx-auto bg-gray-50">
      <NavBar />

      {/* Intro Section */}
      <div className="text-center py-16 px-6 bg-purple-50 ">
        <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
          IELTS Listening Test Overview 🎧
        </h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          The IELTS Listening test evaluates your ability to understand spoken
          English in various settings, ranging from casual conversations to
          academic discussions.
        </p>
      </div>

      {/* Listening Test Sections */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          What is the Listening Test? 🔊
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          The IELTS Listening test includes four sections, each increasing in
          complexity. You will listen to different types of spoken material,
          such as conversations, monologues, and academic discussions, and
          answer questions based on the content.
        </p>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 px-6">
          {listeningSections.map((section) => (
            <div
              key={section.id}
              className="relative bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-90"
              onClick={() => setSelectedSection(section)}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 p-4 rounded-full shadow-lg">
                <span className="text-3xl text-white">{section.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 text-center">
                {section.name}
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Section Details */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 ">
          Details about {selectedSection.name}
        </h2>
        <div className="text-lg text-gray-700 mb-8 ">
          {selectedSection?.content?.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-600">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* How to Achieve a High Band Score Section */}
      <section className="py-16 bg-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 ">
          How to Achieve a Good Band in IELTS Listening 📈
        </h2>
        <div className="text-lg text-gray-700 mb-8 ">
          <p className="mb-4">
            Scoring well on the IELTS Listening test requires practice and
            understanding of the test format. Here are some tips to help you
            achieve a higher band score:
          </p>
          <div className="space-y-6">
            <div>
              <strong className="text-xl">
                1. Familiarize Yourself with the Test Format 📝:
              </strong>
              <p className="text-gray-600">
                Knowing the different types of questions (multiple choice,
                matching, completion) and the sections of the test will help you
                focus on the right areas during your practice.
              </p>
            </div>
            <div>
              <strong className="text-xl">
                2. Improve Listening Skills 🎶:
              </strong>
              <p className="text-gray-600">
                Practice listening to a variety of audio sources like podcasts,
                news, and documentaries. This will help you get used to
                different accents and the speed of natural speech.
              </p>
            </div>
            <div>
              <strong className="text-xl">3. Take Practice Tests ⏱️:</strong>
              <p className="text-gray-600">
                Take full-length listening practice tests under timed conditions
                to simulate the actual test. This will improve your speed and
                accuracy in answering questions.
              </p>
            </div>
            <div>
              <strong className="text-xl">4. Focus on Keywords 🔑:</strong>
              <p className="text-gray-600">
                During the listening test, pay attention to keywords such as
                names, numbers, and dates, as these are often crucial to
                answering the questions correctly.
              </p>
            </div>
            <div>
              <strong className="text-xl">
                5. Don't Panic if You Miss Something 😰:
              </strong>
              <p className="text-gray-600">
                If you miss an answer, don’t worry. Move on and focus on the
                next part. There will be plenty of other opportunities to score
                points.
              </p>
            </div>
            <div>
              <strong className="text-xl">
                6. Improve Your Vocabulary 📚:
              </strong>
              <p className="text-gray-600">
                Expanding your vocabulary will help you understand different
                topics in the listening test, particularly in academic
                discussions or lectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListeningSection;
