"use client";
import { useState } from "react";

const tabs = [
  {
    id: "agile",
    label: "Agile Approach",
    description:
      "Ideal for projects with dynamic requirements and possibly evolving needs that change through the course of the project. It offers a continuous iteration ecosystem to improve customer experience that comprises of conceptualization, inception, creation, release, production, and re-engineering for business solutions.",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-af78554/www.rishabhsoft.com/wp-content/uploads/2025/02/Agile-768x458.jpg",
  },
  {
    id: "waterfall",
    label: "Waterfall Approach",
    description:
      "Best suited for projects with clearly defined requirements and minimal expected changes. It follows a sequential design process ensuring each stage is completed before moving to the next.",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-af78554/www.rishabhsoft.com/wp-content/uploads/2025/02/Waterfall-768x458.jpg",
  },
  {
    id: "hybrid",
    label: "Hybrid Approach",
    description:
      "Combines the best aspects of Agile and Waterfall, offering flexibility in development while maintaining structured project management. Ideal for projects requiring balance of adaptability and predictability.",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-af78554/www.rishabhsoft.com/wp-content/uploads/2025/02/Hybrid-768x458.jpg",
  },
];

export default function MethodologyTabs() {
  const [activeTab, setActiveTab] = useState("agile");
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <div className=" mx-auto">
        {/* Heading */}
        <div className="md:flex md:items-start md:justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Project Execution <br className="hidden md:block" /> Methodology
          </h2>
          <p className="text-gray-600 max-w-xl mt-4 md:mt-0">
            Our project execution methodology focuses on assignments of all
            types & sizes, catering to the needs of small, systematically
            growing, or entrepreneurial businesses.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex w-full mx-auto max-w-2xl bg-gray-100 rounded-md overflow-hidden mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2 text-sm md:text-base font-medium text-center transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 bg-blue-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="text-gray-700 mb-6">{activeContent?.description}</div>

        {/* Image */}
        {activeContent?.image && (
          <div className="w-full flex justify-center">
            <img
              src={activeContent.image}
              alt={activeContent.label}
              className="rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
    </section>
  );
}
