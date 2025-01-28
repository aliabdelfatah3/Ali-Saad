import React from "react";

function ColorSelector4({ activeColor, setActiveColor }) {
  return (
    // Container for the color selector with flex layout and text alignment
    <div className="flex flex-col justify-center items-start text-left mt-2.5">
      {/* Title for the color selection section */}
      <h1 className="font-Jost text-sm ">Color</h1>
      <div className="relative flex justify-center w-[271px] mt-1.5">
        {/* Transitioning background indicating the active color (white or black) */}
        <div
          className={`absolute top-0 left-0 h-full w-[135px] z-20 bg-black transition-transform duration-500 ${
            activeColor === "White"
              ? "-translate-x-[0px]" // If white is selected, no translation
              : "translate-x-[135px]" // If black is selected, translate the background to the right
          }`}
        ></div>
        {/* Container for the color buttons */}
        <div className="flex w-[100%]">
          {/* White color button section */}
          <div className="w-[50%] flex border-[0.5px] border-black">
            {/* Border separator between color buttons */}
            <div className="border-r-[0.5px] w-1 bg-white border-black z-30"></div>
            {/* White color button */}
            <button
              onClick={() => setActiveColor("White")} // Set active color to white
              className={`relative z-20 w-[100%] py-2 font-Jost ${
                activeColor === "White" ? "text-white" : "text-black" // Toggle text color based on active selection
              }`}
            >
              White
            </button>
          </div>
          {/* Black color button section */}
          <div className="w-[50%] flex border border-black">
            {/* Border separator between color buttons */}
            <div className="border-r-[0.5px] w-1 bg-black border-black z-30"></div>
            {/* Black color button */}
            <button
              onClick={() => setActiveColor("Black")} // Set active color to black
              className={`relative z-20 w-[100%] py-2 font-Jost ${
                activeColor === "Black" ? "text-white" : "text-black" // Toggle text color based on active selection
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

export default ColorSelector4;
