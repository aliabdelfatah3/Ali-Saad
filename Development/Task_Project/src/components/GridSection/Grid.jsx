import React, { useState } from "react";
import I1Grid from "./GridsComponents/I1Grid";
import I2Grid from "./GridsComponents/I2Grid";
import I3Grid from "./GridsComponents/I3Grid";
import I4Grid from "./GridsComponents/I4Grid";
import I5Grid from "./GridsComponents/I5Grid";
import I6Grid from "./GridsComponents/I6Grid";
import I7Grid from "./GridsComponents/I7Grid";
import I8Grid from "./GridsComponents/I8Grid";
import Cart from "./Pic/Cart.png";
function Grid() {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const closeCart = () => {
    setIsCartVisible(false); // Close the cart when button is clicked
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  return (
    <>
      <div className="lg:pt-[90px] pt-[40px] pb-2">
        <div className="flex justify-center">
          <div className="flex md:justify-between justify-center xl:w-[1338px] lg:w-[880px] w-[700px] gap-2">
            <h1 className="md:text-4xl font-Lustria text-md">
              Tisso vison in the wild
            </h1>
            {/* Button to toggle cart visibility */}
              <button onClick={toggleCart} className="shadow-lg border  px-1 py-1">
                <img
                  src={Cart}
                  alt="Cart"
                  className="w-4 h-4 md:w-auto md:h-auto"
                />
              </button>
          </div>

          {/* Cart card displayed when isCartVisible is true */}
          {isCartVisible && (
            <div className="fixed inset-0 flex flex-col items-center justify-center z-20 bg-black bg-opacity-50">
              <div className="bg-white w-[400px] h-[600px] p-6 rounded-lg shadow-lg">
                <div className="text-right">
                  <button onClick={closeCart}>
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
                </div>
                <button
                  onClick={toggleCart}
                  className="absolute top-4 right-4 text-lg font-bold"
                >
                  X
                </button>
                <h2 className="text-xl font-Jost mb-4">Your Cart</h2>
                <div className="space-y-4 h-[420px] scrollbar-hide overflow-y-scroll">
                  {cart.length === 0 ? (
                    <p>Your cart is empty!</p>
                  ) : (
                    cart.map((item, index) => (
                      <div key={index} className="border-b pb-2">
                        <h3 className="font-Jost text-lg">{item.product}</h3>
                        <p className="text-sm">Size: {item.size}</p>
                        <p className="text-sm">Color: {item.color}</p>
                        <p className="text-sm">Price: {item.price}</p>
                      </div>
                    ))
                  )}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <button className="bg-black text-white px-4 py-2">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-center lg:gap-5 gap-1 lg:pt-[30px] pt-[20px]">
          <I1Grid addToCart={addToCart} />
          <I2Grid addToCart={addToCart} />
          <I3Grid addToCart={addToCart} />
          <I4Grid addToCart={addToCart} />
          <I5Grid addToCart={addToCart} />
          <I6Grid addToCart={addToCart} />
          <I7Grid addToCart={addToCart} />
          <I8Grid addToCart={addToCart} />
        </div>
      </div>
    </>
  );
}

export default Grid;
