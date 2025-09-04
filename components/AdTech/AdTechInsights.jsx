import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
const blogs = [
  {
    title:
      "How AI in Programmatic Advertising Helps to Target and Personalize Ad Campaign Experiences?",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DXjInZzukKo6fVkrK-uhknHILz6N-WbFSmTX3FdgqCRpDH7QUgucYcetKthJ8z6mEgk&usqp=CAU",
    link: "#",
  },
  {
    title:
      "100+ Million Bids Hourly: Programmatic CTV Ad Exchange Platform Development Case Study That Redefined Real-Time Advertising",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LgtW_ekQQlOo_zmQ89Q8Z9GpwHzZ__UWGMqziezWjgzOGC0HKh-ojBI3SIflA6Q2EZ8&usqp=CAU",
    link: "#",
  },
  {
    title:
      "Is Your Infrastructure Engineered to Operationalize Programmatic CTV at Scale?",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRAu3APdwIV1asTtSYf3QUnUgWs0p9YJlPw&s",
    link: "#",
  },
];

export default function AdTechInsights() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12 px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Insights to Amp Up Your AdTech Game
        </motion.h2>

        {/* Motion Paragraph */}
        <motion.p
          className="text-gray-600 mt-3 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Optimize advertising workflows, amplify campaign effectiveness &
          increase your bookings by drawing insights from real-world case
          studies and blogs.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-md border border-light-gray bg-white"
          >
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full object-cover h-[200px]"
              />
              <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded">
                Blog
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-gray-800 font-medium text-base leading-relaxed mb-3">
                {blog.title}
              </h3>
              <a
                href={blog.link}
                className="flex items-center gap-1 text-pink-600 font-medium text-sm hover:underline"
              >
                Read More <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full text-sm font-medium transition">
          View All
        </button>
      </div>
    </section>
  );
}
