"use client";
import { useState } from "react";

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Resume submitted successfully!");
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
        {/* Left text & illustration */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Submit Your Resume and{" "}
            <span className="text-pink-600">Accelerate Your Career</span> Growth
            with Us.
          </h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Resume Illustration"
            className="mt-6 w-64 md:w-80"
          />
        </div>

        {/* Right form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md border border-purple-400"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            className="w-full border border-gray rounded-lg p-3 mb-4 outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="w-full border border-gray rounded-lg p-3 mb-4 outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            className="w-full border border-gray rounded-lg p-3 mb-4 outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="resume"
            className="w-full border border-gray rounded-lg p-3 mb-4 outline-none"
            onChange={handleChange}
            required
          />
          <textarea
            name="about"
            placeholder="About you"
            className="w-full border border-gray rounded-lg p-3 mb-4 outline-none"
            rows="3"
            onChange={handleChange}
          ></textarea>
          <div className="flex items-start gap-2 mb-4">
            <input type="checkbox" className="mt-1" required />
            <p className="text-sm text-gray-600">
              Yes, I am OK to receive further communication over my details
              shared here. Refer{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>{" "}
              for more info.
            </p>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
          >
            Send Resume
          </button>
        </form>
      </div>
    </section>
  );
}
