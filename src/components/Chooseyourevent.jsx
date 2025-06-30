import React from 'react'
import line from '../assets/png/small-blueline.png'
import Heading from './common/Heading'
import { EVENT_CARD_DATA } from '../utils/helper'
import Button from './common/Button'


const Chooseyourevent = () => {
  return (
    <>

      <div className='max-w-[1320px] mx-auto px-3 pt-[68px] pb-[155px]'>
        <img src={line} alt="line" className='block mx-auto' />
        <Heading headingText={"Choose your next event"} className='text-center mb-[33px]' />

        <div className='grid grid-cols-3 gap-[25px]'>
          {EVENT_CARD_DATA.map((item, index) => (
            <div key={index} className='outline outline-[#CCCCCC] rounded-[30px] pt-[35px] pb-[30px] transition-all duration-150 ease-in-out group px-[40px] hover:outline-0 hover:shadow-card'>
              <img src={item.image} alt="image" className='group-hover:rounded-none rounded-[20px] w-full' />
              <h3 className='font-semibold text-2xl mt-[21px] mb-3'>{item.title} </h3>
              {item.details.map((info, i) => (
                <div key={i} className='flex items-center gap-2 mb-[17px]'>
                  <img src={info.svg} alt="image" />
                  <p className='font-nomal text-sm'>{info.text} </p>
                </div>
              ))}
              <Button buttonText={"Go Check"} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Chooseyourevent