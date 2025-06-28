import React from 'react'
import backgroundImage from '../assets/webp/events-hero-bg.webp'
const Eventsherosection = () => {
  return (
      <>
          <div style={{backgroundImage:`url(${backgroundImage})`}}>
              <div className='max-w-[1320px] px-3 mx-auto'>
              
                  <h1 className='font-semibold text-[64px] text-white pt-[143px] pb-[50px]'>Events</h1>
              </div>
          </div>
      </>
  )
}

export default Eventsherosection