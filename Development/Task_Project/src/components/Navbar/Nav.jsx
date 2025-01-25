import React from "react";
import Logo from "./Pic/Logo.png";

function Nav() {
  return (
    <>
      <div className="flex absolute overflow-hidden w-full justify-between px-[50px] py-[10px] z-100 items-center bg-[#F5F5F5]">
        <img src={Logo} alt="TISSO_VISON LOGO" />
        <p>Find the ideal gift for your loved ones</p>
        <div className="z-10 space-x-6">
          {/* <button className="uppercase relative flex items-center justify-center overflow-hidden font-medium text-blue-400 transition duration-300 ease-out border-2 border-blue-400 rounded-full group">
            <span className="flex items-center justify-center p-4 px-12 rounded-full text-blue-400 transition-all duration-300 transform hover:translate-x-full ease">
              choose gift
            </span>
          </button> */}

          <button
            className="relative before:content-[''] uppercase text-black button-yellow w-[207px] h-[44px] z-10 
             before:absolute before:left-0 before:top-0 before:h-full before:w-full 
             before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform 
             before:duration-300 hover:text-white before:z-0 before:hover:scale-x-100 cursor-pointer"
          >
            <span className="relative z-10">choose gift</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
