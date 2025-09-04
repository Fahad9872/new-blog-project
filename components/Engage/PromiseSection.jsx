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
              className="w-[280px] rounded-md h-[350px] mb-4"
            />
          )}
          <div className="text-[12px]">
            {service.description && (
              <p className="mb-4">{service.description}</p>
            )}

            {service.whoIsItFor.length > 0 && (
              <>
                <h4 className="font-semibold mb-2">Who Is It For?</h4>
                <ul className="list-disc list-inside mb-4">
                  {service.whoIsItFor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {service.howWeHelp.length > 0 && (
              <>
                <h4 className="font-semibold mb-2">How We Help?</h4>
                <ul className="list-disc list-inside mb-4">
                  {service.howWeHelp.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {service.advantage.length > 0 && (
              <>
                <h4 className="font-semibold mb-2">Rishabh Advantage:</h4>
                <ul className="list-disc list-inside">
                  {service.advantage.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PromiseSection() {
  return (
    <div className="p-6  mx-auto">
      {/* Promise Section */}
      <div className="bg-purple-50 rounded-lg p-6 flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-purple-600">Promise</span> to our Customers
          </h2>
          <p className="mt-2">
            Powered with two decades of experience, our business relationships
            are based on transparency, trust and long-term commitment. Our
            customers are at the heart of everything we do.
          </p>
        </div>
        <div className="text-center w-[200px]">
          <div className="border-4 border-purple-600 mx-auto rounded-full w-20 h-20 flex items-center justify-center text-purple-600 font-bold text-lg">
            2
          </div>
          <span className="text-purple-600 block text-sm mt-1 text-center">
            OF Service Excellence
          </span>
        </div>
      </div>

      {/* Engage Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Engage with us</h3>
        <p>
          Rishabh is committed to delivering high-quality solutions with a
          strong focus on efficient process management, optimized resource and
          transparent communication at all levels.
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
