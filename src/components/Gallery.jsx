import React from 'react'
import line from '../assets/png/small-blueline.png'
import Heading from './common/Heading'


const Gallery = () => {
    return (
        <div className='max-w-[1320px] mx-auto px-3 mt-[77px]'>
            <img src={line} alt="image" className='block mx-auto' />
            <Heading className={'text-center mb-[55px]'} headingText={'Gallery'} />

        </div>
    )
}

export default Gallery