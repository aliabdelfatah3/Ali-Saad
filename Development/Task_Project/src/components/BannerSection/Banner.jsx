import React from "react";
import Nav from "../Navbar/Nav";
import Frame from "./Pic/Frame.png";
function Banner() {
  return (
    <>
      <div className="relative flex flex-col overflow-hidden">
        <Nav />
        <div className="h-[390px]">
          <img
            src={Frame}
            alt="Banner"
            className="w-full object-fit -translate-y-[68px] h-[460px]"
          />
        </div>
        <div className="flex w-[2500px] h-[402px] overflow-hidden gap-[120px]">
          <div className="flex flex-col pt-5 pl-[68px] items-start gap-[40px]">
            <h1 className="font-bold text-[70px]">The Gift Guide</h1>
            <p className="text-[20px] leading-[28px] w-[483px]">
              Discover Joy: Your Ultimate Holiday Gift Destination. Explore our
              curated selection and find the perfect gifts to delight your loved
              ones this holiday season.
            </p>
            <button
              className="relative before:content-[''] flex items-center justify-center font-Jost uppercase text-white bg-black w-[220px] h-[44px] z-10 
             before:absolute before:left-0 before:top-0 before:h-full before:w-full 
             before:origin-top-left before:scale-x-0 before:bg-button-yellow before:transition-transform 
             before:duration-500 hover:text-black before:z-0 before:hover:scale-x-100"
            >
              <span className="relative flex justify-center items-center z-10">
                shop now
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
                {/* <FaArrowRight /> */}
              </span>
            </button>
          </div>

          <img
            src={Frame}
            alt="Banner"
            className="w-[1730px] h-[545px] overflow-hidden "
          />
        </div>
        <div></div>
        <p className="bg-[#F5F5F5] py-2.5 text-center">
          SUSTAINABLE, ETHICALLY MADE CLOTHES IN SIZES XXS TO 6XL
        </p>
      </div>
    </>
  );
}

export default Banner;
