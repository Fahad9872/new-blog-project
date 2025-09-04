import { FaStar } from "react-icons/fa";
import image1 from "../../assets/aboutus/image1.jpg";
import image11 from "../../assets/aboutus/image11.jpg";
import image2 from "../../assets/aboutus/image2.png";
import image22 from "../../assets/aboutus/image22.png";
import image3 from "../../assets/aboutus/image3.png";
import image33 from "../../assets/aboutus/image33.png";
import { motion } from "framer-motion";
const cards = [
  {
    title: "Real-time Digital Ad Inventory Management",
    defaultText: "For a DOOH giant with 120,000+ ad panels worldwide",
    hoverText:
      "Modernizing with real-time analytics for scalability and performance",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "DevOps Implementation",
    defaultText: "30% reduction in operational cost",
    hoverText: "Driving automation with CI/CD pipelines and monitoring",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ad Order Management",
    defaultText: "50% increase in booking of available assets",
    hoverText:
      "Streamlined workflows with automation for ad inventory management",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
];

const SuccessStory = () => {
  return (
    <section className=" px-6 py-10 lg:pt-16  mx-auto">
      <div className="md:grid grid-cols-1 justify-between items-start gap-6">
        {/* Animated H1 */}
        <motion.h1
          className="font-semibold md:text-[40px] text-[30px] lg:flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          AdTech Success Stories
        </motion.h1>

        {/* Animated H2 */}
        <motion.h2
          className="font-normal md:text-[20px] text-[16px] text-[#787878] mt-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore how we teamed up with top advertising agencies to modernize
          their tech stack, boost campaign ROI, and maximize operational
          efficiency.
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden min-h-[250px] cursor-pointer"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-all duration-500"></div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
              <h3 className="text-lg font-semibold group-hover:hidden block">
                {card.title}
              </h3>

              {/* Default text */}
              <p className="mt-2 text-sm transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                {card.defaultText}
              </p>

              {/* Hover text */}
              <p className="mt-2 text-sm absolute bottom-20 left-6 right-6 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                {card.hoverText}
              </p>

              {/* Button */}
              <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium w-fit">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStory;
