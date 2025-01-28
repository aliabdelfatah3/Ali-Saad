import React, { useState } from "react";
import image6 from "../../Pic/image6.png";
import Add from "../../Pic/Add.png";
import Details6 from "./Children6/Details6";
import CardPopup6 from "./Children6/CardPopup6";
import ColorSelector6 from "./Children6/ColorSelector6";
import SizeDropdown6 from "./Children6/SizeDropdown6";
import AddToCartButton6 from "./Children6/AddToCartButton6";

function I5Grid({ addToCart }) {
  // State hooks to track active color, card visibility, and selected size
  const [activeColor, setActiveColor] = useState("White");
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  // Toggle visibility of the card popup
  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  // Handle the action of adding the item to the cart
  const handleAddToCart = () => {
    if (selectedSize) {
      // Add the selected item to the cart
      addToCart({
        id: new Date().getTime(), // Unique ID using timestamp
        size: selectedSize,
        color: activeColor,
        product: "Long Sleeve Tennis Top",
        price: "980,00€",
      });
      setSelectedSize(""); // Reset size after adding to cart
      alert("Item added to cart!"); // Alert the user
    } else {
      alert("Please select a size before adding to the cart."); // Prompt if no size selected
    }
  };

  return (
    <>
      {/* Product image container with size-based responsive design */}
      <div className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px] relative">
        <img
          src={image6} // Product image
          alt="Product"
          className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px]"
        />

        {/* Button to trigger the card popup */}
        <button
          onClick={toggleCard} // Toggle the popup visibility
          className="absolute lg:top-[164px] top-[18px] lg:left-[320px] left-[101px] lg:size-auto size-[16px]"
        >
          <img src={Add} alt="Add Button" /> {/* Add button image */}
        </button>
      </div>

      {/* Conditionally render the popup card with product details */}
      {isCardVisible && (
        <CardPopup6 onClose={toggleCard}>
          {" "}
          {/* Close button inside CardPopup */}
          <Details6 /> {/* Product details */}
          <ColorSelector6
            activeColor={activeColor} // Pass the active color to ColorSelector
            setActiveColor={setActiveColor} // Function to change active color
          />
          <SizeDropdown6
            selectedSize={selectedSize} // Pass the selected size to SizeDropdown
            setSelectedSize={setSelectedSize} // Function to change selected size
          />
          <AddToCartButton6 onClick={handleAddToCart} />{" "}
          {/* Button to add item to cart */}
        </CardPopup6>
      )}
    </>
  );
}

export default I5Grid;
