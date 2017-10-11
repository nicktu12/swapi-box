import React from 'react';
import PropTypes from 'prop-types';
import faveIcon from '../assets/favorite.png';
import notFaveIcon from '../assets/not-favorite.png';

const Card = ({ title, line1, line2, line3, line4, favoriteFunc, className }) => {
  const icon = (className === 'favorite') ? faveIcon : notFaveIcon;
  return (
    <div className={`card ${className}`}
      onClick={() => { favoriteFunc({ title, line1, line2, line3, line4 }); }}>
      <article>
        <img src={icon} alt='Text indicating if fave' />
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
