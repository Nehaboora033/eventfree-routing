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
import Input from './../common/Input'
import profile2 from '../../assets/png/profile2.png'
import Morebox from './../common/Morebox'


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
        <div className={` min-md:p-[34px] p-5 rounded-[30px] mb-[45px] transition-shadow duration-300 ease-linear ${className} ${showComents ? 'shadow-card outline-0 ' : ''}`}>
            {USERNAME_CARD.map((item, index) => (
                <div key={index} className='flex  flex-wrap -mx-3 max-lg:flex-col-reverse lg:gap-0 gap-[50px]'>
                    <div className='lg:w-1/2 w-full px-3'>
                        <div className='flex gap-[23px] items-center'>
                            <img src={profile1} alt="profile" className='sm:w-[56px] sm:h-[56px] w-[45px] h-[45px] block' />
                            <div>
                                <p className='font-semibold sm:text-2xl text-xl'>{item.name} </p>
                                <p className='font-normal sm:text-base text-[14px] text-[#666666]'>{item.postname} </p>
                            </div>
                        </div>
                        <h3 className='font-semibold sm:text-2xl text-xl mt-[45px]'>{item.title} </h3>
                        <div className='flex gap-2 mt-2 max-lg:mb-[20px] items-center'>
                            <img src={date} alt="date" />
                            <p className='font-normal sm:text-base text-[14px] text-[#666666] '>{currentDate} </p>
                        </div>
                        <div className='lg:w-1/2 w-full px-3 min-lg:hidden flex items-center justify-center'>
                            <div className='grid grid-cols-2 sm:gap-x-[30px] sm:gap-y-[10px] gap-x-4 gap-y-1'>
                                <img src={img1} alt="image" />
                                <div className='flex items-start'><img src={img2} alt="image" /></div>
                                <div className='flex items-end'><img src={img3} alt="image" /></div>
                                <div className='relative'>
                                    <img src={img4} alt="image" />
                                    {/* <More className='absolute min-[450px]:bottom-[10px] bottom-[6px] right-[6px] min-[450px]:right-[10px] bg-white' /> */}
                                    <Morebox className='absolute min-[450px]:bottom-[10px] bottom-[6px] right-[6px] min-[450px]:right-[10px] bg-white' />
                                </div>
                            </div>
                        </div>
                        <h3 className='font-normal sm:text-base text-[14px] text-[#666666] lg:max-w-[553px] w-full mt-5'>{item.description1} </h3>
                        <h3 className='font-normal sm:text-base text-[14px] text-[#666666] mt-[13px] lg:max-w-[553px] w-full'>{item.description2} </h3>

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
                    <div className='lg:w-1/2 w-full px-3 max-lg:hidden flex items-center justify-center'>
                        <div className='grid grid-cols-2 sm:gap-x-[30px] sm:gap-y-[10px] gap-x-4 gap-y-1'>
                            <img src={img1} alt="image" />
                            <div className='flex items-start'><img src={img2} alt="image" /></div>
                            <div className='flex items-end'><img src={img3} alt="image" /></div>
                            <div className='relative'>
                                <img src={img4} alt="image" />
                                {/* <More className='absolute bottom-[10px] right-[10px] bg-white' /> */}
                                <Morebox className='absolute bottom-[10px] right-[10px] bg-white' />
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
                    <div key={index} className='flex sm:gap-5 gap-3 mt-[24px]'>
                        <img src={item.profile} alt="profile" className='sm:w-[56px] sm:h-[56px] w-[45px] h-[45px] block' />
                        <div className='w-full'>
                            <div className='bg-[#F1F2F5] py-[14px] px-5 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]'>
                                <h3 className='text-base font-medium'>{item.name}</h3>
                                <p className='font-normal text-base text-[#606162]'>{item.comment}</p>
                            </div>
                            <div className='flex gap-[5px] items-center mt-2 pl-5 cursor-pointer'
                                onClick={() => handleDelete(index)} >
                                <DELETE />
                                <p className='font-normal sm:text-base text-[14px] text-[#8C8C8C] whitespace-nowrap'>Remove Comment</p>
                            </div>
                        </div>
                    </div>
                ))}
            </>)}

        </div>
    )
}

export default AddComment