import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const tabs = ["Services", "Industries"];

const servicesData = [
  "All",
  "AI/ML Engineering",
  "Application Modernization Services",
  "Data Analytics Services",
  "Mobile app development",
  "Enterprise Software Development",
  "Cloud Application Development Company",
  "Software Product Development Services",
  "Software Testing and QA Services",
  "Quality Engineering Services",
  "IoT Consulting Services",
  "IoT Application Development Services",
  "Data Engineering Services",
  "Digital Experience",
  "Data Visualization",
  "Business Intelligence Services",
  "DevOps Services & Solutions",
];

const industriesData = [
  "All",
  "Finance",
  "Healthcare",
  "Education",
  "Retail",
  "Automotive",
  "Energy",
  "Travel",
  "Logistics",
  "Media & Entertainment",
];

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("Services");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item) => {
    if (item === "All") {
      setSelectedItems([]);
    } else if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const data = activeTab === "Services" ? servicesData : industriesData;

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center justify-between px-4 py-2 -mb-px font-medium text-sm md:text-base border-2 py-3 w-[50%] ${
                isActive
                  ? "border-light-gray border-r-0 text-purple-500"
                  : "border-light-gray text-gray-700"
              }`}
            >
              <div>
                {tab}
                {tab === "Services" && isActive && selectedItems.length > 0
                  ? ` (${selectedItems.length} Selected)`
                  : ""}
              </div>
              <span className="mr-2">
                {isActive ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
          );
        })}
      </div>

      {/* Items */}
      <div className="flex flex-wrap gap-2 mt-4">
        {data.map((item) => {
          const isSelected = selectedItems.includes(item);
          return (
            <button
              key={item}
              onClick={() => handleSelect(item)}
              className={`px-4 py-2 border rounded-md text-sm md:text-base transition-colors duration-200 ${
                item === "All"
                  ? "border-gray-500 text-gray-700"
                  : isSelected
                  ? "border-purple-500 text-purple-500"
                  : "border-gray-500 text-gray-700 hover:border-purple-500 hover:text-purple-500"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-10">
        <div className="relative overflow-hidden rounded-lg mt-10  group">
          <img
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
            alt="Card Background"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute left-2 right-2 bottom-[100px] h-[80px] overflow-hidden bg-white p-4 rounded transform translate-y-full group-hover:h-[90%] group-hover:bottom-2 group-hover:top-3 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">
              Cloud-Based Industrial eCommerce Platform Modernization
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              To scale a legacy eCommerce infrastructure for enhanced
              performance, security, and marketing intelligence
            </p>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
