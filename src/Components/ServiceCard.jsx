import React from 'react'
import imgtest from "../assets/logos/Group 18.png"
import { HSmallText, NormalText } from './AllTextType'
const ServiceCard = ({img, detail,name}) => {
  return (
    <div className='w-[330px] h-[346px] bg-[#F8F8F8] rounded-[15px]'>
      <div className='ml-10 my-20 text-left'>
        <img src={img} alt="" />
        <div className='mt-[26px] '>
        <HSmallText
        innerText={name}
        position={"service"}
        />
        </div>
        <div className='mt-[15px]'>
        <NormalText
        innerText={detail}
        position={"service"}
        />
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
