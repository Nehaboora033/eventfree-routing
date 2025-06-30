import React from 'react'

const Button = ({buttonText,className=""}) => {
  return (
      <button className={`${className} rounded-full text-white py-[11px] px-[28px] bg-[#2C49FE]  text-base hover:scale-105 cursor-pointer transition-all duration-150 ease-in-out`}>
          {buttonText}
   </button>
  )
}

export default Button