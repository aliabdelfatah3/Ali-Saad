import React, { useState } from "react";
import image7 from "../../Pic/image7.png"; // Product image
import Add from "../../Pic/Add.png"; // Add icon image
import Details7 from "./Children7/Details7"; // Product details component
import CardPopup7 from "./Children7/CardPopup7"; // Popup modal component
import ColorSelector7 from "./Children7/ColorSelector7"; // Color selector component
import SizeDropdown7 from "./Children7/SizeDropdown7"; // Size dropdown component
import AddToCartButton7 from "./Children7/AddToCartButton7"; // Add to cart button component

function I7Grid({ addToCart }) {
  // State hooks for managing color, size, and visibility of the card popup
  const [activeColor, setActiveColor] = useState("White");
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  // Function to toggle the visibility of the card popup
  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  // Function to handle adding the item to the cart
  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: new Date().getTime(), // Generate a unique ID for the item
        size: selectedSize, // The selected size
        color: activeColor, // The selected color
        product: "Top Blouse", // The product name
        price: "980,00€", // The product price
      });
      setSelectedSize(""); // Reset the selected size after adding to cart
      alert("Item added to cart!"); // Show a success message
    } else {
      alert("Please select a size before adding to the cart."); // Prompt if no size is selected
    }
  };

  return (
    <>
      {/* Product image and add button */}
      <div className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px] relative">
        <img
          src={image7}
          alt="Product"
          className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px]"
        />
        <button
          onClick={toggleCard} // Toggle the visibility of the card popup when clicked
          className="absolute lg:top-[238px] top-[18px] lg:left-[252px] left-[101px] lg:size-auto size-[16px]"
        >
          <img src={Add} alt="Add Button" />
        </button>
      </div>

      {/* Popup card with product details, color selector, size dropdown, and add-to-cart button */}
      {isCardVisible && (
        <CardPopup7 onClose={toggleCard}>
          <Details7 />
          <ColorSelector7
            activeColor={activeColor} // Pass the active color and setter function
            setActiveColor={setActiveColor}
          />
          <SizeDropdown7
            selectedSize={selectedSize} // Pass the selected size and setter function
            setSelectedSize={setSelectedSize}
          />
          <AddToCartButton7 onClick={handleAddToCart} />{" "}
          {/* Add to cart button */}
        </CardPopup7>
      )}
    </>
  );
}

export default I7Grid;
