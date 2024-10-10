import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full max-w-[1440px] overflow-hidden mx-auto'>
      {children}
    </div>
  )
}

export default Container
