import React from "react";
import image7 from "../../../Pic/image7.png"; // Importing the product image

function Details7() {
  return (
    <div>
      {/* Container for the product details */}
      <div className="flex">
        {/* Product image */}
        <img src={image7} alt="Product" className="w-[120px] h-[140px]" />

        {/* Product details section */}
        <div className="flex flex-col text-start gap-3 pl-2">
          {/* Product title */}
          <h2 className="text-sm pb-2">Top Blouse</h2>

          {/* Product price */}
          <h1 className="text-base font-Lustria">980,00€</h1>

          {/* Product description */}
          <p className="text-xs ">
            This one-piece swimsuit is crafted from jersey featuring an allover
            micro Monogram motif in relief.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details7;
