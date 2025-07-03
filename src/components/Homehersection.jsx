import React from 'react'
import { Link } from 'react-router-dom'
import Button from './common/Button'
import NormalText from './common/NormalText'
import blueline from '../assets/png/big-blueline.png'
import backgroundImage from '../assets/png/home-bg.png'
import { BLUEBOX } from '../utils/helper'

const Homehersection = () => {
  return (
      <div className='bg-center bg-cover bg-no-repeat pb-[104px] ' style={{ backgroundImage: `url(${backgroundImage})` }} >
          <div className='max-w-[1320px] mx-auto pt-[256px] px-3 '>
              <h1 className='font-poppins font-bold text-[64px] text-white max-w-[1044px] leading-[150%]  mb-[18px] '>
                  Sed tortor in <span className='inline-block relative '>quisque morbi
                      <img src={blueline} alt="img" className='absolute'/>
                  </span>
                  scelerisque etiam eu.
                 
              </h1>

              <NormalText
                  className='max-w-[765px] font-yantra text-[20px] text-white mb-[33px] '
                  NormalText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,'} />

              <div className='flex gap-[23px] items-center mb-[145px] '>
                  <Button
                      buttonText={'Get Started'}
                      className='py-[11px] px-7 text-[20px] leading-[150%] ' />

                  <Link className='font-poppins font-normal text-[20px] text-white '>
                      Learn more
                  </Link>
              </div>

              <div className='flex py-[17px] px-[23px] justify-between items-center max-w-[962px] bg-[#2C49FEBD] rounded-full '>
                  {BLUEBOX.map((items, index) => (
                      <React.Fragment key={index}>
                          <div className='flex gap-[21px] items-center '>
                              <items.icon />
                              <div>
                                  <p className='!font-yantra font-medium text-[20px] text-white '>
                                      {items.title}
                                  </p>
                                  <p className='!font-yantra font-normal text-[14px] text-[#FFFFFFB2] '>
                                      {items.data}
                                  </p>
                              </div>
                          </div>
                          <div className="border-[2px] h-[74px] border-white"></div>
                      </React.Fragment>
                  ))}

                  <Button className='!py-5 !px-10 bg-white !text-[#2C49FE] uppercase !font-bold text-[20px] ' buttonText={'go check'} />
              </div>
          </div>
      </div>
  )
}

export default Homehersection