import React from "react";
import image2 from "../../../Pic/image2.png";

function Details2() {
  return (
    <div>
      <div className="flex">
        {/* Product Image */}
        <img src={image2} alt="" className="w-[120px] h-[140px]" />

        <div className="flex flex-col text-start gap-3 pl-2">
          {/* Product Title */}
          <h2 className="text-sm pb-2">Tailored Jacket</h2>

          {/* Product Price */}
          <h1 className="text-base font-Lustria">980,00€</h1>

          {/* Product Description */}
          <p className="text-xs">
            This one-piece swimsuit is crafted from jersey featuring an allover
            micro Monogram motif in relief.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details2;
