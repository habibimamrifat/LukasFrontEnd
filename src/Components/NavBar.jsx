import React from "react";
import Container from "../Containers/Container";
import logo from "../assets/logos/dayLogo.png";
import logo2 from "../assets/logos/darkLogo.png";
import MenuOptions from "./MenuOptions";
import { OrangeButton } from "./AllButton";
import DarkLightToggler from "./DarkLightToggler";

const NavBar = ({ mode, setMode }) => {
  return (
    <div className="mb-[128px] mt-[60px]">
      <Container>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
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

            <DarkLightToggler mode={mode} setMode={setMode} />
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
