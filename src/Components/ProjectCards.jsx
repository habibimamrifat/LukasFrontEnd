import React from "react";

const ProjectCards = () => {
  return (
    <div className="w-[445px] h-[601px]">
      <div className="w-full h-[489px] bg-[#FFEBDB] relative overflow-hidden rounded-xl">
        <div className="h-full w-[274px] bg-blue-500 absolute right-7"></div>
        <div className="h-full w-[274px] bg-black absolute left-10 top-20"></div>
      </div>

      <div className="mt-[37px] text-start">
        <p className="font-normal text-[20px] text-[#FD6F00]">Web Design</p>
      </div>
    </div>
  );
};

export default ProjectCards;
