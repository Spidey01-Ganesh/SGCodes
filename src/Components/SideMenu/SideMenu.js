import React, { useState } from 'react';
import './SideMenu.scss';
import { NavLink, useNavigate } from 'react-router-dom';

const SideMenu = (props) => {

  const sideCloser = props.data;

  const navigate = useNavigate();

  const homeNavigate = () => {
    navigate('/')
  }

  const [reactivate , setReactivate] = useState(false);
  const [angActivate , setAngActivate] = useState(false);
  const [reactSub , setReactSub] = useState('');
  const [angSub , setAngSub] = useState('');

  const reactSubNav = [
    {
      name: "Components",
      path: '/LearnReact/Components'
    },
    {
      name: "DOM Routing",
      path: '/LearnReact/DomRouting'
    },
    {
      name: "Hooks",
      path: '/LearnReact/Hooks'
    },
    {
      name: "Formik Forms",
      path: '/LearnReact/FormikForm'
    },
    {
      name: "API Integration",
      path: '/LearnReact/ApiIntegration'
    },
    {
      name: "Payment Integration",
      path: '/LearnReact/PaymentIntegration'
    }
  ]

  const angularSubNav = [
    {
      name: "Components",
      path: '/LearnAngular/Components'
    },
    {
      name: "Routing",
      path: '/LearnAngular/Routing'
    },
    {
      name: "Forms Module",
      path: '/LearnAngular/FormsModule'
    },
    {
      name: "*NgFor,*NgIf",
      path: '/LearnAngular/*NgFor-*NgIf'
    },
    {
      name: "Tabs",
      path: '/LearnAngular/Tabs'
    },
    {
      name: "API Integration",
      path: '/LearnAngular/ApiIntegration'
    },
    {
      name: "Payment Integration",
      path: '/LearnAngular/PaymentIntegration'
    }
  ]


  const reactHandler = () => {
    setReactivate(!reactivate); 
    setAngSub(''); 
    setAngActivate(false)
  }

  const angularHandler = () => {
    setAngActivate(!angActivate)
    setReactSub(''); 
    setReactivate(false); 
  }

  return  (
    <div className="SideMenu">
      <div className="sidebar-inner-section">
        <div className={`sidemenu-closer-section fixed  top-0 w-full max-w-[250px] bg-PrimaryBlack h-full overflow-hidden overflow-y-auto z-10 duration-500  ${sideCloser === true ? 'de-active' : 'active'}`}>
            <div className="sidemenu-logo pt-7 pb-7 px-5 border-b border-b-greenYellow sticky top-0 bg-PrimaryBlack left-0 z-10">
              <button className="sidemenu-logo-inner flex group " onClick={homeNavigate}>
                <svg viewBox="0 0 126 206" fill="none" className='duration-500 w-14 h-14' xmlns="http://www.w3.org/2000/svg">
                  <path  d="M113 3H13L3 23M113 3L123 23L83 103M113 3L73 83M3 23H83L63 63L53 43M3 23L53 123L13 203M3 23L73 163H53H93L33 43M53 43L93 123M53 43L123 183M73 43H33M33 43L73 123M123 183L113 203H13M123 183H43L63 143M13 203L3 183L43 103" stroke="white" className='group-hover:stroke-redTheme duration-300' stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="right-side-text flex flex-col justify-between">
                  <div className="top-text">
                    <h2 className='text-xl text-left text-white font-Poppins'>SG</h2>
                  </div>
                  <div className="bottom-text"> 
                    <p className='text-2xl text-white font-medium font-Rubik duration-300 relative'>CODES</p>
                  </div>
                </div> 
              </button>
            </div>
            <div className="inner-sidemenu-scroll py-4 relative">
              <div className="bottom-navigation">
                  <nav>
                    <ul className='flex flex-col gap-2'>
                      <li>
                        <NavLink className={`navigation-linker ${reactSub !== '' ? 'active' : ''}`} to={'LearnReact'} onClick={reactHandler}>
                          <div className=" overflow-hidden relative route-link-outer flex items-center gap-4 px-3 py-2 hover:bg-lightYellow duration-300">
                            <div className="left-icon bg-lightYellow w-10 h-10 flex items-center justify-center rounded-xl">
                                <svg className='w-5 h-5' viewBox="0 0 150 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path  d="M75 53.3548C67.6266 53.3548 61.6219 59.3595 61.6219 66.7329C61.6219 74.1064 67.6266 80.1111 75 80.1111C82.3734 80.1111 88.3781 74.1064 88.3781 66.7329C88.3781 59.3595 82.3734 53.3548 75 53.3548ZM37.5469 93.3204L34.5938 92.5892C12.6187 87.0204 0 77.5986 0 66.7095C0 55.8204 12.6234 46.3986 34.5938 40.8298L37.5469 40.0986L38.3766 43.0283C40.5984 50.6923 43.4531 58.1642 46.8984 65.3923L47.5313 66.7095L46.8984 68.0501C43.4578 75.2501 40.5984 82.722 38.3766 90.4142L37.5469 93.3204ZM33.2297 47.6642C16.5281 52.3517 6.27656 59.5517 6.27656 66.7095C6.27656 73.8673 16.5328 81.0392 33.2297 85.7548C35.2828 79.2345 37.7484 72.8876 40.6266 66.7095C37.7437 60.5314 35.2781 54.1845 33.2297 47.6642ZM112.453 93.3204L111.623 90.3908C109.402 82.7267 106.547 75.2548 103.102 68.0501L102.469 66.7095L103.102 65.3689C106.542 58.1689 109.402 50.697 111.623 43.0048L112.453 40.0986L115.406 40.8298C137.381 46.3986 150 55.8204 150 66.7095C150 77.5986 137.377 87.0204 115.406 92.5892L112.453 93.3204ZM109.373 66.7095C112.378 73.2017 114.867 79.5767 116.77 85.7548C133.495 81.0439 143.723 73.8673 143.723 66.7095C143.723 59.5517 133.467 52.3798 116.77 47.6642C114.717 54.1564 112.252 60.5314 109.373 66.7095ZM33.1781 47.6408L32.3484 44.7111C26.1703 22.9329 28.05 7.30951 37.5 1.86264C46.7766 -3.4858 61.6453 2.83763 77.2453 18.8548L79.3687 21.0298L77.2453 23.2048C71.7047 28.9658 66.6516 35.1673 62.1094 41.7579L61.2562 42.9533L59.7891 43.0751C51.8063 43.7079 43.8938 44.9783 36.1313 46.8861L33.1781 47.6408ZM45.0422 6.21263C43.3594 6.21263 41.8688 6.55482 40.6219 7.28607C34.4203 10.8767 33.3234 23.3267 37.5938 40.122C44.2594 38.6314 50.9953 37.5814 57.8109 36.972C61.7156 31.4033 66.0141 26.0829 70.6266 21.0767C60.8859 11.5798 51.6563 6.21263 45.0422 6.21263ZM104.981 133.455C104.958 133.455 104.958 133.455 104.981 133.455C96.0703 133.455 84.6187 126.766 72.7547 114.559L70.6312 112.385L72.7547 110.209C78.2953 104.449 83.3484 98.247 87.8906 91.6564L88.7203 90.4611L90.1875 90.3158C98.1703 89.7064 106.083 88.4361 113.869 86.5048L116.822 85.7736L117.652 88.7033C123.83 110.481 121.95 126.081 112.5 131.524C110.203 132.841 107.616 133.506 104.981 133.455ZM79.3687 112.338C89.1094 121.834 98.3391 127.206 104.953 127.206H104.977C106.636 127.206 108.127 126.841 109.373 126.133C115.575 122.542 116.7 110.092 112.402 93.297C105.736 94.7876 98.9719 95.8376 92.1844 96.4236C88.2797 102.016 83.9812 107.308 79.3687 112.338ZM116.822 47.6408L113.869 46.8861C106.083 44.9829 98.1703 43.7126 90.1875 43.0751L88.7203 42.9533L87.8906 41.7579C83.3484 35.1673 78.2953 28.9658 72.7547 23.2048L70.6312 21.0298L72.7547 18.8548C88.3547 2.83763 103.223 -3.4858 112.5 1.86264C121.95 7.30482 123.83 22.9329 117.652 44.7111L116.822 47.6408ZM92.1891 36.972C99.3187 37.6329 106.106 38.6829 112.406 40.122C116.705 23.3267 115.58 10.872 109.378 7.28607C103.2 3.72357 91.5797 9.1892 79.3734 21.0814C83.9859 26.1111 88.2609 31.4079 92.1891 36.9767V36.972ZM45.0422 133.455C42.4031 133.502 39.7922 132.845 37.5 131.528C28.05 126.086 26.1703 110.481 32.3484 88.7079L33.1781 85.7783L36.1313 86.5095C43.3594 88.3423 51.3188 89.6079 59.7891 90.3204L61.2562 90.4658L62.0859 91.6611C66.6281 98.2517 71.6813 104.453 77.2219 110.214L79.3453 112.389L77.2219 114.564C65.3813 126.77 53.9297 133.46 45.0422 133.46V133.455ZM37.5984 93.297C33.3 110.092 34.425 122.547 40.6266 126.133C46.8047 129.649 58.4016 124.23 70.6312 112.338C66.0187 107.308 61.7203 102.011 57.8156 96.4189C51.0047 95.8329 44.2641 94.7876 37.5984 93.297ZM75 97.2251C69.8484 97.2251 64.575 97.0048 59.2781 96.5642L57.8109 96.4423L56.9578 95.2236C53.9813 90.9251 51.1453 86.5095 48.5344 81.9673C45.8953 77.4251 43.4812 72.7892 41.2359 68.0501L40.6031 66.7095L41.2359 65.3689C43.4812 60.6345 45.9 55.9939 48.5344 51.4517C51.1219 46.9845 53.9531 42.5173 56.9578 38.1954L57.8109 36.9767L59.2781 36.8548C69.75 35.9736 80.2734 35.9736 90.7219 36.8548L92.1891 36.9767L93.0422 38.1954C99.0234 46.7876 104.297 55.8954 108.764 65.3689L109.397 66.7095L108.764 68.0501C104.297 77.5236 99.0469 86.6314 93.0422 95.2236L92.1891 96.4423L90.7219 96.5642C85.4484 97.0048 80.1516 97.2251 75 97.2251ZM61.2797 90.4376C70.5094 91.1454 79.4906 91.1454 88.7437 90.4376C93.8953 82.8954 98.4844 74.9595 102.464 66.7048C98.5078 58.4548 93.9188 50.5189 88.7203 42.972C79.5891 42.2642 70.4109 42.2642 61.2797 42.972C56.0812 50.5142 51.4875 58.4501 47.5359 66.7048C51.5156 74.9548 56.1047 82.8907 61.2797 90.4376Z" fill="black" className='fill-greenYellow duration-300'/>
                                </svg> 
                            </div>
                            <div className="right-route">
                              <p className='font-Rubik text-white text-base duration-300'>React</p>
                            </div>
                          </div>
                        </NavLink>
                        <div className={`menu-sub-outer overflow-hidden duration-500 transition-all  ${reactivate ? 'h-[280px]' : 'h-0'}`}>
                          <div className="inner-sub-outer py-5 px-5">
                            <ul className='flex flex-col'>
                              {reactSubNav.map((items , index) => {
                                return (
                                  <li key={index} className={`text-sm font-Manrope py-[10px] pl-5 pr-3 inner-sub-links`} onClick={() => setReactSub(items.name)}>
                                    <NavLink to={items.path}>
                                      {items.name}
                                    </NavLink>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <NavLink className={`navigation-linker ${angSub !== '' ? 'active' : ''}`} to={'LearnAngular'} onClick={angularHandler}>
                          <div className=" overflow-hidden relative route-link-outer flex items-center gap-4 px-3 py-2 hover:bg-lightYellow duration-300">
                            <div className="left-icon bg-lightYellow w-10 h-10 flex items-center justify-center rounded-xl">
                              <svg className='w-5 h-5' viewBox="0 0 150 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M75 0L150 26.7251L138.631 125.99L75 161.199L11.3688 125.99L0 26.7251L75 0ZM75 17.8167L28.0826 123.02H45.56L54.9774 99.4344H94.8529L104.27 123.02H121.663L75 17.8167ZM88.7443 84.8416H61.3405L75 52.0079L88.7443 84.8416Z" fill="black" className='fill-greenYellow duration-300'/>
                              </svg> 
                            </div>
                            <div className="right-route">
                              <p className='font-Rubik text-white text-base duration-300'>Angular</p>
                            </div>
                          </div>
                        </NavLink>
                        <div className={`menu-sub-outer overflow-hidden duration-500 transition-all  ${angActivate ? 'h-[320px]' : 'h-0'}`}>
                          <div className="inner-sub-outer py-5 px-5">
                            <ul className='flex flex-col'>
                              {angularSubNav.map((items , index) => {
                                return (
                                  <li key={index} className={`text-sm font-Manrope py-[10px] pl-5 pr-3 inner-sub-links`} onClick={() => setAngSub(items.name)}>
                                    <NavLink to={items.path}>
                                      {items.name}
                                    </NavLink>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <NavLink className={'navigation-linker'} to={'LearnHtml'}>
                          <div className=" overflow-hidden relative route-link-outer flex items-center gap-4 px-3 py-2 hover:bg-lightYellow duration-300">
                            <div className="left-icon bg-lightYellow w-10 h-10 flex items-center justify-center rounded-xl">
                              <svg className='w-5 h-5' viewBox="0 0 150 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M0 0L13.6328 154.605L74.8047 174.995L136.367 154.605L150 0H0ZM120.391 49.9595H48.5938L50.1953 69.2559H118.789L113.477 127.223L75.2344 137.77V137.887H74.8047L36.25 127.223L33.9063 97.6144H52.5391L53.9062 112.497L74.8047 118.161L95.7812 112.497L98.125 88.2006H32.9297L27.9297 31.3272H122.109L120.391 49.9595Z" fill="black" className='fill-greenYellow duration-300'/>
                              </svg> 
                            </div>
                            <div className="right-route">
                              <p className='font-Rubik text-white text-base duration-300'>HTML</p>
                            </div>
                          </div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className={'navigation-linker'} to={'LearnCss'}>
                          <div className=" overflow-hidden relative route-link-outer flex items-center gap-4 px-3 py-2 hover:bg-lightYellow duration-300">
                            <div className="left-icon bg-lightYellow w-10 h-10 flex items-center justify-center rounded-xl">
                              <svg className='w-5 h-5' viewBox="0 0 150 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M0 0L13.6328 154.609L75 175L136.367 154.609L150 0H0ZM122.305 31.25L120.43 49.7266L75.3906 68.9844L75.2734 69.0234H118.828L113.828 126.289L75.4687 137.5L36.875 126.094L34.375 97.2266H53.4766L54.7266 112.188L75.2734 117.383L96.6406 111.367L98.0859 87.3047L33.125 87.1094V87.0703L33.0469 87.1094L31.6406 69.0234L75.4297 50.7812L77.9688 49.7266H29.9609L27.6953 31.25H122.305Z" fill="black" className='fill-greenYellow duration-300'/>
                              </svg> 
                            </div>
                            <div className="right-route">
                              <p className='font-Rubik text-white text-base duration-300'>CSS</p>
                            </div>
                          </div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className={'navigation-linker'} to={'LearnTailwind'}>
                          <div className=" overflow-hidden relative route-link-outer flex items-center gap-4 px-3 py-2 hover:bg-lightYellow duration-300">
                            <div className="left-icon bg-lightYellow w-10 h-10 flex items-center justify-center rounded-xl">
                                <svg className='w-5 h-5' viewBox="0 0 150 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path  d="M75 0C54.975 0 42.525 9.975 37.5 30C45 20.025 53.775 16.275 63.75 18.75C69.45 20.175 73.575 24.3 78.075 28.875C85.425 36.375 93.75 45 112.5 45C132.525 45 144.975 35.025 150 15C142.5 24.975 133.725 28.725 123.75 26.25C118.05 24.825 114 20.7 109.425 16.125C102.075 8.625 93.75 0 75 0ZM37.5 45C17.475 45 5.025 54.975 0 75C7.5 65.025 16.275 61.275 26.25 63.75C31.95 65.175 36 69.3 40.575 73.875C47.925 81.375 56.25 90 75 90C95.025 90 107.475 80.025 112.5 60C105 69.975 96.225 73.725 86.25 71.25C80.55 69.825 76.5 65.7 71.925 61.125C64.575 53.625 56.25 45 37.5 45Z" fill="black" className='fill-greenYellow duration-300'/>
                                </svg> 
                            </div>
                            <div className="right-route">
                              <p className='font-Rubik text-white text-base duration-300'>TailWind Css</p>
                            </div>
                          </div>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
              </div>
              <div className="bottom-follow-section absolute bottom-0 left-0 w-full">
                  
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

SideMenu.propTypes = {};

SideMenu.defaultProps = {};

export default SideMenu;
