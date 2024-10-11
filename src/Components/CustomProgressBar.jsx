import React from 'react'

const CustomProgressBar = ({progress}) => {
  return (
    <div className='w-full bg-[#F8F8F8] h-[12px] rounded-md'>
      <div style={{ width: `${progress}%` }} className= {` h-full bg-[#FD6F00] relative flex justify-center items-center rounded-md`}>
        <div className='w-[32px] h-[32px] absolute -right-1 border-[2px] border-[#FD6F00] rounded-full z-10 bg-white'>

        </div>
      </div>
    </div>
  )
}

export default CustomProgressBar
