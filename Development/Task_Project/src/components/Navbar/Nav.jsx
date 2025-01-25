import React from "react";
import Logo from "./Pic/Logo.png";
import { FiArrowRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

function Nav() {
  return (
    <>
      <div className="flex absolute overflow-hidden w-full justify-between px-[50px] py-[10px] z-50 items-center bg-[#F5F5F5]">
        <img src={Logo} alt="TISSO_VISON LOGO" />
        <p>Find the ideal gift for your loved ones</p>
        <div className="z-10 space-x-6">
          {/* <button className="uppercase relative flex items-center justify-center overflow-hidden font-medium text-blue-400 transition duration-300 ease-out border-2 border-blue-400 rounded-full group">
            <span className="flex items-center justify-center p-4 px-12 rounded-full text-blue-400 transition-all duration-300 transform hover:translate-x-full ease">
              choose gift
            </span>
          </button> */}

          <button
            className="relative before:content-[''] flex items-center justify-center font-Jost uppercase text-black bg-button-yellow w-[220px] h-[44px] z-10 
             before:absolute before:left-0 before:top-0 before:h-full before:w-full 
             before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform 
             before:duration-500 hover:text-white before:z-0 before:hover:scale-x-100"
          >
            <span className="relative flex justify-center items-center z-10">
              choose gift
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
      </div>
    </>
  );
}

export default Nav;
