import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, changeCategory, stateCategory }) => {
  return (
    <div className={
      title===stateCategory
        ? "button-container button-active"
        : "button-container"
    }
    onClick={() => { changeCategory(title); }}>
      <button>
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  changeCategory: PropTypes.func,
  stateCategory: PropTypes.string
};

export default Button;
