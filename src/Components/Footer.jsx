import React from "react";
import MenuOptions from "./MenuOptions";
import SocialHandlels from "./SocialHandlels";
import logo from "../assets/logos/dayLogo.png";
import logo2 from "../assets/logos/darkLogo.png";
import Container from "../Containers/Container";

const Footer = ({ mode }) => {
  return (
    <Container>
      <div className="w-full mt-[135px] bg-footerBodyBg dark:bg-transparent">
        <div className="flex flex-col items-center pt-[105px] pb-[60px]">
          <div className="mb-[80px]">
            <img
              src={logo}
              alt=""
              className={` ${mode === "day" ? "block" : "hidden"} `}
            />
            <img
              src={logo2}
              alt=""
              className={` ${mode === "day" ? "hidden" : "block"} `}
            />
          </div>

          <div className="mb-[80px]">
            <MenuOptions />
          </div>
          <SocialHandlels />
        </div>

        <div className="w-full bg-footerBg h-[84px] flex justify-center items-center">
          <p className="text-[21px] text-white">
            © 2023 <span className="text-[#FD6F00]">Mumair All</span> Rights
            Reserved , Inc.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
