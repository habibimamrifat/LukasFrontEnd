import React from "react";
import { SmallBoldText } from "./AllTextType";

const ProjectCards = (img1,img2,catagory,projectName) => {
  return (
    <div className="w-[445px] h-[601px]">
      <div className="w-full h-[489px] bg-[#FFEBDB] relative overflow-hidden rounded-xl">
        <div className="h-full w-[274px] bg-blue-500 absolute right-7">
            <img src={img1} alt="" />
        </div>
        <div
          className="h-full w-[274px] bg-black absolute left-10 top-20"
          style={{ boxShadow: "10px 0 10px rgba(0, 0, 0, 0.3)" }}
        >
            <img src={img2} alt="" />
        </div>
      </div>

      <div className="mt-[37px] text-start">
        <p className="font-normal text-[20px] text-[#FD6F00]">{catagory}</p>
        <SmallBoldText innerText={projectName} />
      </div>
    </div>
  );
};

export default ProjectCards;
