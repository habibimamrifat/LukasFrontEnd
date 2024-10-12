import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import imgP from "../assets/imgs/Ellipse 10.png";
import imgM from "../assets/imgs/Ellipse 11.png";

// import required modules
import { EffectFade, Pagination } from "swiper/modules";
import SliderCard from "./SliderCard";

const Slider = () => {
  const testimonial = [
    {
      img: imgP,
      name: "Name",
      designation: "CEO",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    },
    {
      img: imgM,
      name: "John",
      designation: "DevLoper",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    },
    {
      img: imgP,
      name: "Ron",
      designation: "Designer",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    },
    {
      img: imgM,
      name: "Sam",
      designation: "Maneger",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    },
  ];

  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonial.map((testimony, index) => (
        <SwiperSlide key={index} className="pb-[90px]">
          <SliderCard
            img={testimony.img}
            name={testimony.name}
            designation={testimony.designation}
            testimoni={testimony.testimoni}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
