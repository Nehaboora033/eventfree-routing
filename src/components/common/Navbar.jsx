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
  const Blue = FeedPage || UsernamePage || scrolled;

  return (
    <nav className={`fixed top-0 py-3 z-20 w-full transition duration-300 ease-in-out  ${scrolled ? 'shadow-card bg-white' : ''} ${FeedPage || UsernamePage ? 'bg-white shadow-card' : ''} `}>
      <div className={`max-w-[1320px] mx-auto px-3 flex items-center justify-between  ${HomePage || EventsPage ? 'bg-transparent' : ''}${FeedPage || UsernamePage ? 'bg-white' : ''}`}>
        <Link target='blank' to="/" className='flex gap-2.5 items-center'>
          <img src={logoIcon} alt="logo-icon" className='max-sm:max-w-[90%] w-full' />
          <p className='max-[540px]:hidden font-bold text-[36px] text-[#2C49FE]'>Events<span className='text-[#01C8FF]'>Free</span></p>
        </Link>
        <div className='flex items-center gap-14'>
          <div className={`flex gap-16 items-center max-lg:flex-col max-lg:items-center z-[10] max-lg:justify-center max-lg:bg-[#2C49FE] transition-[right] max-lg:fixed max-lg:top-0 duration-800 ease-in-out max-sm:w-full max-lg:w-[75%] max-lg:h-full ${state === 'show' ? 'right-0' :
            'max-lg:right-[-100%]'}`}>
            {NAV_LINKS.map((item, index) => (
              <NavLink
                to={item.link === "home" ? '/' : `/${item.link}`}
                key={index}
                onClick={() => setIsOpen(null)} // ✅ close menu after click
                className={({ isActive }) => {
                  const baseClasses =
                    'relative inline-block px-3 py-1 uppercase whitespace-nowrap font-normal text-base transition-all duration-300 ease-in-out overflow-hidden rounded-[5px] group';

                  const activeClass = isActive
                    ? 'opacity-100 border-b-2 border-[#01C8FF]'
                    : 'opacity-70';

                  const MainPage = HomePage || EventsPage;
                  const FeedPageMatch = FeedPage || UsernamePage;

                  let textColor = '';

                  if (MainPage) {
                    textColor = scrolled
                      ? 'text-black max-lg:text-white'
                      : 'text-white max-lg:text-white';
                  } else if (FeedPageMatch) {
                    textColor = 'text-black max-lg:text-white';
                  } else {
                    textColor = 'text-black';
                  }

                  return `${baseClasses} ${activeClass} ${textColor} group-hover:text-white`;
                }}
              >
                {item.name}
                <span className="absolute inset-0 h-full w-full bg-[#01C8FF] z-[-1] rounded-[5px]
                scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-in-out"></span>
              </NavLink>
            ))}
          </div>
          <div className='flex items-center gap-2'>
            <Button buttonText={"Log Out"} className='text-white' />
            <div className='z-[11] lg:hidden'>
              <button
                aria-label="Toggle navigation menu"
                className='z-[11] lg:hidden'
                onClick={() => setIsOpen(state === 'show' ? null : 'show')}
              >
                <Hamburger
                  toggled={state == 'show'}
                  toggle={() => setIsOpen(state === 'show' ? null : 'show')}
                  color={state === 'show' ? '#ffffff' : (Blue ? '#2C49FE' : '#ffffff')}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
