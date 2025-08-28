"use client";
import { useState } from "react";
import Carousel from "react-elastic-carousel";
import Image from "next/image";

export default function ClientChatter() {
  const testimonials = [
    {
      title: "Harley Street Doctors",
      text: "The turnaround for your responses and completion of work is fantastic. Before meeting Rishabh, we had 5 failed PEN tests, but after working with you, there have been no fails. We saved £12,000 from the current year PEN Tests.",
      author: "Gemma Smith",
      role: "Head of Operations",
    },
    {
      title: "Acme Corp",
      text: "Working with your team has been a game-changer. The execution was flawless and timelines were met every time.",
      author: "John Doe",
      role: "CISO",
    },
    {
      title: "Global Tech",
      text: "We appreciate your clear communication and dedication. It gave us confidence at every stage of the project.",
      author: "Sarah Lee",
      role: "CTO",
    },
    {
      title: "FinTech Plus",
      text: "Security compliance was smooth and efficient thanks to you. Highly recommended.",
      author: "Emily Davis",
      role: "VP Security",
    },
  ];

  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Client Chatter that Matters
        </h2>
        <p className="text-gray-600">
          Stop wondering, start WOWing – Work with us for results that impress!
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {/* Testimonials Carousel */}
        <div className="h-[350px]">
          <Carousel
            pagination={true}
            showArrows={false}
            renderPagination={({ pages, activePage, onClick }) => {
              return (
                <div className="flex justify-center mt-8 space-x-2">
                  {pages.map((page) => {
                    const isActive = activePage === page;
                    return (
                      <button
                        key={page}
                        onClick={() => onClick(page)}
                        className={`h-3 transition-all duration-300 ${
                          isActive
                            ? "w-8 bg-purple-600 h-[5px] rounded-full"
                            : "w-3 bg-light-gray h-[5px] rounded-full"
                        }`}
                      />
                    );
                  })}
                </div>
              );
            }}
          >
            {/* Slide 1 → first set of testimonials */}

            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] p-6 rounded-xl h-[300px] shadow-md flex flex-col justify-between"
              >
                <p className="text-gray-900 font-medium mb-3">{t.title}</p>
                <p className="text-gray-700 mb-4">{t.text}</p>
                <div>
                  <p className="font-semibold text-purple-700">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* ---- Below carousel: Video Section ---- */}
        <div className="relative bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl overflow-hidden flex items-center justify-center p-6">
          {!playVideo ? (
            <div className="relative w-full h-64 flex items-center justify-center">
              {/* Overlay Content */}
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                VOICES OF TRUST
              </div>

              {/* Person Image (replace with real) */}
              <img
                src="https://img.freepik.com/premium-photo/successful-ceo-suit-confident-entrepreneur-business-leadership-man-professional-mature-ceo-expressing-success-businessman-isolated-white-business-success-goal-setting_474717-169305.jpg?semt=ais_hybrid&w=740&q=80https://w7.pngwing.com/pngs/347/449/png-transparent-stephen-murphy-chief-executive-epicor-corporation-ceo-succession-ibi-group-necktie-business-formal-wear-thumbnail.png" // <-- replace with actual image
                alt="Harsh Mishra"
                fill
                className="object-cover rounded-2xl"
              />

              {/* Play Button */}
              <button
                onClick={() => setPlayVideo(true)}
                className="absolute w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-7 h-7 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                  />
                </svg>
              </button>

              {/* Name Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded font-semibold text-sm">
                HARSH MISHRA <br />
                <span className="text-xs font-normal">CTO, S4G CONSULTING</span>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-64 rounded-2xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* ---- Partners Section ---- */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-10 rounded-xl h-[350px]">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Driving Digital Evolution, Powered by Partnerships
          </h3>
          <div className="flex items-center justify-center gap-6 flex-wrap ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIXBGr9oszkD9qUjUYVn7i-0lwuHoDth3_Q&s"
              alt="Partner Logo"
              className="h-[60px]"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGxCZoIetPoSqLe0PU3KwYJoFVDEUZRX5MA&s"
              alt="Partner Logo"
              className="h-[50px]"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOiub2IaFTkPSSw5OPqPyYdZU-FRjJtoWxw&s"
              alt="Partner Logo"
              className="h-[50px]"
            />
          </div>
        </div>

        {/* ---- Certifications Section ---- */}
        <div className="bg-[#F8FAFC] p-10  rounded-xl h-[350px]">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Turning Standards into Standouts
          </h3>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjugvttTrS3ZK2YlsJjkhTVPwHg-545ZNvtg&s"
              alt="Cert Logo"
              className="h-[100px]"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGdpiYx8I8gaIPA_j4Hi99L67gFEa_oCLOQ&s"
              alt="Cert Logo"
              className="h-[100px]"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUov4we6XGxL4t8Twksdg2oFwoM5QULIpig&s"
              alt="Cert Logo"
              className="h-[100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
