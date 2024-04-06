import React, { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [menuToggle , setMenuToggle] = useState(false);

  const handleRightMenu = () => {
    setMenuToggle(!menuToggle)
  }

  const [mouseEvent , setMouseEvent] = useState('');

  const handleMouseState = (link) => {
    setMouseEvent(link)
  }
  
  console.log(mouseEvent)

  useEffect(() => {
    // Define the positions for each link
    const positionMap = {
      'link1': '7%',
      'link2': '38%',
      'link3': '74%',
      "" : '-30%'
    };

    // Set the position of .dot-romer based on the mouseEvent
    const dotRomer = document.querySelector('.dot-romer');
    if (dotRomer && positionMap[mouseEvent]) {
      dotRomer.style.left = positionMap[mouseEvent];
    }
  }, [mouseEvent]);



  return (
    <div className="Header">
      <div className={`header-section-inner bg-white relative py-4 border-b`}>
        <div className="container">
          <div className="header-strip flex items-center justify-between">
            <div className="header-logo">
              <h2 className=' text-homeblack font-semibold relative font-Inter text-2xl'>SG CODES <span></span></h2>
            </div>
            <div className="header-navigation">
              <nav className='flex items-center gap-12 relative overflow-hidden'>
                  <ul className='flex items-center gap-10 px-6 py-3'>
                    <li><NavLink className='text-homeblack relative font-Manrope text-base duration-300' onMouseEnter={() => handleMouseState('link1')} onMouseLeave={() => handleMouseState('')} to={'/'}>Home</NavLink></li>
                    <li><NavLink className=' relative font-Manrope text-base duration-300' onMouseEnter={() => handleMouseState('link2')} onMouseLeave={() => handleMouseState('')}  to={'/About-Me'}>About Me</NavLink></li>
                    <li><NavLink className='text-homeblack relative font-Manrope text-base duration-300' onMouseEnter={() => handleMouseState('link3')} onMouseLeave={() => handleMouseState('')} to={'/LearnHtml'}>Contact</NavLink></li>
                  </ul>
                  <div className="dot-romer w-[50px] h-[2px] rounded-full bg-red-400 absolute bottom-2 left-[8%] duration-300 ease-in-out">

                  </div>               
              </nav>
            </div>
            <div className="side-menu-button">
              <button onClick={handleRightMenu} className={`font-Fira menu-toggler-button py-1 text-Primary relative w-7 h-6 flex flex-col justify-between items-end ${menuToggle ? 'menuactive' : 'menunotactive'}`}>
                <div className="lines h-[2px] duration-500 bg-homeblack w-full line-1"></div>
                <div className="lines h-[2px] duration-500 bg-homeblack w-[70%] top-1/2 line-2"></div>
                <div className="lines h-[2px] duration-500 bg-homeblack w-[40%] bottom-0 line-3"></div>
              </button>
            </div>
            <div className={`left-side-menu-section fixed h-full w-[250px] z-[999] top-0 duration-500 ${menuToggle ? 'left-menuactive -left-0' : ' -left-1/2 left-menunonactive'}`}>
                <ul className='flex flex-col items-center gap-5 py-10'>
                  <li><NavLink className=' relative font-Manrope text-white text-lg duration-300' to={'/'}>Home</NavLink></li>
                  <li><NavLink className=' relative font-Manrope text-white text-lg duration-300' to={'/LearnReact'}>About Me</NavLink></li>
                  <li><NavLink className=' relative font-Manrope text-white text-lg duration-300' to={'/LearnHtml'}>Contact</NavLink></li>
                </ul>   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
