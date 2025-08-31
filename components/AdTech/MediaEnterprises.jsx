import { useState } from "react";

const tabs = [
  {
    title: "Programmatic Advertising",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">
          Unlock Precision-targeted Advertising Through Automated Bidding
        </h2>
        <p className="mb-2">
          We can help you develop tailored Ad Tech solutions to launch new features
          and outpace the competition. Our expert AdTech developers stand ready to
          support you in optimizing DSPs, SSPs, DMPs, and ad exchanges – enhancing
          infrastructure, refining UI, and providing detailed reporting.
        </p>
        <p className="mb-2">
          Our expertise lies in developing real-time bidding and programmatic
          advertising platforms designed for omnichannel advertising, including
          display, mobile, video, CTV, and OTT. Our team is proficient at designing
          and developing every element of the programmatic advertising ecosystem.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Demand-side platforms (DSPs)</li>
          <li>Supply-side platforms (SSPs)</li>
          <li>Ad networks</li>
          <li>Ad server software development</li>
          <li>RTB Ad exchange</li>
        </ul>
      </div>
    ),
  },
  {
    title: "RTB and Advertising Campaigns Automation",
    content: <p>Content for RTB and Advertising Campaigns Automation goes here.</p>,
  },
  {
    title: "CTV Exchange",
    content: <p>Content for CTV Exchange goes here.</p>,
  },
  {
    title: "Demand-side Platforms (DSPs)",
    content: <p>Content for DSPs goes here.</p>,
  },
  {
    title: "Supply-side Platforms (SSPs)",
    content: <p>Content for SSPs goes here.</p>,
  },
  {
    title: "Ad Exchange Marketplaces",
    content: <p>Content for Ad Exchange Marketplaces goes here.</p>,
  },
];

export default function MediaEnterprises() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Title */}
      <p className="text-2xl md:text-4xl font-semibold mb-6">
        Build-to-Order AdTech Solutions for Modern Advertising Agencies & Media Enterprises
      </p>

      {/* Flex wrapper */}
      <div className="flex flex-col md:flex-row w-full gap-6">
        
        {/* Sidebar */}
        <div className="md:w-1/3 bg-gray-50 p-4 rounded-xl shadow-sm">
          <ul className="space-y-2">
            {tabs.map((tab, index) => (
              <li
                key={index}
                onClick={() => {
                  console.log("Clicked tab:", tab.title);
                  setActiveTab(index);
                }}
                className={`cursor-pointer p-3 rounded-lg transition-colors duration-200 text-sm md:text-base
                  ${activeTab === index 
                    ? "bg-purple-600 text-white shadow-md" 
                    : "hover:bg-purple-50 text-gray-700"}`}
              >
                {tab.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="md:w-2/3 flex-grow bg-white shadow-md rounded-2xl p-6 transition-all duration-300 ease-in-out">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
}
