import './App.css';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Home from './Components/Home/Home';
import React , { useState } from 'react';
import HtmlLearn from './Components/HtmlLearn/HtmlLearn';
import CssLearn from './Components/CssLearn/CssLearn';
import ReactLearn from './Components/ReactLearn/ReactLearn';
import AngularLearn from './Components/AngularLearn/AngularLearn';
import { useLocation } from 'react-router-dom';
import TailwindLearn from './Components/TailwindLearn/TailwindLearn';
import SideMenuWrapper from './SideMenuWrapper';
import 'atropos/css'
import ComponentCreate from './Components/ReactLearn/ComponentCreate/ComponentCreate';
import DomRouting from './Components/ReactLearn/DomRouting/DomRouting';
import Hooks from './Components/ReactLearn/Hooks/Hooks';
import FormikForm from './Components/ReactLearn/FormikForm/FormikForm';
import ApiIntegration from './Components/ReactLearn/APIIntegration/APIIntegration';
import PaymentIntegration from './Components/ReactLearn/PaymentIntegration/PaymentIntegration';
import NgComponent from './Components/AngularLearn/NgComponent/NgComponent';
import RoutingMod from './Components/AngularLearn/RoutingMod/RoutingMod';
import FromsMod from './Components/AngularLearn/FromsMod/FromsMod';
import NgIfNgFor from './Components/AngularLearn/NgIfNgFor/NgIfNgFor';
import TabsMod from './Components/AngularLearn/TabsMod/TabsMod';
import NgApiIntegration from './Components/AngularLearn/NgApiIntegration/NgApiIntegration';
import NgPayment from './Components/AngularLearn/NgPayment/NgPayment';
import AboutMe from './Components/AboutMe/AboutMe';
import PageNotFound from './Components/PageNotFound/PageNotFound';


const TopStripSection = ({ sideCloser, toggleSideCloser }) => {

  const location = useLocation();
  const isPageNotFoundPage = location.pathname === '/' || location.pathname === '/About-Me' || location.pathname === '/LearnHtml' || 
  location.pathname === '/LearnTailwind' ||  location.pathname === '/LearnCss' || location.pathname.includes('LearnReact') || location.pathname.includes('LearnAngular');
  const isHomePage = location.pathname === '/' || location.pathname === '/About-Me';
  const nameOfLocation = location.pathname.split('/')[1] === 'LearnReact' ? 'React' : location.pathname.split('/')[1] === 'LearnAngular' ? 'Angular' : 'HTML'
  console.log(location.pathname.split('/')[1])

  return (
      <div className={`top-strip-section fixed left-0 w-full items-center top-0 bg-PrimaryBlack bg-opacity-40 shadow-xl h-full max-h-16 duration-500 pr-8 ${sideCloser ? 'de-active' : 'active'} ${isHomePage ? 'hidden' : 'flex'} ${isPageNotFoundPage ? '' : 'hidden'}`}>
          <div className="inner-top-strip-section flex items-center justify-between w-full">
              <div className="left-button-text-sec flex items-center gap-6">
                <div className="button-sec">
                  <button type="button" className={`w-9 h-9 bg-white rounded-full items-center justify-center flex flex-col gap-1 p-2 ${sideCloser ? 'activer' : ''}`} onClick={() => toggleSideCloser(!sideCloser)}>
                    <div className="similar-lines liner-1 h-[2px] bg-homeblack w-full"></div>
                    <div className="similar-lines liner-2 h-[2px] bg-homeblack w-full"></div>
                    <div className="similar-lines liner-3 h-[2px] bg-homeblack w-full"></div>
                  </button>
                </div>
                <div className="texter-section">
                  <div className="react-head-section flex items-center gap-4">
                    <h2 className='text-darkgreen text-3xl font-extrabold font-Manrope'>{nameOfLocation}</h2>
                  </div>
                </div>
              </div>
              <div className="search-section">
                <div className="search-input w-full min-w-[280px] relative overflow-hidden rounded-full shadow-xl">
                  <div className="search-icon absolute w-8 flex items-center justify-center top-0 left-0 h-full border-r border-r-homeblack border-opacity-40 pl-2 pr-2">
                    <i class="bi bi-search"></i>
                  </div>
                  <input type="text" name="" id="" placeholder='Search Anything...'  className='w-full outline-none bg-white pl-10 pr-5 py-2 font-Manrope text-sm '/>
                </div>
              </div>
          </div>
      </div>
  )

}

function App() {

  const [sideCloser , setSideCloser] = useState(false)

  const toggleSideCloser = (value) => {
    setSideCloser(value);
  };

  return (
    <div className="App">
      <Router>  
          <TopStripSection sideCloser={sideCloser} toggleSideCloser={toggleSideCloser} />
          <Routes>

            <Route exact={true} element={<Home/>} path="/"/>
            <Route exact={true} element={<AboutMe/>} path="/About-Me"/>
            <Route exact={true} element={<HtmlLearn data={sideCloser}/>} path='LearnHtml'/>
            <Route exact={true} element={<CssLearn data={sideCloser}/>} path='LearnCss'/>

            {/* React Routes */}
            <Route exact={true} element={<ReactLearn data={sideCloser}/>} path='LearnReact'/>
            <Route exact={true} element={<ComponentCreate data={sideCloser}/>} path='LearnReact/Components'/>
            <Route exact={true} element={<DomRouting data={sideCloser}/>} path='LearnReact/DomRouting'/>
            <Route exact={true} element={<Hooks data={sideCloser}/>} path='LearnReact/Hooks'/>
            <Route exact={true} element={<FormikForm data={sideCloser}/>} path='LearnReact/FormikForm'/>
            <Route exact={true} element={<ApiIntegration data={sideCloser}/>} path='LearnReact/ApiIntegration'/>
            <Route exact={true} element={<PaymentIntegration data={sideCloser}/>} path='LearnReact/PaymentIntegration'/>
            {/* React Routes End */}

            {/* Angular Routes */}
            <Route exact={true} element={<AngularLearn data={sideCloser}/>} path='LearnAngular'/> 
            <Route exact={true} element={<NgComponent data={sideCloser}/>} path='LearnAngular/Components'/> 
            <Route exact={true} element={<RoutingMod data={sideCloser}/>} path='LearnAngular/Routing'/> 
            <Route exact={true} element={<FromsMod data={sideCloser}/>} path='LearnAngular/FormsModule'/> 
            <Route exact={true} element={<NgIfNgFor data={sideCloser}/>} path='LearnAngular/*NgFor-*NgIf'/> 
            <Route exact={true} element={<TabsMod data={sideCloser}/>} path='LearnAngular/Tabs'/> 
            <Route exact={true} element={<NgApiIntegration data={sideCloser}/>} path='LearnAngular/ApiIntegration'/> 
            <Route exact={true} element={<NgPayment data={sideCloser}/>} path='LearnAngular/PaymentIntegration'/> 
            {/* Angular Routes End */}

            <Route exact={true} element={<TailwindLearn data={sideCloser}/>} path='LearnTailwind'/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        <SideMenuWrapper data={sideCloser}/>
      </Router>
    </div>
  );
}


export default App;
