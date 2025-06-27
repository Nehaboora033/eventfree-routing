import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoIcon from '../../assets/svg/logo-icon.svg'
import { NAV_LINKS } from '../../utils/helper'
import Button from './Button'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='max-w-[1320px] mx-auto px-3 flex items-center justify-between py-4 '>
          <Link to="/" className='flex gap-[15px] items-center'>
            <img src={logoIcon} alt="logo-icon" />
            <p className='font-bold text-[36px] text-[#2C49FE]'>Events<span className='text-[#01C8FF]'>Free</span></p>
          </Link>
          <div className='flex items-center gap-14'>
            <div className='flex gap-16 '>
              {NAV_LINKS.map((item, index) => (
                <NavLink to={item.name == "home" ? '/' : `/${item.name}`} key={index} className={({ isActive }) => `font-normal text-base uppercase ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            <Button buttonText={"Log Out"} className='text-white' />
          </div>

        </div>

      </nav>
    </>

  )
}

export default Navbar