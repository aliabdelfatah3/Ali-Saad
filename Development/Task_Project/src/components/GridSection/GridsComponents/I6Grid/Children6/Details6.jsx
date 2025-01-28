import React from "react";
import image6 from "../../../Pic/image6.png";

function Details6() {
  return (
    <div>
      {/* Product image and details container */}
      <div className="flex">
        {/* Product image */}
        <img src={image6} alt="" className="w-[120px] h-[140px]" />

        {/* Product details */}
        <div className="flex flex-col text-start gap-3 pl-2">
          {/* Product title */}
          <h2 className="text-sm pb-2">Long Sleeve Tennis Top</h2>

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

export default Details6;
