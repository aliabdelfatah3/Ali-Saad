import React from "react";

function ColorSelector6({ activeColor, setActiveColor }) {
  return (
    <div className="flex flex-col justify-center items-start text-left mt-2.5">
      {/* Title of the color selection section */}
      <h1 className="font-Jost text-sm ">Color</h1>

      {/* Container for color options */}
      <div className="relative flex justify-center w-[271px] mt-1.5">
        {/* Sliding indicator that moves between color options */}
        <div
          className={`absolute top-0 left-0 h-full w-[135px] z-20 bg-black transition-transform duration-500 ${
            // Move the indicator left when 'Blue' is selected, and right when 'Black' is selected
            activeColor === "Blue"
              ? "-translate-x-[0px]"
              : "translate-x-[135px]"
          }`}
        ></div>

        {/* Color buttons container */}
        <div className="flex w-[100%]">
          {/* Button for selecting "Blue" */}
          <div className="w-[50%] flex border-[0.5px] border-black">
            <div className="border-r-[0.5px] w-1 bg-[#0D499F] border-black z-30"></div>
            <button
              onClick={() => setActiveColor("Blue")}
              className={`relative z-20 w-[100%] py-2  font-Jost ${
                // Change text color to white for active color and black for inactive
                activeColor === "Blue" ? "text-white" : "text-black"
              }`}
            >
              Blue
            </button>
          </div>

          {/* Button for selecting "Black" */}
          <div className="w-[50%] flex border border-black">
            <div className="border-r-[0.5px] w-1 bg-black border-black z-30"></div>
            <button
              onClick={() => setActiveColor("Black")}
              className={`relative z-20 w-[100%] py-2 font-Jost ${
                // Change text color to white for active color and black for inactive
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

export default ColorSelector6;
