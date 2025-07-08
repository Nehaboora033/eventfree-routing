import React, { useState } from 'react'
import line from '../assets/png/username-blueline.png'
import Heading from './common/Heading'
import NormalText from './common/NormalText'
import { TELL_US_DATA } from '../utils/helper'
import { DELETE } from '../utils/icons'
import Input from './common/Input'
import profile9 from '../assets/png/profile9.png'

const Tellus = () => {
    const initialComments = Array.isArray(TELL_US_DATA) ? [...TELL_US_DATA] : [];
    const [commentList, setCommentList] = useState(initialComments);
    const handleDelete = (indexToRemove) => {
        const updated = commentList.filter((_, index) => index !== indexToRemove);
        setCommentList(updated);
    };

    const handlePostComment = (text) => {
        const newComment = {
            profile: profile9,
            name: 'Username',
            comment: text,

        };
        setCommentList([newComment, ...commentList]); //added  to top
    }

    return (
        <div className='max-w-[1320px] px-3 mx-auto mt-[67px] mb-[118px]'>
            <img src={line} alt="image" className='block mx-auto' />
            <Heading className='font-semibold text-center mb-4' headingText={'Tell Us!'} />
            <NormalText className={'max-w-[719px] mb-[47px] text-center mx-auto'} NormalText={'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'} />
            <Input placeholderText={"Add a new comment"} profile={profile9} className='mb-[10px]' onPost={handlePostComment} />

            {commentList.map((item, index) => (
                <div key={index} className='flex sm:gap-5 gap-3 mt-[24px] '>
                    <img src={item.profile} alt="profile" className='sm:w-[56px] sm:h-[56px] w-[45px] h-[45px]' />
                    <div className='w-full'>
                        <div className='bg-[#F1F2F5]  py-[14px] px-5 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]'>
                            <h3 className='text-base font-medium'>{item.name} </h3>
                            <p className='font-normal sm:text-base text-[14px] text-[#606162]'>{item.comment} </p>
                        </div>
                        <div className='flex gap-[5px] items-center mt-2 pl-5' onClick={() => handleDelete(index)} >
                            <DELETE />
                            <p className='font-normal sm:text-base text-[14px]  text-[#8C8C8C]'>Remove Comment</p>
                        </div>
                    </div>
                </div>
            ))

            }
        </div>
    )
}

export default Tellus