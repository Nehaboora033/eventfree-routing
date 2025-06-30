import React from 'react'
import profile1 from '../assets/svg/profile1 .svg'
import { USERNAME_CARD5 } from '../utils/helper'
import date from '../assets/svg/date.svg'
import { LIKE, COMMENT } from '../utils/icons'
import img1 from '../assets/webp/username-img1.webp'
import img2 from '../assets/webp/username-img2.webp'
import img3 from '../assets/webp/username-img3.webp'
import img4 from '../assets/webp/username-img4.webp'
import More from './common/more'


const Userdata = () => {
  return (
    <>
      <div className='max-w-[1320px] px-3 mx-auto mb-[104px]'>
        {USERNAME_CARD5.map((item, index) => (
          <div key={index} className='outline outline-[#CCCCCC] py-[30px] px-[34px] rounded-[30px] mt-[45px] '>
            <div className='flex  flex-wrap -mx-3'>
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

          </div>
        ))}
      </div>
    </>
  )
}

export default Userdata