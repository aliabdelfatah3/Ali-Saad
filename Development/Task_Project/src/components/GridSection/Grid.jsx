import  { useState } from "react";
import I1Grid from "./GridsComponents/I1Grid/I1Grid"; // Importing the grid component for product 1
import I2Grid from "./GridsComponents/I2Grid/I2Grid"; // Importing the grid component for product 2
import I3Grid from "./GridsComponents/I3Grid/I3Grid"; // Importing the grid component for product 3
import I4Grid from "./GridsComponents/I4Grid/I4Grid"; // Importing the grid component for product 4
import I5Grid from "./GridsComponents/I5Grid/I5Grid"; // Importing the grid component for product 5
import I6Grid from "./GridsComponents/I6Grid/I6Grid"; // Importing the grid component for product 6
import I7Grid from "./GridsComponents/I7Grid/I7Grid"; // Importing the grid component for product 7
import I8Grid from "./GridsComponents/I8Grid/I8Grid"; // Importing the grid component for product 8
import Cart from "./Pic/Cart.png"; // Importing the cart icon image

function Grid() {
  const [cart, setCart] = useState([]); // State to manage the items in the cart
  const [isCartVisible, setIsCartVisible] = useState(false); // State to toggle cart visibility

  // Function to close the cart
  const closeCart = () => {
    setIsCartVisible(false); // Close the cart
  };

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible); // Toggle the cart visibility
  };

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Add the item to the cart
  };

  return (
    <>
      <div className="lg:pt-[90px] pt-[40px] pb-2">
        {/* Container for header and cart button */}
        <div className="flex justify-center">
          <div className="flex md:justify-between justify-center xl:w-[1338px] lg:w-[880px] w-[700px] gap-2">
            {/* Title */}
            <h1 className="md:text-4xl font-Lustria text-md">
              Tisso vision in the wild
            </h1>
            {/* Button to toggle the cart visibility */}
            <button onClick={toggleCart} className="shadow-lg border px-1 py-1">
              <img
                src={Cart}
                alt="Cart"
                className="w-4 h-4 md:w-auto md:h-auto"
              />
            </button>
          </div>

          {/* Cart modal when cart is visible */}
          {isCartVisible && (
            <div className="fixed inset-0 flex flex-col items-center justify-center z-20 bg-black bg-opacity-50">
              <div className="bg-white md:w-[400px] w-[250px] h-[300px] md:h-[600px] p-6 rounded-lg shadow-lg">
                <div className="text-right">
                  {/* Close button for cart modal */}
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
                <div className="space-y-4 md:h-[420px] h-[150px] scrollbar-hide overflow-y-scroll">
                  {cart.length === 0 ? (
                    <p>Your cart is empty!</p> // Display message if cart is empty
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
                <div className="flex justify-between pt-1 items-center">
                  {/* Checkout button */}
                  <button className="bg-black text-white px-4 py-2">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Grid of product components */}
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
