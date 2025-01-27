import React, { useState } from "react";
import image2 from "../../Pic/image2.png"; // Product image
import Add from "../../Pic/Add.png"; // Add button image
import Details2 from "./Children2/Details2"; // Product details component
import CardPopup2 from "./Children2/CardPopup2"; // Popup for product details
import ColorSelector2 from "./Children2/ColorSelector2"; // Color selector component
import SizeDropdown2 from "./Children2/SizeDropdown2"; // Size dropdown component
import AddToCartButton2 from "./Children2/AddToCartButton2"; // Add to cart button component

function I2Grid({ addToCart }) {
  // State for managing the active color selection
  const [activeColor, setActiveColor] = useState("White");

  // State for showing or hiding the card popup
  const [isCardVisible, setIsCardVisible] = useState(false);

  // State for managing the selected size
  const [selectedSize, setSelectedSize] = useState("");

  // Function to toggle visibility of the product detail popup
  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  // Function to handle adding an item to the cart
  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: new Date().getTime(), // Unique id for the item
        size: selectedSize, // Selected size
        color: activeColor, // Selected color
        product: "Tailored Jacket", // Product name
        price: "980,00€", // Product price
      });
      setSelectedSize(""); // Reset selected size after adding to cart
      alert("Item added to cart!"); // Show success message
    } else {
      alert("Please select a size before adding to the cart."); // Show alert if no size is selected
    }
  };

  return (
    <>
      <div className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px] relative">
        {/* Display the product image */}
        <img
          src={image2}
          alt="Product"
          className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px]"
        />
        {/* Button to toggle the visibility of the product detail popup */}
        <button
          onClick={toggleCard}
          className="absolute lg:top-[222px] top-[18px] lg:left-[356px] left-[101px] lg:size-auto size-[16px]"
        >
          <img src={Add} alt="Add Button" /> {/* Add button */}
        </button>
      </div>

      {/* Show product details popup when isCardVisible is true */}
      {isCardVisible && (
        <CardPopup2 onClose={toggleCard}>
          <Details2 /> {/* Product details */}
          <ColorSelector2
            activeColor={activeColor} // Current selected color
            setActiveColor={setActiveColor} // Function to change selected color
          />
          <SizeDropdown2
            selectedSize={selectedSize} // Current selected size
            setSelectedSize={setSelectedSize} // Function to change selected size
          />
          <AddToCartButton2 onClick={handleAddToCart} />{" "}
          {/* Add to cart button */}
        </CardPopup2>
      )}
    </>
  );
}

export default I2Grid;
