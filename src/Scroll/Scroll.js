import React from 'react';
import PropTypes from 'prop-types';

const Scroll = ( {scrollData} ) => {
  const ranNumGen = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="scroll-text">
      <div className="scroll-cont">
        <p className="scroll-p">
          {scrollData[ranNumGen(0, 6)].opening_crawl}
          <br/>
          <br/>
          {scrollData[ranNumGen(0, 6)].title}
          <br/>
          <br/>
          {scrollData[ranNumGen(0, 6)].release_date}
        </p>
      </div>
    </div>
  );
};

Scroll.propTypes = {
  scrollData: PropTypes.arrayOf(PropTypes.object)
};

export default Scroll;
