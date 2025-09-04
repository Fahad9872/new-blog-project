import Image from "next/image";
import { motion } from "framer-motion";
const clients = [
  {
    name: "Dooh it (Black & blue dot)",
    logo: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-0e3dc38/www.rishabhsoft.com/wp-content/uploads/2024/11/DOOHIT-Adtech-Pvt.-Ltd.png", // representative of turn0image0
  },

  {
    name: "Dooh it (Dark background)",
    logo: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-0e3dc38/www.rishabhsoft.com/wp-content/uploads/2024/12/Mark-App.png", // turn0image2
  },
  {
    name: "Dooh.com variant",
    logo: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-0e3dc38/www.rishabhsoft.com/wp-content/uploads/2024/12/Finoptsys-Inc-1.png", // turn0image3
  },
  {
    name: "Dooh.com site snippet",
    logo: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-0e3dc38/www.rishabhsoft.com/wp-content/uploads/2024/12/Finxone-Limited-1.png", // turn0image4
  },
  {
    name: "FinOptSys (brain icon)",
    logo: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-0e3dc38/www.rishabhsoft.com/wp-content/uploads/2024/12/franklins-1.png", // turn0image7
  },
  {
    name: "FinOptSys (full combo)",
    logo: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-0e3dc38/www.rishabhsoft.com/wp-content/uploads/2024/12/L2-Brands-LLC-2.png", // turn0image8
  },
  {
    name: "FinOptSys (tracxn preview)",
    logo: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-0e3dc38/www.rishabhsoft.com/wp-content/uploads/2024/12/Linde-Engineering-India-Pvt-Ltd-2.png", // turn0image9
  },
  {
    name: "FinOptSys (yellow puzzle)",
    logo: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-0e3dc38/www.rishabhsoft.com/wp-content/uploads/2024/12/LISA-1.png", // turn0image10
  },
  // Add more distinct online logos or placeholder images for the remaining entries:
  {
    name: "Placeholder Logo 1",
    logo: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-0e3dc38/www.rishabhsoft.com/wp-content/uploads/2024/12/MoneyWatch.png",
  },
  {
    name: "Placeholder Logo 2",
    logo: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-0e3dc38/www.rishabhsoft.com/wp-content/uploads/2024/12/Professional-Credit-1.png",
  },
  {
    name: "Placeholder Logo 3",
    logo: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-0e3dc38/www.rishabhsoft.com/wp-content/uploads/2024/12/Skulicity-LLC-2.png",
  },
  {
    name: "Placeholder Logo 3",
    logo: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-0e3dc38/www.rishabhsoft.com/wp-content/uploads/2024/12/WalterKluwer-2.png",
  },
];

export default function GlobalClients() {
  return (
    <section className="bg-black py-12">
      <motion.h2
        className="text-center text-white text-2xl md:text-3xl font-semibold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Global Clients
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6  mx-auto px-6">
        {clients.map((client, i) => (
          <div
            key={i}
            className="bg-neutral-900 flex items-center justify-center p-4 rounded-md"
          >
            <img
              src={client.logo}
              alt={client.name}
              width={150}
              height={80}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
