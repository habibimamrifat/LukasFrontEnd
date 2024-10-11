import React from "react";
import { HMediumText, NormalText } from "../../Components/AllTextType";
import ServiceCard from "../../Components/ServiceCard";

const Services = () => {
  return (
    <div className="mt-[65px]">
      <div className="text-center">
        <HMediumText innerText={"Services"} />
        <div className="mt-[35px]">
          <NormalText
            innerText={
              "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
            }
          />
        </div>

        <div className="flex flex-wrap">
            <ServiceCard/>
        </div>
      </div>
    </div>
  );
};

export default Services;
