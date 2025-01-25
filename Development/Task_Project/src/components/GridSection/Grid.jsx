import React from "react";
import image1 from "./Pic/image1.png";
import image2 from "./Pic/image2.png";
import image3 from "./Pic/image3.png";
import image4 from "./Pic/image4.png";
import image5 from "./Pic/image5.png";
import image6 from "./Pic/image6.png";
import image7 from "./Pic/image7.png";
import image8 from "./Pic/image8.png";
import Add from "./Pic/Add.png";

function Grid() {
  return (
    <>
      <div className="pt-[90px]">
        <h1 className="text-4xl">Tisso vison in the wild</h1>
        <div className="flex flex-wrap justify-center gap-5 pt-7.5 ">
          <div className="w-[433px] h-[444px] relative">
            <img src={image1} alt="image1" className="w-[433px] h-[444px]" />
            <button className="absolute top-[238px] left-[252px] cursor-pointer">
              <img src={Add} alt="" />
            </button>
          </div>
          <div className="w-[433px] h-[444px] relative">
            <img src={image2} alt="image2" className="w-[433px] h-[444px]" />
            <button className="absolute top-[220px] left-[350px] cursor-pointer">
              <img src={Add} alt="" />
            </button>
          </div>
          <div className="w-[433px] h-[444px] relative">
            <img src={image3} alt="image3" className="w-[433px] h-[444px]" />
            <button className="absolute top-[82px] left-[252px] cursor-pointer">
              <img src={Add} alt="" />
            </button>
          </div>
          <div className="w-[433px] h-[444px] relative">
            <img src={image4} alt="image4" className="w-[433px] h-[444px]" />
            <button className="absolute top-[71px] left-[301.5px] cursor-pointer">
              <img src={Add} alt="" />
            </button>
          </div>
          <div className="w-[433px] h-[444px] relative">
            <img src={image5} alt="image5" className="w-[433px] h-[444px]" />
            <button className="absolute top-[104px] left-[212px] cursor-pointer">
              <img src={Add} alt="" />
            </button>
          </div>
          <div className="w-[433px] h-[444px] relative">
            <img src={image6} alt="image6" className="w-[433px] h-[444px]" />
            <button className="absolute top-[164px] left-[319.5px] cursor-pointer">
              <img src={Add} alt="" />
            </button>
          </div>
          <div className="w-[433px] h-[444px] relative">
            <img src={image7} alt="image7" className="w-[433px] h-[444px]" />
            <button className="absolute top-[230px] left-[150px] cursor-pointer">
              <img src={Add} alt="" />
            </button>
          </div>
          <div className="w-[433px] h-[444px] relative">
            <img src={image8} alt="image8" className="w-[433px] h-[444px]" />
            <button className="absolute top-[170px] left-[270px] cursor-pointer">
              <img src={Add} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
