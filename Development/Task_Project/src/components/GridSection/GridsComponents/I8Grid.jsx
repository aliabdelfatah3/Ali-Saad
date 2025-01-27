import React, { useState } from "react";
import image8 from "../Pic/image8.png";
import Add from "../Pic/Add.png";

function I8Grid({ addToCart }) {
  const [activeColor8, setActiveColor8] = useState("Blue");
  const [isCardVisible8, setIsCardVisible8] = useState(false);
  const [isDropdownOpen8, setIsDropdownOpen8] = useState(false);
  const [selectedSize8, setSelectedSize8] = useState("");

  const toggleCard8 = () => {
    setIsCardVisible8(!isCardVisible8);
  };
  const toggleDropdown8 = () => {
    setIsDropdownOpen8(!isDropdownOpen8);
  };

  const handleAddToCart = () => {
    if (selectedSize8) {
      addToCart({
        id: new Date().getTime(), // Unique id based on current time
        size: selectedSize8,
        color: activeColor8,
        product: "Tailored Shoes",
        price: "980,00€",
      });
      setSelectedSize8(""); // Reset selected size
      alert("Item added to cart!");
    } else {
      alert("Please select a size before adding to the cart.");
    }
  };
  return (
    <>
      <div className="relative lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px] ">
        <img
          src={image8}
          alt="image1"
          className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px]"
        />
        <button
          onClick={toggleCard8}
          className="absolute lg:top-[200px] top-[19px] lg:left-[270px] left-[101px] lg:size-auto size-[16px]"
        >
          <img src={Add} alt="" />
        </button>
      </div>

      {/******************************** Card Popup *********************************/}
      {isCardVisible8 && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
          <div className="bg-[#F8F8F8] w-[311px] h-[447px] p-4 text-right">
            <button onClick={toggleCard8}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 17"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 13L13 4M4 4l9 9"
                />
              </svg>
            </button>
            {/******************************** Card Content *********************************/}
            <div className="flex">
              <img src={image8} alt="" className="w-[120px] h-[140px]" />
              <div className="flex flex-col text-start gap-3 pl-2">
                <h2 className="text-sm  pb-2">Tailored Shoes</h2>
                <h1 className="text-base font-Lustria">980,00€</h1>
                <p className="text-xs ">
                  This one-piece swimsuit is crafted from jersey featuring an
                  allover micro Monogram motif in relief.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-left mt-2.5">
              <div>
                <h1 className="font-Jost text-sm">Color</h1>
                <div className="relative flex justify-center w-[271px] mt-1.5">
                  {/* Sliding Background */}
                  <div
                    className={`absolute top-0 left-0 h-full w-[135px] z-20 bg-black transition-transform duration-500 ${
                      activeColor8 === "Blue"
                        ? "-translate-x-[0px]"
                        : "translate-x-[135px]"
                    }`}
                  ></div>

                  {/* Buttons */}
                  <div className="flex w-[100%]">
                    <div className="w-[50%] flex border-[0.5px] border-black">
                      <div className="border-r-[0.5px] w-1 bg-[#0D499F] border-black z-30"></div>
                      <button
                        onClick={() => setActiveColor8("Blue")}
                        className={`relative z-20 w-[100%] py-2 border-black font-Jost ${
                          activeColor8 === "Blue" ? "text-white" : "text-black"
                        }`}
                      >
                        Blue
                      </button>
                    </div>
                    <div className="w-[50%] flex border border-black">
                      <div className="border-r-[0.5px] w-1 bg-black border-black z-30"></div>
                      <button
                        onClick={() => setActiveColor8("Black")}
                        className={`relative z-20 w-[100%] py-2 font-Jost ${
                          activeColor8 === "Black" ? "text-white" : "text-black"
                        }`}
                      >
                        Black
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/******************************** Dropdown Section *********************************/}
            <div className="mt-2.5">
              <h2 className="text-left font-Jost text-sm">Size</h2>
              {/* Dropdown Toggle Button */}
              <button
                onClick={toggleDropdown8}
                className="flex text-left w-full h-10 pl-3 mt-[6.35px] bg-white border border-black shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              >
                <div className="flex border-r font-Jost text-base border-black h-full items-center w-10/12">
                  {selectedSize8 ? selectedSize8 : "Choose your size"}
                </div>
                <svg
                  className={`w-2/12 h-full border-black inline-block transform transition-transform ${
                    isDropdownOpen8 ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 8l-7 7-7-7"
                  />
                </svg>
              </button>

              {/******************************** Dropdown Content *********************************/}
              {isDropdownOpen8 && (
                <div className="absolute w-[279px] z-20 overflow-y-scroll scrollbar-hide h-[99px] bg-white border border-black shadow-lg ">
                  <ul className="text-black">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <li
                        key={size}
                        className="px-4 py-2 text-sm hover:bg-black hover:text-white cursor-pointer"
                        onClick={() => {
                          setSelectedSize8(size);
                          setIsDropdownOpen8(false);
                        }}
                      >
                        {size}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* Add to Cart Button */}
            <div className="mt-10">
              <button
                onClick={handleAddToCart}
                className="relative before:content-[''] flex items-center justify-center font-Jost uppercase text-white bg-black w-full h-[44px] 
                   before:absolute before:left-0 before:top-0 before:h-full before:w-full 
                   before:origin-top-left before:scale-x-0 before:bg-button-yellow before:transition-transform 
                   before:duration-500 hover:text-black before:z-0 before:hover:scale-x-100"
              >
                <span className="relative flex justify-center items-center z-10">
                  Add to cart
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default I8Grid;
