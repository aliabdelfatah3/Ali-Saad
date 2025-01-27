import React, { useState } from "react";
import Logo from "./Pic/Logo.png";
import BurgerMenu from "./Pic/BurgerMenu.png";
import Close from "./Pic/Close.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative w-full lg:h-auto">
      {/* Navigation Bar */}
      <div
        className={`relative flex lg:w-full bg-[#F5F5F5] z-10 md:w-full h-[65px] 
          lg:justify-around xl:gap-60 sm:gap-2 items-center ${
            menuOpen ? "shadow-md z-50" : "shadow-none border-none"
          }`}
      >
        <img
          src={Logo}
          alt="TISSO VISION LOGO"
          className="h-5 hidden lg:block"
        />

        {/* Tagline */}
        <p className="hidden lg:block">
          Find the ideal gift for your loved ones
        </p>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <button
            className="flex items-center justify-center font-Jost uppercase text-black bg-button-yellow w-[220px] h-[44px] z-10 
             before:absolute before:left-50 before:top-50 before:h-[44px] before:w-[220px]  
             before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform 
             before:duration-500 hover:text-white before:z-0 before:hover:scale-x-100"
          >
            <span className="flex justify-center items-center z-10">
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
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full gap-16 md:gap-60 lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-4 py-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <img src={Close} alt="Close Menu" />
            ) : (
              <img src={BurgerMenu} alt="Open Menu" />
            )}
          </button>

          <img src={Logo} alt="TISSO VISION LOGO" className="" />
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#F2F2F2] ${
          menuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-[124px] w-full gap-4 shadow-md ease-in duration-300 lg:hidden">
          <p>Find the ideal gift for your loved ones.</p>
          <button
            className="flex items-center justify-center font-Jost uppercase text-black bg-button-yellow w-[220px] h-[44px] z-10 
            before:absolute before:left-50 before:top-50 before:h-[44px] before:w-[220px] 
            before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform 
            before:duration-500 hover:text-white before:z-0 before:hover:scale-x-100"
          >
            <span className="flex items-center z-10">
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
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
