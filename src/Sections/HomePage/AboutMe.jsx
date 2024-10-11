import React from "react";
import img2 from "../../assets/imgs/Group 7.png";
import {
  HMediumText,
  HSmallText,
  NormalText,
} from "../../Components/AllTextType";
import CustomProgressBar from "../../Components/CustomProgressBar";

const AboutMe = () => {
  const skillSet = [
    {
      name: "ux",
      progress: "80",
    },
    {
      name: "Website Design",
      progress: "74",
    },
    {
      name: "App Design ",
      progress: "95",
    },
    {
      name: "Graphic Design ",
      progress: "82",
    },
  ];
  return (
    <div className="flex mt-[65px]">
      <div className="flex-1">
        <img src={img2} alt="" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-[35px]">
          <HMediumText innerText={"About Me"} />
        </div>

        <div className="mb-[15px]">
          <NormalText
            innerText={
              "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra"
            }
          />
        </div>

        <div>
          {skillSet.map((skill, index) => (
            <div key={index}>
              <div className="mb-[18px] mt-[25px]">
                <HSmallText innerText={skill.name} />
              </div>
              <CustomProgressBar progress={skill.progress} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
