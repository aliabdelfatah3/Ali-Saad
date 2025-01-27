import React from "react";

// AddToCartButton1 component: A button component for adding items to the cart
function AddToCartButton1({ onClick }) {
  return (
    <div className="mt-10">
      {/* Button element that triggers the onClick function when clicked */}
      <button
        onClick={onClick} // Executes the onClick function passed as a prop
        className="relative before:content-[''] flex items-center justify-center font-Jost uppercase text-white bg-black w-full h-[44px] 
                   before:absolute before:left-0 before:top-0 before:h-full before:w-full 
                   before:origin-top-left before:scale-x-0 before:bg-button-yellow before:transition-transform 
                   before:duration-500 hover:text-black before:z-0 before:hover:scale-x-100"
      >
        {/* Inner content of the button */}
        <span className="relative flex justify-center items-center z-10">
          Add to cart {/* Button text */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 25"
            stroke="currentColor"
            className="w-11 h-8"
          >
            {/* SVG arrow icon next to the "Add to cart" text */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M25 12H5" // Horizontal line in the arrow
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M22 8l4 4-4 4" // Arrow head part
            />
          </svg>
        </span>{" "}
      </button>
    </div>
  );
}

export default AddToCartButton1;
