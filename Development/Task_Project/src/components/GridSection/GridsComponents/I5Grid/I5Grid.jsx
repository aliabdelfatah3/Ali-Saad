import React, { useState } from "react";
import image5 from "../../Pic/image5.png";
import Add from "../../Pic/Add.png";
import Details5 from "./Children5/Details5";
import CardPopup5 from "./Children5/CardPopup5";
import ColorSelector5 from "./Children5/ColorSelector5";
import SizeDropdown5 from "./Children5/SizeDropdown5";
import AddToCartButton5 from "./Children5/AddToCartButton5";

function I5Grid({ addToCart }) {
  const [activeColor, setActiveColor] = useState("Grey");
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  // Toggle the visibility of the product detail card
  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: new Date().getTime(),
        size: selectedSize,
        color: activeColor,
        product: "Tennis Blue T-Shirt",
        price: "980,00€",
      });
      setSelectedSize(""); // Clear selected size after adding to cart
      alert("Item added to cart!");
    } else {
      alert("Please select a size before adding to the cart.");
    }
  };

  return (
    <>
      <div className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px] relative">
        <img
          src={image5}
          alt="Product"
          className="lg:w-[433px] md:w-[180px] w-[169px] lg:h-[444px] md:h-[190px] h-[186px]"
        />
        {/* Add Button */}
        <button
          onClick={toggleCard}
          className="absolute lg:top-[104px] top-[18px] lg:left-[213px] left-[101px] lg:size-auto size-[16px]"
        >
          <img src={Add} alt="Add Button" />
        </button>
      </div>

      {/* Product Detail Popup */}
      {isCardVisible && (
        <CardPopup5 onClose={toggleCard}>
          <Details5 />
          <ColorSelector5
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
          <SizeDropdown5
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <AddToCartButton5 onClick={handleAddToCart} />
        </CardPopup5>
      )}
    </>
  );
}

export default I5Grid;
