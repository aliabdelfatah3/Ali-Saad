import React from "react";
import image3 from "../../../Pic/image3.png"; // Importing the product image

function Details3() {
  return (
    <div>
      {/* Product details container */}
      <div className="flex">
        {/* Product image */}
        <img
          src={image3}
          alt="Accordion Pleated Dress"
          className="w-[120px] h-[140px]"
        />

        {/* Product information */}
        <div className="flex flex-col text-start gap-3 pl-2">
          {/* Product title */}
          <h2 className="text-sm pb-2">Accordion Pleated Dress</h2>

          {/* Product price */}
          <h1 className="text-base font-Lustria">980,00€</h1>

          {/* Product description */}
          <p className="text-xs">
            This one-piece swimsuit is crafted from jersey featuring an allover
            micro Monogram motif in relief.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details3;
