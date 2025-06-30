import React from 'react'
import image from '../assets/webp/username-herosection-img.webp'
import Heading from './common/Heading'
import NormalText from './common/NormalText'
import { USERNAME_HERO_DATA } from '../utils/helper'
import Button from './common/Button'

const Usernameherosection = () => {
    return (
        <div className='max-w-[1320px] px-3 mx-auto pt-[167px]'>
            <div className='flex flex-wrap -mx-3 justify-between'>
                <div className='w-[30%] px-3'>
                    <img src={image} alt="image" />
                </div>
                <div className='w-[67%] px-3'>
                    <div className='flex justify-between'>
                        <Heading className='font-semibold' headingText={'Jhone Doe'} />
                        <div className='flex gap-3 items-center'>
                            <Button className='h-[46px]' buttonText={'Show Journey of Feed'} />
                            <Button className='bg-[#EAEDFF] h-[46px] !text-black' buttonText={'Unshow Journey of Feed'} />
                        </div>
                    </div>

                    <NormalText className={'max-w-[857px] mt-3'} NormalText={'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'} />
                    <div className='flex justify-between max-w-[572px]'>
                        {USERNAME_HERO_DATA.map((item, index) => (
                            <div key={index} className='mt-[38px]' >
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