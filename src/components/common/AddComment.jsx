import React, { useState } from 'react'
import { USERNAME_CARD } from '../../utils/helper'
import { POST_DATA } from '../../utils/helper'
import { DELETE } from '../../utils/icons'
import profile1 from '../../assets/svg/profile1 .svg'
import date from '../../assets/svg/date.svg'
import { LIKE, COMMENT } from '../../utils/icons'
import img1 from '../../assets/webp/username-img1.webp'
import img2 from '../../assets/webp/username-img2.webp'
import img3 from '../../assets/webp/username-img3.webp'
import img4 from '../../assets/webp/username-img4.webp'
import More from './../common/more'
import Input from './../common/Input'
import profile2 from '../../assets/png/profile2.png'

const AddComment = ({ className = '', defaultOpen = false }) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(10);
    const [commentList, setComentList] = useState(POST_DATA);

    const handleLikeClick = () => {
        if (liked) {
            setLiked(false);
            setLikeCount(prev => prev - 1);
        } else {
            setLiked(true);
            setLikeCount(prev => prev + 1);
        }
    };

    const handlePostComment = (text) => {
        const newComment = {
            profile: profile2,
            name: 'Username',
            comment: text,

        };
        setComentList([newComment, ...commentList]); //added  to top
    }

    const handleDelete = (indexToRemove) => {
        const updated = commentList.filter((_, index) => index !== indexToRemove);
        setComentList(updated);
    };
    const [showComents, setShowComents] = useState(defaultOpen);
    const currentDate = new Date().toLocaleDateString('en-GB')


    return (
        <div className={`p-[34px] rounded-[30px] mb-[45px] transition-shadow duration-300 ease-linear ${className} ${showComents ? 'shadow-card outline-0 ' : ''}`}>
            {USERNAME_CARD.map((item, index) => (
                <div key={index} className='flex  flex-wrap -mx-3'>
                    <div className='w-1/2 px-3'>
                        <div className='flex gap-[23px] items-center'>
                            <img src={profile1} alt="profile" />
                            <div>
                                <p className='font-semibold text-2xl'>{item.name} </p>
                                <p className='font-normal text-base text-[#666666]'>{item.postname} </p>
                            </div>
                        </div>
                        <h3 className='font-semibold text-2xl mt-[45px]'>{item.title} </h3>
                        <div className='flex gap-2 mt-2'>
                            <img src={date} alt="date" />
                            <p className='font-normal text-base text-[#666666]'>{currentDate} </p>
                        </div>
                        <h3 className='font-normal text-base text-[#666666] max-w-[553px] mt-5'>{item.description1} </h3>
                        <h3 className='font-normal text-base text-[#666666] mt-[13px] max-w-[553px]'>{item.description2} </h3>

                        <div className='flex gap-[40px] mt-[26px]'>
                            <div className='flex gap-2 items-center' onClick={handleLikeClick}>
                                <LIKE liked={liked} />
                                <p className='font-normal text-base text-[#666666]'>{likeCount}</p>
                            </div>
                            <div className='flex  gap-2 items-center' onClick={() => setShowComents(!showComents)}>
                                <COMMENT />
                                <p className='font-normal text-base text-[#666666]'>{commentList.length} </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 px-3'>
                        <div className='grid grid-cols-2 gap-x-[30px] gap-y-[10px]'>
                            <img src={img1} alt="image" />
                            <div className='flex items-start'><img src={img2} alt="image" /></div>
                            <div className='flex items-end'><img src={img3} alt="image" /></div>
                            <div className='relative'>
                                <img src={img4} alt="image" />
                                <More className='absolute bottom-[10px] right-[10px] bg-white ' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {showComents && (<>
                {/* line */}
                <div className='h-[1px] bg-[#CCCCCC] mt-[33px] mb-[26px]'></div>
                {/* input */}

                <Input placeholderText={"Add a new comment"} profile={profile2} className='mb-[10px]' onPost={handlePostComment} />
                {commentList.map((item, index) => (
                    <div key={index} className='flex gap-5 mt-[24px]'>
                        <img src={item.profile} alt="profile" className='w-[56px] h-[56px]' />
                        <div className='w-full'>
                            <div className='bg-[#F1F2F5] py-[14px] px-5 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]'>
                                <h3 className='text-base font-medium'>{item.name}</h3>
                                <p className='font-normal text-base text-[#606162]'>{item.comment}</p>
                            </div>
                            <div
                                className='flex gap-[5px] items-center mt-2 pl-5 cursor-pointer'
                                onClick={() => handleDelete(index)}
                            >
                                <DELETE />
                                <p className='font-normal text-base text-[#8C8C8C]'>Remove Comment</p>
                            </div>
                        </div>
                    </div>
                ))}
            </>)}

        </div>
    )
}

export default AddComment