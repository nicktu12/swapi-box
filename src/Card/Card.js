import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, line1, line2, line3 }) => {
  return (
    <div>
      <article>
        <h3>{title}</h3>
        <p>{line1}</p>
        <p>{line2}</p>
        <p>{line3}</p>
      </article>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string
};

export default Card;
