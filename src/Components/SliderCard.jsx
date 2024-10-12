import React from "react";
import { NormalText } from "./AllTextType";


const SliderCard = ({ img, name,designation,testimoni }) => {
  return (
    <div className="bg-[#F8F8F8] rounded-[14px] w-[1087px] h-[344px] flex items-center justify-center gap-8 px-[44px] mx-auto">
      <img src={img} alt="" className="w-[235px] h-[235px] rounded-full" />
      <div>
        <p className="relative text-left">
          <span className="text-[32px] leading-[48px] font-bold text-[#FD6F00] absolute -top-4 -left-3">
            "
          </span>

          <span className="text-[21px] text-[#424242] font-normal">
            {testimoni}
            <span className="text-[32px] leading-[48px] font-bold text-[#FD6F00] absolute -bottom-6">
              "
            </span>
          </span>
        </p>

        <h2 className="mt-5 text-[21px] font-medium">{name}</h2>
        <h2 className="text-[19px] font-nornal">{designation}</h2>
      </div>
    </div>
  );
};

export default SliderCard;
