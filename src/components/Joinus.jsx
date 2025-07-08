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
            <div className="flex flex-wrap items-center -mx-3 md:gap-0 gap-4">
                <div className="md:w-1/2 w-full lg:flex-row flex-col px-3 flex items-center justify-center">
                    <img src={joinusimg} alt="image" draggable='false' className='md:w-[80%] max-md:hidden ' />
                </div>

                <div className="md:w-1/2 w-full md:flex-row flex-col px-3 ">
                    <img src={blueline} alt="image" draggable='false'  />

                    <Heading headingText={"Join Us !"}/>

                    <NormalText NormalText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue "}/>

                    <Heading headingText={'Sign Up'} className='mb-[14px] !text-[35px]'/>

                    <div>
                        <div className='flex justify-between mb-4 min-[408px]:flex-row flex-col max-[408px]:gap-4 '>
                            
                            <FormInput placeholderText={"First Name"} className='min-[408px]:max-w-[48.5%] w-full' type={"text"}/>
                            
                            <FormInput placeholderText={"Last Name"} className='min-[408px]:max-w-[48.5%] w-full' type={"text"}/>
                        </div>

                        <FormInput
                            type={'email'}
                            placeholderText={'Email Address'}
                            className='w-full mb-4 '
                        />

                        <div className='flex justify-between mb-4 min-[408px]:flex-row flex-col max-[408px]:gap-4'>
                            <FormInput
                                type={'password'}
                                placeholderText={'Password'}
                                className='min-[408px]:max-w-[48.5%] w-full '
                            />
                            <FormInput
                                type={'password'}
                                placeholderText={'Confirm Password'}
                                className='min-[408px]:max-w-[48.5%] w-full '
                            />
                        </div>

                        <textarea className='w-full py-[10px] px-4 min-h-[124px] resize-none border border-[#999999] rounded-[5px] placeholder:font-poppins placeholder:font-normal placeholder:text-base placeholder:text-[#4D4D4D] mb-[37px] ' placeholder='About Me ' />
                    </div>

                    <Button buttonText={"Sign up"} className='w-full hover:scale-[1.025] transition-all duration-300 '/>
                </div>
            </div>
        </div>
    )
}

export default Joinus