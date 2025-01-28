import React, { useState } from "react";
import image4 from "../../Pic/image4.png"; // Import product image
import Add from "../../Pic/Add.png"; // Import 'Add' button image
import Details4 from "./Children4/Details4"; // Import product details component
import CardPopup4 from "./Children4/CardPopup4"; // Import popup card component
import ColorSelector4 from "./Children4/ColorSelector4"; // Import color selector component
import SizeDropdown4 from "./Children4/SizeDropdown4"; // Import size dropdown component
import AddToCartButton4 from "./Children4/AddToCartButton4"; // Import add to cart button component

function I4Grid({ addToCart }) {
  // State to manage the selected color
  const [activeColor, setActiveColor] = useState("White");

  // State to toggle the visibility of the product details popup card
  const [isCardVisible, setIsCardVisible] = useState(false);

  // State to manage the selected size
  const [selectedSize, setSelectedSize] = useState("");

  // Function to toggle the popup card visibility
  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  // Function to handle adding an item to the cart
  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: new Date().getTime(), // Unique ID based on current time
        size: selectedSize,
        color: activeColor,
        product: "Green Trench Coat", // Product name
        price: "980,00€", // Product price
      });
      setSelectedSize(""); // Reset selected size
      alert("Item added to cart!"); // Notify user
    } else {
      alert("Please select a size before adding to the cart."); // Prompt user to select size
    }
  };

  return (
    <>
      {/* Product image and 'Add' button */}
      <div className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px] relative">
        <img
          src={image4}
          alt="Product"
          className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px]"
        />
        <button
          onClick={toggleCard} // Show popup on button click
          className="absolute lg:top-[71px] top-[18px] lg:left-[302px] left-[101px] lg:size-auto size-[16px]"
        >
          <img src={Add} alt="Add Button" />
        </button>
      </div>

      {/* Display popup card when isCardVisible is true */}
      {isCardVisible && (
        <CardPopup4 onClose={toggleCard}>
          {" "}
          {/* Close card when onClose is triggered */}
          <Details4 /> {/* Product details */}
          <ColorSelector4
            activeColor={activeColor}
            setActiveColor={setActiveColor} // Pass state updater function for color
          />
          <SizeDropdown4
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize} // Pass state updater function for size
          />
          <AddToCartButton4 onClick={handleAddToCart} />{" "}
          {/* Add to cart button */}
        </CardPopup4>
      )}
    </>
  );
}

export default I4Grid;
