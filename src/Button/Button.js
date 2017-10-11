import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return (
    <div className="button-container">
      <button>
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string
};

export default Button;
