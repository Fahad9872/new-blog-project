import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Ravi",
    subject: "Mechanical Engineering",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Pulok",
    subject: "Mechanical Engineering",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Kibria",
    subject: "Mechanical Engineering",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Fahad",
    subject: "Mechanical Engineering",
  },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-[-100px] right-0 px-2 py-1 bg-white shadow rounded-full hover:bg-[#f2496a] hover:text-white transition z-10"
  >
    &#8594;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-[-100px] right-12 px-2 py-1 bg-white shadow rounded-full hover:bg-[#f2496a] hover:text-white transition z-10"
  >
    &#8592;
  </button>
);

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-10 ">
      <div className="px-5 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
          We Empower Your Vision with Emerging Tech
        </h2>
        <p className="text-[#555555] text-lg mb-8 md:w-3/4">
          Whether you’re looking to accelerate software delivery, ignite digital
          transformation, optimize your business operations, or build a
          future-ready tech ecosystem – Rishabh Software has the solutions to
          get you there!
        </p>

        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="px-2">
              <div
                className="relative rounded-2xl shadow-md overflow-hidden 
               bg-gradient-to-r from-indigo-100 via-white to-pink-50 
               h-64 flex flex-col justify-center p-6 text-left 
               transition-all duration-500 group cursor-pointer"
              >
                {/* Text content */}

                {/* Background image on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                {/* Overlay on hover for readability */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Text stays visible */}
                <div className="relative z-10">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-white transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white text-sm transition-colors">
                    {item.subject}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
