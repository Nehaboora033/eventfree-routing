import React from 'react'
import backgroundImage from '../assets/webp/events-hero-bg.webp'
import Breadcrumbs from './common/Breadcrumbs'
const Eventsherosection = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className='max-w-[1320px] px-3 mx-auto pt-[215px] '>
                    <Breadcrumbs />
                    <h1 className='font-semibold text-[64px] text-white  pb-[50px]'>Events</h1>
                </div>
            </div>
        </>
    )
}

export default Eventsherosection