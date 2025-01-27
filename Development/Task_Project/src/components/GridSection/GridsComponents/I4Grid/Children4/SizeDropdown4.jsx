import React, { useState } from "react";

function SizeDropdown4({ selectedSize, setSelectedSize }) {
  // State to manage the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="mt-2.5">
      {/* Size label */}
      <h2 className="text-left font-Jost text-sm">Size</h2>

      {/* Button to toggle the dropdown visibility */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex text-left w-full h-10 pl-3 mt-[6.35px] bg-white border border-black shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {/* Display the selected size or placeholder text */}
        <div className="flex border-r font-Jost text-base border-black h-full items-center w-10/12">
          {selectedSize ? selectedSize : "Choose your size"}
        </div>

        {/* Arrow icon that rotates when the dropdown is open */}
        <svg
          className={`w-2/12 h-full border-black transform transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
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

      {/* Dropdown menu, displayed when isDropdownOpen is true */}
      {isDropdownOpen && (
        <div className="absolute w-[279px] z-20 overflow-y-scroll h-[99px] bg-white border border-black shadow-lg">
          <ul>
            {/* Map through an array of sizes and display them as clickable list items */}
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <li
                key={size}
                className="px-4 py-2 text-sm hover:bg-black hover:text-white cursor-pointer"
                onClick={() => {
                  setSelectedSize(size); // Update selected size
                  setIsDropdownOpen(false); // Close the dropdown after selection
                }}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SizeDropdown4;
