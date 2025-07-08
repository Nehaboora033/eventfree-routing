import React from 'react'

const NormalText = ({ NormalText, className }) => {
  return (
    <div>
      <p className={`${className} font-normal sm:text-base text-[14px] text-[#666666]`}>{NormalText}</p>
    </div>
  )
}

export default NormalText