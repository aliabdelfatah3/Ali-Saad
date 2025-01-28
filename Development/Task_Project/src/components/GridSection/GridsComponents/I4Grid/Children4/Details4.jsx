import React from "react";
import image4 from "../../../Pic/image4.png";

function Details4() {
  return (
    <div>
      {/* Container for the product details, with a flex layout for image and text */}
      <div className="flex">
        {/* Product image */}
        <img src={image4} alt="" className="w-[120px] h-[140px]" />
        {/* Container for the text details with padding and gap between elements */}
        <div className="flex flex-col text-start gap-3 pl-2">
          {/* Product name with bottom padding */}
          <h2 className="text-sm pb-2">Green Trench Coat</h2>
          {/* Product price with larger font size and a specific font family */}
          <h1 className="text-base font-Lustria">980,00€</h1>
          {/* Product description with small text size */}
          <p className="text-xs">
            This one-piece swimsuit is crafted from jersey featuring an allover
            micro Monogram motif in relief.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details4;
