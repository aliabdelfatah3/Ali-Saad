import React from "react";
import Logo from "./Pic/Logo.png";

function Nav() {
  return (
    <>
      <div
        className="flex absolute overflow-hidden w-full justify-between px-[50px] py-[10px] z-100 items-center bg-[#F5F5F5]"
      >
        <img src={Logo} alt="TISSO_VISON LOGO" />
        <p>Find the ideal gift for your loved ones</p>
        <button className="button-yellow w-[207px] h-[44px] cursor-pointer">
          CHOOSE GIFT
        </button>
      </div>
    </>
  );
}

export default Nav;
