import React from 'react';
import PropTypes from 'prop-types';

const Scroll = ( {scrollData} ) => {
  return (
    <div className="scroll-text">
      <div className="scroll-cont">
        <p className="scroll-p">
          {scrollData[6].opening_crawl}          
        </p>
      </div>
    </div>
  );
};

Scroll.propTypes = {
  scrollData: PropTypes.string
};

export default Scroll;
