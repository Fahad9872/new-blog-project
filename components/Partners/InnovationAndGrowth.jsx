import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export const servicesData = [
  {
    title: "Agile Pods – Your Team Extended",
    iconUrl:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-af78554/www.rishabhsoft.com/wp-content/uploads/2025/05/Dedicated-Team-%E2%80%93-Managed-by-You-768x768.jpg", // Replace with your Google image link
    description: `Our Agile Pods operate as an extension of your in-house team, led by an experienced Engineering Manager and SCRUM Master who ensure alignment with your goals, streamline communication, and drive project milestones to completion.`,
    whoIsItFor: [
      "Start-ups and scale-ups looking to develop an MVP",
      "SMEs seeking digital capabilities without in-house hiring",
      "Enterprises managing large-scale transformations or cloud migrations",
      "Product companies requiring continuous innovation",
    ],
    howWeHelp: [
      "Platform Launches",
      "Product Expansions",
      "Cloud Migrations",
      "Digital Transformations",
      "Ongoing Support and Maintenance",
    ],
    advantage: [
      "Led by an Engineering Manager & Scrum Master",
      "Effective collaboration and KPI-driven monitoring",
      "Research-based design and development",
    ],
  },
  {
    title: "Dedicated Team – Managed by You",
    iconUrl:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-af78554/www.rishabhsoft.com/wp-content/uploads/2025/05/Dedicated-Team-%E2%80%93-Managed-by-You-768x768.jpg",
    description: "",
    whoIsItFor: [],
    howWeHelp: [],
    advantage: [],
  },
  {
    title: "Fixed Price Projects – AI-Powered Productivity",
    iconUrl:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-af78554/www.rishabhsoft.com/wp-content/uploads/2025/05/Dedicated-Team-%E2%80%93-Managed-by-You-768x768.jpg",
    description: "",
    whoIsItFor: [],
    howWeHelp: [],
    advantage: [],
  },
  {
    title: "Global Capability Center (GCC) – Expertise at Scale",
    iconUrl:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-af78554/www.rishabhsoft.com/wp-content/uploads/2025/05/Dedicated-Team-%E2%80%93-Managed-by-You-768x768.jpg",
    description: "",
    whoIsItFor: [],
    howWeHelp: [],
    advantage: [],
  },
];

function ServiceAccordion({ service }) {
  const [isOpen, setIsOpen] = useState(
    service.title === "Agile Pods – Your Team Extended"
  );

  return (
    <div className=" rounded-lg mb-4">
      <button
        className={`w-full flex justify-between items-center px-4 py-3 text-left font-medium
    ${isOpen ? "bg-purple-200 text-purple-800" : "bg-purple-50 "} 
    hover:bg-purple-100`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{service.title}</span>
        {isOpen ? <FiMinus /> : <FiPlus />}
      </button>

      {isOpen && (
        <div className="p-4 bg-white md:flex gap-5">
          {service.iconUrl && (
            <img
              src={service.iconUrl}
              alt={service.title}
              className="w-[500px] rounded-md h-[500px] mb-4"
            />
          )}
          <div>
            {/* Service Title */}
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

            {/* Service Description */}
            {service.description && (
              <p className="text-gray-700 mb-6">{service.description}</p>
            )}

            {/* Grid Layout */}
            <div className="grid grid-cols-2 gap-6">
              {/* Who Is It For */}
              {service.whoIsItFor.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Who Is It For?</h4>
                  <ul className="space-y-1 text-pink-600">
                    {service.whoIsItFor.map((item, idx) => (
                      <li key={idx}>｜ {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* How We Help */}
              {service.howWeHelp.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">How We Help?</h4>
                  <ul className="space-y-1 text-pink-600">
                    {service.howWeHelp.map((item, idx) => (
                      <li key={idx}>｜ {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rishabh Advantage */}
              {service.advantage.length > 0 && (
                <div className="col-span-2">
                  <h4 className="font-semibold mb-2">Rishabh Advantage:</h4>
                  <ul className="space-y-1 text-pink-600">
                    {service.advantage.map((item, idx) => (
                      <li key={idx}>｜ {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function InnovationAndGrowth() {
  return (
    <div className="p-6  mx-auto">
      {/* Promise Section */}

      {/* Engage Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">
          Your Trusted Software Development Partner For Accelerated Innovation &
          Growth{" "}
        </h3>
        <p>
          Joining forces with Rishabh enables you to widen marketplace
          visibility, technology spectrum, and customer reach. Our strong
          partnerships that span across multiple years are a testament to
          partners’ trust and the belief we have in long-term commitment forged
          on a shared vision for success.
        </p>
      </div>

      {/* Services Accordion */}
      <div>
        {servicesData.map((service, idx) => (
          <ServiceAccordion key={idx} service={service} />
        ))}
      </div>
    </div>
  );
}
