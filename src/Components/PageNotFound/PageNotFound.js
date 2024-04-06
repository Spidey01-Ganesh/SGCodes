import React from 'react';
import './PageNotFound.scss';
import Lottie from 'lottie-react';
import notfounder from '../../Lottie/not-found.json';
import { useNavigate } from 'react-router-dom';


const PageNotFound = () => {


  const navigate = useNavigate()

  return (
    <div className="PageNotFound w-full h-screen flex items-center justify-center bg-homeblack">
      <div className="content-not-found-sec">
        <div className="top-404-content relative w-full max-w-[556px] mx-auto">
          <h2 className='font-light font-DmSans text-white text-[300px] leading-[310px] '>4<span className='text-darkgreen'>0</span>4</h2>
          <div className="eye-absolute-section absolute top-1/2 left-1/2">
              <Lottie
                animationData={notfounder}
                loop={true}
                style={{width: "100%" , height: "120px" , objectFit: "cover" }}
              />
          </div>
        </div>
        <div className="bottom-text-section-not-found">
          <h4 className='text-white font-DmSans font-semibold text-5xl text-center mb-4'>Lost in the digital wilderness?</h4>
          <p className='font-Manrope text-darkgreen font-light text-center text-xl'>Let's get you back on track.</p>
        </div>
        <div className="click-to-home-notfounder text-center mt-8">
          <button type="button" onClick={() => navigate('/')} className='bg-white text-center w-48 rounded-2xl h-12 relative font-DmSans text-homeblack text-xl font-semibold group'>
            <div className="backarrow-getback bg-darkgreen rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <i class="bi bi-arrow-left text-homeblack"></i>
            </div>
            <p className=' translate-x-2'>Get Back</p>
          </button>
        </div>
      </div>
    </div>
  );
}

PageNotFound.propTypes = {};

PageNotFound.displayName = 'NotFound'

PageNotFound.defaultProps = {};

export default PageNotFound;
