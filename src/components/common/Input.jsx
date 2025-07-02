import React, { useState } from 'react'
import Button from './Button'

const Input = ({ placeholderText, profile, className = '', onPost }) => {

  const [commentText, setCommentText] = useState('');
  const handlePost = () => {
    if (commentText.trim() === '') return;
    onPost(commentText);  // send to parent
    setCommentText(''); //clear input
  }

  return (
    <div className='relative '>
      <input type="text" placeholder={placeholderText}
        value={commentText}
        onChange={(e)=>setCommentText(e.target.value)}
        className={`border border-[#9CA1BE] pl-[88px] pr-[205px] w-full h-[70px] rounded-[35px] py-2 px-3 ${className}`} />
      <Button buttonText={"Post Comment"} className='absolute top-[7px] right-[7px] py-[13px] h-[56px]'
        onClick={handlePost} />
     <img src={profile} alt="profile" className='absolute top-[7px] left-[9px]' />
    </div>
  )
}

export default Input