import React from "react";
import { HMediumText, NormalText } from "../../Components/AllTextType";
import ServiceCard from "../../Components/ServiceCard";
import img1 from "../../assets/logos/Group 18.png";
import img2 from "../../assets/logos/Layer_1.png";
import img4 from "../../assets/logos/Vector (2).png";
import img5 from "../../assets/logos/Vector (3).png";

const Services = () => {
  const services = [
    {
      img: img4,
      detail:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
      name: "UI/UX",
    },
    {
      img: img2,
      detail:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
      name: "Web Design ",
    },
    {
      img: img1,
      detail:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
      name: "App Design",
    },
    {
      img: img5,
      detail:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
      name: "Graphic Design ",
    },
  ];
  return (
    <div className="mt-[65px]" id="Services">
      <div className="text-center">
        <HMediumText innerText={"Services"} />
        <div className="mt-[35px]">
          <NormalText
            innerText={
              "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
            }
          />
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-[35px]">
          {services.map((service, index) => (
            <ServiceCard
              img={service.img}
              name={service.name}
              detail={service.detail}
              key={index}
            />
          ))}
          {/* <ServiceCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
