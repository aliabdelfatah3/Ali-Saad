import React, { useState } from "react";
import image8 from "../../Pic/image8.png"; // Importing product image
import Add from "../../Pic/Add.png"; // Importing 'Add' button image
import Details8 from "./Children8/Details8"; // Importing the product details component
import CardPopup8 from "./Children8/CardPopup8"; // Importing the popup component for product card
import ColorSelector8 from "./Children8/ColorSelector8"; // Importing the color selector component
import SizeDropdown8 from "./Children8/SizeDropdown8"; // Importing the size dropdown component
import AddToCartButton8 from "./Children8/AddToCartButton8"; // Importing the Add to Cart button component

function I8Grid({ addToCart }) {
  const [activeColor, setActiveColor] = useState("White"); // State to track selected color
  const [isCardVisible, setIsCardVisible] = useState(false); // State to toggle the visibility of the popup
  const [selectedSize, setSelectedSize] = useState(""); // State to track selected size

  // Function to toggle the popup visibility
  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  // Function to handle adding the item to the cart
  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: new Date().getTime(), // Unique ID for the item
        size: selectedSize,
        color: activeColor,
        product: "Shoes",
        price: "980,00€",
      });
      setSelectedSize(""); // Reset selected size after adding to cart
      alert("Item added to cart!"); // Notify user
    } else {
      alert("Please select a size before adding to the cart."); // Alert if no size is selected
    }
  };

  return (
    <>
      {/* Product image container */}
      <div className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px] relative">
        {/* Display the product image */}
        <img
          src={image8}
          alt="Product"
          className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px]"
        />

        {/* Add button to trigger the popup */}
        <button
          onClick={toggleCard}
          className="absolute lg:top-[238px] top-[18px] lg:left-[252px] left-[101px] lg:size-auto size-[16px]"
        >
          <img src={Add} alt="Add Button" />
        </button>
      </div>

      {/* Popup card displaying product details */}
      {isCardVisible && (
        <CardPopup8 onClose={toggleCard}>
          {/* Render product details, color selector, size dropdown, and add to cart button */}
          <Details8 />
          <ColorSelector8
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
          <SizeDropdown8
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <AddToCartButton8 onClick={handleAddToCart} />
        </CardPopup8>
      )}
    </>
  );
}

export default I8Grid;
