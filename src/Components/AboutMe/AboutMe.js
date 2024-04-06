import React, { useState , useRef, useEffect} from 'react';
import './AboutMe.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import checkOpen from '../../images/aboutme-images/check-open.svg';
import { aboutData } from './AboutmeContent';
import basicPrice from '../../images/aboutme-images/basic-price.svg';
import proPrice from '../../images/aboutme-images/pro-price.svg';
import enterPrice from '../../images/aboutme-images/enterprise.svg';
import checkCircle from '../../images/aboutme-images/pricing-check.svg';
import whiteCheck from '../../images/aboutme-images/white-check.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import faqThink from '../../images/faq-think.svg';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Navigation, Pagination as SwipePage ,  EffectCoverflow , Autoplay as SwiperAuto  } from 'swiper/modules';
import { Formik , Field ,Form } from 'formik';
import { aboutContactValidaion } from '../Validation/Validation';


const AboutMe = () => {

  const [percenter , setPercenter] = useState(false);
  const [priceToggle , setPriceToggle] = useState(false);
  const [expanded, setExpanded] = useState('panel1');
  const [messageValue , setMessageValue] = useState();

  const handleChange = (panel) => (event , isExpanded) => {
      setExpanded(isExpanded ? panel : false);
  };


  const percentScroll = useRef();

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPercenter(true);
          } else {
            setPercenter(false);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (percentScroll.current) {
      sectionObserver.observe(percentScroll.current);
    }

    return () => {
      if (percentScroll.current) {
        sectionObserver.unobserve(percentScroll.current);
      }
    };

  }, [])


  const aboutContactValues = {
    fullName: '',
    phoneNumber: '',
    email: ''
  }

  const aboutContactFormSubmit = (data) => {
    const obj = {
      name: data.fullName,
      number: data.phoneNumber,
      email: data.email,
      message: messageValue
    }
    console.log(obj , "values")
  }

  return (
    <div className="AboutMe">
      <Header/>
      <section>
        <div className="about-section-1">
          <div className="about-section-inner relative">
            <div className="">
                <div className="grid grid-cols-2 gap-5">
                  <div className="about-left-col py-10">
                    <div className="inner-left-sec  w-[570px] ml-auto">
                      <div className="about-me-head">
                        <h1 className='font-Manrope text-[50px] text-justify font-bold text-homeblack'>Hi, Im <span className='opacity-100'>Exa Namersh</span> <br /> a Web Developer.</h1>
                      </div>
                      <div className="left-about-bottom-para mt-4">
                        <p className='font-Manrope text-homeblack break-words text-xl'>As a web developer based in India who enjoys watching anime, playing games, and traveling, I find inspiration in the vibrant colors of both the digital world and the places I explore."</p>
                      </div>
                      <div className=" my-8 experince-blocker flex items-center gap-10 p-5">
                        <div className="flex items-center gap-3 about-years-sec">
                            <h2 className='text-5xl text-homeblack font-DmSans font-semibold'>3+</h2>
                            <p className='font-Manrope font-semibold  text-homeblack'>Years <br /> Experience</p>
                        </div>
                        <div className="flex items-center gap-3 about-clients-sec">
                            <h2 className='text-5xl text-homeblack font-DmSans font-semibold'>25+</h2>
                            <p className='font-Manrope font-semibold text-homeblack'>Happy <br /> Clients</p>
                        </div>
                      </div>
                      <div className="banner-1-contact-sec flex items-center gap-10">
                        <div className="about-sec-1-button-1 w-[30%]">
                          <button type="button" className='group relative font-DmSans w-full text-white hover:text-homeblack duration-300 bg-homeblack py-3 text-lg font-semibold  border-none overflow-hidden'>
                            <p className='relative z-10'>Contact Me</p>
                            <div className="about-btns-ball absolute left-0 -top-[52px] group-hover:top-0 group-hover:scale-y-150 w-[35%] h-full  duration-500  bg-greenYellow">

                            </div>
                            <div className="about-btns-ball absolute left-1/3 -top-[52px] group-hover:top-0 group-hover:scale-y-150 delay-150 w-[35%] h-full  duration-500  bg-greenYellow">

                            </div>
                            <div className="about-btns-ball absolute left-2/3 -top-[52px] group-hover:top-0 group-hover:scale-y-150 delay-300 w-[35%] h-full  duration-500  bg-greenYellow">

                            </div>
                          </button>
                        </div>
                        <div className="about-sec-1-button-2 w-1/4">
                          <button type="button" className='relative overflow-hidden font-DmSans group w-full text-homeblack hover:text-white duration-300 bg-greenYellow py-3 text-lg font-semibold  border-none'>
                            <p className='relative z-[999]'>Learn</p>
                            <div className="learn-ball-btns w-8 h-8 bg-homeblack rounded-full duration-500 shadow-2xl absolute left-1/2 z-50 top-1/2">
                              
                            </div>
                            <div className="learn-ball-btns w-14 h-14 bg-homeblack bg-opacity-70 rounded-full shadow-2xl duration-500 absolute delay-100 z-40 left-1/2 top-1/2">
                              
                            </div>
                            <div className="learn-ball-btns w-20 h-20 bg-homeblack bg-opacity-60 rounded-full shadow-2xl duration-500 absolute z-30 delay-150 left-1/2 top-1/2">
                              
                            </div>
                            <div className="learn-ball-btns w-[100px] h-[100px] bg-homeblack bg-opacity-50 shadow-2xl rounded-full duration-500 delay-200 z-20  absolute left-1/2 top-1/2">
                              
                            </div>
                            <div className="learn-ball-btns w-[118px] h-[118px] bg-homeblack bg-opacity-40 shadow-2xl rounded-full duration-500 delay-[250ms] z-10 absolute left-1/2 top-1/2">
                              
                            </div>
                            <div className="learn-ball-btns w-[138px] h-[138px] bg-homeblack bg-opacity-30 shadow-2xl rounded-full duration-500 delay-300 absolute left-1/2 top-1/2">
                              
                            </div>
                            <div className="learn-ball-btns w-[156px] h-[156px] bg-homeblack bg-opacity-20 shadow-2xl rounded-full duration-500 delay-[350ms] absolute left-1/2 top-1/2">
                              
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-right-col relative">
                    <img src={require('../../images/aboutme-images/banner-right.png')} className='w-full max-h-[550px] object-cover' alt="" />
                  </div>
                </div>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 2300 1000" width="80%">
              <defs>
                <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                <animateTransform attributeName="transform" begin="0s" dur="30s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite"></animateTransform>
                </path>
              </defs>
              <g fill="#141212">
                <text font-size="25px" dy="30" textLength="1290" letter-spacing="30">
                  <textPath xlinkHref="#textcircle">CV DOWNLOAD • CV DOWNLOAD • CV DOWNLOAD</textPath>
                </text>
              </g>
            </svg> */}
          </div>
        </div>
      </section>
      <section>
        <div className="about-section-2 py-14 bg-homeblack">
          <div className="about-section-2-inner">
            <div className="container">
              <div className="grid grid-cols-3 gap-6">
                {aboutData.AboutSkillCards.map((items , index) => {
                  return (
                    <div className={`single-myskillblocks-${index+1} similar-skillblocks`} key={index}>
                      <div className="skill-top-iconer-sec flex items-end gap-5 mb-4">
                        <div className="skill-image-section rounded-2xl relative p-4">
                          <img src={items.icon} alt="" className='w-[60px] min-w-[60px] min-h-[60px] h-[60px] object-contain relative z-10' />
                          <div className="background-skiller bg-white bg-opacity-10 absolute top-0 left-0 w-full duration-500  rounded-2xl h-full">

                          </div>
                        </div>
                        <div className="title-skiller">
                          <h2 className='text-white font-Manrope font-bold text-3xl'>{items.title}</h2>
                          <h2 className='text-white font-Manrope font-bold text-3xl'>{items.subTitle}</h2>
                        </div>
                      </div>
                      <div className="right-skill-section">
                        <p className='text-white font-Manrope'>{items.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-section-3 py-14 bg-homeblack border-t border-white border-opacity-30" ref={percentScroll}>
          <div className="about-section-3-inner">
            <div className="container">
                <div className="grid grid-cols-6 gap-5">
                  <div className="about-sec-3-left col-span-2">
                    <div className="about-3-image-sec rounded-[25px] bg-white  px-5 py-10">
                      <div className="top-about-3-left-img">
                        <img src={require('../../images/aboutme-images/banner-right.png')} className='w-56 h-56 object-cover rounded-full mx-auto' alt="" />
                      </div>
                      <div className="about-3-bottom-text mt-6">
                        <div className="name-sec-about-3 text-center">
                          <h2 className='font-Manrope text-3xl font-bold text-homeblack'>Exa Spider</h2>
                          <p className='text-lg font-Manrope opacity-70'>examplenamer@japan.co.jp</p>
                        </div>
                        <div className="social-about-3-section flex flex-wrap justify-center gap-y-4 mt-10">
                          {aboutData.AboutSocialIcons.map((items , index) => {
                            return (
                              <div className="single-about-3-socials-1 similar-social-about-3-blks w-[25%]" key={index}>
                                <div className="about-3-insta text-center">
                                    <button type="button"><img src={items.icon} className='w-8 h-8 object-cover' alt="" /></button>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <div className="bottom-about-3-download-cv text-center mt-12" >
                          <button type="button" onClick={() => setPercenter(!percenter)} className='text-white bg-homeblack overflow-hidden relative group font-DmSans font-semibold rounded-full  w-44 h-12 text-center flex items-center justify-center mx-auto'>
                            <div className="download-cv-p-outer group-hover:scale-0 duration-500 origin-center">
                              <p className=''>Download CV</p>
                            </div>
                            <div className="download-cv-icon absolute -top-6 left-1/2 group-hover:top-1 duration-500">
                              <i class="bi bi-arrow-down text-white text-xl"></i>
                            </div>
                            <div className="abs-down-baser absolute -bottom-6 left-1/2 w-5 h-[2px] rounded-full bg-white group-hover:bottom-4 duration-500"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-sec-3-right col-span-4 h-full flex flex-col justify-between">
                    <div className="right-inner-sec-3-about h-[48%] rounded-[25px] bg-white  p-7">
                      <div className="about-sec-3-head-right">
                        <h2 className='font-Manrope text-3xl font-bold text-homeblack'>Little More About Me</h2>
                        <div className="opento-work-about-3 flex items-center gap-2 mt-2 mb-3">
                          <div className="check-image">
                              <img src={checkOpen} className='w-6 h-6 object-contain' alt="" />
                          </div>
                          <div className="right-title">
                            <p className='text-homeblack font-semibold font-DmSans'>Open to Work</p>
                          </div>
                        </div>
                        <div className="bottom-desc-about-3 flex flex-col gap-3">
                          <p className='font-Manrope'>With over 3 years of experience, I excel as a UI/UX Designer and Web Developer, adept at creating user-friendly interfaces that seamlessly blend functionality with captivating visuals. My passion lies in crafting designs that prioritize user satisfaction and engagement</p>
                          <p className='font-Manrope'>Born and raised in India, When i'm not busy designing or developing websites , you'll likely find me playing games and wathcing Anime </p>
                        </div>
                      </div>
                    </div>
                    <div className="right-inner-sec-3-about h-[48%] rounded-[25px] bg-white pt-6 pb-2 px-2 flex flex-col justify-between">
                      <div className="inner-bottom-percentager grid grid-cols-2 gap-3 px-4 pb-4">
                        <div className="about-3-top-side-skills-sec">
                          <div className="single-skill-percentage-sec-1 similar-skill-percent">
                            <div className="skill-head">
                              <h2 className='font-DmSans font-semibold'>React Js</h2>
                            </div>
                            <div className="skill-bar p-1 rounded-full w-full bg-homeblack bg-opacity-20 shadow-xl group">
                              <div className={`bg-homeblack ${percenter ? 'w-[90%]' : 'w-[0%]'} relative h-[18px] rounded-full duration-500`}>
                                {/* <div className="percentage-indicator-about-3 absolute bg-homeblack px-4 py-2 right-0 -bottom-8 rounded-full translate-y-4 opacity-0 group-hover:translate-y-1 group-hover:opacity-100 duration-500">
                                  <p className='font-Manrope text-white text-xs'>80%</p>
                                </div> */}
                                <p className='text-white text-right text-xs mr-2 font-bold font-Manrope'>80%</p>
                              </div>                                  
                            </div>
                          </div>
                        </div>
                        <div className="about-3-top-side-skills-sec">
                          <div className="single-skill-percentage-sec-1 similar-skill-percent">
                            <div className="skill-head">
                              <h2 className='font-DmSans font-semibold'>Angular</h2>
                            </div>
                            <div className="skill-bar p-1 rounded-full w-full bg-homeblack bg-opacity-20 shadow-xl group">
                              <div className={`bg-homeblack ${percenter ? 'w-[50%]' : 'w-[0%]'} relative h-[18px] duration-500 rounded-full delay-100`}>
                                {/* <div className="percentage-indicator-about-3 absolute bg-homeblack px-4 py-2 right-0 -bottom-8 rounded-full translate-y-4 opacity-0 group-hover:translate-y-1 group-hover:opacity-100 duration-500">
                                  <p className='font-Manrope text-white text-xs'>50%</p>
                                </div> */}
                                <p className='text-white text-right text-xs mr-2 font-bold font-Manrope'>50%</p>
                              </div>                                  
                            </div>
                          </div>
                        </div>
                        <div className="about-3-top-side-skills-sec">
                          <div className="single-skill-percentage-sec-1 similar-skill-percent">
                            <div className="skill-head">
                              <h2 className='font-DmSans font-semibold'>Node Js</h2>
                            </div>
                            <div className="skill-bar p-1 rounded-full w-full bg-homeblack bg-opacity-20 shadow-xl group">
                              <div className={`bg-homeblack ${percenter ? 'w-[65%]' : 'w-[0%]'} relative h-[18px] duration-500 rounded-full delay-200`}>
                                {/* <div className="percentage-indicator-about-3 absolute bg-homeblack px-4 py-2 right-0 -bottom-8 rounded-full translate-y-4 opacity-0 group-hover:translate-y-1 group-hover:opacity-100 duration-500">
                                  <p className='font-Manrope text-white text-xs'>65%</p>
                                </div> */}
                                <p className='text-white text-right text-xs mr-2 font-bold font-Manrope'>65%</p>
                              </div>                                  
                            </div>
                          </div>
                        </div>
                        <div className="about-3-top-side-skills-sec">
                          <div className="single-skill-percentage-sec-1 similar-skill-percent">
                            <div className="skill-head">
                              <h2 className='font-DmSans font-semibold'>Html 5 & CSS 3</h2>
                            </div>
                            <div className="skill-bar p-1 rounded-full w-full bg-homeblack bg-opacity-20 shadow-xl group">
                              <div className={`bg-homeblack ${percenter ? 'w-[90%]' : 'w-[0%]'} relative h-[18px] duration-500 rounded-full delay-300`}>
                                {/* <div className="percentage-indicator-about-3 absolute bg-homeblack px-4 py-2 right-0 -bottom-8 rounded-full translate-y-4 opacity-0 group-hover:translate-y-1 group-hover:opacity-100 duration-500">
                                  <p className='font-Manrope text-white text-xs'>90%</p>
                                </div> */}
                                <p className='text-white text-right text-xs mr-2 font-bold font-Manrope'>90%</p>
                              </div>                                  
                            </div>
                          </div>
                        </div>
                        <div className="about-3-top-side-skills-sec">
                          <div className="single-skill-percentage-sec-1 similar-skill-percent">
                            <div className="skill-head">
                              <h2 className='font-DmSans font-semibold'>Java Script</h2>
                            </div>
                            <div className="skill-bar p-1 rounded-full w-full bg-homeblack bg-opacity-20 shadow-xl group">
                              <div className={`bg-homeblack ${percenter ? 'w-[70%]' : 'w-[0%]'} relative h-[18px] duration-500 rounded-full delay-[400]`}>
                                {/* <div className="percentage-indicator-about-3 absolute bg-homeblack px-4 py-2 right-0 -bottom-8 rounded-full translate-y-4 opacity-0 group-hover:translate-y-1 group-hover:opacity-100 duration-500">
                                  <p className='font-Manrope text-white text-xs'>70%</p>
                                </div> */}
                                <p className='text-white text-right text-xs mr-2 font-bold font-Manrope'>70%</p>
                              </div>                                  
                            </div>
                          </div>
                        </div>
                        <div className="about-3-top-side-skills-sec">
                          <div className="single-skill-percentage-sec-1 similar-skill-percent">
                            <div className="skill-head">
                              <h2 className='font-DmSans font-semibold'>TailWind Css</h2>
                            </div>
                            <div className="skill-bar p-1 rounded-full w-full bg-homeblack bg-opacity-20 shadow-xl group">
                              <div className={`bg-homeblack ${percenter ? 'w-[90%]' : 'w-[0%]'} relative h-[18px] duration-500 rounded-full delay-500`}>
                                {/* <div className="percentage-indicator-about-3 absolute bg-homeblack px-4 py-2 right-0 -bottom-8 rounded-full translate-y-4 opacity-0 group-hover:translate-y-1 group-hover:opacity-100 duration-500">
                                  <p className='font-Manrope text-white text-xs'>90%</p>
                                </div> */}
                                <p className='text-white text-right text-xs mr-2 font-bold font-Manrope'>90%</p>
                              </div>                                  
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bottom-known-technologies flex items-center gap-8 bg-homeblack px-6 py-4 rounded-[20px]">
                          {aboutData.AboutAppsUsed.map((items , index) => {
                            return (
                              <div className="single-used-app-about-3" key={index}>
                                <img src={items.icon} alt="" className='w-[45px] h-[45px] object-contain'/>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  </div>  
                </div> 
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-seciton-4 py-16 ">
          <div className="about-seciton-4-inner">
              <div className="container">
                  <div className="about-pricing-section mb-4">
                    <h2 className='text-center text-6xl font-bold font-DmSans leading-[70px]'>Few of My Work</h2>
                  </div>
                  <div className="about-pricing-heading-2 mb-10">
                    <h2 className='font-JakartaSans text-[40px] font-semibold text-center text-homeblack mb-2'>Diverse Projects, Unified Excellence.</h2>
                    <p className='text-center text-homeblack opacity-70 font-DmSans text-xl capitalize'>From captivating designs to seamless development,  my portfolio showcases  <br /> the range and quality you seek for your next endeavor. </p>
                  </div>
                  <div className="mywork-scrolling-blocks mt-5">
                     <div className="grid grid-cols-3 gap-8">
                        {aboutData.AboutMyWorkBlock.map((items , index) => {
                          return (
                            <div className="single-work-blks-1 similar-work-blks shadow-2xl relative rounded-2xl group flex overflow-hidden" key={index}>
                                <button onClick={() => window.open(items.link)} className="work-image-outer  h-96 w-full">
                                    <img src={items.image} className='h-full w-full object-cover object-top duration-[5s] group-hover:object-bottom' alt="" />
                                </button>
                                <div className="work-after-section bg-darkgreen absolute top-1/2 left-1/2 rounded-full">
                                  <button type="button" className='w-16 h-16 rounded-full flex items-center justify-center' onClick={() => window.open(items.link)}>
                                    <i class="text-xl bi bi-arrow-up text-homeblack"></i>
                                  </button>
                                </div>
                            </div>
                          )
                        })}
                     </div>     
                  </div>
              </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-seciton-5 py-16 bg-homeblack">
          <div className="about-section-5-inner">
            <div className="container">
              <div className="about-pricing-section mb-4">
                <h2 className='text-center text-6xl font-bold font-DmSans leading-[70px]'>Pricing</h2>
              </div>
              <div className="about-pricing-heading-2 mb-10">
                <h2 className='font-JakartaSans text-[40px] font-semibold text-center text-white mb-2'>Flexible pricing plans. Any scale.</h2>
                <p className='text-center text-white opacity-70 font-light font-DmSans text-xl'>Whether you're an individual, a small team, or a growing enterprise, <br /> I have a plan that aligns perfectly with your goals.</p>
              </div>
              <div className="pricing-tab-changer border-2  border-white rounded-2xl p-1 w-fit mx-auto">
                <div className="pricing-tab-changer-inner flex items-center justify-center relative">
                    <div className="monthly-price-btn">
                      <button type="button" className={`flex items-center justify-center font-DmSans relative z-10 text-xl ${priceToggle === false ? 'text-homeblack' : 'text-white'} w-32 h-14 duration-500`} onClick={() => setPriceToggle(false)}>Monthly</button>
                    </div>
                    <div className="monthly-price-btn">
                      <button type="button" className={`flex items-center justify-center font-DmSans relative z-10 text-xl ${priceToggle ? 'text-homeblack' : 'text-white'} w-32 h-14 duration-500`} onClick={() => setPriceToggle(true)}>Yearly</button>
                    </div>
                    <div className={`moving-content-pricer absolute  top-0 bg-white w-32 h-14 duration-500 rounded-xl ${priceToggle ? 'left-32' : 'left-0'}`}>

                    </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div className="single-pricing-about-block-1 bg-white similar-pricing-blocks-about p-6 rounded-[35px] shadow-cardsShadow">
                  <div className="inner-single-pricer-blk">
                      <div className="top-pricing-about-sec flex items-center gap-4">
                        <div className="left-image-price-sec-about">
                          <img src={basicPrice} alt="" />
                        </div>
                        <div className="right-price-desc-about">
                          <p className='font-Manrope text-homeblack opacity-60 mb-2'>For Individuals</p>
                          <p className='font-Manrope text-homeblack font-bold text-2xl'>Free</p>
                        </div>
                      </div>
                      <div className="mid-content-price-about mt-2">
                        <p className='font-Manrope text-homeblack'>Empower individuals to effortlessly manage tasks and life with my code learning website.</p>
                      </div>
                      <div className="pricing-about-sec-month my-6">
                        <p className='font-Manrope font-bold text-homeblack text-6xl'>$0 <span className='font-Manrope font-normal opacity-50 text-homeblack text-xl'>/{priceToggle ? 'year' : 'month'}</span></p>
                      </div>
                      <div className="whats-included-sec-about-price">
                        <h2 className='font-Manrope text-2xl font-bold text-homeblack'>What's Included</h2>
                        <div className="include-sec-list mt-4">
                          <ul className='flex flex-col gap-2'>
                            <li className='flex items-center gap-2'>
                              <img src={checkCircle} className='w-4 h-4' alt="" />
                              <p className="font-Manrope text-homeblack">UI/UX Designing</p>
                            </li>
                            <li className='flex items-center gap-2'>
                              <img src={checkCircle} className='w-4 h-4' alt="" />
                              <p className="font-Manrope text-homeblack">Web Development</p>
                            </li>
                            <li className='flex items-center gap-2'>
                              <img src={checkCircle} className='w-4 h-4' alt="" />
                              <p className="font-Manrope text-homeblack">App Designing</p>
                            </li>
                            <li className='flex items-center gap-2'>
                              <img src={checkCircle} className='w-4 h-4' alt="" />
                              <p className="font-Manrope text-homeblack">App Development</p>
                            </li>
                            <li className='flex items-center gap-2'>
                              <img src={checkCircle} className='w-4 h-4' alt="" />
                              <p className="font-Manrope text-homeblack">WordPress</p>
                            </li>
                            <li className='flex items-center gap-2'>
                              <img src={checkCircle} className='w-4 h-4' alt="" />
                              <p className="font-Manrope text-homeblack">Mail Support</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bottom-price-button w-full mt-8">
                        <button type="button" className='w-full py-3 px-8 relative rounded-full text-left group bg-greenYellow text-homeblack font-DmSans font-bold text-xl'>
                          <p>Learn Now</p>
                          <div className="btn-forwar-icon bg-homeblack absolute flex items-center justify-center right-0 top-0 w-1/4 h-full rounded-full group-hover:w-full duration-500">
                            <i class="bi bi-arrow-right text-2xl text-white group-hover:-rotate-45 delay-300 duration-500"></i>
                          </div>
                        </button>
                      </div>
                  </div>
                </div>
                <div className="single-pricing-about-block-2 similar-pricing-blocks-about p-6 bg-greenYellow rounded-[30px] shadow-cardsShadow">
                  <div className="inner-single-pricer-blk">
                    <div className="top-pricing-about-sec flex items-center gap-4">
                      <div className="left-image-price-sec-about">
                        <img src={proPrice} alt="" />
                      </div>
                      <div className="right-price-desc-about">
                        <p className='font-Manrope text-homeblack opacity-60 mb-2'>For Companies</p>
                        <p className='font-Manrope text-homeblack font-bold text-2xl'>Pro</p>
                      </div>
                    </div>
                    <div className="mid-content-price-about mt-2">
                      <p className='font-Manrope text-homeblack'>Elevate your experience with our Pro subscription, offering monthly access to hire me services.</p>
                    </div>
                    <div className="pricing-about-sec-month my-6">
                      <p className='font-Manrope font-bold text-homeblack text-6xl'>${priceToggle ? '18000' : '1500'} <span className='font-Manrope font-normal opacity-50 text-homeblack text-xl'>/{priceToggle ? 'year' : 'month'}</span></p>
                    </div>
                    <div className="whats-included-sec-about-price">
                      <h2 className='font-Manrope text-2xl font-bold text-homeblack'>What's Included</h2>
                      <div className="include-sec-list mt-4">
                        <ul className='flex flex-col gap-2'>
                          <li className='flex items-center gap-2'>
                            <img src={whiteCheck} className='w-4 h-4' alt="" />
                            <p className="font-Manrope text-homeblack">Full Stack Developer</p>
                          </li>
                          <li className='flex items-center gap-2'>
                            <img src={whiteCheck} className='w-4 h-4' alt="" />
                            <p className="font-Manrope text-homeblack">App Developer</p>
                          </li>
                          <li className='flex items-center gap-2'>
                            <img src={whiteCheck} className='w-4 h-4' alt="" />
                            <p className="font-Manrope text-homeblack">Determined commitment</p>
                          </li>
                          <li className='flex items-center gap-2'>
                            <img src={whiteCheck} className='w-4 h-4' alt="" />
                            <p className="font-Manrope text-homeblack">Team-Flexible</p>
                          </li>
                          <li className='flex items-center gap-2'>
                            <img src={whiteCheck} className='w-4 h-4' alt="" />
                            <p className="font-Manrope text-homeblack">Unwavering loyalty</p>
                          </li>
                          <li className='flex items-center gap-2'>
                            <img src={whiteCheck} className='w-4 h-4' alt="" />
                            <p className="font-Manrope text-homeblack">Flexible schedule</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bottom-price-button w-full mt-8">
                      <button type="button" className='w-full py-3 px-8 relative rounded-full text-left group bg-white text-homeblack font-DmSans font-bold text-xl'>
                        <p>Hire Me</p>
                        <div className="btn-forwar-icon bg-homeblack absolute flex items-center justify-center right-0 top-0 w-1/4 h-full rounded-full group-hover:w-full duration-500">
                          <i class="bi bi-arrow-right text-2xl text-white group-hover:-rotate-45 delay-300 duration-500"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="single-pricing-about-block-3 bg-white similar-pricing-blocks-about p-6 rounded-[35px] shadow-cardsShadow">
                  <div className="inner-single-pricer-blk">
                    <div className="top-pricing-about-sec flex items-center gap-4">
                      <div className="left-image-price-sec-about">
                        <img src={enterPrice} alt="" />
                      </div>
                      <div className="right-price-desc-about">
                        <p className='font-Manrope text-homeblack opacity-60 mb-2'>For Projects</p>
                        <p className='font-Manrope text-homeblack font-bold text-2xl'>Enterprise</p>
                      </div>
                    </div>
                    <div className="mid-content-price-about mt-2">
                      <p className='font-Manrope text-homeblack'>Expand your possibilities with our Enterprise option, designed for freelancing with flexible hourly pricing.</p>
                    </div>
                    <div className="pricing-about-sec-month my-6">
                      <p className='font-Manrope font-bold text-homeblack text-6xl'>$120 <span className='font-Manrope font-normal opacity-50 text-homeblack text-xl'>/Hourly</span></p>
                    </div>
                    <div className="whats-included-sec-about-price">
                      <h2 className='font-Manrope text-2xl font-bold text-homeblack'>What's Included</h2>
                      <div className="include-sec-list mt-4">
                        <ul className='flex flex-col gap-2'>
                          <li className='flex items-center gap-2'>
                            <img src={checkCircle} className='w-4 h-4' alt="" />
                            <p className="font-Manrope text-homeblack">25+ Happy Clients</p>
                          </li>
                          <li className='flex items-center gap-2'>
                            <img src={checkCircle} className='w-4 h-4' alt="" />
                            <p className="font-Manrope text-homeblack">Over 300 hours</p>
                          </li>
                          <li className='flex items-center gap-2'>
                            <img src={checkCircle} className='w-4 h-4' alt="" />
                            <p className="font-Manrope text-homeblack">40+ Projects</p>
                          </li>
                          <li className='flex items-center gap-2'>
                            <img src={checkCircle} className='w-4 h-4' alt="" />
                            <p className="font-Manrope text-homeblack">Over 3 Years Experince</p>
                          </li>
                          <li className='flex items-center gap-2'>
                            <img src={checkCircle} className='w-4 h-4' alt="" />
                            <p className="font-Manrope text-homeblack">Freelancing</p>
                          </li>
                          <li className='flex items-center gap-2'>
                            <img src={checkCircle} className='w-4 h-4' alt="" />
                            <p className="font-Manrope text-homeblack">24/7 Support</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bottom-price-button w-full mt-8">
                      <button type="button" className='w-full py-3 px-8 relative rounded-full text-left group bg-greenYellow text-homeblack font-DmSans font-bold text-xl'>
                        <p>Contact Me</p>
                        <div className="btn-forwar-icon bg-homeblack absolute flex items-center justify-center right-0 top-0 w-1/4 h-full rounded-full group-hover:w-full duration-500">
                          <i class="bi bi-arrow-right text-2xl text-white group-hover:-rotate-45 delay-300 duration-500"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-section-6 pt-16 pb-8 bg-white">
          <div className="about-section-6-inner">
            <div className="container overflow-visible">
              <div className="about-testimonial-heading flex items-center justify-between">
                <h2 className='text-homeblack text-5xl font-bold font-DmSans leading-[80px] text-center'>What People <span className='text-6xl'>Think About Me</span></h2>
                <div className="right-buttons-section flex items-center gap-4">
                  <div className="review-swiper-button-prev">
                    <button className='w-10 h-10 rounded-full shadow-xl bg-purple flex items-center justify-center text-white'><i class="bi bi-arrow-left text-xl"></i></button>
                  </div>
                  <div className="review-swiper-button-next">
                    <button className='w-10 h-10 rounded-full shadow-xl bg-purple flex items-center justify-center text-white'><i class="bi bi-arrow-right text-xl"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-main-section px-5">
              <div className="testimonial-inner-section">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  spaceBetween={15}
                  slidesPerView={3}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                  }}
                  loop={true}
                  navigation={{
                    clickable: true,
                    nextEl: '.review-swiper-button-next',
                    prevEl: '.review-swiper-button-prev',
                  }}
                  breakpoints={{
                    2000: {
                      slidesPerView: 4
                    },
                    1700 : {
                      slidesPerView: 3 
                    },
                    1200: {
                      slidesPerView: 3
                    },
                    992: {
                      slidesPerView: 3
                    },
                    674: {
                      slidesPerView: 2
                    },
                    375: {
                      slidesPerView: 1
                    }
                  }}
                  modules={[SwiperAuto , EffectCoverflow ,  SwipePage , Navigation]}
                >
                  {aboutData.AboutTestimonials.map((items , index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className='single-testimonial-card rounded-xl shadow-2xl mt-12 mb-16'>
                          <div className="top-heading-testi-part flex items-center gap-4 pt-8 px-8 pb-3">
                            <div className="left-image">
                              <img className='w-20 h-20 rounded-full' src={items.image} alt="" />
                            </div>
                            <div className="test-inner-head">
                              <h2 className='text-xl font-semibold font-Manrope'>{items.title}</h2>
                              <div className="rating-stars">
                                <ul className='flex items-center gap-1'>
                                  {[...Array(items.rating)].map((raters, starIndex) => (
                                    <li key={starIndex}><i className="bi bi-star-fill"></i></li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial-content pt-3 px-8 pb-8 ">
                            <p className="text-base font-Rubik text-homeblack min-h-[150px]">{items.desc}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-section-7 py-16 bg-homeblack">
          <div className="about-section-7-inner">
            <div className="container">
              <div className="grid-cols-5 grid gap-10 items-center">
                <div className="right-accordion col-span-3">
                  {aboutData.AboutAccordionCont.map((items , index) => {
                    return (
                      <Accordion expanded={expanded === items.panelCount} onChange={handleChange(items.panelCount)} key={index}>
                        <AccordionSummary 
                          expandIcon={
                            <div className='expanded-outer w-7 h-7 flex items-center justify-center rounded-full bg-darkgreen'>
                              <i class="bi bi-chevron-down text-homeblack text-lg"></i>
                            </div>
                          } 
                          aria-controls="panel2bh-content" id="panel2bh-header">
                          <h2 className='font-Manrope text-lg font-bold text-homeblack'>{items.title}</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                          <p className='font-Manrope text-base text-homeblack'> {items.desc} </p>
                        </AccordionDetails>
                      </Accordion>
                    )
                  })}
                </div>
                <div className="left-accordion-sec col-span-2">
                  <div className="thinking-faq-image">
                    <img src={faqThink} alt="" className='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-section-8 py-16">
          <div className="about-section-8-inner">
            <div className="container">
              <div className="grid grid-cols-2 gap-8">
                <div className="left-side-contact-section shadow-cardsShadow px-8 rounded-3xl">
                  <div className="left-side-contact-inner  ">
                    <div className="above-the-form-section-contact border-homeblack border-opacity-20 border-b pt-6 pb-6">
                      {/* <div className="top-getin-touch-para flex items-center gap-4 bg-orange-400 bg-opacity-10 px-4 py-2 rounded-full w-fit">
                        <p className='text-orange-400 text-lg font-DmSans'>Get In Touch</p>
                        <div className="getintouch-greendot-anime w-3 h-3 rounded-full bg-green-400 relative">
                        </div>
                      </div> */}
                      <div className="top-get-intouch-head mt-5 mb-3">
                        <h2 className="text-6xl font-DmSans leading-[70px] text-homeblack font-medium"><span>Let's Chat</span>, Reach Out to Me</h2>
                      </div>
                      <div className="feedback-para">
                        <p className='text-lg font-Manrope text-homeblack'>Have questions or feedback? I'm here to help. Send me a message, and i'll respond with in 24hours</p>
                      </div>
                    </div>
                    <div className="below-form-section-contact pt-6 pb-8">
                      <Formik
                        validationSchema={aboutContactValidaion}
                        initialValues={aboutContactValues}
                        onSubmit={(values) => aboutContactFormSubmit(values)}
                      >
                        {({  errors, touched }) => (
                          <Form>
                            <div className="top-firs-last-name grid grid-cols-2 gap-4">
                              <div className="first-name-section">
                                <div className="form-lable-sec mb-2">
                                  <p className='text-homeblack font-DmSans opacity-70'>Name</p>
                                </div>
                                <div className="form-inputsec">
                                  <Field type="text" name="fullName" placeholder='Name' 
                                    className={`outline-none border   py-3 px-5 rounded-xl bg-homeblack bg-opacity-10 font-Manrope w-full ${errors.fullName && touched.fullName ? 'inputError border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500' : 'border-homeblack border-opacity-0'}`} 
                                  />
                                </div>
                              </div>
                              <div className="last-name-sec">
                                <div className="form-lable-sec mb-2">
                                  <p className='text-homeblack font-DmSans opacity-70'>Phone Number</p>
                                </div>
                                <div className="form-inputsec">
                                  <Field type="tel" name="phoneNumber" placeholder='Phone Number' 
                                    className={`outline-none border   py-3 px-5 rounded-xl bg-homeblack bg-opacity-10 font-Manrope w-full ${errors.phoneNumber && touched.phoneNumber ? 'inputError border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500' : 'border-homeblack border-opacity-0'}`} 
                                  />
                                </div>
                              </div>
                              <div className="email-section col-span-2">
                                <div className="form-lable-sec mb-2">
                                  <p className='text-homeblack font-DmSans opacity-70'>Email</p>
                                </div>
                                <div className="form-inputsec">
                                  <Field type="email" name="email" placeholder='Email'
                                    className={`outline-none border   py-3 px-5 rounded-xl bg-homeblack bg-opacity-10 font-Manrope w-full ${errors.email && touched.email ? 'inputError border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500' : 'border-homeblack border-opacity-0'}`} 
                                  />
                                </div>
                              </div>
                              <div className="email-section col-span-2">
                                <div className="form-lable-sec mb-2">
                                  <p className='text-homeblack font-DmSans opacity-70'>Message (optional)</p>
                                </div>
                                <div className="form-inputsec">
                                  <textarea placeholder='Leave me a message' onKeyUp={(e) => setMessageValue(e.target.value)}
                                    className='outline-none border border-homeblack border-opacity-0 py-3 px-5 rounded-xl bg-homeblack bg-opacity-10 font-Manrope w-full resize-none h-28'>
                                  </textarea>
                                </div>
                              </div>
                            </div>
                            <div className="bottom-form-submitter w-1/2 mt-6 rounded-full overflow-hidden relative group">
                                <button type='submit' className='w-full py-3 px-4 rounded-full font-DmSans text-white bg-homeblack font-semibold hover:bg-greenYellow hover:text-black text-lg duration-500'>Submit</button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
                <div className="right-side-contant-section h-full flex flex-col gap-8 justify-between">
                    <div className="top-half-block-contact  w-full shadow-cardsShadow rounded-3xl overflow-hidden">
                        <img src={require('../../images/aboutme-images/contact-right.jpg')} className='w-full h-[420px] object-cover' alt="" />
                    </div>
                    <div className="bottom-half-block-contact  w-full shadow-cardsShadow rounded-3xl p-8">
                        <div className="bottom-three-blocks-addresses flex flex-col gap-5">
                          <div className="email-add-section flex items-center gap-4">
                            <div className="email-ico-blk bg-darkgreen bg-opacity-25 rounded-full w-16 h-16 flex items-center justify-center">
                              <i class="bi bi-envelope-at text-homeblack  text-2xl"></i>
                            </div>
                            <div className="email-para-blk">
                              <h4 className='font-Manrope '>Email</h4>
                              <p className='font-DmSans text-homeblack text-2xl'>exaspider.jpa@email.com</p>
                            </div>
                          </div>
                          <div className="email-add-section flex items-center gap-4">
                            <div className="email-ico-blk bg-darkgreen bg-opacity-25 rounded-full w-16 h-16 flex items-center justify-center">
                              <i class="bi bi-telephone text-homeblack text-2xl"></i>
                            </div>
                            <div className="email-para-blk">
                              <h4 className='font-Manrope '>Phone</h4>
                              <p className='font-DmSans text-homeblack text-2xl'>+91 9245687852</p>
                            </div>
                          </div>
                          <div className="email-add-section flex items-center gap-4">
                            <div className="email-ico-blk bg-darkgreen bg-opacity-25 rounded-full w-16 h-16 flex items-center justify-center">
                              <i class="bi bi-buildings text-homeblack text-2xl"></i>
                            </div>
                            <div className="email-para-blk">
                              <h4 className='font-Manrope '>Address</h4>
                              <p className='font-DmSans text-homeblack text-2xl'>252 Block , Amsterdam , America</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

AboutMe.propTypes = {};

AboutMe.defaultProps = {};

export default AboutMe;
