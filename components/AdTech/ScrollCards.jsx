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
];

export default function ScrollLockCards() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-12">
        {/* Left Side Text */}
        <div className="md:w-1/2 text-white">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Next-Gen AdTech Capabilities <br />
            Powering Precision, Performance, and Monetization
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            With over a decade of experience in AdTech development, our
            expertise spans the entire AdTech ecosystem. Our services currently
            power advertising operations across 40+ countries, helping
            businesses achieve significant improvement in campaign performance
            while maintaining 95% platform uptime.
          </motion.p>
        </div>

        {/* Right Side Stacked Cards */}
        <div className="md:w-1/2 relative h-[550px] flex items-center justify-center perspective-[1200px]">
          {cards.map((card, index) => {
            const start = index / cards.length;
            const end = (index + 1) / cards.length;

            // scroll-based transforms
            const y = useTransform(scrollYProgress, [start, end], [0, -150]);
            const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);
            const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

            // static offset for stacked look
            const xOffset = index * 20;
            const yOffset = index * 18;
            const rotate = -2 * index;

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
                className="absolute w-full max-w-lg bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-2xl shadow-2xl p-8"
              >
                <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                <p className="text-gray-200 text-lg">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
