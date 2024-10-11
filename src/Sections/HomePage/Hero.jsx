import React from "react";
import SocialHandlels from "../../Components/SocialHandlels";
import {
  HightLightText,
  NormalText,
  SmallBoldText,
} from "../../Components/AllTextType";
import { OrangeButton } from "../../Components/AllButton";
import pic1 from "../../assets/imgs/Group 2.png";

const Hero = () => {
  return (
    <div className="flex" id="Home">
      <div className="flex-1 flex flex-col justify-center ">
        <SmallBoldText innerText={"Hi I am "} />

        <p className="font-semibold text-[#FD6F00] text-[32px] leading-8 mt-6">
          Muhammad Umair
        </p>

        <div className="">
          <HightLightText innerText={"UI & UX"} />
          <div className="ml-[17%]">
            <HightLightText innerText={"Designer"} />
          </div>
        </div>

        <div className="mt-[28px]">
          <NormalText
            innerText={
              "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra"
            }
          />
        </div>

        <div className="h-[52px] w-[188px] mt-[22px]">
          <OrangeButton innerText={"Hire Me"} />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center ">
        <img src={pic1} alt="" />
        <div className="mt-5">
          <SocialHandlels />
        </div>
      </div>
    </div>
  );
};

export default Hero;
