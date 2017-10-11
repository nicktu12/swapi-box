import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, line1, line2, line3, line4, favoriteFunc, className }) => {
  return (
    <div className={`card ${className}`}
      onClick={() => { favoriteFunc({ title, line1, line2, line3, line4 }); }}>
      <article>
        {/* <div>put an image or something in here</div> */}
        <h3>{title}</h3>
        <p>{line1}</p>
        <p>{line2}</p>
        <p>{line3}</p>
        <p>{line4}</p>
      </article>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  line4: PropTypes.string,
  favoriteFunc: PropTypes.func
};

export default Card;
