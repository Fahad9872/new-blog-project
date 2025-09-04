"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    id: 1,
    title: "Precision Targeting Solutions for Advertisers",
    description:
      "We build custom DSPs that use ML and data tools for precise audience targeting, optimizing campaign performance, ad spend, and ROI.",
  },
  {
    id: 2,
    title: "Real-Time Bidding at Scale",
    description:
      "Our RTB engines process millions of bid requests per second, ensuring your ads reach the right users at the right time.",
  },
  {
    id: 3,
    title: "CTV & Omnichannel Monetization",
    description:
      "Expand beyond display ads with CTV, OTT, and omnichannel monetization strategies tailored to your business.",
  },
  {
    id: 4,
    title: "Advanced Analytics & Insights",
    description:
      "Get real-time insights into campaign performance with dashboards powered by AI-driven analytics.",
  },
  {
    id: 5,
    title: "Fraud Prevention & Brand Safety",
    description:
      "Protect your ad spend with integrated fraud detection and brand safety mechanisms.",
  },
];

export default function TouchPoint() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic section height: one viewport per card
  const sectionHeight = `${cards.length * 100}vh`;

  return (
    <section
      ref={containerRef}
      style={{ height: sectionHeight }}
      className="relative bg-black"
    >
      <div className="sticky top-0 md:h-screen md:pt-0 pt-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-8 gap-8 md:gap-12">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Touchpoints that Bring Customer Experiences to Life
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            A US-based finance company struggled to modernize its legacy
            accounting software, which impacted its operational goals. We
            migrated their data, redesigned the application architecture, and
            hosted it on Azure Cloud. This streamlined processes,
          </motion.p>
        </div>

        {/* Right Side Dynamic Stacked Cards */}
        <div className="w-full md:w-1/2 relative h-[350px] sm:h-[420px] md:h-[500px] lg:h-[550px] flex items-center justify-center md:perspective-[1200px]">
          {cards.map((card, index) => {
            const start = index / cards.length;
            const end = (index + 1) / cards.length;

            // Smooth transforms per card
            const y = useTransform(scrollYProgress, [start, end], [0, -150]);
            const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);
            const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

            // Dynamic spacing based on total cards
            const spacingFactor = 120 / cards.length;
            const xOffset = index * spacingFactor;
            const yOffset = index * (spacingFactor * 0.9);
            const rotate = -(index * (5 / cards.length));

            return (
              <motion.div
                key={card.id}
                style={{
                  y,
                  scale,
                  opacity,
                  x: xOffset,
                  rotate,
                  top: yOffset,
                  zIndex: cards.length - index,
                }}
                className="absolute w-[60%] sm:w-[80%] md:w-full max-w-md md:max-w-lg bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-200">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
