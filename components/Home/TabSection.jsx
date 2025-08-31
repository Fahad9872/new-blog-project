import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

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

const caseStudies = [
  {
    id: 1,
    title: "Cloud-Based Industrial eCommerce Platform Modernization",
    description:
      "To scale a legacy eCommerce infrastructure for enhanced performance, security, and marketing intelligence",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    categories: ["Application Modernization Services", "Retail"],
  },
  {
    id: 2,
    title: "ERP System Reengineering & MES Implementation",
    description:
      "A digital transformation success story for the US apparel manufacturing industry",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
    categories: ["Enterprise Software Development", "Manufacturing"],
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Boosting efficiency with predictive insights and business intelligence automation",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    categories: ["AI/ML Engineering", "Data Analytics Services", "Finance"],
  },
  {
    id: 4,
    title: "Cloud Migration Strategy",
    description:
      "Seamlessly migrating infrastructure to cloud with zero downtime",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80",
    categories: ["Cloud Application Development Company", "Energy"],
  },
  {
    id: 5,
    title: "Smart Manufacturing Platform",
    description:
      "Enabling IoT integration and real-time production monitoring",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    categories: ["IoT Consulting Services", "Automotive"],
  },
  {
    id: 6,
    title: "FinTech Mobile App Redesign",
    description:
      "Redefining the digital experience for next-gen banking customers",
    image:
      "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?auto=format&fit=crop&w=1200&q=80",
    categories: ["Mobile app development", "Finance"],
  },
  {
    id: 7,
    title: "E-Learning Portal Transformation",
    description:
      "Scaling education platforms for global learners and virtual classrooms",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    categories: ["Education", "Digital Experience"],
  },
  {
    id: 8,
    title: "Retail CRM Optimization",
    description: "Helping retailers improve loyalty with smarter insights",
    image:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1200&q=80",
    categories: ["Retail", "Business Intelligence Services"],
  },
  {
    id: 9,
    title: "AI-Powered Healthcare Platform",
    description:
      "Enhancing patient care with predictive diagnostics and telemedicine",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    categories: ["Healthcare", "AI/ML Engineering"],
  },
  {
    id: 10,
    title: "Blockchain Supply Chain Solution",
    description:
      "Improving traceability and transparency across logistics networks",
    image:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1200&q=80",
    categories: ["Logistics", "Blockchain", "DevOps Services & Solutions"],
  },
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

  // 🔎 Filter case studies dynamically
  const filteredCaseStudies =
    selectedItems.length === 0
      ? caseStudies
      : caseStudies.filter((study) =>
          study.categories.some((cat) => selectedItems.includes(cat))
        );

  return (
    <div className="p-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-5">
        <p>Home</p>
        <IoIosArrowBack className="rotate-180" />
        <p>Our Work</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedItems([]); // reset filters when switching tab
              }}
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
              <span className="mr-2">{isActive ? <FaMinus /> : <FaPlus />}</span>
            </button>
          );
        })}
      </div>

      {/* Filter Buttons */}
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

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {filteredCaseStudies.map((study) => (
          <div
            key={study.id}
            className="relative overflow-hidden rounded-lg group shadow-lg"
          >
            {/* Background Image */}
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-[340px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute left-2 right-2 bottom-[30%] h-[80px] overflow-hidden bg-white p-4 rounded transform translate-y-full group-hover:h-[92%] group-hover:bottom-2 group-hover:top-3 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
              <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
              <p className="text-sm hidden group-hover:block text-gray-700 mb-3">
                {study.description}
              </p>
              <button className="px-4 hidden group-hover:block py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded">
                View More
              </button>
            </div>
          </div>
        ))}
        {filteredCaseStudies.length === 0 && (
          <p className="col-span-full text-center text-gray-600">
            No case studies found for selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
