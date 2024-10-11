import React from "react";
import { NormalText } from "./AllTextType";

const MenuOptions = () => {
  const menuOptions = [
    "Home",
    "About Me",
    "Services",
    "Projects",
    "Testimonial",
    "Contact",
  ];
  return (
    <div className="flex gap-10">
      {menuOptions.map((option, index) => (
        <a href={`#${option}`} key={index}>
          <NormalText innerText={option} />
        </a>
      ))}
    </div>
  );
};

export default MenuOptions;
