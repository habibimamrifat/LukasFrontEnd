import React from "react";
import MenuOptions from "./MenuOptions";
import SocialHandlels from "./SocialHandlels";
import logo from "../assets/logos/logo (1).png";

const Footer = () => {
  return (
    <div className="w-full mt-[135px] bg-[#F8F8F8]">
      <div className="flex flex-col items-center pt-[105px] pb-[60px]">
        <img src={logo} alt="" className="mb-[80px]" />
        <div className="mb-[80px]">
          <MenuOptions />
        </div>
        <SocialHandlels />
      </div>

      <div className="w-full bg-[#545454] h-[84px] flex justify-center items-center">
        <p className="text-[21px] text-white">© 2023 <span className="text-[#FD6F00]">Mumair All</span> Rights Reserved , Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
