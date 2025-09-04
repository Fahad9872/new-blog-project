"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const historyData = [
  {
    period: "2000-2005",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-81f62a5/www.rishabhsoft.com/wp-content/uploads/2025/02/2000-2005-1.jpg",
    points: [
      "Started small software initiatives",
      "Built first client base",
      "Laid foundation for future growth",
    ],
  },
  {
    period: "2006-2010",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-81f62a5/www.rishabhsoft.com/wp-content/uploads/2025/02/2006-2010-1.jpg",
    points: [
      "Expanded globally with offices in London and Silicon Valley",
      "Founded Rishabh Engineering (Oil & Gas services)",
      "Achieved ISO 27001:2005 and CMMi Level 3 certifications",
      "Partnered with Microsoft, Sun, and Red Hat",
      "Established Rishabh Charitable Trust",
    ],
  },
  {
    period: "2011-2015",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-81f62a5/www.rishabhsoft.com/wp-content/uploads/2025/03/2011-2015-1-1.jpg",
    points: [
      "Launched new software products",
      "Expanded client base across Europe",
      "Invested in cloud and enterprise solutions",
    ],
  },
  {
    period: "2016-2019",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-81f62a5/www.rishabhsoft.com/wp-content/uploads/2025/02/2006-2010-1.jpg",
    points: [
      "Introduced AI & ML powered solutions",
      "Entered new markets in APAC",
      "Partnerships with leading tech vendors",
    ],
  },
  {
    period: "2020-2024",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-81f62a5/www.rishabhsoft.com/wp-content/uploads/2025/03/2020-2024.jpg",
    points: [
      "Enhanced digital transformation services",
      "Achieved global awards and recognitions",
      "Expanded product portfolio to SaaS solutions",
    ],
  },
];

export default function History() {
  const [activeIndex, setActiveIndex] = useState(1); // Default active tab

  return (
    <div className="py-12 px-6 text-white bg-black">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Rishabh History
      </h2>

      {/* Tabs */}
      <div className="relative flex justify-center md:space-x-10 space-x-6 mb-12">
        {/* Timeline Line */}
        <div className="absolute top-10 left-0 right-0 h-[2px] bg-gray" />

        {historyData.map((item, index) => (
          <button
            key={item.period}
            onClick={() => setActiveIndex(index)}
            className={`relative md:text-[16px] text-[12px] font-medium transition-colors ${
              index === activeIndex
                ? "text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {item.period}

            {/* Marker Dot */}
            <span
              className={`absolute -bottom-[25px] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full  ${
                index === activeIndex ? "border-2 border-black bg-pink-500" : ""
              }`}
            />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={historyData[activeIndex].image}
            src={historyData[activeIndex].image}
            alt={historyData[activeIndex].period}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-72 h-72 rounded-2xl object-cover shadow-lg"
          />
        </AnimatePresence>

        {/* Points */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={historyData[activeIndex].period + "-points"}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 max-w-xl"
          >
            {historyData[activeIndex].points.map((point, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-pink-500">➔</span>
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
