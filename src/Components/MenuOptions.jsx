import React from "react";
import { NormalText } from "./AllTextType";

const MenuOptions = ({position}) => {
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
        <a href={`#${option}`} key={index}>
          <NormalText innerText={option} />
        </a>
      ))}
    </div>
  );
};

export default MenuOptions;
