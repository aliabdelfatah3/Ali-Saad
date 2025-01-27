import React from "react";
import Navbar from "../Navbar/Navbar"; // Import Navbar component
import Frame from "./Pic/Frame.png"; // Import banner image

function Banner() {
  return (
    <>
      <Navbar /> {/* Render Navbar */}
      {/* Banner Container */}
      <div className="relative flex flex-col pt-[49px] lg:pt-0 lg:overflow-hidden">
        {/* Banner Image for Larger Screens */}
        <div className="h-[335px] hidden lg:block">
          <img
            src={Frame}
            alt="Banner"
            className="w-full object-fit lg:-translate-y-[131px] lg:h-[460px]"
          />
        </div>

        {/* Banner Content */}
        <div className="relative flex flex-col lg:flex-row items-center gap-3 w-full h-full overflow-hidden lg:w-[2500px] lg:h-[402px] lg:overflow-hidden lg:gap-[120px]">
          {/* Text Section */}
          <div className="flex flex-col items-center lg:pt-5 lg:pl-[68px] lg:items-start gap-[40px]">
            {/* Title */}
            <h1 className="font-semibold md:text-[70px] text-[30px]">
              The Gift Guide
            </h1>

            {/* Description */}
            <p className="text-[20px] leading-[28px] w-[350px] text-center lg:text-left lg:w-[483px]">
              Discover Joy: Your Ultimate Holiday Gift Destination.
              <span className="hidden lg:block">
                Explore our curated selection and find the perfect gifts to
                delight your loved ones this holiday season.
              </span>
            </p>

            {/* Button for "Shop Now" */}
            <div className="absolute top-[333px] md:top-[400px] lg:static">
              <button
                className="relative before:content-[''] flex items-center justify-center font-Jost uppercase text-white bg-black w-[220px] h-[44px] z-10 
                before:absolute before:left-0 before:top-0 before:h-full before:w-full 
                before:origin-top-left before:scale-x-0 before:bg-button-yellow before:transition-transform 
                before:duration-500 hover:text-black before:z-0 before:hover:scale-x-100"
              >
                <span className="relative flex justify-center items-center z-10">
                  shop now
                  {/* Arrow icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 25"
                    stroke="currentColor"
                    className="w-11 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M25 12H5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M22 8l4 4-4 4"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Banner Image on the Right */}
          <div className="md:w-[1000px] w-[686px] lg:w-auto">
            <img
              src={Frame}
              alt="Banner"
              className="lg:w-[1730px] lg:h-[545px] lg:translate-y-16 w-full h-auto lg:overflow-hidden"
            />
          </div>
        </div>

        {/* Footer Text */}
        <div className="flex w-full justify-center bg-[#F5F5F5]">
          <p className="flex items-center gap-1 py-2.5 text-center">
            <span className="hidden md:block">
              SUSTAINABLE, ETHICALLY MADE CLOTHES IN SIZES XXS TO 6XL
            </span>
            <span className="md:hidden">
              SUSTAINABLE, ETHICALLY MADE ACTIVEWEAR
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
