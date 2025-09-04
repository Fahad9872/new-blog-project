"use client";
import { FaUsers, FaChartLine, FaComments, FaFlask } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    icon: <FaUsers className="text-3xl text-pink-600" />,
    title: "Effective Collaboration",
  },
  {
    id: 2,
    icon: <FaChartLine className="text-3xl text-red-600" />,
    title: "KPI-based Project Monitoring",
  },
  {
    id: 3,
    icon: <FaComments className="text-3xl text-indigo-600" />,
    title: "Transparent Communication & CSAT Mechanism",
  },
  {
    id: 4,
    icon: <FaFlask className="text-3xl text-black" />,
    title: "Research-driven Design & Development",
  },
];

export default function BenefitsGrid() {
  return (
    <section className="py-12 px-4 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Benefits of Working at Rishabh
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Our success is defined by our core values of commitment to clients,
          ethics and society through sustained collaboration, honesty and
          opportunity creation partnerships.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition"
            >
              {item.icon}
              <h4 className="mt-4 text-base font-medium text-gray-800">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
