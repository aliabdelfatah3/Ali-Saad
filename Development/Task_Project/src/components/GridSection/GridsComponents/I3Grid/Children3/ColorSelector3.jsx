import React from "react";

function ColorSelector3({ activeColor, setActiveColor }) {
  return (
    <div className="flex flex-col justify-center items-start text-left mt-2.5">
      {/* Section Title */}
      <h1 className="font-Jost text-sm ">Color</h1>

      {/* Container for the color selection */}
      <div className="relative flex justify-center w-[271px] mt-1.5">
        {/* Background color transition effect */}
        <div
          className={`absolute top-0 left-0 h-full w-[135px] z-20 bg-black transition-transform duration-500 ${
            activeColor === "Red" ? "-translate-x-[0px]" : "translate-x-[135px]"
          }`}
        ></div>

        {/* Color buttons */}
        <div className="flex w-[100%]">
          {/* Red button */}
          <div className="w-[50%] flex border-[0.5px] border-black">
            {/* Divider between colors */}
            <div className="border-r-[0.5px] w-1 bg-[#B20F36] border-black z-30"></div>
            {/* Red color button */}
            <button
              onClick={() => setActiveColor("Red")} // Sets "Red" as the selected color
              className={`relative z-20 w-[100%] py-2 font-Jost ${
                activeColor === "Red" ? "text-white" : "text-black"
              }`}
            >
              Red
            </button>
          </div>

          {/* Grey button */}
          <div className="w-[50%] flex border border-black">
            {/* Divider between colors */}
            <div className="border-r-[0.5px] w-1 bg-[#AFAFB7] border-black z-30"></div>
            {/* Grey color button */}
            <button
              onClick={() => setActiveColor("Grey")} // Sets "Grey" as the selected color
              className={`relative z-20 w-[100%] py-2 font-Jost ${
                activeColor === "Grey" ? "text-white" : "text-black"
              }`}
            >
              Grey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorSelector3;
