import React from 'react'

const Heading = ({headingText,className=''}) => {
  return (
      <h2 className={`font-bold sm:text-[48px] text-[38px] ${className}`}>
          {headingText}
      </h2>
  )
}

export default Heading