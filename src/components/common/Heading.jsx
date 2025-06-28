import React from 'react'

const Heading = ({headingText,className=""}) => {
  return (
      <h2 className={`font-bold text-[48px] ${className}`}>
          {headingText}
      </h2>
  )
}

export default Heading