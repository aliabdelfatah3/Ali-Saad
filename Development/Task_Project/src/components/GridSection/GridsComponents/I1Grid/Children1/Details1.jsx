import React from "react";
import image1 from "../../../Pic/image1.png";

// Details1 component: Displays product details including an image, title, price, and description
function Details1() {
  return (
    <div>
      {/* Wrapper for product details, including the image and text content */}
      <div className="flex">
        {/* Product image with fixed width and height */}
        <img src={image1} alt="" className="w-[120px] h-[140px]" />

        {/* Text content (title, price, description) */}
        <div className="flex flex-col text-start gap-3 pl-2">
          {/* Product title (small text) */}
          <h2 className="text-sm pb-2">Orange Wide Leg</h2>

          {/* Product price (larger text with custom font) */}
          <h1 className="text-base font-Lustria">980,00€</h1>

          {/* Product description (small text) */}
          <p className="text-xs">
            This one-piece swimsuit is crafted from jersey featuring an allover
            micro Monogram motif in relief.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details1;
