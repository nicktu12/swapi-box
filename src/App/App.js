import React, { Component } from 'react';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import logo from '../assets/imp-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button />
        <CardContainer />
      </div>
    );
  }
}

export default App;
