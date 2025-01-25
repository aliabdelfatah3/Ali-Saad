import React from "react";
import Nav from "../Navbar/Nav";
import Frame from "./Pic/Frame.png";
function Banner() {
  return (
    <>
      <div className="relative flex flex-col overflow-hidden">
        <Nav />
        <div className="h-[390px]">
          <img
            src={Frame}
            alt="Banner"
            className="w-full object-fit -translate-y-17 h-[460px]"
          />
        </div>
        <div className="flex w-[2500px] h-[402px] overflow-hidden gap-30">
          <div className="flex flex-col pt-5 pl-[68px] items-start gap-[40px]">
            <h1 className="font-bold text-[70px]">The Gift Guide</h1>
            <p className="text-[20px] leading-[28px] w-[483px]">
              Discover Joy: Your Ultimate Holiday Gift Destination. Explore our
              curated selection and find the perfect gifts to delight your loved
              ones this holiday season.
            </p>
            <button className="w-[207px] h-[44px] cursor-pointer text-white bg-black">
              SHOP NOW
            </button>
          </div>

          <img
            src={Frame}
            alt="Banner"
            className="w-[1730px] h-[545px] overflow-hidden "
          />
        </div>
        <div></div>
        <p className="bg-[#F5F5F5] py-2.5 text-center">
          SUSTAINABLE, ETHICALLY MADE CLOTHES IN SIZES XXS TO 6XL
        </p>
      </div>
    </>
  );
}

export default Banner;
