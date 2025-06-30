import React from 'react'
import { POST_DATA, USERNAME_CARD } from '../utils/helper'
import Heading from './common/Heading'
import line from '../assets/png/small-blueline.png'
import { DELETE } from '../utils/icons'
import profile1 from '../assets/svg/profile1 .svg'
import date from '../assets/svg/date.svg'
import { LIKE, COMMENT } from '../utils/icons'
import img1 from '../assets/webp/username-img1.webp'
import img2 from '../assets/webp/username-img2.webp'
import img3 from '../assets/webp/username-img3.webp'
import img4 from '../assets/webp/username-img4.webp'
import More from './common/more'
import Input from './common/Input'
import profile2 from '../assets/png/profile2.png'



const NewPost = () => {
    return (
        <>
            <div className='max-w-[1320px] px-3 mx-auto'>
                <img src={line} alt="line" className='mt-[76px]' />
                <Heading headingText={"New Posts"} className='font-semibold' />
                <div className='p-[34px] shadow-card rounded-[30px] mt-[30px]'>
                    {USERNAME_CARD.map((item, index) => (
                        <div key={index} className='flex  flex-wrap -mx-3'>
                            <div className='w-1/2 px-3'>
                                <div className='flex gap-[23px] items-center'>
                                    <img src={profile1} alt="profile" />
                                    <div>
                                        <p className='font-semibold text-2xl'>{item.name} </p>
                                        <p className='font-normal text-base text-[#666666]'>{item.postname} </p>
                                    </div>
                                </div>
                                <h3 className='font-semibold text-2xl mt-[45px]'>{item.title} </h3>
                                <div className='flex gap-2 mt-2'>
                                    <img src={date} alt="date" />
                                    <p className='font-normal text-base text-[#666666]'>10/02/2022</p>
                                </div>
                                <h3 className='font-normal text-base text-[#666666] max-w-[553px] mt-5'>{item.description1} </h3>
                                <h3 className='font-normal text-base text-[#666666] mt-[13px] max-w-[553px]'>{item.description2} </h3>

                                <div className='flex gap-[40px] mt-[26px]'>
                                    <div className='flex gap-2 items-center'>
                                        <LIKE />
                                        <p className='font-normal text-base text-[#666666]'>10</p>
                                    </div>
                                    <div className='flex  gap-2 items-center'>
                                        <COMMENT />
                                        <p className='font-normal text-base text-[#666666]'>3</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2 px-3'>
                                <div className='grid grid-cols-2 gap-x-[30px] gap-y-[10px]'>
                                    <img src={img1} alt="image" />
                                    <div className='flex items-start'><img src={img2} alt="image" /></div>
                                    <div className='flex items-end'><img src={img3} alt="image" /></div>
                                    <div className='relative'>
                                        <img src={img4} alt="image" />
                                        <More className='absolute bottom-[10px] right-[10px] bg-white ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* line */}
                    <div className='h-[1px] bg-[#CCCCCC] mt-[33px] mb-[26px]'></div>
                    {/* input */}

                    <Input placeholderText={"Write your comment here..."} profile={profile2} className='mb-[10px]'/>

                    {POST_DATA.map((item, index) => (
                        <div key={index} className='flex gap-5 mt-[24px] '>
                            <img src={item.profile} alt="profile" className='w-[56px] h-[56px]' />
                            <div className=''>
                                <div className='bg-[#F1F2F5]  py-[14px] px-5 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]'>
                                    <h3 className='text-base font-medium'>{item.name} </h3>
                                    <p className='font-normal text-base text-[#606162]'>{item.comment} </p>
                                </div>
                                <div className='flex gap-[5px] items-center mt-2'>
                                    <DELETE />
                                    <p className='font-normal text-base text-[#8C8C8C]'>{item.delete} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default NewPost