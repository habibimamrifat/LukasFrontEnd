import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";

const SocialHandlels = () => {
  return (
    <div className='flex gap-6'>
      <FaFacebook className='h-6 w-6' />
      <FaTwitter className='h-6 w-6'/>
      <FaInstagram className='h-6 w-6' />
      <FaLinkedin className='h-6 w-6'/>
    </div>
  )
}

export default SocialHandlels
