import React from 'react'
import image from '../assets/webp/username-herosection-img.webp'
import Heading from './common/Heading'
import NormalText from './common/NormalText'
import { USERNAME_HERO_DATA } from '../utils/helper'
import Button from './common/Button'
import Breadcrumbs from './common/Breadcrumbs'

const Usernameherosection = () => {
    return (
        <div className='max-w-[1320px] px-3 mx-auto pt-[167px]'>
            <div className='min-lg:hidden mb-5'>
                <Breadcrumbs />
            </div>
            <div className='flex flex-wrap -mx-3 justify-between'>
                <div className='lg:w-[30%] w-full px-3 max-[1100px]:flex items-center justify-center'>
                    <img src={image} alt="image" />
                </div>
                <div className='lg:w-[67%] w-full px-3'>
                    <div className='max-lg:hidden'>
                        <Breadcrumbs />
                    </div>
                    <div className='flex justify-between min-[1150px]:flex-row max-[1024px]:flex-row flex-col  max-md:flex-col min-[1150px]:gap-0 gap-2'>
                        <Heading className='font-semibold whitespace-nowrap max-[504px]:justify-center flex ' headingText={'Jhone Doe'} />
                        <div className='flex  gap-3 items-center max-[504px]:flex-col'>
                            <Button className='bg-[#EAEDFF] !text-black' buttonText={'Unshow Journey of Feed'} />
                            <Button className='max-[504px]:min-w-[250px]' buttonText={'Show Journey of Feed'} />
                        </div>
                    </div>

                    <NormalText className={'max-w-[857px] mt-5 mb-[38px]'} NormalText={'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'} />
                    <div className='grid min-[700px]:grid-cols-5 min-[400px]:grid-cols-3 grid-cols-2 min-[700px]:gap-0 gap-2 '>
                        {USERNAME_HERO_DATA.map((item, index) => (
                            <div key={index} className='' >
                                <div className='flex gap-2 items-center '>
                                    <img src={item.icon} alt="svg" />
                                    <p className='font-normal text-base text-[#666666]'>{item.data} </p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Usernameherosection