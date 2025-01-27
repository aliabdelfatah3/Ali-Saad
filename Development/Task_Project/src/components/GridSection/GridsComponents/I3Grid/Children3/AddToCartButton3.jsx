import React from "react";

function AddToCartButton3({ onClick }) {
  return (
    <div className="mt-10">
      <button
        onClick={onClick} // Trigger the onClick function passed as a prop
        className="relative before:content-[''] flex items-center justify-center font-Jost uppercase text-white bg-black w-full h-[44px] 
                   before:absolute before:left-0 before:top-0 before:h-full before:w-full 
                   before:origin-top-left before:scale-x-0 before:bg-button-yellow before:transition-transform 
                   before:duration-500 hover:text-black before:z-0 before:hover:scale-x-100"
      >
        {/* The main text and the button's hover effect */}
        <span className="relative flex justify-center items-center z-10">
          Add to cart
          {/* Arrow icon inside the button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 25"
            stroke="currentColor"
            className="w-11 h-8"
          >
            {/* Horizontal line of the arrow */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M25 12H5"
            />
            {/* Arrowhead of the icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M22 8l4 4-4 4"
            />
          </svg>
        </span>{" "}
      </button>
    </div>
  );
}

export default AddToCartButton3;
