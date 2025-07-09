import React from 'react'
import jhoneDoe from '../assets/webp/feedherosection-img.webp'
import Heading from './common/Heading'
import NormalText from './common/NormalText'
import { FOLLOWING_EVENTS_CARD_IMG } from '../utils/helper'
import Breadcrumbs from './common/Breadcrumbs'
import More from './common/More'



const Feedherosection = () => {
    return (
        <>
            <div className='max-w-[1320px] px-3 mx-auto mt-[167px]'>
                <div className='lg:hidden mb-5'>
                    <Breadcrumbs />
                </div>
                <div className='flex flex-wrap -mx-3 justify-between lg:gap-0 gap-2 '>
                    <div className='lg:w-[31%] w-full px-3  flex items-center justify-center '>
                        <img src={jhoneDoe} alt="image" className=' block' />
                    </div>
                    <div className='lg:w-[67%] w-full px-3'>
                        <div className='max-lg:hidden'>
                            <Breadcrumbs  />
                        </div>
                        <Heading headingText={"Jhone Doe"} className='font-semibold' />
                        <NormalText className={'max-w-[857px] mt-4 mb-[29px]'} NormalText={"Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet."} />
                        <NormalText className={'font-semibold mb-[17px]'} NormalText={'Following Events :'} />
                        <div className='gap-[20px] max-[400px]:items-center  max-[400px]:justify-center flex max-[400px]:flex-col flex-row '>
                            {FOLLOWING_EVENTS_CARD_IMG.map((item, index) => (
                                <div key={index} className='hover:scale-105 transition-all duration-200 overflow-hidden rounded-[20px] flex gap-3 p-[13px] items-center shadow-card max-w-[322px] min-[600px]:flex-row flex-col'>
                                    <img  src={item.image} alt="image" className='block' />
                                    <div >
                                        <p className='font-bold text-base max-[600px]:text-center  '>Augue etiam</p>
                                        <p className='font-normal text-sm text-[#666666] max-[600px]:text-center  '>Quis et id urna sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis.</p>
                                    </div>
                                </div>
                            ))}
                            <More className='!w-[171px] !h-[138px] bg-[#EAEDFF] py-[30px] px-[55px] max-md:hidden' />
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Feedherosection