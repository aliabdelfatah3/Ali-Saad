import React, { useState } from "react";
import image1 from "../../Pic/image1.png";
import Add from "../../Pic/Add.png";
import Details1 from "./Children1/Details1";
import CardPopup1 from "./Children1/CardPopup1";
import ColorSelector1 from "./Children1/ColorSelector1";
import SizeDropdown1 from "./Children1/SizeDropdown1";
import AddToCartButton1 from "./Children1/AddToCartButton1";

function I1Grid({ addToCart }) {
  // State to manage selected color and size, and visibility of the card popup
  const [activeColor, setActiveColor] = useState("White");
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  // Toggles the visibility of the card popup
  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  // Handles adding the item to the cart with selected size and color
  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: new Date().getTime(), // Unique ID for each item
        size: selectedSize,
        color: activeColor,
        product: "Orange Wide Leg Swimsuit",
        price: "980,00€",
      });
      setSelectedSize(""); // Reset size after adding to cart
      alert("Item added to cart!"); // Show success message
    } else {
      alert("Please select a size before adding to the cart."); // Show error if size is not selected
    }
  };

  return (
    <>
      {/* Product Image */}
      <div className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px] relative">
        <img
          src={image1}
          alt="Product"
          className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px]"
        />

        {/* Add button to toggle card visibility */}
        <button
          onClick={toggleCard} // Toggle popup visibility
          className="absolute lg:top-[238px] top-[18px] lg:left-[252px] left-[101px] lg:size-auto size-[16px]"
        >
          <img src={Add} alt="Add Button" />
        </button>
      </div>

      {/* Card Popup with product details, color selector, size dropdown, and add-to-cart button */}
      {isCardVisible && (
        <CardPopup1 onClose={toggleCard}>
          <Details1 /> {/* Product details component */}
          <ColorSelector1
            activeColor={activeColor}
            setActiveColor={setActiveColor} // Pass the setter to update active color
          />
          <SizeDropdown1
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize} // Pass the setter to update selected size
          />
          <AddToCartButton1 onClick={handleAddToCart} />{" "}
          {/* Add to cart button */}
        </CardPopup1>
      )}
    </>
  );
}

export default I1Grid;
