import React, { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import './HtmlLearn.scss';


const HtmlLearn = (props) => {

  const btnData = props.data;


  return (
    <div className="main-right-side-section">
      <div className={`html-inner-section ${btnData == true ? 'bg-black' : 'bg-white'}`}>
        <p className={`font-Poppins text-6xl font-bold ${btnData == true ? 'text-white' : ' text-primary'} `}>This is Html</p>
      </div>
    </div>
  );
}

HtmlLearn.propTypes = {};

HtmlLearn.defaultProps = {};

export default HtmlLearn;
