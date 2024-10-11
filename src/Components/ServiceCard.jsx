import React from 'react'
import imgtest from "../assets/logos/Group 18.png"
import { HSmallText, NormalText } from './AllTextType'
const ServiceCard = () => {
  return (
    <div className='w-[330px] h-[346px] bg-[#F8F8F8] rounded-[15px]'>
      <div className='ml-10 my-20 text-left'>
        <img src={imgtest} alt="" />
        <div className='mt-[26px]'>
        <HSmallText
        innerText={"webdev"}/>
        </div>
        <div className='mt-[15px]'>
        <NormalText
        innerText={"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"}/>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
