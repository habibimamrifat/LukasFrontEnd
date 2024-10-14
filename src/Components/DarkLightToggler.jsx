import React, { useState } from "react";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { GiNightSky } from "react-icons/gi";

const DarkLightToggler = ({mode,setMode}) => {
   
  return (
    <div className="w-[50px] h-[40px] rounded-full  items-center relative overflow-hidden"
    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.6)' }}
    >
      <div
        className={`flex gap-5 w-[100px] justify-center items-center absolute top-[17%]  transition-all duration-1000 ${
          mode === "day" ? "rotate-0" : "-rotate-180"
        }`}
      >
        <WiDaySunnyOvercast
          className="text-[35px] text-[#FD6F00] "
          onClick={() => setMode("night")}
        />

        <GiNightSky
          className="text-[25px] text-[#FD6F00] rotate-180"
          onClick={() => setMode("day")}
        />
      </div>
    </div>
  );
};

export default DarkLightToggler;
