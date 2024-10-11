import React from "react";
import { HMediumText, NormalText } from "../../Components/AllTextType";
import { OrangeButton } from "../../Components/AllButton";

const ContactMe = () => {
  return (
    <div className="mt-[135px] text-center max-w-[932px] mx-auto" id="Contact">
      <HMediumText innerText={"Lets Design Together"} />
      <div className="mt-[35px]">
        <NormalText
          innerText={
            "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
          }
        />
      </div>
      <div className="mt-[50px] flex gap-6">
        <input
          type="text"
          placeholder={"Enter Your Email"}
          className="w-full border-[1px] border-[#797979] rounded-[14px] text-[#797979] bg-[#F8F8F8] h-[75px] placeholder:text-[#797979] placeholder:font-normal placeholder:text-[21px] ps-6"
        />
        <div className="h-[75px] w-[222px]">
          <OrangeButton innerText={"Contact Me "} />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
