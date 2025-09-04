// components/PartnerSection.jsx
import Image from "next/image";

const cards = [
  {
    title: "No Cost Pre-sales",
    description:
      "With a pool of resources for pre-sales, marketing, and even technology investments, our team provides you with top-quality research, positioning, contract & proposal documentation, and advisory support. With our software development partnership program, you have unlimited access to our customer success knowledge base. With no-cost investment & reduced overheads, our objective is to boost your sales.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Google/Unsplash image
    bgColor: "bg-purple-100",
  },
  {
    title: "White Label Development",
    description:
      "Deliver your agile development & design projects on budget, on time, and with high customer satisfaction. Take advantage of our specialist knowledge on a wide range of software development & design solutions to capitalize on enhancing ties with your customers & increase your brand presence. We help you with augmented product distribution by amplifying product visibility while providing excellent channel partner care.",
    img: "https://images.unsplash.com/photo-1581091012184-07e3e9d41f2f?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-purple-100",
  },
  {
    title: "Diversify Your Reach",
    description:
      "Expand your horizon to garner more customers and tap on the right revenue channels with our technical & business expertise, ranging from various segments, industries, technologies, and tapping into the psyche of the end customer mindset.",
    img: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-purple-50",
  },
  {
    title: "Exceptional Value Delivery to Clients",
    description:
      "Our strong partnership is a commitment to continuous innovation and collaboration to deliver robust solutions that meet the unique needs of your customer. Trust, transparency and top-quality commitment are inherent while partnering with us.",
    img: "https://images.unsplash.com/photo-1521790369517-4ed29d40e6c3?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-purple-50",
  },
];

export default function PartnerSection() {
  return (
    <section className="py-16 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Promise to Our Partners</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether you’re migrating workloads, optimizing infrastructure, or
          scaling applications, our certified cloud professionals ensure a
          seamless experience. From strategy to execution,
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-xl shadow-lg p-6 transition-all duration-500 group ${card.bgColor}`}
          >
            {/* Hover Background Image with Dark Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-80 transition-opacity duration-500"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${card.img})`,
              }}
            ></div>

            {/* Card Content */}
            <div className="relative z-10 group-hover:text-white">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-12 max-w-2xl mx-auto flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Please Enter Your Email"
          className="flex-1 border border-purple-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition-colors">
          Subscribe
        </button>
      </div>
    </section>
  );
}
