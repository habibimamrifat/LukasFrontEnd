import React from "react";
import { RxCross2 } from "react-icons/rx";
import MenuOptions from "./MenuOptions";
import logo from "../assets/logos/dayLogo.png";
import logo2 from "../assets/logos/darkLogo.png";
import DarkLightToggler from "./DarkLightToggler";
import { OrangeButton } from "./AllButton";

const SideBar = ({ isSideBarOpen, setIsSideBarOpen, mode, setMode }) => {
  return (
    <div
      className={`w-full md:w-[50%] h-[100%] fixed top-0 left-0 ${
        isSideBarOpen
          ? "translate-x-0 shadow-lg shadow-slate-400"
          : "-translate-x-[100%]"
      } transition-all duration-1000 z-10 bg-bodyBg`}
    >
      {/* Close Button */}
      <RxCross2
        className={`${
          mode === "day" ? "text-black " : "text-[#FD6F00]"
        } absolute top-5 right-5 text-[21px]`}
        onClick={() => setIsSideBarOpen(false)}
      />

      {/* Logo and Dark/Light Toggler Section */}
      <div className="w-full flex justify-center items-center mt-10">
        <div className="flex items-center gap-2 mb-5">
          <img
            src={logo}
            alt="Day Logo"
            className={`${mode === "day" ? "block" : "hidden"} h-10 lg:h-auto`}
          />
          <img
            src={logo2}
            alt="Dark Logo"
            className={`${mode === "day" ? "hidden" : "block"} h-10 lg:h-auto`}
          />
          <DarkLightToggler mode={mode} setMode={setMode} />
        </div>
      </div>

      {/* Scrollable Menu Options */}
      <div className="w-full h-[calc(100%-80px)] overflow-y-auto  pb-[100px] mt-5">
        <div className="flex flex-col items-center">
          <MenuOptions position={"sideBar"} 
          setIsSideBarOpen={setIsSideBarOpen}
          />
          <div className="mt-10 w-[144px] h-[55px]">
            <OrangeButton innerText={"Download CV"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
