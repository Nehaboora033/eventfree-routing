import React from 'react'
import Heading from './common/Heading'
import NormalText from './common/NormalText'
import line from '../assets/png/small-blueline.png'
import { Link } from 'react-router-dom'
import { EXPLORE } from '../utils/helper'

const Exploreevents = () => {
    return (
        <div className='max-w-[1320px] mx-auto mb-[163px] '>
            <div className="flex flex-wrap">
                <div className="w-[45%] px-3">
                    <img src={line} alt="image" draggable='false' className='mb-[9px] ' />

                    <Heading headingText={'Explore our latest events'} className='max-w-[338px] leading-[137%] mb-3 ' />

                    <NormalText NormalText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.'} className='max-w-[543px] mb-[15px]' />

                    <Link className='uppercase font-bold text-base '>
                        learn more
                    </Link>
                </div>

                <div className="w-[55%] px-3 flex gap-[31px] ">
                    {EXPLORE.map((item, index) => (
                        <div key={index} className='pt-[10px] pb-6 px-3 rounded-[5px] hover:scale-[1.025] hover:shadow-card transition-all duration-200 '>
                            <img src={item.image} alt="image" draggable='false' className='w-full mb-[13px] ' />

                            <NormalText NormalText={'09/23/2021'} className='text-[14px] ' />

                            <p className=' font-medium text-2xl mb-[5px] '>
                                Lorem ipsum
                            </p>

                            <NormalText
                                NormalText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in '}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Exploreevents