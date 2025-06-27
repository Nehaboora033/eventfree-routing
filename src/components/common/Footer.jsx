import React from 'react'
import footerLogo from '../../assets/svg/footer-logo.svg'
import { FOOTER_GALLERY, FOOTER_LINKS, SOCIAL_ICONS } from '../../utils/helper'
import NormalText from './NormalText'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='max-w-[1320px] px-3 mx-auto'>
                    <div className='row -mx-3 pt-[86px] flex justify-between'>
                        <div className='w-1/3 px-3'>
                            <Link to={'/'}>
                                <img src={footerLogo} alt="footer-logo" draggable="false" />
                            </Link>
                            <NormalText Text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. c "} className={"text-white max-w-[346.80px] mt-9 mb-6"} />
                            <div className='flex gap-[15.36px] pb-[96px]'>
                                {SOCIAL_ICONS.map((items, index) => (
                                    <a href={items.link} key={index} className='hover:-translate-y-2.5 transition-all
                                    ease-in-out '>
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
                                            <Link to={'/${link}'} className='text-white font-normal text-[12px] mb-3'>
                                                {link}
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
                                            <div key={i} className='relative hover:scale-105  transition-all '>
                                                <img src={img} alt="image" draggable="false" className='w-full' />
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
                        <p className='font-normal text-sm text-white flex justify-center'>
                            © Credits of companyName belong to companyName.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer