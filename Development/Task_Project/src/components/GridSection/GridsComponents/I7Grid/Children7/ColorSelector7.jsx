import React from "react";

function ColorSelector7({ activeColor, setActiveColor }) {
  return (
    <div className="flex flex-col justify-center items-start text-left mt-2.5">
      {/* Container for the Color selection */}
      <h1 className="font-Jost text-sm ">Color</h1>
      <div className="relative flex justify-center w-[271px] mt-1.5">
        {/* Container for the color options with a relative position */}

        {/* Transition effect for color selection */}
        <div
          className={`absolute top-0 left-0 h-full w-[135px] z-20 bg-black transition-transform duration-500 ${
            activeColor === "Red" ? "-translate-x-[0px]" : "translate-x-[135px]"
          }`}
        ></div>

        {/* Color options */}
        <div className="flex w-[100%]">
          {/* Red Color option */}
          <div className="w-[50%] flex border-[0.5px] border-black">
            {/* Border between Red and Grey */}
            <div className="border-r-[0.5px] w-1 bg-[#B20F36] border-black z-30"></div>
            <button
              onClick={() => setActiveColor("Red")}
              className={`relative z-20 w-[100%] py-2 font-Jost ${
                activeColor === "Red" ? "text-white" : "text-black"
              }`}
            >
              Red
            </button>
          </div>

          {/* Grey Color option */}
          <div className="w-[50%] flex border border-black">
            {/* Border between Red and Grey */}
            <div className="border-r-[0.5px] w-1 bg-[#AFAFB7] border-black z-30"></div>

            <button
              onClick={() => setActiveColor("Grey")}
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

export default ColorSelector7;
