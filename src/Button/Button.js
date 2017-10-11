import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, changeCategory }) => {
  return (
    <div className="button-container"
      onClick={() => { changeCategory(title); }}>
      <button>
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  changeCategory: PropTypes.func
};

export default Button;
