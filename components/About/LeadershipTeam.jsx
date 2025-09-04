import { FaLinkedin } from "react-icons/fa";
import Carousel from "react-elastic-carousel";

const logos = [
  {
    id: 1,
    src: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-81f62a5/www.rishabhsoft.com/wp-content/uploads/2025/01/Awards-names-34-3.png",
  },
  {
    id: 2,
    src: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-81f62a5/www.rishabhsoft.com/wp-content/uploads/2025/01/Awards-names-35-3.png",
  },
  {
    id: 3,
    src: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-81f62a5/www.rishabhsoft.com/wp-content/uploads/2025/01/Awards-names-38-3.png",
  },
  {
    id: 4,
    src: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-81f62a5/www.rishabhsoft.com/wp-content/uploads/2025/01/Awards-names-44-3.png",
  },
  {
    id: 5,
    src: "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-81f62a5/www.rishabhsoft.com/wp-content/uploads/2025/01/Awards-names-29-3.png",
  },
];

const leaders = [
  {
    name: "Raju Shah",
    role: "Founder & Chief Executive Officer",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    featured: true,
    linkedin: "#",
  },
  {
    name: "Saumil Shah",
    role: "Chief Strategy Officer",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    linkedin: "#",
  },
  {
    name: "Srinivasa Challa",
    role: "Chief Technology Officer",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
    linkedin: "#",
  },
  {
    name: "Sapan Sehgal",
    role: "Vice President - IT Operations",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    linkedin: "#",
  },
  {
    name: "Bhardwaj Pandya",
    role: "Vice President – Technology",
    img: "https://randomuser.me/api/portraits/men/79.jpg",
    linkedin: "#",
  },
  {
    name: "Prasanth Nair",
    role: "AVP – Technology & Product Engineering",
    img: "https://randomuser.me/api/portraits/men/80.jpg",
    linkedin: "#",
  },
  {
    name: "Suresh Patel",
    role: "AVP – Technology",
    img: "https://randomuser.me/api/portraits/men/81.jpg",
    linkedin: "#",
  },
  {
    name: "Milan Thakkar",
    role: "Vice President – Strategic Alliances",
    img: "https://randomuser.me/api/portraits/men/82.jpg",
    linkedin: "#",
  },
];

export default function LeadershipTeam() {
  const breakPoints = [
    { width: 1, itemsToShow: 2 }, // mobile
    { width: 640, itemsToShow: 3 }, // small tablets
    { width: 1024, itemsToShow: 4 }, // desktop
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {/* First Column as Text Card */}
        <div className="p-6 rounded-2xl  text-center bg-white">
          <h2 className="text-2xl md:text-3xl font-bold">
            Our <span className="text-pink-600">Leadership</span> Team
          </h2>
          <p className="text-gray-600 mt-3">
            Driving digital innovation and global technology excellence at
            Rishabh Software.
          </p>
        </div>

        {/* Remaining Leader Cards */}
        {leaders.map((leader, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl cursor-pointer text-center transition-all duration-300 bg-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-200 hover:text-white group"
          >
            <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200">
              <img
                src={leader.img}
                alt={leader.name}
                className="w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
            <h3 className="text-lg font-semibold">{leader.name}</h3>
            <p className="text-sm mt-1">{leader.role}</p>
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-4 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        ))}
      </div>
      <div className="text-center my-10">
        <p className="font-medium text-[25px] max-w-[800px] mx-auto">
          Be part of an award-winning company where your talents are nurtured
          and your success is celebrated.{" "}
        </p>
        <p>
          Explore our opportunities and embark on a fulfilling career journey
          today.
        </p>

        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={2000}
          pagination={false}
          showArrows={false}
        >
          {logos.map((logo) => (
            <div key={logo.id} className="flex justify-center px-4">
              <img src={logo.src} alt="logo" className="" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
