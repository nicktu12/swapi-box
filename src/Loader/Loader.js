import React from 'react';
import logo from '../assets/imp-logo.svg';

const Loader = () => {
  return (
    <div className="loader-div">
      <p>Loading...</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default Loader;
