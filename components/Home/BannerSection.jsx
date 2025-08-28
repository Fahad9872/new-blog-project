import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./Banner";
import Carousel from "react-elastic-carousel";

const data = [
  { id: 1, section: <Banner name={"Brand Ethos"} />, name: "Brand Ethos" },
  {
    id: 2,
    section: <Banner name={"Work Intelligence"} />,
    name: "Work Intelligence",
  },
  {
    id: 3,
    section: <Banner name={"Cloud Powered Innovation"} />,
    name: "Cloud Powered Innovation",
  },
  {
    id: 4,
    section: <Banner name={"MS Ecosystem Excellence"} />,
    name: "MS Ecosystem Excellence",
  },
  {
    id: 5,
    section: <Banner name={"AI Innoavation"} />,
    name: "AI Innoavation",
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

const logos = [
  {
    id: 1,
    src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
  },
  {
    id: 2,
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
  },
  {
    id: 3,
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 4,
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    id: 5,
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 6,
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    id: 7,
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
];

const BannerSection = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplaySpeed = 5000; // 3 seconds per slide

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,

    afterChange: (current) => setActiveIndex(current),
  };

  const handleTabClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveIndex(index);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 2 }, // mobile
    { width: 640, itemsToShow: 3 }, // small tablets
    { width: 1024, itemsToShow: 5 }, // desktop
  ];

  return (
    <div className="pt-10 bg-purple-50">
      <div className="px-5 relative">
        <Slider ref={sliderRef} {...settings}>
          {data.map((item) => (
            <div key={item.id} className="px-2">
              <div className="">{item.section}</div>
            </div>
          ))}
        </Slider>

        {/* Tabs with Progress Bar */}
        <div className="md:grid hidden grid-cols-5 mb-10 space-x-4 ">
          {data.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(index)}
              className="relative pb-2 font-medium text-gray-500"
            >
              {/* Active progress bar */}
              <span
                className={`absolute top-0 left-0 h-1 bg-[#f2496a] rounded-full`}
                style={{
                  width: activeIndex === index ? "100%" : "0%",
                  transition:
                    activeIndex === index
                      ? `width ${autoplaySpeed}ms linear`
                      : "width 0.1s ease",
                }}
              />
              <p className="text-left text-[16px] px-3 pt-2"> {item.name}</p>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-5 w-full ">
          <div>
            <p className="font-semibold text-[25px]">Trusted By</p>
          </div>

          <div className="flex-1">
            <Carousel
              breakPoints={breakPoints}
              enableAutoPlay
              autoPlaySpeed={2000}
              pagination={false}
              showArrows={false}
            >
              {logos.map((logo) => (
                <div key={logo.id} className="flex justify-center px-4">
                  <img
                    src={logo.src}
                    alt="logo"
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden leading-[0]">
        <svg
          className="w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default BannerSection;
