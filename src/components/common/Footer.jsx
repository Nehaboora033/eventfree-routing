import React from 'react'

import { FOOTER_GALLERY, FOOTER_LINKS, SOCIAL_ICONS } from '../../utils/helper'
import NormalText from './NormalText'
import { Link } from 'react-router-dom'
import logo from '../../assets/svg/footer-logo.svg'

const Footer = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='max-w-[1320px] px-3 mx-auto'>
                    <div className='row -mx-3 pt-[86px] flex justify-between'>
                        <div className='w-1/3 px-3'>
                            <Link to={'/'}>
                                <img src={logo} alt="logo" />
                            </Link>
                            <NormalText NormalText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. c "} className={"text-white text-sm max-w-[346.80px] mt-9 mb-6"} />
                            <div className='flex gap-[15.36px] pb-[96px]'>
                                {SOCIAL_ICONS.map((items, index) => (
                                    <a href={items.link} key={index} className='hover:-translate-y-2 transition-all
                                    duration-200 '>
                                        <items.icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='w-1/2 px-3 flex gap-[80px]'>
                            {FOOTER_LINKS.map((item, index) => (
                                <ul key={index}>
                                    <li className='text-white font-bold text-sm mb-[11px]'>
                                        {item.title}
                                    </li>
                                    {item.list.map((link, i) => (
                                        <li key={i}>
                                            <Link
                                                to={`/${link}`}
                                                className="text-white font-normal text-[12px] mb-3 relative inline-block group">
                                                {link}
                                                <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                            {FOOTER_GALLERY.map((item, index) => (
                                <ul key={index} >
                                    <li className='text-white font-bold text-sm mb-[11px]'>
                                        {item.title}
                                    </li>
                                    <div className='grid grid-cols-3 gap-x-[18px] gap-y-[13px]'>
                                        {item.image.map((img, i) => (
                                            <div key={i} className='relative overflow-hidden transition-all '>
                                                <img src={img} alt="image" draggable="false" className='w-full hover:scale-110' />
                                                {i === item.image.length - 1 && (
                                                    <div className='absolute inset-0 flex items-center justify-center '>
                                                        <p className='text-white'>Show<br /> More</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </ul>

                            ))}

                        </div>

                    </div>
                    <div className='p-7'>
                        <NormalText className={'text-white flex justify-center'} NormalText={" © Credits of companyName belong to companyName."} />                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer