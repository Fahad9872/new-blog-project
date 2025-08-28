import NavBar from "@/components/NavBar/NavBar";
import Faq from "@/components/Shared/Faq";
import { Footer } from "@/components/Shared/Footer";
import React from "react";
import {
  FaStar,
  FaUserGraduate,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import {
  MdHearing,
  MdMenuBook,
  MdEditNote,
  MdRecordVoiceOver,
} from "react-icons/md"; // Icons for modules

// Sample IELTS Success Data
const successStories = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    description: "Achieved a remarkable band score with dedicated preparation!",
    overallBand: 8.0,
    scores: {
      listening: 8.5,
      reading: 8.0,
      writing: 7.5,
      speaking: 8.0,
    },
  },
  {
    id: 2,
    name: "Emma Smith",
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    description: "Consistent practice and strategy helped me excel in IELTS!",
    overallBand: 7.5,
    scores: {
      listening: 8.0,
      reading: 7.0,
      writing: 7.5,
      speaking: 7.5,
    },
  },
  {
    id: 3,
    name: "Michael Johnson",
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    description: "A structured approach made my IELTS journey successful!",
    overallBand: 8.5,
    scores: {
      listening: 9.0,
      reading: 8.5,
      writing: 8.0,
      speaking: 8.5,
    },
  },
  {
    id: 1,
    name: "John Doe",
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    description: "Achieved a remarkable band score with dedicated preparation!",
    overallBand: 8.0,
    scores: {
      listening: 8.5,
      reading: 8.0,
      writing: 7.5,
      speaking: 8.0,
    },
  },
  {
    id: 2,
    name: "Emma Smith",
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    description: "Consistent practice and strategy helped me excel in IELTS!",
    overallBand: 7.5,
    scores: {
      listening: 8.0,
      reading: 7.0,
      writing: 7.5,
      speaking: 7.5,
    },
  },
  {
    id: 3,
    name: "Michael Johnson",
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    description: "A structured approach made my IELTS journey successful!",
    overallBand: 8.5,
    scores: {
      listening: 9.0,
      reading: 8.5,
      writing: 8.0,
      speaking: 8.5,
    },
  },
  {
    id: 1,
    name: "John Doe",
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    description: "Achieved a remarkable band score with dedicated preparation!",
    overallBand: 8.0,
    scores: {
      listening: 8.5,
      reading: 8.0,
      writing: 7.5,
      speaking: 8.0,
    },
  },
  {
    id: 2,
    name: "Emma Smith",
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    description: "Consistent practice and strategy helped me excel in IELTS!",
    overallBand: 7.5,
    scores: {
      listening: 8.0,
      reading: 7.0,
      writing: 7.5,
      speaking: 7.5,
    },
  },
  {
    id: 3,
    name: "Michael Johnson",
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    description: "A structured approach made my IELTS journey successful!",
    overallBand: 8.5,
    scores: {
      listening: 9.0,
      reading: 8.5,
      writing: 8.0,
      speaking: 8.5,
    },
  },
  {
    id: 1,
    name: "John Doe",
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    description: "Achieved a remarkable band score with dedicated preparation!",
    overallBand: 8.0,
    scores: {
      listening: 8.5,
      reading: 8.0,
      writing: 7.5,
      speaking: 8.0,
    },
  },
  {
    id: 2,
    name: "Emma Smith",
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    description: "Consistent practice and strategy helped me excel in IELTS!",
    overallBand: 7.5,
    scores: {
      listening: 8.0,
      reading: 7.0,
      writing: 7.5,
      speaking: 7.5,
    },
  },
  {
    id: 3,
    name: "Michael Johnson",
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    description: "A structured approach made my IELTS journey successful!",
    overallBand: 8.5,
    scores: {
      listening: 9.0,
      reading: 8.5,
      writing: 8.0,
      speaking: 8.5,
    },
  },
];

const SuccessStories = () => {
  return (
    <div className="md:max-w-[1400px] px-3 md:mx-auto">
      <NavBar />
      <div className="relative md:h-[400px] md:py-0 py-20 flex flex-col items-center md:justify-center md:text-center text-white px-6 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative", // To ensure that the overlay is positioned relative to this container
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
              transition: "background 0.5s ease-in-out", // Transition for gradient change
              zIndex: 1, // Ensure the overlay sits on top of the image
            }}
          ></div>
        </div>

        {/* Content with Proper Animation */}
        <div className="relative z-10  opacity-100 transform translate-y-0 transition-all duration-1000 ease-in-out">
          <h1 className=" md:text-[45px] text-[30px] font-extrabold leading-tight drop-shadow-lg animate-fadeIn">
            Your IELTS Success Story Starts Here!
          </h1>
          <p className="mt-3 text-lg font-medium opacity-90 animate-fadeIn delay-200">
            Join thousands of achievers who have unlocked their dreams with our
            expert guidance.
          </p>

          {/* Animated CTA Button */}
          <button className="mt-5 py-3 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white text-lg font-semibold rounded-full shadow-lg border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3">
            <FaArrowRight className="text-yellow-400 text-xl transition-transform duration-300 group-hover:translate-x-1" />
            Join the Winners
          </button>
        </div>

        {/* Floating Success Badge */}
        <div className="absolute top-6 right-8 bg-white text-rose-500 px-4 py-2 rounded-full shadow-md flex items-center gap-2 text-lg font-semibold animate-bounce">
          <FaCheckCircle className="text-green-500 text-2xl" />
          98% Success Rate!
        </div>
      </div>
      <section className="py-12 px-6  mx-auto">
        {/* Page Heading */}

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="p-6 border border-light-gray rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image & Icon */}
              <div className="flex flex-col items-center">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-24 h-24 object-cover rounded-full mb-3"
                />
              </div>

              {/* Name & Description */}
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {story.name}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {story.description}
              </p>

              {/* Overall Band Score */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <FaStar className="text-yellow-500 text-2xl" />
                <span className="text-lg font-bold text-gray-800">
                  Band {story.overallBand}
                </span>
              </div>

              {/* Module Scores (Buttons with Icons) */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="py-2 px-3 flex items-center gap-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                  <MdHearing className="text-[15px]" /> Listening:{" "}
                  {story.scores.listening}
                </button>
                <button className="py-2 px-3 flex items-center gap-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                  <MdMenuBook className="text-[15px]" /> Reading:{" "}
                  {story.scores.reading}
                </button>
                <button className="py-2 px-3 flex items-center gap-2 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition duration-300">
                  <MdEditNote className="text-[15px]" /> Writing:{" "}
                  {story.scores.writing}
                </button>
                <button className="py-2 px-3 flex items-center gap-2 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-rose-600 transition duration-300">
                  <MdRecordVoiceOver className="text-[15px]" /> Speaking:{" "}
                  {story.scores.speaking}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Why Choose Us?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {[
              "Expert Guidance",
              "Personalized Study Plans",
              "High Success Rate",
              "Real Exam Practice",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border border-light-gray px-4 py-3 rounded-lg shadow-sm"
              >
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-lg font-medium text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Success Program Section */}
      </section>
      <Faq />
      <Footer />
    </div>
  );
};

export default SuccessStories;
