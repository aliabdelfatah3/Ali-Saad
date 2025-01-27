import React from "react";

function ColorSelector5({ activeColor, setActiveColor }) {
  return (
    <div className="flex flex-col justify-center items-start text-left mt-2.5">
      {/* Title of the section */}
      <h1 className="font-Jost text-sm ">Color</h1>

      <div className="relative flex justify-center w-[271px] mt-1.5">
        {/* Active color indicator with a sliding effect */}
        <div
          className={`absolute top-0 left-0 h-full w-[135px] z-20 bg-black transition-transform duration-500 ${
            activeColor === "Grey"
              ? "-translate-x-[0px]"
              : "translate-x-[135px]"
          }`}
        ></div>

        {/* Color options */}
        <div className="flex w-[100%]">
          {/* Grey color button */}
          <div className="w-[50%] flex border-[0.5px] border-black">
            <div className="border-r-[0.5px] w-1 bg-[#AFAFB7] border-black z-30"></div>
            <button
              onClick={() => setActiveColor("Grey")}
              className={`relative z-20 w-[100%] py-2  font-Jost ${
                activeColor === "Grey" ? "text-white" : "text-black"
              }`}
            >
              Grey
            </button>
          </div>

          {/* Black color button */}
          <div className="w-[50%] flex border border-black">
            <div className="border-r-[0.5px] w-1 bg-black border-black z-30"></div>
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

export default ColorSelector5;
