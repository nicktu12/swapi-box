import React from 'react';
import PropTypes from 'prop-types';
import faveIcon from '../assets/favorite.png';
import notFaveIcon from '../assets/not-favorite.png';

const Card = ({ title,
  line1,
  line2,
  line3,
  line4,
  favoriteFunc,
  className,
  category }) => {
  const icon = (className === 'favorite') ? faveIcon : notFaveIcon;
  const altText = (className === 'favorite') ?
    'This card is a favorite.' : 'This card is not a favorite.';
  return (
    <div className={`card ${className}`}
      onClick={() => { favoriteFunc({ title, line1, line2, line3, line4 }); }}>
      <article>
        <img src={icon} alt={altText} />
        <p className='card-cat'>{category}</p>
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
  favoriteFunc: PropTypes.func,
  className: PropTypes.string,
  category: PropTypes.string
};

export default Card;
