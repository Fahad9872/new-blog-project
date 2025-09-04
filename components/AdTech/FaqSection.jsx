import { useState } from "react";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const faqsData = [
  {
    id: 1,
    title: "Data Mastery for Dynamic Marketing",
    description:
      "We help you make the most of your data for impactful marketing campaigns.",
  },
  {
    id: 2,
    title: "AdTech Software Done Right, Every Time",
    description:
      "We deliver reliable AdTech solutions tailored to your business needs.",
  },
  {
    id: 3,
    title: "Top Talent for AdTech Success",
    description:
      "Our seasoned developers have over a decade of experience driving innovation in the AdTech industry.",
  },
  {
    id: 4,
    title: "Experience-driven AdTech Solutions",
    description:
      "We combine knowledge and creativity to build next-gen AdTech platforms.",
  },
];

export default function FaqSection() {
  const [activeId, setActiveId] = useState(3); // default active (you had id 3 active)

  return (
    <section className="mx-auto px-6 py-12">
      {/* Heading */}
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          AdTech Software Development Company
        </span>{" "}
        for Publishers, Advertisers, and Marketing Agencies
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p
        className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Our AdTech software development services include platform creation,
        programmatic solutions, data management, campaign oversight,
        cross-channel integration, API development, rigorous QA, and ongoing app
        support.
      </motion.p>

      {/* FAQ Items */}
      <div className="divide-y divide-light-gray">
        {faqsData.map((faq) => {
          const isActive = faq.id === activeId;
          return (
            <div
              key={faq.id}
              className="py-6 cursor-pointer"
              onClick={() => setActiveId(faq.id)}
            >
              <div className="flex items-start space-x-3">
                {/* Icon */}
                {isActive ? (
                  <FaCheckCircle className="text-green-500 text-xl mt-1" />
                ) : (
                  <FaRegCheckCircle className="text-gray-400 text-xl mt-1" />
                )}

                {/* Text */}
                <div>
                  <h3
                    className={`text-lg font-semibold transition-colors ${
                      isActive ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {faq.title}
                  </h3>
                  {isActive && faq.description && (
                    <p className="text-gray-600 mt-2">{faq.description}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
