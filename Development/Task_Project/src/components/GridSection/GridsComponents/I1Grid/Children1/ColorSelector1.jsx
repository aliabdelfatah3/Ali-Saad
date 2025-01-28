import React from "react";

// ColorSelector1 component: Allows users to select between two color options (White or Black)
function ColorSelector1({ activeColor, setActiveColor }) {
  return (
    // Container for the color selector with a title and color buttons
    <div className="flex flex-col justify-center items-start text-left mt-2.5">
      {/* Title for the color selector */}
      <h1 className="font-Jost text-sm">Color</h1>

      {/* Wrapper for the color options, with relative positioning for the active color indicator */}
      <div className="relative flex justify-center w-[271px] mt-1.5">
        {/* Active color indicator (a black bar that moves to show selected color) */}
        <div
          className={`absolute top-0 left-0 h-full w-[135px] z-20 bg-black transition-transform duration-500 ${
            activeColor === "White"
              ? "-translate-x-[0px]" // Position for White color
              : "translate-x-[135px]" // Position for Black color
          }`}
        ></div>

        {/* Wrapper for color option buttons */}
        <div className="flex w-[100%]">
          {/* White color option */}
          <div className="w-[50%] flex border-[0.5px] border-black">
            {/* Divider between the buttons */}
            <div className="border-r-[0.5px] w-1 bg-white border-black z-30"></div>

            {/* White color button with conditional styling based on active color */}
            <button
              onClick={() => setActiveColor("White")}
              className={`relative z-20 w-[100%] py-2 font-Jost ${
                activeColor === "White" ? "text-white" : "text-black"
              }`}
            >
              White
            </button>
          </div>

          {/* Black color option */}
          <div className="w-[50%] flex border border-black">
            {/* Divider between the buttons */}
            <div className="border-r-[0.5px] w-1 bg-black border-black z-30"></div>

            {/* Black color button with conditional styling based on active color */}
            <button
              onClick={() => setActiveColor("Black")}
              className={`relative z-20 w-[100%] py-2 font-Jost ${
                activeColor === "Black" ? "text-white" : "text-black"
              }`}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorSelector1;
