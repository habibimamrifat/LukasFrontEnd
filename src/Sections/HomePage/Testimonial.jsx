import React from "react";
import { HMediumText, NormalText } from "../../Components/AllTextType";
import Slider from "../../Components/Slider";

const Testimonial = () => {
  return (
    <div id="Testimonial" className="mt-[135px]">
      <div className="text-center max-w-[932px] mx-auto">
        <HMediumText innerText={"Testimonial"} />
        <div className="mt-[35px]">
          <NormalText
            innerText={
              "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
            }
          />
        </div>
      </div>
      <div className="mt-[60px] flex justify-center w-full">
        <Slider />
      </div>
    </div>
  );
};

export default Testimonial;
