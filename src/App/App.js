import React, { Component } from 'react';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import logo from '../assets/imp-logo.svg';
// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: null
    };
  }

  componentDidMount() {
    const people = fetch('https://swapi.co/api/people/').then(res => res.json());
    const planets = fetch('https://swapi.co/api/planets/').then(res => res.json());
    const vehicles = fetch('https://swapi.co/api/vehicles/').then(res => res.json());
    const scroll = fetch('https://swapi.co/api/films/').then(res => res.json());

    return Promise.all([people, planets, vehicles, scroll]).then( res => {
      const peopleOrigin = this.fetchHomeworld(res[0].results);
      const planetResidents = this.fetchPlanetResidents(res[1].results);
      // console.log(peopleOrigin);
      // console.log(res[1].results)
      return Promise.all([peopleOrigin, planetResidents, vehicles, scroll]).then(res => {
        this.setState({ dataSet: [res[0], res[1], res[2].results, res[3].results ] });
        console.log(this.state.dataSet)
      });

    }
    );

  }

  fetchHomeworld(peopleData) {
    const peopleArray = [];
    const peopleHomeworldData = peopleData.map((personObj) => {
      return fetch(personObj.homeworld).then(res => res.json()).then(res => peopleArray.push(Object.assign(personObj, { homeworld: res.name, population: res.population })));
    })
    return peopleArray;
}

  fetchPlanetResidents(planetData) {
    const planetArray = [];
    const planetResidentsData = planetData.map((planetObj) => {
      const planetResidents = planetObj.residents.map((link, index) => {
        return fetch(link).then(res => res.json());
      });

      return Promise.all(planetResidents).then(res => planetArray.push(Object.assign(planetObj, res)));
    });

    return planetArray;
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SWAPIbox</h1>
        </header>
        <Button />
        <Button />
        <Button />
        <CardContainer />
      </div>
    );
  }
}

export default App;
