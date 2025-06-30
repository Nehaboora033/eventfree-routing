import React from 'react'
import line from '../assets/png/small-blueline.png'
import Heading from './common/Heading'
import NormalText from './common/NormalText'
import { TELL_US_DATA } from '../utils/helper'
import { DELETE } from '../utils/icons'
import Input from './common/Input'
import profile9 from '../assets/png/profile9.svg'

const Tellus = () => {
    return (
        <div className='max-w-[1320px] px-3 mx-auto mt-[67px] mb-[118px]'>
            <img src={line} alt="image" className='block mx-auto' />
            <Heading className='font-semibold text-center mb-4' headingText={'Tell Us!'} />
            <NormalText className={'max-w-[719px] mb-[47px] text-center mx-auto'} NormalText={'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'} />
            <Input placeholderText={"Add a new comment"} profile={profile9} className='mb-[10px]' />

            {TELL_US_DATA.map((item, index) => (
                <div key={index} className='flex gap-5 mt-[24px] '>
                    <img src={item.profile} alt="profile" className='w-[56px] h-[56px]' />
                    <div>
                        <div className='bg-[#F1F2F5]  py-[14px] px-5 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]'>
                            <h3 className='text-base font-medium'>{item.name} </h3>
                            <p className='font-normal text-base text-[#606162]'>{item.comment} </p>
                        </div>
                        <div className='flex gap-[5px] items-center mt-2'>
                            <DELETE />
                            <p className='font-normal text-base text-[#8C8C8C]'>Remove Comment</p>
                        </div>
                    </div>
                </div>
            ))

            }
        </div>
    )
}

export default Tellus