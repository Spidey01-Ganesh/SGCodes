import './Home.scss';
import React , { useState , useEffect , useRef}from 'react';
import { NavLink , useNavigate} from 'react-router-dom';
import Flicking , { ViewportSlot }  from '@egjs/react-flicking';
import { Perspective , AutoPlay  } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/pagination.css";
import Lottie from 'lottie-react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Marquee from 'react-fast-marquee';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import thinkMan from '../../images/manthink.svg';
import freeWork from '../../Lottie/freework.json';
// import Atropos from 'atropos/react';
// import ThemeImages from '../Utils/Images';
// import readSvg from '../../images/right-svg.svg';
// import thinkAnime from '../../Lottie/thinking.json';
import faqThink from '../../images/faq-think.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Content } from './Content';
import { Navigation, Pagination as SwipePage ,  EffectCoverflow , Autoplay as SwiperAuto  } from 'swiper/modules';
// import axios from 'axios'
import ComponentBox from './ComponentBox/ComponentBox';
import CountUp from  'react-countup';





const Home = () => {

  const navigate = useNavigate();

  const [headerBar , setHeaderBar] = useState(false);
  const [smoothToggle1 , setSmoothToggle1] = useState(false);
  const [smoothToggle3 , setSmoothToggle3] = useState(false);
  const [smoothToggle4 , setSmoothToggle4] = useState(false);
  const [smoothToggle5 , setSmoothToggle5] = useState(false);
  const [slideToggle , setSlideToggle] = useState('home');
  const [menuToggle , setMenuToggle] = useState(false);
  const [darkmode , setDarkmode] = useState(false);
  const [expanded, setExpanded] = useState('panel1');
  const [mouseEvent , setMouseEvent] = useState('');
  const [visibleTopper , setIsVisibleTopper] = useState(false);
  const [isInSection  , setIsInSection] = useState(false)

  const plugins = [new Perspective({ rotate: 0.5 }) , new AutoPlay ({ duration: 2000, direction: "NEXT", stopOnHover: true })];
  const autoplayPlug = [new AutoPlay ({ duration: 2000, direction: "NEXT", stopOnHover: true })];


  
  const refer = useRef();

  console.log(isInSection , "does it here")

  useEffect(() => {

    
    // Cursor Follower For Menu
    const positionMap = {
      'link1': '15%',
      'link2': '45%',
      'link3': '80%',
      '' : '-10%'
    };
    const dotRomer = document.querySelector('.dot-romer-2');
    if (dotRomer && positionMap[mouseEvent]) {
      dotRomer.style.left = positionMap[mouseEvent];
    }


    // Scroll To Top Function==> 
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const threshold = 500;
      setIsVisibleTopper(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInSection(true);
          } else {
            setIsInSection(false);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Change this value according to your needs
      }
    );

    if (refer.current) {
      sectionObserver.observe(refer.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (refer.current) {
        sectionObserver.unobserve(refer.current);
      }
    };
    

  }, [mouseEvent]);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };


  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      setHeaderBar(true)
    }
    if(window.pageYOffset <= 20) {
      setHeaderBar(false)
    }
  });

  const handleMouseState = (link) => {
    setMouseEvent(link)
  }

  const handleRightMenu = () => {
    setMenuToggle(!menuToggle)
  }

  const handleDark = () => {
    setDarkmode(!darkmode)
  }


  const handleChange = (panel) => (event , isExpanded) => {
      setExpanded(isExpanded ? panel : false);
  };

  const namer = 'example'

  const dummyJson = [
    {
      name: 'example',
      place: 'Castor',
      city: 'ExampleCity'
    },
    {
      name: 'example',
      place: 'LaCasa',
      city: 'ExampleCity'
    },
    {
      name: 'Jhon Wick',
      place: 'Ex Communicado',
      city: 'New York'
    },
    {
      name: 'David',
      place: 'Darjeeling cafe',
      city: 'Darjeeling'
    },
    {
      name: 'Drake',
      place: 'Calro',
      city: 'Colarado'
    }
  ]


  // const mailSubmitter = () => {
  //   axios
  //   .post("https://getform.io/f/97083c5d-5906-4049-ab91-94e5827728d1", {
  //       message: "Hello, World",
  //       mail: 'example@1123mail.com'
  //   },
  //   { headers: {'Accept': 'application/json'}})
  //   .then(response => console.log( 'main-response', response))
  //   .catch(error => console.log(error))
  // }

  return (
    <div className="home-main-section-outer">
      <Header/>
      <div className={`Home`}>
          <div className={`top-header-bar fixed left-0 w-full z-[99999] duration-700 ${headerBar ? '-top-0 opacity-100' : '-top-full opacity-0'}`}>
            <div className={` rounded-b-3xl shadow-2xl  header-section-inner bg-homeblack relative py-4`}>
              <div className="container home-head-container relative">
                <div className="header-strip flex items-center justify-between">
                  <div className="header-logo">
                    <h2 className='text-white font-semibold relative font-Rubik text-2xl'>SG CODES <span></span></h2>
                  </div>
                  <div className="middle-scroll-topper">
                    <button type='button' onClick={scrollToTop} className={`w-10 h-10 bg-greenYellow text-black rounded-full flex items-center justify-center duration-300 ${visibleTopper ? 'scale-100' : 'scale-0'}`}>
                      <div className="up-arrow-divver">
                        <i class="bi bi-arrow-up text-xl"></i>
                      </div>
                    </button>
                  </div>
                  <div className="home-header">
                    <nav className='flex items-center gap-12 relative overflow-hidden rounded-full'>
                      <ul className='flex items-center gap-10 px-5 py-3 home-section'>
                        <li><NavLink className='text-white relative home-navigators font-Manrope text-[14px] duration-300' onMouseEnter={() => handleMouseState('link1')} onMouseLeave={() => handleMouseState('')} to={'/'}>Home</NavLink></li>
                        <li><NavLink className='text-white relative font-Manrope home-navigators text-[14px] duration-300' onMouseEnter={() => handleMouseState('link2')} onMouseLeave={() => handleMouseState('')}  to={'/About-Me'}>About Me</NavLink></li>
                        <li><NavLink className='text-white relative home-navigators font-Manrope text-[14px] duration-300' onMouseEnter={() => handleMouseState('link3')} onMouseLeave={() => handleMouseState('')} to={'/LearnHtml'}>Contact</NavLink></li>
                      </ul>
                      <div className="dot-romer-2 w-2 h-2 rounded-full bg-red-400 absolute bottom-0 left-[8%] duration-300 ease-in-out">
                      </div>               
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-main-section">
            <section>
              <div className="section-1-home py-16 bg-white lg:py-12">
                <div className="section-1-inner">
                  <div className="container">
                    <div className="section-1-inner-top grid gap-6 grid-cols-2 md:grid-cols-1 items-center lg:items-start">
                      <div className="section-1-left-inner order-1 md:order-2">
                        <div className="sectoin-1-head">
                          <h1 className='font-Poppins text-homeblack font-semibold leading-tight text-[45px] lg:text-3xl capitalize'>
                            <span>Decode • Create • Thrive</span> Your Free Journey into Coding Excellence!
                          </h1>
                          <p className='font-Manrope text-lg w-9/12 capitalize mt-6 lg:mt-3 opacity-70 lg:text-base'>
                            SG Codes: A Platform Where Every Line of Code Unlocks Your Infinite Potential.
                          </p>
                          <div className="learnbutton mt-16 lg:mt-10">
                            <div className="button-section flex items-center gap-10 lg:gap-5">
                              <div className="left-btn-sec">
                                <button className=' bg-greenYellow px-6 py-[14px] rounded-xl relative duration-500'>
                                  <p className='relative text-homeblack font-Manrope font-bold duration-500 text-lg'>Explore Now</p>
                                </button>
                              </div>
                              <div className="right-btn-sec">
                                <button className=' bg-white px-6 py-[13px] relative duration-500 rounded-xl border border-homeblack'>
                                  <p className='relative text-homeblack font-Manrope font-bold duration-500 z-10 text-lg' >Support Me</p>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="section-1-right-part order-2 md:order-1">
                        <div className="section-1-right-inner">
                          <img src={require('../../images/banner.png')} className='w-full md:w-1/2' alt="" />
                            {/* <Atropos className='my-atropos overflow-visible'  activeOffset={0}  shadowScale={0} >
                              <div className="images-atro-section relative ">
                                <img src={ThemeImages.atroImage1} data-atropos-offset="0" className='' alt="" />
                                <img src={ThemeImages.atroImage2} data-atropos-offset="5" className='absolute w-8/12 bottom-4 right-4' alt="" />
                              </div>
                            </Atropos> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="section-2 pt-16 pb-10 bg-homeblack lg:pt-10">
                <div className="section-2-inner">
                  <div className="container">
                      <div className="grid grid-cols-2 gap-10 lg:gap-6">
                          <div className={`left-section-toggler ${darkmode ? 'bg-menubg' : 'bg-white'} duration-500 rounded-2xl relative shadow-2xl`}>
                            <div className="left-togggle-section absolute right-4 top-4 lg:top-2 lg:right-2">
                              <input type="checkbox" name="" id="togglercheck" onClick={handleDark} className='h-6 w-[50px] cursor-pointer absolute opacity-0'/>
                              <label htmlFor="#togglercheck" className='tog' for="#togglercheck">
                                  <div className="togglecheck p-1 bg-[#6f6b65] w-[50px] rounded-full cursor-pointer">
                                    <div className="shifter-ball w-4 h-4 rounded-full bg-darkgreen duration-300">

                                    </div>
                                  </div>
                              </label>
                            </div>
                            <div className="card-turner flex gap-5 lg:gap-4">
                              <div className="left-image w-[30%]">
                                <img className='w-48 h-48 object-cover rounded-l-2xl' src={require('../../images/cardimage.png')} alt="" />
                              </div>
                              <div className="card-right py-4 w-[70%] pr-6">
                                <p className={`font-Manrope font-bold mb-4 lg:mb-2 text-2xl lg:text-xl ${darkmode ? 'text-white' : 'text-homeblack'} duration-500`}>This is {darkmode ? 'Dark Mode' : 'Light Mode'}</p>
                                <p className={`font-Manrope text-base lg:text-sm ${darkmode ? 'text-white' : 'text-homeblack'} duration-500`}>When you toggle the top switch the complete card toggles between dark and light mode , its so simple with html , css and Js. Just click the right button to know how</p>
                              </div>
                            </div>
                          </div>
                          <div className="right-caption">
                            <h2 className='text-6xl text-white font-Manrope font-bold lg:text-4xl'>Wanna Know How All These Works</h2>
                            <p className='flex items-center font-Manrope w-fit text-xl mt-8 lg:mt-6 text-white gap-3'>Just <NavLink className='relative uppercase'><p>Click Here</p></NavLink></p>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="section-2-sub-section pb-16 bg-homeblack">
                <div className="section-2-sub-inner">
                  <div className="container  border-t border-white border-opacity-50">
                      <div className="grid grid-cols-3 lg:grid-cols-2  gap-5 pt-10">
                        <div className="hovers-column">
                          <div className="hovers-header mb-5">
                            <h2 className='text-2xl font-bold font-Manrope text-white '>Dynamic Hovers</h2>
                          </div>
                          <div className="hovers-inner grid grid-cols-2 justify-between gap-4 h-[110px]">
                            <div className="inner-flexer">
                              <div className="left-column flex flex-col justify-between h-full gap-4">
                                <div className="first-button">
                                  <button type="button" className='px-5 py-2 border-2 border-white duration-500 text-white font-Manrope font-semibold w-full hover:bg-greenYellow hover:border-greenYellow hover:text-homeblack '>Hover Me</button>
                                </div>
                                <div className="second-button">
                                  <button class="cursor-pointer w-full font-semibold overflow-hidden relative z-100 border-2 border-greenYellow group px-7 py-2">
                                    <span class="relative z-10 text-greenYellow group-hover:text-homeblack duration-500">Magic !</span>
                                    <span class="absolute w-full h-full bg-greenYellow -left-36 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                    <span class="absolute w-full h-full bg-greenYellow -right-36 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="right-column-section flex gap-5">
                              <div className="right-column h-full">
                                <button className='h-full border-white border-2 w-12 group flex items-center justify-center relative overflow-hidden hover:border-greenYellow duration-500'>
                                  <p className='text-3xl font-Manrope relative z-10 text-white duration-700 group-hover:rotate-[360deg] group-hover:text-homeblack leading-[30px]'>×</p>
                                  <span className=' inline-block w-full bg-greenYellow h-full absolute top-full group-hover:top-0 duration-700'></span>
                                </button>
                              </div>
                              <div className="right-right-side-col flex justify-between flex-col gap-2">
                                <div className="right-right-button">
                                  <button type="button" className='w-12 relative h-12 flex items-center justify-center rounded-full bg-white text-4xl  font-Manrope group duration-500 overflow-hidden hover:rotate-90'>×
                                    <span className='absolute w-full top-0 left-0 scale-0 group-hover:scale-100 duration-500 -z-10 bg-greenYellow h-full rounded-full'></span>
                                  </button>
                                </div>
                                <div className="bottom-right-button">
                                  <button type='button' className='relative border-2 border-white group hover:border-greenYellow w-12 h-12 duration-500 overflow-hidden'>
                                      <p className='text-white font-Manrope text-3xl group-hover:scale-0 duration-500 relative z-10 w-full h-full flex items-center justify-center'>×</p>
                                      <span className='absolute w-full h-full bg-greenYellow rotate-45 group-hover:top-9 duration-500 top-12 left-0'></span>
                                      <span className='absolute w-full h-full bg-greenYellow rotate-45 top-0 group-hover:left-9 duration-500 left-12'></span>
                                      <span className='absolute w-full h-full bg-greenYellow rotate-45 top-0 group-hover:right-9 duration-500 right-12'></span>
                                      <span className='absolute w-full h-full bg-greenYellow rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0'></span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="toggle-section-column">
                          <div className="toggler-header-sec inline-block mb-5">
                            <h2 className='text-2xl font-bold font-Manrope text-white'>Smooth Toggles</h2>
                          </div>
                          <div className="toggle-column-inner-sec h-[110px] flex flex-col justify-between">
                              <div className="right-left-togglers-section top-section-right flex gap-4 ">
                                <div className="bottom-right-menu-iconer">
                                    <button className={`w-12 h-12 duration-500 flex items-center justify-center flex-col gap-2 group ${smoothToggle1 ? 'bg-greenYellow' : 'bg-white'}`} onClick={() => setSmoothToggle1(!smoothToggle1)}>
                                      <div className={`lines-1 similar-linser h-[2px] duration-500 bg-homeblack ${smoothToggle1 ? 'w-[35%] activer1' : 'w-[70%]'}`}></div>
                                      <div className={`lines-2 similar-linser h-[2px] duration-500  bg-homeblack ${smoothToggle1 ? 'w-[50%] activer2' : 'w-[70%]'}`}></div>
                                      <div className={`lines-3 similar-linser h-[2px] duration-500 bg-homeblack ${smoothToggle1 ? 'w-[35%] activer3' : 'w-[70%]'}`}></div>
                                    </button>
                                </div>
                                {/* <div className="left-togglers flex flex-col gap-2 items-center">
                                  <div className="second-toggle">
                                      <button className={`w-14 h-6 flex items-center rounded-full duration-500 ${smoothToggle2 ? 'bg-greenYellow' : 'bg-gray-600'}`} onClick={() => setSmoothToggle2(!smoothToggle2)}>
                                        <span className={`w-[18px] h-[18px] rounded-full inline-block duration-500 ${smoothToggle2 ? 'translate-x-[34px] bg-homeblack' : 'translate-x-1 bg-white'}`}></span>
                                      </button>
                                  </div>
                                </div> */}
                                {/* <div className="right-togglers">
                                  <div className="third-toggle">
                                    <button className={`w-12 h-12 rounded-full flex items-center justify-center p-2 duration-500 ${smoothToggle2 ? 'bg-greenYellow' : 'bg-white'}`} onClick={() => setSmoothToggle2(!smoothToggle2)}>
                                      <div className={`inner-v duration-500 ${smoothToggle2 ? 'rotate-180' : 'rotate-0'}`}>
                                          <div className="gg-arrows-exchange-v"></div>
                                      </div>
                                    </button>
                                  </div>
                                </div> */}
                                <div className="bottom-right-menu-iconer">
                                    <button className={`w-12 h-12  group flex items-center justify-center relative overflow-hidden duration-500 ${smoothToggle3 ?  'bg-greenYellow' : 'bg-white '} `} onClick={() => setSmoothToggle3(!smoothToggle3)}>
                                      <div className={`inner-scaler flex items-center justify-center flex-col gap-2 h-full w-full duration-500 ${smoothToggle3 ? 'scale-0' : 'scale-1'}`}>
                                        <div className='lines-1 w-[70%] similar-linser h-[2px] duration-500 bg-homeblack'></div>
                                        <div className='lines-2 w-[70%] similar-linser h-[2px] duration-500 bg-homeblack'></div>
                                        <div className='lines-3 w-[70%] similar-linser h-[2px] duration-500 bg-homeblack'></div>
                                      </div>
                                      <span className={`inline-block w-full spanLine-1 absolute -rotate-45 h-[2px] bg-homeblack duration-500 left-5 ${smoothToggle3 ? 'active' : ''}`}></span>
                                      <span className={`inline-block w-full spanLine-2 absolute -rotate-45 h-[2px] bg-homeblack duration-500 right-5 ${smoothToggle3 ? 'active' : ''}`}></span>
                                    </button>
                                </div>
                                <div className="last-right-menu-btn">
                                  <button className={`w-12 h-12 relative  ${smoothToggle4 ? 'activer' : ''}`} onClick={() => setSmoothToggle4(!smoothToggle4)}>
                                      <div className={`two-planes absolute z-10 w-full h-full flex items-center justify-center duration-500 top-0 left-0 ${smoothToggle4 ? '-translate-y-12 opacity-0' : 'translate-y-0 opacity-100'}`}>
                                          <i class="bi text-homeblack bi-airplane text-2xl "></i>
                                      </div>
                                      <div className={`two-planes absolute z-10 w-full h-full flex items-center justify-center duration-500 top-0 left-0 ${smoothToggle4 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                          <i class="bi text-homeblack bi-airplane text-2xl "></i>
                                      </div>
                                  </button>
                                </div>
                                <div className="last-button-readmore">
                                  <button type="button" onClick={() => {
                                    setTimeout(() => {
                                      setSmoothToggle5(!smoothToggle5)
                                    }, 500);
                                  }} className={`bg-white h-12 px-3 relative overflow-hidden`}>
                                      <span className={`font-Manrope font-medium text-homeblack inline-block`}>Add To Cart</span>
                                      <span className={`w-16 h-16 rounded-full z-20 bg-greenYellow absolute left-5 -top-2 flex items-center justify-center duration-500 ${smoothToggle5 ? 'scale-100' : 'scale-0'}`}>
                                        <i className="bi bi-check-lg"></i>
                                      </span>
                                      <span className={`w-36 h-16 rounded-full z-10 bg-green-300 absolute -left-4 -top-2 flex items-center justify-center duration-500 delay-200 ${smoothToggle5 ? 'scale-100' : 'scale-0'}`}>
                                      </span>
                                  </button>
                                </div>
                              </div>
                              <div className="bottom-section-second-column w-[80%]">
                                <div className="bg-white h-12 w-full relative flex items-center">
                                    <span className={`square-mover absolute top-0 left-0 w-[60px] h-12 bg-greenYellow duration-500 
                                      ${slideToggle === 'Home' ? 'left-0' : slideToggle === 'User' ? 'left-[58px]' : slideToggle === 'Set' ? 'left-[120px]' : slideToggle === 'Notify' ? 'left-[180px]' : slideToggle === 'Wish' ? 'left-[241px]' : ''}`}>
                                    </span>
                                    <div className="user-click relative z-10 h-full">
                                      <button type="button" className='w-[60px] h-full flex items-center justify-center' onClick={() => setSlideToggle('Home')}>
                                        <i class="bi bi-house-fill text-2xl text-homeblack"></i>
                                      </button>
                                    </div>
                                    <div className="user-click relative z-10 h-full">
                                      <button type="button" className='w-[60px] h-full flex items-center justify-center' onClick={() => setSlideToggle('User')}>
                                        <i class="bi bi-person-fill text-2xl text-homeblack"></i>
                                      </button>
                                    </div>
                                    <div className="user-click relative z-10 h-full">
                                      <button type="button" className='w-[60px] h-full flex items-center justify-center' onClick={() => setSlideToggle('Set')}>
                                        <i class="bi bi-gear-wide-connected text-2xl text-homeblack"></i>
                                      </button>
                                    </div>
                                    <div className="user-click relative z-10 h-full">
                                      <button type="button" className='w-[60px] h-full flex items-center justify-center' onClick={() => setSlideToggle('Notify')}>
                                        <i class="bi bi-bell-fill text-[22px] text-homeblack"></i>
                                      </button>
                                    </div>
                                    <div className="user-click relative z-10 h-full">
                                      <button type="button" className='w-[58px] h-full flex items-center justify-center' onClick={() => setSlideToggle('Wish')}>
                                        <i class="bi bi-box2-heart-fill text-[22px] text-homeblack"></i>
                                      </button>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mini-cards lg:col-span-2">
                          <div className="mini-cards-inner">
                            <div className="mini-cards-header-sec inline-block mb-5">
                              <h2 className='text-2xl font-bold font-Manrope text-white'>Mini Cards - Hover</h2>
                            </div>
                            <div className="mini-column-inner-sec h-[110px] grid grid-cols-2 gap-4">
                              <div className="mini-card-1  h-full">
                                <div className="mini-card-inner  h-full bg-white relative overflow-hidden rounded-xl group">
                                   <div className="top-image h-full max-h-[110px]">
                                      <img src={require('../../images/mini-card-1.png')} className='w-full h-full object-cover group-hover:blur-sm duration-500' alt="" />
                                   </div>
                                   <div className="right-content absolute w-[35%] top-0 bg-white h-full -right-full group-hover:right-0 duration-500">
                                      <div className="right-social-media flex flex-col justify-between items-center h-full py-4">
                                        <div className="socio-1 p-2 bg-homeblack w-8 h-8 flex items-center justify-center">
                                          <i class="bi bi-instagram text-lg text-white"></i>
                                        </div>
                                        <div className="socio-1 p-2 bg-homeblack w-8 h-8 flex items-center justify-center">
                                          <i class="bi bi-twitter text-lg text-white"></i>
                                        </div>
                                      </div>
                                   </div>
                                </div>
                              </div>
                              <div className="mini-card-2 h-full">
                                <div className="mini-card-inner h-full bg-white group relative rounded-xl overflow-hidden">
                                    <div className="top-image h-full max-h-[110px]">
                                      <img src={require('../../images/mini-card-2.png')} className='w-full h-full object-cover group-hover:scale-125 duration-500' alt="" />
                                    </div>                                    
                                    <div className="outer-white-back similar-outers-back absolute top-0 left-0 bg-white w-10 h-10 flex items-center justify-center">
                                        <i class="bi bi-instagram text-lg text-homeblack"></i>
                                    </div>
                                    <div className="outer-white-back-2 similar-outers-back bg-white w-10 h-10 flex items-center justify-center absolute top-0 right-0">
                                        <i class="bi bi-twitter text-lg text-homeblack"></i>
                                    </div>
                                    <div className="outer-white-back-3 bg-white w-10 h-10 similar-outers-back flex items-center justify-center absolute bottom-0 left-0">
                                        <i class="bi bi-facebook text-lg text-homeblack"></i>
                                    </div>
                                    <div className="outer-white-back-4 bg-white w-10 h-10 similar-outers-back flex items-center justify-center absolute bottom-0 right-0">
                                        <i class="bi bi-discord text-lg text-homeblack"></i>
                                    </div>
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
            <section>
              <div className="section-3-home py-16 bg-white">
                <div className="section-3-inner">
                  <div className="container">
                    <div className="collaboration">
                      <div className="collab-head">
                        <h2 className='text-center text-homebalck font-Manrope text-4xl font-bold'>Collaborate With Me <br /> In Learning</h2>
                      </div>
                      <Flicking circular={true} plugins={plugins} panelsPerView={3} className="pt-10 pb-14" autoPlay={true} autoPlayInterval={3000} >
                        {Content.collaborateDate.map((items , index) => {
                          return (
                              <div className="card-panel w-80 rounded-xl py-4 px-4 shadow-xl bg-white" key={index}>
                                <div className="slide-1-head mb-2">
                                  <h4 className='font-Manrope text-2xl text-darkgreen font-semibold'>{items.heading}</h4>
                                </div>
                                <div className="slide-1-desc">
                                  <p className='font-Rubik text-gray-500 capitalize'> {items.description} </p>
                                </div>
                              </div>
                          )
                        })}
                      <ViewportSlot>
                        <div className="flicking-pagination"></div>
                      </ViewportSlot>
                    </Flicking>
                      <div className="collab-head">
                        <h2 className='text-center text-homeblack font-Manrope text-2xl font-bold'>This is Flicking Carousel , it's Soo Smooth</h2>
                        <p className='text-center text-homeblack font-Manrope text-base opacity-70 mt-1'> i'll Show you how to integrate in Various Platforms</p>
                        <div className="illshowu-btn text-center mt-4"><button className='overflow-hidden py-2 px-6 relative group border duration-500 border-black hover:border-darkgreen'><p className='relative z-10 font-Manrope duration-500 font-bold group-hover:text-white text-homeblack'>See Now</p></button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="section-4 py-16 bg-homeblack ">
                <div className="section-4-inner">
                  <div className="container overflow-visible">
                      <div className="grid grid-cols-2">
                        <div className="left-section-4 h-full relative">
                          <div className="left-inner-section-3 sticky top-10">
                            <div className="sec-4-head">
                              <h2 className='text-white font-Manrope font-bold text-5xl leading-tight'>Get Started With <br /> <span>SGCODES</span> For Free</h2>
                              <p className='capitalize text-xl font-Manrope text-white mt-3'>Start Mornitoring everything and your knowledge</p>
                              <div className="sec-4-button mt-10">
                                <button type='button' className=' border-2 border-greenYellow text-greenYellow px-10 py-3 text-base font-Manrope font-bold'>
                                  <p>Get Started</p>
                                </button>
                              </div>
                            </div>  
                            <div className="bottom-started-carousel-section mt-10">
                                <Marquee
                                    gradient={true}
                                    gradientColor={'#181818'}
                                    gradientWidth={200}
                                    pauseOnHover
                                >
                                  {Content.getStartedImages.map((items , index) => {
                                    return (
                                      <div className="bottom-get-images-outer  flex items-center justify-center px-2 py-2 rounded-xl w-28 h-24">
                                        <img src={items.image} className="w-3/4 h-full object-contain" alt="" key={index} />
                                      </div>
                                    )
                                  })}
                                </Marquee>
                            </div>
                          </div>
                        </div>
                        <div className="right-section-4">
                          <div className="right-side-image relative">
                            <Lottie
                              animationData={freeWork}
                              loop={true}
                              style={{width: "100%" , height: "400px" , objectFit: "cover" }}
                            />
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="section-5 py-16 bg-white">
                <div className="section-5-inner ">
                  <div className="container">
                    <div className="top-sec-5">
                      <div className="grid grid-cols-2 items-end">
                        <div className="sec-5-lefthead">
                          <div className="tech-iknow">
                            <h2 className='text-homeblack font-Manrope text-5xl font-bold leading-tight'><span>Technologies</span> <br /> I've Known So Far</h2>
                            <p className='capitalize mt-4 font-Manrope'>I have learnt so many technologies and many tricks in various platforms and gathered more stuff for people who has premium plan. <br /> <span className='font-medium'>Just Kidding its free for every one</span></p>
                          </div>
                        </div>
                        <div className="sec-5-right-img">
                          {/* <Lottie
                            animationData={thinkAnime}
                            loop={true}
                            style={{width: "100%" , height: "300px" , objectFit: "cover"}}
                          /> */}
                          <img src={thinkMan} alt="" className='w-full max-w-[250px] mx-auto' />
                        </div>
                      </div>
                    </div>
                    <div className="section-5-bottom flex items-center gap-5 mt-5">
                    <Flicking circular={true} plugins={autoplayPlug} circularFallback="bound" className="pt-10 pb-14" panelsPerView={4} align="prev" >
                      {Content.technologiesData.map((items ,index ) => {
                        return (
                          <div className="single-card-section p-8 w-fit rounded-2xl border mr-4 group bg-white duration-500 hover:-translate-y-5" key={index}>
                              <div className="top-image-section flex items-center gap-4">
                                <div className="image-top-icon">
                                  <img src={items.techImage} className="w-12 h-12 object-contain" alt="" />
                                </div>
                                <div className="top-right-head">
                                  <h2 className=' text-xl font-semibold font-Manrope'>{items.techName}</h2>
                                </div>
                              </div>
                              <div className="content-section mt-5 mb-5 min-h-[300px]">
                                <p className='text-base font-Manrope opacity-70'> {items.techDesc} </p>
                              </div>
                              <div className="bottom-button-section ">
                                <button type="button" className='font-Manrope text-lg font-bold text-homeblack duration-500 group-hover:text-greenYellow' onClick={() => navigate(items.techLink)}>{items.buttonText}</button>
                              </div>
                          </div>
                        )
                      })}
                      <ViewportSlot>
                        <div className="flicking-pagination"></div>
                      </ViewportSlot>
                    </Flicking>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="section-6 pt-10 bg-homeblack">
                <div className="section-6-inner">
                  <div className="container">
                    <div className="inner-6-container relative overflow-hidden">
                        <div className="grid grid-cols-12 items-center gap-10">
                            <div className="left-degree-col relative col-span-4 ">
                              <img src={require('../../images/degree.png')} alt="" className='relative z-10' />
                              <div className="rotator-back absolute -bottom-24 left-10 rounded-[50px] rotate-45 w-72 h-72 shadow-2xl">

                              </div>
                            </div>  
                            <div className="center-subs-col col-span-8 flex flex-col gap-10">
                              <div className="exciting-head pl-3">
                                <h2 className="text-[55px] font-Manrope font-bold leading-tight text-white">Exciting And Cool Learning <span>For You</span></h2>
                              </div>
                              <div className="start-btn w-fit">
                                <button className='text-homeblack text-center px-10 py-3 bg-greenYellow overflow-hidden group w-fit rounded-full text-lg font-Manrope font-semibold relative'>
                                  <span className="absolute spanner-left w-full h-1/2 bg-white top-0 left-0"></span>
                                  <span className="absolute spanner-right w-full h-1/2 bg-white bottom-0 right-0"></span>
                                  <p className='relative z-10'>Start Learning Today</p>
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
              <div className="section-7 py-16 bg-white">
                <div className="section-7-inner">
                  <div className="container">
                      <div className="section-7-top-head">
                        <p className="text-xl font-bold opacity-50 font-Inter mb-2">Why SG Codes?</p>
                        <h2 className='text-4xl font-Manrope text-homeblack font-medium'>Unleash your potential through innovative learning. </h2>
                      </div>
                      <div className="bottom-grid-sectioner pb-4 pt-8">
                        <div className="grid grid-cols-3 gap-6">
                          {Content.whySgServices.map((items , index) => {
                            return (
                            <div className="similar-service-section h-full" key={index}>
                              <div className="inner-service-card overflow-hidden relative py-12 px-8 shadow-xl h-full bg-white rounded-[30px] group">
                                <div className="top-imager-sec relative z-10 shadow-xl w-[100px] h-[100px] flex items-center justify-center bg-homeblack rounded-[25px] duration-500 group-hover:rotate-45">
                                  <div className="inner-imager-sec duration-500 group-hover:-rotate-45 relative">
                                    <img src={items.imager} className="w-[70px] h-[70px] object-contain group-hover:scale-110 duration-500" alt="" />
                                    <img src={items.secondaryImage} className="w-[70px] h-[70px] object-contain group-hover:scale-110 duration-500 absolute top-0 left-0 opacity-0 group-hover:opacity-100" alt="" />
                                  </div>
                                </div>
                                <div className="relative z-10 sercard-header mt-6 mb-2">
                                  <h2 className='font-Manrope font-bold text-xl text-darkgreen group-hover:text-homeblack duration-500'>{items.title}</h2>
                                </div>
                                <div className="relative z-10 bottom-content-serv">
                                  <p className='text-homeblack font-Manrope font-normal text-lg'>{items.desc}</p>
                                </div>
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
              <div className="section-8 py-16 bg-homeblack">
                <div className="section-8-inner">
                  <div className="container">
                    <div className="grid-cols-5 grid gap-10 items-center">
                      <div className="right-accordion col-span-3">
                        {Content.accordionCont.map((items , index) => {
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
              <div className="section-9 py-16 bg-white">
                <div className="section-9-inner">
                  <div className="container overflow-visible">
                    <div className="testimonial-heading flex items-center justify-between">
                      <h2 className='text-homeblack font-Manrope text-5xl font-bold leading-tight text-center'>What People <span>Think About Me</span></h2>
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
                          1700 : {
                            slidesPerView: 4 
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
                        {Content.testimonials.map((items , index) => {
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
              <div className="section-10 py-16 bg-homeblack">
                <div className="section-10-inner">
                    <ComponentBox/>
                </div>
              </div>
            </section>
            <section>
              <div className="section-11 py-16">
                <div className="section-11-inner">
                  <div className="container">
                    <div className="section-11-headsec mb-10">
                      <h2 className='text-homeblack font-Manrope text-5xl font-bold leading-tight text-center'>What's Inside</h2>
                      <p className='text-homeblack font-Manrope text-center text-base'>Build scalable web pages by using the same components</p>
                    </div>
                    <div className="bottom-grid-section-11">
                      <div className="grid grid-cols-4 gap-7">
                        {Content.whatsInside.map((items , index) => {
                          return (
                            <div className="whats-inside-column-1 similar-whatsinside p-8 rounded-3xl shadow-xl" key={index}>
                              <div className="top-image">
                                <img src={items.image} className='w-full max-w-[40px]' alt="" />
                              </div>
                              <div className="whats-head mt-5 mb-1">
                                <h2 className='font-Rubik font-semibold text-2xl text-darkgreen'>{items.count}</h2>
                              </div>
                              <div className="whats-para">
                                <p className="font-Manrope font-light text-[15px] text-homeblack">{items.desc}</p>
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
            <section ref={refer}>
              <div className="section-12 py-16 bg-homeblack">
                <div className="section-12-inner">
                  <div className="container">
                    <div className="grid grid-cols-4">
                      {Content.AcheivedBlock.map((items , index) => {
                        return(
                          <div className="single-acheive-sec-1 similar-acheives flex items-center gap-6" key={index}>
                            <div className="top-acheive-iconer">
                              <img src={items.image} alt=""  className="h-[70px] w-[70px] object-contain"/>
                            </div>
                            <div className="bottom-acheive-counter">
                              <p className='font-DmSans text-5xl text-white font-semibold acheivedCount-para'>
                                <CountUp end={items.count} start={isInSection ?  0 : items.count} duration={items.duration}/> +
                              </p>
                              <p className='font-Manrope font-regular text-white text-lg'>{items.title}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
