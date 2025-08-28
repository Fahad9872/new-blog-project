"use client";

import { motion } from "framer-motion";

const insights = [
  {
    type: "Blog",
    title: "Microsoft Power Apps Use Cases To Enhance Your Business Processes",
    link: "#",
    linkText: "Read More",
    image:
      "https://fdn.gsmarena.com/imgroot/news/23/01/windows-7-end-support/-1200/gsmarena_000.jpg",
  },
  {
    type: "Blog",
    title: "Latest Trends in Digital Transformation for 2025",
    link: "#",
    linkText: "Read More",
    image:
      "https://t4.ftcdn.net/jpg/16/28/69/99/360_F_1628699911_wo1gQiEJBKzzo7DtVYaltWMLmKDAQue7.jpg",
  },
  {
    type: "Blog",
    title: "How Advanced Analytics is Redefining Programmatic CTV Advertising",
    link: "#",
    linkText: "Read More",
    image:
      "https://media.istockphoto.com/id/499147420/vector/northern-lights.jpg?s=612x612&w=0&k=20&c=Y9gHfBavS4_3Wc2ecyDB7Kqzc2JiakUea233oPr7glQ=",
  },
  {
    type: "eBook",
    title:
      "AWS Cost Optimization: A CTO’s Guide to Smarter AWS Cost Management",
    link: "#",
    linkText: "Download",
    image:
      "https://www.softkit.dev/static/images/Amazon_web_services_main_image_2_84c24de2df.png",
  },
  {
    type: "Blog",
    title:
      "Generative AI in Banking: Practical Use Cases, Benefits, and Solutions to Key Challenges",
    link: "#",
    linkText: "Read More",
    image:
      "https://s44650.pcdn.co/wp-content/uploads/2023/10/ai-transaction-banking-1693602794.jpg",
  },
];

export default function LatestInsights() {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Latest Insights</h2>
        <p className="text-gray-600 mt-2">
          Dive into the latest trends, updates, and expert resources that keep
          you updated in the ever-evolving tech landscape.
        </p>
      </div>

      {/* First row - 3 cards */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {insights.slice(0, 3).map((item, i) => (
          <motion.div
            key={i}
            className={`relative rounded-2xl overflow-hidden shadow-lg group h-64 md:h-72 flex flex-col justify-between p-6 text-left text-white
        ${i === 0 ? "col-span-12 md:col-span-6" : "col-span-12 md:col-span-3"}`}
          >
            {/* Background image */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="inline-block px-3 py-1 border border-white rounded-full text-xs mb-3">
                  {item.type}
                </span>
                <h3 className="text-lg font-semibold leading-snug">
                  {item.title}
                </h3>
              </div>
              <a
                href={item.link}
                className="flex items-center gap-2 text-sm font-medium mt-4"
              >
                <span>{item.linkText}</span>
                <span className="text-xl">›</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Second row - 2 wider cards */}
      <div className="grid md:grid-cols-12 gap-6">
        {insights.slice(3, 5).map((item, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg group h-64 md:h-72 flex flex-col justify-between p-6 text-left text-white col-span-6"
          >
            {/* Background image */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="inline-block px-3 py-1 border border-white rounded-full text-xs mb-3">
                  {item.type}
                </span>
                <h3 className="text-lg font-semibold leading-snug">
                  {item.title}
                </h3>
              </div>
              <a
                href={item.link}
                className="flex items-center gap-2 text-sm font-medium mt-4"
              >
                <span>{item.linkText}</span>
                <span className="text-xl">›</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
