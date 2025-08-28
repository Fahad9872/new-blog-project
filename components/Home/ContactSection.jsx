"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState("call");
  const [date, setDate] = useState(new Date());

  return (
    <section className="w-full px-6 py-16 bg-black text-white rounded-2xl shadow-md">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side with Graphics */}
        <div className="flex items-center justify-center relative">
          <div className="w-64 h-64 md:w-80 md:h-80 border border-gray-600 rounded-full flex items-center justify-center">
            <div className="w-40 h-40 border border-gray-600 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
            </div>
          </div>
          {/* Icons */}
          <div className="absolute -top-4 left-8 bg-blue-600 p-4 rounded-full">
            📞
          </div>
          <div className="absolute top-10 right-6 bg-white text-black p-3 rounded-full">
            💬
          </div>
          <div className="absolute bottom-8 left-6 bg-gray-800 p-3 rounded-full">
            ⏰
          </div>
          <div className="absolute bottom-0 right-12 bg-blue-700 p-3 rounded">
            📧
          </div>
          <div className="absolute -bottom-4 left-1/3 bg-gray-800 p-3 rounded-full">
            ⚙️
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

          {/* Tabs */}
          <div className="flex mb-6">
            <button
              onClick={() => setActiveTab("request")}
              className={`flex-1 py-3 px-4 rounded-l-md ${
                activeTab === "request"
                  ? "bg-blue-600 text-white"
                  : "bg-gray text-gray-400"
              }`}
            >
              Send Request
            </button>
            <button
              onClick={() => setActiveTab("call")}
              className={`flex-1 py-3 px-4 rounded-r-md ${
                activeTab === "call"
                  ? "bg-blue-600 text-white"
                  : "bg-gray text-gray-400"
              }`}
            >
              Schedule a Call
            </button>
          </div>

          {activeTab === "request" ? (
            <>
              <p className="text-gray-300 text-sm mb-4">
                You're just a message away from turning "what if" into "let's do
                it!"
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                />
                <input
                  type="text"
                  placeholder="Company*"
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                />
                <textarea
                  placeholder="Message*"
                  rows={4}
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                ></textarea>

                <label className="flex items-center text-sm text-gray-400">
                  <input type="checkbox" className="mr-2" />
                  Yes, I am OK to receive further communication over my details
                  shared here. Refer{" "}
                  <a href="#" className="text-blue-400 underline">
                    Privacy Policy
                  </a>
                </label>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500"
                >
                  Submit
                </motion.button>
              </form>
            </>
          ) : (
            <div className="space-y-6">
              <p className="text-gray-300 text-sm">
                Pick a date and time that works for you.
              </p>
              <div className="custom-calendar rounded-lg overflow-hidden w-full">
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="react-calendar w-full"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-500"
              >
                Confirm Call on {date.toDateString()}
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* Custom Dark Theme for Calendar */}
      <style jsx global>{`
        .react-calendar {
          background-color: #000 !important;
          color: #fff !important;
          border: 1px solid #333;
          padding: 1rem;
        }
        .react-calendar__tile {
          background: #111 !important;
          color: #fff !important;
          border-radius: 8px;
          marginbottom: 5px;
        }
        .react-calendar__tile--active {
          background: #2563eb !important; /* blue */
          color: #fff !important;
        }
        .react-calendar__navigation button {
          color: #fff !important;
          background: #111 !important;
        }
        .react-calendar__month-view__weekdays {
          color: #aaa !important;
        }
      `}</style>
    </section>
  );
}
