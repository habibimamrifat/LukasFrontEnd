import React from "react";
import { NormalText } from "./AllTextType";

const MenuOptions = ({position,setIsSideBarOpen}) => {
  const menuOptions = [
    "Home",
    "About Me",
    "Services",
    "Projects",
    "Testimonial",
    "Contact",
  ];
  return (
    <div className={`flex gap-10 ${position === "sideBar" ? "flex-col":"flex-row"} flex-wrap md:flex-nowrap justify-center`}>
      {menuOptions.map((option, index) => (
        <a href={`#${option}`} key={index} 
        onClick={
          position === "sideBar" ? ()=> setIsSideBarOpen(false) : null
        } >
          <NormalText innerText={option} />
        </a>
      ))}
    </div>
  );
};

export default MenuOptions;
