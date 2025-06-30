import React from 'react'
import Heading from './common/Heading'
import NormalText from './common/NormalText'
import { BLUESECTION_DATA } from '../utils/helper'
import backgroundImage from '../assets/webp/blue-section-bg.webp'

const Bluesection = () => {
    return (
        <div className='pt-[50px] pb-12 mb-[122px] bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="max-w-[1320px] mx-auto">
                <Heading
                    headingText={'Lorem ipsum dolor sit amet, consectetur'}
                    className='max-w-[708px] text-center mx-auto text-white leading-[130%] mb-10 '
                />

                <NormalText
                    NormalText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec '}
                    className='max-w-[765px] text-center mx-auto text-white mb-[78px] '
                />

                <div className='max-w-[920px] flex justify-between items-center mx-auto '>
                    {BLUESECTION_DATA.map((items, index) => (
                        <div key={index} className='flex flex-col items-center '>
                            <img src={items.icon} alt="icon" />

                            <p className=' font-bold text-[35px] my-1 text-white '>
                                {items.value}
                            </p>

                            <NormalText
                                NormalText={items.text}
                                className='text-[18px] uppercase text-white '
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Bluesection