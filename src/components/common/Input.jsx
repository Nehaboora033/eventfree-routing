import React from 'react'
import Button from './Button'

const Input = ({placeholderText, profile,className=''}) => {
  return (
    <div className='relative '>
      <input type="text" placeholder={placeholderText} className={`border border-[#9CA1BE] pl-[88px] pr-[205px] w-full h-[70px] rounded-[35px] py-2 px-3 ${className}`} />
      <Button buttonText={"Post Comment"} className='absolute top-[7px] right-[7px] py-[13px] h-[56px]' />
     <img src={profile} alt="profile" className='absolute top-[7px] left-[9px]' />
    </div>
  )
}

export default Input