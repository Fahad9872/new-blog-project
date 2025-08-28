import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavigationBarPc = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{ background: "#032541" }}
        class="flex items-center justify-between   p-6 max-w-[1450px] mx-auto"
      >
        <div class="flex items-center flex-shrink-0 text-white mr-6 ">
          <img
            onClick={() => {
              navigate(`/`);
            }}
            className="w-[150px] h-[50px]"
            src={logo}
            alt=""
          />
          {/* <span class="font-semibold text-xl tracking-tight">Triangle</span> */}
        </div>
        <div class="block lg:hidden">
          <button
            onClick={() => setToggle(toggle ? false : true)}
            class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div class="w-full block flex-grow flex items-center hidden lg:block w-auto">
          <div class="text-sm flex-grow">
            <p
              onClick={() => {
                navigate(`/movies`);
              }}
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Movies
            </p>

            {/* <p
              onClick={() => {
                navigate(`/series`);
              }}
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Series
            </p> */}
            <p
              onClick={() => {
                navigate(`/genre/anime`);
              }}
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Anime
            </p>
            <p
              onClick={() => {
                navigate(`/categories/bollywood-hindi`);
              }}
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Bollywood Hindi
            </p>
          </div>
        </div>
      </div>

      {toggle && (
        <div class="w-full block p-2 flex-grow lg:flex block lg:hidden lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <p
              onClick={() => {
                navigate(`/movies`);
              }}
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Movies
            </p>

            {/* <p
                onClick={() => {
                  navigate(`/sereis`);
                }}
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Series
              </p> */}
            <p
              onClick={() => {
                navigate(`/genre/anime`);
              }}
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white "
            >
              Anime
            </p>
            <p
              onClick={() => {
                navigate(`/categories/bollywood-hindi`);
              }}
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Bollywood Hindi
            </p>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default NavigationBarPc;
