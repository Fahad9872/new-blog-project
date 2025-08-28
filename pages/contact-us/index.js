import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const index = () => {
  return (
    <div>
      <NavBar />
      <section className=" md:max-w-[1440px] mx-auto  bg-gray-100  py-5 px-6 md:px-12">
        <div className=" mx-auto bg-white  overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Section - Contact Info */}
            <div className="bg-purple-50  p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg mb-6">
                Have questions? Feel free to reach out to us. Our team is here
                to help you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-2xl" />
                  <span className="text-lg">+123 456 7890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-2xl" />
                  <span className="text-lg">support@ieltscare.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-2xl" />
                  <span className="text-lg">
                    123 IELTS Street, New York, USA
                  </span>
                </div>
              </div>
              <p className="text-md mt-6">
                We are available Monday to Friday, from 9 AM to 6 PM. Feel free
                to visit us at our office or contact us through email or phone.
              </p>
            </div>

            {/* Right Section - Contact Form */}
            <div className="p-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-md text-gray-600 mb-4">
                Whether you have a question about courses, pricing, or anything
                else, our team is ready to answer all your questions.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D23E0]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D23E0]"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D23E0]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#f2496a] text-white py-3 rounded-lg font-semibold hover:bg-[#6319b8] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Visit Our Office
            </h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.970193191746!2d-74.0060154845956!3d40.71277617933064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a317f3c3f5b%3A0xd3a8f1a7ffec13!2s123%20IELTS%20Street%2C%20New%20York%2C%20USA!5e0!3m2!1sen!2sus!4v1628173902387!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default index;
