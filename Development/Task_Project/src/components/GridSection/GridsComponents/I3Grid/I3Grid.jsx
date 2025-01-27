import React, { useState } from "react";
import image3 from "../../Pic/image3.png";
import Add from "../../Pic/Add.png";
import Details3 from "./Children3/Details3";
import CardPopup3 from "./Children3/CardPopup3";
import ColorSelector3 from "./Children3/ColorSelector3";
import SizeDropdown3 from "./Children3/SizeDropdown3";
import AddToCartButton3 from "./Children3/AddToCartButton3";

function I3Grid({ addToCart }) {
  // State for tracking the selected color and size, and visibility of the card
  const [activeColor, setActiveColor] = useState("White");
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  // Function to toggle the visibility of the product details card
  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  // Function to handle adding an item to the cart
  const handleAddToCart = () => {
    // Ensure a size is selected before adding to the cart
    if (selectedSize) {
      addToCart({
        id: new Date().getTime(), // Unique id for each cart item
        size: selectedSize,
        color: activeColor,
        product: "Accordion Pleated Dress", // Product name
        price: "980,00€", // Product price
      });
      setSelectedSize(""); // Reset size after adding to cart
      alert("Item added to cart!"); // Show success alert
    } else {
      alert("Please select a size before adding to the cart."); // Show error if size is not selected
    }
  };

  return (
    <>
      {/* Product Image and Add Button */}
      <div className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px] relative">
        <img
          src={image3} // Product image
          alt="Product"
          className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px]"
        />
        <button
          onClick={toggleCard} // Toggle card visibility
          className="absolute lg:top-[82px] top-[18px] lg:left-[261px] left-[101px] lg:size-auto size-[16px]"
        >
          <img src={Add} alt="Add Button" /> {/* Add button image */}
        </button>
      </div>

      {/* Conditional rendering of product details card */}
      {isCardVisible && (
        <CardPopup3 onClose={toggleCard}>
          {" "}
          {/* Card popup component */}
          <Details3 /> {/* Product details */}
          <ColorSelector3
            activeColor={activeColor} // Active color state
            setActiveColor={setActiveColor} // Function to update active color
          />
          <SizeDropdown3
            selectedSize={selectedSize} // Selected size state
            setSelectedSize={setSelectedSize} // Function to update selected size
          />
          <AddToCartButton3 onClick={handleAddToCart} />{" "}
          {/* Button to add item to cart */}
        </CardPopup3>
      )}
    </>
  );
}

export default I3Grid;
