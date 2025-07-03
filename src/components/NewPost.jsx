import React from 'react'
import Heading from './common/Heading'
import line from '../assets/png/small-blueline.png'
import AddComment from './common/AddComment'



const NewPost = () => {
    return (
        <>
            <div className='max-w-[1320px] px-3 mx-auto pb-[59px]'>
                <img src={line} alt="line" className='mt-[76px]' />
                <Heading headingText={"New Posts"} className='font-semibold mb-[30px]' />
                <AddComment className={'outline outline-[#CCCCCC]'} defaultOpen={true}  />
                {[...Array(5)].map((_, index) => (
                    <AddComment key={index} className='outline outline-[#CCCCCC]' defaultOpen={false} />
                ))}
            </div>
        </>

    )
}

export default NewPost