import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer">
        <footer>
          <div className="footer-inner-section bg-white pt-10 border-t border-gray-300">
              <div className="footer-content">
                {/* <div className="footer-top-section mb-14">
                  <div className="container">
                    <div className="top-footer-inner">
                        <div className="footer-header text-center">-
                          <h2 className='font-Inter text-3xl font-bold mb-3 text-homeblack'>Learning Made Simple By SGCODES</h2>
                          <p className='font-Rubik text-lg text-homeblack'>Wanna Contact Me , Just Submit Your Email</p>
                        </div>
                        <div className="footer-mail-section w-full max-w-[350px] mx-auto mt-3 relative">
                          <input type="email"  placeholder='Email Here' className='py-3 px-4 rounded-lg w-full outline-none focus:shadow-2xl font-Poppins focus:outline-none border-0 duration-500' />
                          <div className="submitter absolute top-1 right-1 h-full"><button className='h-[85%] px-4 bg-greenYellow rounded-lg font-Poppins'>Send</button></div>
                        </div>
                    </div>
                  </div>
                </div> */}
                <div className="footer-bottom-section pb-8">
                    <div className="container">
                        <div className="footer-rounded-fill rounded-3xl border border-homeblack border-opacity-30">
                          <div className="grid grid-cols-12">
                              <div className="bio-logo-section col-span-4 p-10 border-r border-homeblack border-opacity-30">
                                  <div className="footer-logo">
                                    <button className="sidemenu-logo-inner flex group">
                                      {/* stroke="#040C0C" */}
                                      <svg viewBox="0 0 126 206" fill="none" className='duration-500 w-16 h-16' xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M113 3H13L3 23M113 3L123 23L83 103M113 3L73 83M3 23H83L63 63L53 43M3 23L53 123L13 203M3 23L73 163H53H93L33 43M53 43L93 123M53 43L123 183M73 43H33M33 43L73 123M123 183L113 203H13M123 183H43L63 143M13 203L3 183L43 103" stroke='#181818' className='group-hover:stroke-redTheme duration-300' stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                      <div className="right-side-text flex flex-col justify-between">
                                        <div className="top-text">
                                          <h2 className='text-2xl text-left text-homeblack font-Poppins'>SG</h2>
                                        </div>
                                        <div className="bottom-texter-footer">
                                          <p className='text-3xl text-homeblack font-Rubik duration-300 relative'>CODES</p>
                                        </div>
                                      </div> 
                                    </button>
                                    <div className="footer-logo-desc mt-4 mb-5">
                                      <p className='font-Poppins text-base text-homeblack'>
                                        I'm Providing You A Free Source Code 
                                        Learning Website Where You 
                                        Can Learn Various Elements 
                                        That I Have Learned So Far.
                                      </p>
                                    </div>
                                    <div className="follow-me-section ">
                                      <div className="follow-icons flex items-end gap-7">
                                        <div className="insta">
                                        <a href="">
                                        <i class="bi bi-instagram text-homeblack text-2xl"></i>

                                        </a>
                                        </div>
                                        <div className="facebook">
                                          <a href="">
                                          <i class="bi bi-facebook text-homeblack text-2xl"></i>
                                          </a>
                                        </div>
                                        <div className="linkedin">
                                            <a href="">
                                            <i class="bi bi-linkedin text-homeblack text-2xl"></i>
                                            </a>
                                        </div>
                                        <div className="twitter">
                                          <a href="">
                                          <i class="bi bi-twitter-x text-homeblack text-2xl"></i>

                                          </a>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="col-span-8  pt-10">
                                <div className="grid grid-cols-3 gap-5 items-center h-full">
                                    <div className="menu-navigation-section footer-menu-1 pl-10"> 
                                        {/* <h2 className='font-semibold font-Poppins text-homeblack'>Home</h2> */}
                                        <nav>
                                          <ul className='flex flex-col gap-4'>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>About Me</NavLink></li>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>My Portfolio</NavLink></li>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>Contact Me</NavLink></li>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>Support Me</NavLink></li>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>FeedBack</NavLink></li>
                                          </ul>
                                        </nav>
                                    </div>
                                    <div className="menu-navigation-section footer-menu-1">
                                        <nav>
                                          <ul className='flex flex-col gap-4'>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>Learn React</NavLink></li>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>Learn Angular</NavLink></li>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>Learn Java Script</NavLink></li>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>Learn Html</NavLink></li>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>Learn Nodejs</NavLink></li>
                                          </ul>
                                        </nav>
                                    </div>
                                    <div className="menu-navigation-section footer-menu-2 pr-10">
                                        <nav>
                                          <ul className='flex flex-col gap-4'>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>Learn Css</NavLink></li>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>Learn Bootstrap</NavLink></li>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>Learn TailWind</NavLink></li>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>Learn KeyFrames</NavLink></li>
                                            <li><NavLink className='font-Rubik text-homeblack font-base'>Learn Animation</NavLink></li>
                                          </ul>
                                        </nav>
                                    </div>
                                    <div className="col-span-3 px-8 py-5 mt-10 copyright-columns-sec border-t border-t-homeblack border-opacity-30">
                                      <div className="flex items-center justify-between">
                                        <div className="left-side-copyright">
                                          <p className='font-Poppins text-base text-homeblack '>© Copyright Sai Ganesh  • 2023</p>
                                        </div>
                                        <div className="left-side-copyright">
                                          <p className='font-Poppins text-base text-homeblack '>SGCODES</p>
                                        </div>
                                      </div>
                                    </div>
                                </div>  
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-section hidden">
                    <div className="copyright-inner border-t border-gray-300 py-6 ">
                        <div className="container">
                          <div className="flex items-center justify-between">
                            <div className="left-side-copyright">
                              <p className='font-Poppins text-base text-homeblack '>© Copyright Sai Ganesh  • 2023</p>
                            </div>
                            <div className="left-side-copyright">
                              <p className='font-Poppins text-base text-homeblack '>SGCODES</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </footer>
    </div>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
