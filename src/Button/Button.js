import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ title, changeCategory, stateCategory, category }) => {
  return (
    <div className={
      category===stateCategory
        ? "button-container button-active"
        : "button-container"
    }
    onClick={() => { changeCategory(category); }}>
      <Link to={title}>{title}</Link>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  changeCategory: PropTypes.func,
  stateCategory: PropTypes.string
};

export default Button;
