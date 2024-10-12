import React from "react";
import Container from "../Containers/Container";
import logo from "../assets/logos/Subtract.png";
import MenuOptions from "./MenuOptions";
import { OrangeButton } from "./AllButton";
import DarkLightToggler from "./DarkLightToggler";

const NavBar = () => {
  return (
    <div className="mb-[128px] mt-[60px]">
      <Container>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
          <div className="flex items-center justify-center gap-5 tracking-widest">
              <img src={logo} alt="" className="" />
              <h2>
                <span className="font-bold text-[48px] text-black dark:text-white">
                  M
                </span>
                <span className="font-normal text-[48px] text-[#545454] dark:text-white">
                  umair
                </span>
              </h2>
            </div>
          <DarkLightToggler/>
          </div>
          <div className="flex items-center gap-[35px]">
            <MenuOptions />
            <div className="w-[188px] h-[52px]">
              <OrangeButton innerText={"Download CV"} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
