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
            <div className='max-w-[1320px] mx-auto sm:pt-[256px] pt-[200px] px-3 '>
                <h1 className='font-poppins font-bold sm:text-[64px] text-[43px] text-white max-w-[1044px] leading-[150%]  mb-[18px] '>
                    Sed tortor in <span className='inline-block relative '>quisque morbi
                        <img src={blueline} alt="img" className='absolute' />
                    </span>
                    scelerisque etiam eu.
                </h1>

                <NormalText
                    className='max-w-[765px] font-yantra sm:text-[20px] !text-lg  text-white mb-[33px] '
                    NormalText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,'} />

                <div className='flex sm:gap-[23px] gap-4 items-center min-[730px]:mb-[145px] mb-[80px] sm:mb-[110px] '>
                    <Button
                        buttonText={'Get Started'}
                        className='py-[11px] px-7 text-base sm:text-[20px] leading-[150%] ' />

                    <Link className='  font-poppins font-normal text-base sm:text-[20px] whitespace-nowrap text-white inline-block relative group '>
                        Learn more
                        <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                    </Link>
                </div>

                <div className="flex flex-col min-[550px]:grid min-[550px]:grid-cols-3 min-[730px]:flex min-[730px]:flex-row py-[17px] px-[23px] justify-between min-[740px]:gap-0 gap-5 items-center max-w-[962px] bg-[#2C49FEBD] min-[730px]:rounded-full rounded-[30px]">
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
                            <div className="border-[2px] h-[74px] border-white max-[730px]:hidden "></div>
                        </React.Fragment>
                    ))}
                    <Button className='col-span-3 max-w-[190px] max-[730px]:mx-auto !sm:py-5 !py-3 !px-10 bg-white !text-[#2C49FE] uppercase !font-bold sm:text-[20px] text-base ' buttonText={'go check'} />
                </div>
            </div>
        </div>
    )
}

export default Homehersection