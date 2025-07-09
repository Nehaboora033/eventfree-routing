import React from 'react'

const Button = ({buttonText,className="", onClick}) => {
  return (
      <button onClick={onClick} className={`${className} rounded-full whitespace-nowrap text-white py-[9px] px-[25px] sm:py-[11px] sm:px-[28px] bg-[#2C49FE]  text-[14px] sm:text-base hover:scale-105 active:scale-95 cursor-pointer transition-all duration-150 ease-in-out`}>
          {buttonText}
   </button>
  )
}

export default Button