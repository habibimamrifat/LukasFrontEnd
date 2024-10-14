import React, { useState } from "react";
import Container from "../Containers/Container";
import logo from "../assets/logos/dayLogo.png";
import logo2 from "../assets/logos/darkLogo.png";
import MenuOptions from "./MenuOptions";
import { OrangeButton } from "./AllButton";
import DarkLightToggler from "./DarkLightToggler";
import { IoMenu } from "react-icons/io5";
import SideBar from "./SideBar";

const NavBar = ({ mode, setMode }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className="mb-[128px] mt-[60px]">
      <Container>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2 ">
            <img
              src={logo}
              alt=""
              className={` ${
                mode === "day" ? "block" : "hidden"
              } h-10 xl:h-auto`}
            />
            <img
              src={logo2}
              alt=""
              className={` ${
                mode === "day" ? "hidden" : "block"
              } h-10 xl:h-auto`}
            />

            <DarkLightToggler mode={mode} setMode={setMode} />
          </div>

          <div className=" hidden xl:flex items-center xl:gap-[35px]">
            <MenuOptions />
            <div className="w-[188px] h-[52px]">
              <OrangeButton innerText={"Download CV"} />
            </div>
          </div>

          <div className="xl:hidden flex justify-center items-center">
            <IoMenu
              className={`${mode === "day" ? "text-black " : "text-[#FD6F00]"}`}
              onClick={() => setIsSideBarOpen(true)}
            />
          </div>
        </div>

        <SideBar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
          mode={mode}
          setMode={setMode}
        />
      </Container>
    </div>
  );
};

export default NavBar;
