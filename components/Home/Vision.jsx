import { FaStar } from "react-icons/fa";
import image1 from "../../assets/aboutus/image1.jpg";
import image11 from "../../assets/aboutus/image11.jpg";
import image2 from "../../assets/aboutus/image2.png";
import image22 from "../../assets/aboutus/image22.png";
import image3 from "../../assets/aboutus/image3.png";
import image33 from "../../assets/aboutus/image33.png";

const Vision = () => {
  return (
    <section className=" px-6 py-10 lg:pt-16  mx-auto">
      <div className="md:grid grid-cols-2 justify-between items-start gap-6">
        <h1 className=" font-semibold   md:text-[40px] text-[30px] lg:flex-1">
          Transforming Industries, One Innovation at a Time!
        </h1>
        <h2 className="font-normal md:text-[20px] text-[16px] text-[#787878] ">
          We’re the Swiss Army knife in a digital world, slicing through
          challenges and carving success stories across the industrial spectrum.
        </h2>
      </div>

      <div className="grid grid-cols-8 md:gap-x-4">
        <div className="md:col-span-2  my-8 col-span-8 relative  group cursor-pointer">
          <div className=" bg-[linear-gradient(360deg,rgba(171,120,204,1)_0%,rgba(255,255,255,1)_100%,rgba(237,221,83,1)_100%)]  group-hover:bg-[linear-gradient(360deg,rgba(126,41,211,1)_0%,rgba(126,41,211,1)_100%,rgba(126,41,211,1)_100%)]  bg-no-repeat bg-cover bg-center min-h-[400px] object-fill  w-full mx-auto rounded-3xl relative">
            <FaStar
              size={40}
              className="absolute top-3 right-3 block group-hover:hidden bg-[rgba(126,41,211,1)_100%)]  "
            />

            <div className="">
              <div className="absolute ml-auto mr-auto left-0 right-0 bottom-10 text-center text-[#050505] group-hover:text-white">
                <div className="px-5 ">
                  <p className="text-[#050505] group-hover:text-white  text-left font-semibold text-4xl">
                    AdTech
                  </p>
                  <p className="text-left text-lg  mt-5 ">
                    Maximize ad revenue with comprehensive digital omnichannel
                    solutions that employ data analytics and real-time tracking
                    for impactful campaigns.
                  </p>
                  <div onClick={() => {}}>
                    <p
                      className={`hidden group-hover:block border-2 rounded-md border-white text-[#050505] group-hover:text-white py-2 px-3 text-[16px] w-fit cursor-pointer mt-3`}
                    >
                      Explore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2  my-8 col-span-8 relative  group cursor-pointer">
          <div
            className="  bg-[linear-gradient(360deg,rgba(171,120,204,1)_0%,rgba(255,255,255,1)_100%,rgba(237,221,83,1)_100%)]
      group-hover:bg-[linear-gradient(360deg,#d31655_0%,#d31655_100%,#d31655_100%)] bg-no-repeat bg-cover bg-center min-h-[400px] object-fill  w-full mx-auto rounded-3xl relative"
          >
            <FaStar
              size={40}
              className="absolute top-3 right-3 block group-hover:hidden bg-[rgba(126,41,211,1)_100%)]  "
            />

            <div className="">
              <div className="absolute ml-auto mr-auto left-0 right-0 bottom-10 text-center text-[#050505] group-hover:text-white">
                <div className="px-5 ">
                  <p className="text-[#050505] group-hover:text-white  text-left font-semibold text-4xl">
                    Digital Manufacturing
                  </p>
                  <p className="text-left text-lg  mt-5 ">
                    Transform operations with intelligent Industry 4.0 solutions
                    that drive digitization, quality & compliance with advanced
                    analytics & automation.
                  </p>
                  <div onClick={() => {}}>
                    <p
                      className={`hidden group-hover:block border-2 rounded-md border-white text-[#050505] group-hover:text-white py-2 px-3 text-[16px] w-fit cursor-pointer mt-3`}
                    >
                      Explore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2  my-8 col-span-8 relative  group cursor-pointer">
          <div
            className="  bg-[linear-gradient(360deg,rgba(171,120,204,1)_0%,rgba(255,255,255,1)_100%,rgba(237,221,83,1)_100%)]
      group-hover:bg-[linear-gradient(360deg,#02a5bf_0%,#02a5bf_100%,#02a5bf_100%)] bg-no-repeat bg-cover bg-center min-h-[400px] object-fill  w-full mx-auto rounded-3xl relative"
          >
            <FaStar
              size={40}
              className="absolute top-3 right-3 block group-hover:hidden bg-[rgba(126,41,211,1)_100%)]  "
            />

            <div className="">
              <div className="absolute ml-auto mr-auto left-0 right-0 bottom-10 text-center text-[#050505] group-hover:text-white">
                <div className="px-5 ">
                  <p className="text-[#050505] group-hover:text-white  text-left font-semibold text-4xl">
                    FinTech
                  </p>
                  <p className="text-left text-lg  mt-5 ">
                    Ensure financial security and streamline transactions with
                    bespoke software solutions that uphold compliance and build
                    user trust.
                  </p>
                  <div onClick={() => {}}>
                    <p
                      className={`hidden group-hover:block border-2 rounded-md border-white text-[#050505] group-hover:text-white py-2 px-3 text-[16px] w-fit cursor-pointer mt-3`}
                    >
                      Explore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2  my-8 col-span-8 relative  group cursor-pointer">
          <div
            className="  bg-[linear-gradient(360deg,rgba(171,120,204,1)_0%,rgba(255,255,255,1)_100%,rgba(237,221,83,1)_100%)]
      group-hover:bg-[linear-gradient(360deg,#0041f0_0%,#0041f0_100%,#0041f0_100%)] bg-no-repeat bg-cover bg-center min-h-[400px] object-fill  w-full mx-auto rounded-3xl relative"
          >
            <FaStar
              size={40}
              className="absolute top-3 right-3 block group-hover:hidden bg-[rgba(126,41,211,1)_100%)]  "
            />

            <div className="">
              <div className="absolute ml-auto mr-auto left-0 right-0 bottom-10 text-center text-[#050505] group-hover:text-white">
                <div className="px-5 ">
                  <p className="text-[#050505] group-hover:text-white  text-left font-semibold text-4xl">
                    HealthTech
                  </p>
                  <p className="text-left text-lg  mt-5 ">
                    Achieve regulatory compliance and improve patient care with
                    advanced, custom-built healthcare solutions designed for
                    your specific needs.
                  </p>
                  <div onClick={() => {}}>
                    <p
                      className={`hidden group-hover:block border-2 rounded-md border-white text-[#050505] group-hover:text-white py-2 px-3 text-[16px] w-fit cursor-pointer mt-3`}
                    >
                      Explore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
