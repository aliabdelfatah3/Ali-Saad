import React from "react";

function Button() {
  return (
    <>
      <button
        className="flex items-center justify-center font-Jost uppercase text-black bg-button-yellow w-[220px] h-[44px] z-10 
             before:absolute before:left-50 before:top-50 before:h-[44px] before:w-[220px]  
             before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform 
             before:duration-500 hover:text-white before:z-0 before:hover:scale-x-100"
      >
        <span className="flex justify-center items-center z-10">
          choose gift
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 25"
            stroke="currentColor"
            className="w-11 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M25 12H5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M22 8l4 4-4 4"
            />
          </svg>
        </span>
      </button>
    </>
  );
}

export default Button;
