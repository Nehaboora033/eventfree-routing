import React from 'react'
import line from '../assets/png/username-blueline.png'
import Heading from './common/Heading'
import { GALLERY_IMG } from '../utils/helper'


const Gallery = () => {
    return (
        <div className='max-w-[1320px] mx-auto px-3 mt-[77px]'>
            <img src={line} alt="image" className='block mx-auto' />
            <Heading className={'text-center mb-[55px]'} headingText={'Gallery'} />
            <div className='grid grid-cols-3 lg:gap-6 min-[425px]:gap-3 gap-2'>
                {GALLERY_IMG.map((img, index) => (
                    <div key={index} className={`overflow-hidden md:rounded-[30px] rounded-2xl ${img.colSpan} ${img.rowSpan}`}>
                        <img src={ img.image} alt="image" className='w-full h-full object-cover hover:scale-98 transition duration-200 ease-in-out' />
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default Gallery