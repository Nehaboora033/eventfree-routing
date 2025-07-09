import React from 'react'
import Heading from './common/Heading'
import NormalText from './common/NormalText'
import { SPECIAL_DATA } from '../utils/helper'
import television from '../assets/webp/television.webp'
import blueline from '../assets/png/small-blueline.png'

const Makeusspecial = () => {
    return (
        <div className='max-w-[1320px] mx-auto mt-[137px] mb-[73px] px-3 '>
            <div className="flex flex-wrap -mx-3">
                <div className="min-[1100px]:w-1/2 w-full px-3 flex items-center justify-center ">
                    <img src={television} alt="image" draggable='false' />
                </div>

                <div className="min-[1100px]:w-1/2 w-full px-3 ">
                    <img src={blueline} alt="image" draggable='false' className='mb-[21px] ' />

                    <Heading
                        headingText={'What make us special ?'}
                        className='mb-4'
                    />

                    <NormalText
                        NormalText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,'}
                        className='mb-[46px] ' />

                    <div className="grid max-[500px]:grid-cols-1 min-[500px]:grid-cols-2 gap-y-[45px] gap-x-6">
                        {SPECIAL_DATA.map((items, index) => (
                            <div
                                key={index}
                                className={`relative flex justify-center ${SPECIAL_DATA.length % 2 !== 0 && index === SPECIAL_DATA.length - 1
                                    ? 'min-[500px]:col-span-2 mx-auto'
                                    : ''
                                    } max-sm:mb-5`} >
                                {/* Icon */}
                                <div className="size-[79px] w-[79px] border-[2px] border-[#2C49FE] bg-white z-10 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img src={items.icon} alt="icon" />
                                </div>

                                {/* Card */}
                                <div className="px-5 pt-[45px] pb-[17px] border border-[#2C49FE] rounded-[5px] w-full max-w-[260px] group hover:bg-[#2C49FE] transition-colors duration-200 text-center">
                                    <p className="font-poppins font-medium text-[20px] sm:text-[22px] lg:text-[25px] text-[#2C49FE] capitalize group-hover:text-white transition-colors duration-200">
                                        {items.title}
                                    </p>

                                    <NormalText
                                        NormalText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in"
                                        className="!text-[#2C49FE] group-hover:!text-white transition-colors duration-200"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Makeusspecial