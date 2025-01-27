import React from "react";

function ColorSelector2({ activeColor, setActiveColor }) {
  return (
    <div className="flex flex-col justify-center items-start text-left mt-2.5">
      <h1 className="font-Jost text-sm ">Color</h1>
      <div className="relative flex justify-center w-[271px] mt-1.5">
        {/* Animated color switch background */}
        <div
          className={`absolute top-0 left-0 h-full w-[135px] z-20 bg-black transition-transform duration-500 ${
            activeColor === "Blue"
              ? "-translate-x-[0px]" // When Blue is active, no translation
              : "translate-x-[135px]" // When Black is active, shift to the right
          }`}
        ></div>

        {/* Color selection buttons */}
        <div className="flex w-[100%]">
          {/* Blue Button */}
          <div className="w-[50%] flex border-[0.5px] border-black">
            <div className="border-r-[0.5px] w-1 bg-[#0D499F] border-black z-30"></div>
            <button
              onClick={() => setActiveColor("Blue")} // When clicked, set color to Blue
              className={`relative z-20 w-[100%] py-2 font-Jost ${
                activeColor === "Blue" ? "text-white" : "text-black"
              }`}
            >
              Blue
            </button>
          </div>

          {/* Black Button */}
          <div className="w-[50%] flex border border-black">
            <div className="border-r-[0.5px] w-1 bg-black border-black z-30"></div>

            <button
              onClick={() => setActiveColor("Black")} // When clicked, set color to Black
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

export default ColorSelector2;
