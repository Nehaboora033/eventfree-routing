import React from 'react'

const NormalText = ({Text,className}) => {
  return (
      <div>
          <p className={`${className} font-normal text-sm`}>{Text}</p>
    </div>
  )
}

export default NormalText