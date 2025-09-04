"use client";
import { useState } from "react";
import {
  FaPlay,
  FaUsers,
  FaBriefcase,
  FaBuilding,
  FaBirthdayCake,
} from "react-icons/fa";
import ReactPlayer from "react-player";

export default function FacilitySection() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className=" bg-gray-50">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Facility at Rishabh
        </h2>
      </div>

      {/* Thumbnail or Video */}
      <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-md mb-[-50px]">
        {!playVideo ? (
          <>
            {/* Thumbnail */}
            <img
              src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png" // <- replace with your custom thumbnail
              alt="Rishabh Facility"
              className="w-full h-72 md:h-[420px] object-cover"
            />
            {/* Play Button */}
            <button
              onClick={() => setPlayVideo(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
            >
              <FaPlay className="text-white text-5xl md:text-6xl" />
            </button>
          </>
        ) : (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
            playing
            controls
            width="100%"
            height="420px"
          />
        )}
      </div>

      <div className="bg-[#edf0f8] py-20">
        {/* Benefits Section */}
        <div className="mt-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold">
            Benefits of Working at Rishabh
          </h3>
          <p className="mt-2 max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
            Our success is defined by our core values of commitment to clients,
            ethics and society through sustained collaboration, honesty and
            opportunity creation partnerships.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8 max-w-6xl mx-auto">
          {/* Career Enhancement */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <FaBriefcase className="text-purple-600 text-3xl mb-4" />
            <h4 className="font-semibold text-lg">
              Career Enhancement Opportunities
            </h4>
            <p className="text-gray-600 text-sm mt-2">
              Investment in Individual Growth
            </p>
            <p className="text-gray-600 text-sm">
              Leading Skill Enhancing Trainings
            </p>
          </div>

          {/* Collaboration */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <FaUsers className="text-green-600 text-3xl mb-4" />
            <h4 className="font-semibold text-lg">An Ethos of Collaboration</h4>
            <p className="text-gray-600 text-sm mt-2">
              Combining Teamwork and Autonomy
            </p>
            <p className="text-gray-600 text-sm">A Culture of Inclusivity</p>
          </div>

          {/* Open Office */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <FaBuilding className="text-blue-600 text-3xl mb-4" />
            <h4 className="font-semibold text-lg">
              Productive Open Office Space
            </h4>
            <p className="text-gray-600 text-sm mt-2">An Expansive Setup</p>
            <p className="text-gray-600 text-sm">Eco-Friendly Campus</p>
          </div>

          {/* Celebration */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <FaBirthdayCake className="text-red-500 text-3xl mb-4" />
            <h4 className="font-semibold text-lg">A Culture of Celebration</h4>
            <p className="text-gray-600 text-sm mt-2">
              Celebrating Life as it Comes
            </p>
            <p className="text-gray-600 text-sm">
              Celebrating Collective Success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
