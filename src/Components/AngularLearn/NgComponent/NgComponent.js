import React from 'react';
import PropTypes from 'prop-types';
import './NgComponent.scss';

const NgComponent = () => {
  return (
    <div className="main-right-side-section">
      <div className="ngcompo-main-section">
        <section>
          <div className="ngcompo-section-1">
            <div className="ngcompo-section-1-inner">
              <p>Component Creation</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

NgComponent.propTypes = {};

NgComponent.defaultProps = {};

export default NgComponent;
