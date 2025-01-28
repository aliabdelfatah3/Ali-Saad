import React, { useState } from "react";

function SizeDropdown2({ selectedSize, setSelectedSize }) {
  // State to track whether the dropdown is open or closed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="mt-2.5">
      {/* Label for the dropdown */}
      <h2 className="text-left font-Jost text-sm">Size</h2>

      {/* Button to toggle the dropdown */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle the dropdown open/close
        className="flex text-left w-full h-10 pl-3 mt-[6.35px] bg-white border border-black shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {/* Display the selected size or a default message */}
        <div className="flex border-r font-Jost text-base border-black h-full items-center w-10/12">
          {selectedSize ? selectedSize : "Choose your size"}{" "}
          {/* Show selected size or default text */}
        </div>

        {/* Dropdown arrow, rotates when the dropdown is open */}
        <svg
          className={`w-2/12 h-full border-black transform transition-transform ${
            isDropdownOpen ? "rotate-180" : "" // Rotate arrow when dropdown is open
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 8l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu, visible only when isDropdownOpen is true */}
      {isDropdownOpen && (
        <div className="absolute w-[279px] z-20 overflow-y-scroll h-[99px] bg-white border border-black shadow-lg">
          <ul>
            {/* Loop through the size options and create list items */}
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <li
                key={size}
                className="px-4 py-2 text-sm hover:bg-black hover:text-white cursor-pointer"
                onClick={() => {
                  setSelectedSize(size); // Update selected size
                  setIsDropdownOpen(false); // Close the dropdown
                }}
              >
                {size} {/* Display the size option */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SizeDropdown2;
