import React from "react";
import image8 from "../../../Pic/image8.png";

function Details8() {
  return (
    <div>
      {/* Product image and details container */}
      <div className="flex">
        {/* Product image */}
        <img src={image8} alt="" className="w-[120px] h-[140px]" />

        {/* Product description */}
        <div className="flex flex-col text-start gap-3 pl-2">
          {/* Product name */}
          <h2 className="text-sm pb-2">Shoes</h2>

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

export default Details8;
