"use client";
import { useState } from "react";
import Carousel from "react-elastic-carousel";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/82.jpg",
      title: "Harley Street Doctors",
      text: "The turnaround for your responses and completion of work is fantastic. Before meeting Rishabh, we had 5 failed PEN tests, but after working with you, there have been no fails. We saved £12,000 from the current year PEN Tests.",
      author: "Gemma Smith",
      role: "Head of Operations",
    },
    {
      img: "https://randomuser.me/api/portraits/men/80.jpg",
      title: "Acme Corp",
      text: "Working with your team has been a game-changer. The execution was flawless and timelines were met every time.",
      author: "John Doe",
      role: "CISO",
    },
    {
      img: "https://randomuser.me/api/portraits/men/81.jpg",
      title: "Global Tech",
      text: "We appreciate your clear communication and dedication. It gave us confidence at every stage of the project.",
      author: "Sarah Lee",
      role: "CTO",
    },
    {
      img: "https://randomuser.me/api/portraits/men/84.jpg",
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
          Employee Testimonials
        </h2>
      </div>
      <div className="">
        <Carousel
          pagination={true}
          showArrows={false}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div className="flex justify-center mt-[-20px] z-50 space-x-2">
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
              className="bg-[#F8FAFC] p-6 rounded-xl md:h-[300px] h-[430px] shadow-md flex flex-col justify-between text-center"
            >
              <img
                src={t.img}
                alt=""
                className="w-[80px] mx-auto rounded-full"
              />
              <p className="text-gray-700 mb-4 ">{t.text}</p>
              <div className="mb-4">
                <p className="font-semibold text-purple-700">{t.author}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
