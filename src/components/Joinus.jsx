import React from 'react'
import blueline from '../assets/png/small-blueline.png'
import joinusimg from '../assets/webp/join-us.webp'
import Heading from './common/Heading'
import NormalText from './common/NormalText'
import Button from './common/Button'
import FormInput from './common/FormInput'

const Joinus = () => {
    return (
        <div className='max-w-[1320px] mx-auto mb-[90px] px-3'>
            <div className="flex flex-wrap items-center -mx-3">
                <div className="w-1/2 px-3">
                    <img src={joinusimg} alt="image" draggable='false' className='w-[80%] ' />
                </div>

                <div className="w-1/2 px-3">
                    <img src={blueline} alt="image" draggable='false' />

                    <Heading headingText={"Join Us !"}/>

                    <NormalText NormalText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue "}/>

                    <Heading headingText={'Sign Up'} className='mb-[14px]'/>

                    <div>
                        <div className='flex justify-between mb-4 '>
                            
                            <FormInput placeholderText={"First Name"} className='max-w-[48.5%] w-full' type={"text"}/>
                            
                            <FormInput placeholderText={"Last Name"} className='max-w-[48.5%] w-full' type={"text"}/>
                        </div>

                        <FormInput
                            type={'email'}
                            placeholderText={'Email Address'}
                            className='w-full mb-4 '
                        />

                        <div className='flex justify-between mb-4 '>
                            <FormInput
                                type={'password'}
                                placeholderText={'Password'}
                                className='max-w-[48.5%] w-full '
                            />
                            <FormInput
                                type={'password'}
                                placeholderText={'Confirm Password'}
                                className='max-w-[48.5%] w-full '
                            />
                        </div>

                        <textarea className='w-full py-[10px] px-4 min-h-[124px] resize-none border border-[#999999] rounded-[5px] placeholder:font-poppins placeholder:font-normal placeholder:text-base placeholder:text-[#4D4D4D] mb-[37px] ' placeholder='About Me ' />
                    </div>

                    <Button buttonText={"Sign up"}/>
                </div>
            </div>
        </div>
    )
}

export default Joinus