import React from "react";
import MenuOptions from "./MenuOptions";
import SocialHandlels from "./SocialHandlels";
import logo from "../assets/logos/Subtract.png";
import Container from "../Containers/Container";

const Footer = () => {
  return (
    <Container>
      <div className="w-full mt-[135px] bg-[#F8F8F8] dark:bg-transparent">
      <div className="flex flex-col items-center pt-[105px] pb-[60px]">


        <div className="flex items-center justify-center gap-5 mb-[80px] tracking-widest">
        <img src={logo} alt="" className="" />
        <h2>
          <span className="font-bold text-[48px] text-black dark:text-white">M</span>
          <span className="font-normal text-[48px] text-[#545454] dark:text-white">umair</span>
        </h2>
        </div>

        
        <div className="mb-[80px]">
          <MenuOptions />
        </div>
        <SocialHandlels />
      </div>

      <div className="w-full bg-[#545454] h-[84px] flex justify-center items-center">
        <p className="text-[21px] text-white">© 2023 <span className="text-[#FD6F00]">Mumair All</span> Rights Reserved , Inc.</p>
      </div>
    </div>
    </Container>
  );
};

export default Footer;
