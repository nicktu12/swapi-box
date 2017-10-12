import React from 'react';
import PropTypes from 'prop-types';

const Scroll = ( {scrollData} ) => {
  const ranNumGen = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const ranNum = ranNumGen(0, scrollData.length - 1);

  return (
    <div className="scroll-text">
      <div className="scroll-cont">
        <p className="scroll-p">
          {scrollData[ranNum].opening_crawl}
          <br/>
          <br/>
          {scrollData[ranNum].title}
          <br/>
          <br/>
          {scrollData[ranNum].release_date}
        </p>
      </div>
    </div>
  );
};

Scroll.propTypes = {
  scrollData: PropTypes.arrayOf(PropTypes.object)
};

export default Scroll;
