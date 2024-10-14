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
    <div className="flex gap-5 flex-col-reverse md:flex-row " id="Home">
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

      <div className="flex-1 flex flex-col justify-center items-center mb-10 md:mb-0">
        <div className="relative flex justify-center">
          <img src={pic1} alt="" />
          <div className="h-[50px] md:h-[60px] lg:h-[83px] w-[70%] md:w-[374px] bg-[#FD6F0099] absolute top-[15%] md:top-[10%]"></div>
        </div>
        <div className="mt-5">
          <SocialHandlels />
        </div>
      </div>
    </div>
  );
};

export default Hero;
