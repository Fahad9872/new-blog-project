"use client";

import { motion } from "framer-motion";

export default function Touch() {
  return (
    <section className="relative mt-20 mb-20 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white">
      {/* Top Divider Shape */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg
          className="w-full rotate-180 origin-center"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* Content Section */}
      <div className="relative py-20 px-6 text-center overflow-hidden rounded-b-[60px]">
        {/* Background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 opacity-30 rounded-2xl rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 opacity-30 rounded-2xl -rotate-45"></div>
        </div>

        {/* Motion Content */}
        <motion.div
          className="relative max-w-3xl mx-auto z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Already Convinced? Send your profile to us
          </h2>
          <button className="mt-4 px-6 py-2 border border-white rounded-md text-sm md:text-base font-medium hover:bg-white hover:text-purple-700 transition">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
