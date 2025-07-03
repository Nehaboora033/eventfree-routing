import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoIcon from '../../assets/svg/logo-icon.svg'
import { NAV_LINKS } from '../../utils/helper'
import Button from './Button'
import { Divide as Hamburger } from 'hamburger-react'

const Navbar = () => {

  const [state, setIsOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  //scrolled effect 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const HomePage = location.pathname === '/';
  const EventsPage = location.pathname === '/events';
  const FeedPage = location.pathname === '/feed';
  const UsernamePage = location.pathname === '/username';

  return (
    <>
      <nav className={`fixed top-0 py-3 z-20 w-full transition duration-300 ease-in-out  ${scrolled ? 'shadow-card bg-white' : ''} ${FeedPage || UsernamePage ? 'bg-white shadow-card' : ''} `}>
        <div className={`max-w-[1320px] mx-auto px-3 flex items-center justify-between  ${HomePage || EventsPage ? 'bg-transparent' : ''}${FeedPage || UsernamePage ? 'bg-white' : ''}`}>
          <Link to="/" className='flex gap-[15px] items-center'>
            <img src={logoIcon} alt="logo-icon" />
            <p className='font-bold text-[36px] text-[#2C49FE]'>Events<span className='text-[#01C8FF]'>Free</span></p>
          </Link>
          <div className='flex items-center gap-14'>
            <div className='flex gap-16 '>
              {NAV_LINKS.map((item, index) => (
                <NavLink
                  to={item.link === "home" ? '/' : `/${item.link}`}
                  key={index}
                  className={({ isActive }) => `relative inline-block px-3 py-1 uppercase font-normal text-base transition-all duration-300 ease-in-out overflow-hidden rounded-[5px] group ${isActive ? 'opacity-100 border-b-2 border-[#01C8FF]' : 'opacity-70'} group-hover:text-white
                   ${(HomePage || EventsPage) ? (scrolled ? 'text-black' : 'text-white') : (scrolled ? 'text-black' : 'text-black')}`} >
                  {item.name}
                  <span className="absolute inset-0 h-full w-full bg-[#01C8FF] z-[-1] rounded-[5px]
                     scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-in-out"></span>
                </NavLink>
              ))}
            </div>
            <Button buttonText={"Log Out"} className='text-white' />
            <div className='z-[19]'>
              <Hamburger />
            </div>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar
