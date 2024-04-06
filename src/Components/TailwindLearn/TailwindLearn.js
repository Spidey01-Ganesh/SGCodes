import React from 'react';
import PropTypes from 'prop-types';
import './TailwindLearn.scss';

const TailwindLearn = () => {
  return (
    <div className="main-right-side-section">
      <div className="tailwind-inner-section">
        <p className='font-Poppins text-6xl font-bold text-Primary'>This is Tailwind</p>
      </div>
    </div>  
  );
}

TailwindLearn.propTypes = {};

TailwindLearn.defaultProps = {};

export default TailwindLearn;
