import React, { useState } from "react";
import Logo from "./Pic/Logo.png"; // Import logo image
import BurgerMenu from "./Pic/BurgerMenu.png"; // Import burger menu icon
import Close from "./Pic/Close.png"; // Import close menu icon
import Button from "./ChooseGiftBtn/Button"; // Import the Button component

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open or closed
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
        {/* Logo for larger screens */}
        <img
          src={Logo}
          alt="TISSO VISION LOGO"
          className="h-5 hidden lg:block"
        />

        {/* Tagline for larger screens */}
        <p className="hidden lg:block">
          Find the ideal gift for your loved ones
        </p>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <Button />
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full gap-16 md:gap-60 lg:hidden">
          {/* Button to toggle the mobile menu */}
          <button
            onClick={toggleMenu}
            className="flex items-center px-4 py-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {/* Display the appropriate icon based on whether the menu is open or closed */}
            {menuOpen ? (
              <img src={Close} alt="Close Menu" />
            ) : (
              <img src={BurgerMenu} alt="Open Menu" />
            )}
          </button>

          {/* Logo for mobile view */}
          <img src={Logo} alt="TISSO VISION LOGO" className="" />
        </div>
      </div>

      {/* Dropdown Menu for mobile */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#F2F2F2] ${
          menuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Mobile dropdown content */}
        <div className="flex flex-col justify-center items-center h-[124px] w-full gap-4 shadow-md ease-in duration-300 lg:hidden">
          <p>Find the ideal gift for your loved ones.</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
