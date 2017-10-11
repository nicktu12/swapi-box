import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import CardContainer from '../CardContainer/CardContainer';
import logo from '../assets/imp-logo.svg';
// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: []
    };
  }

  componentDidMount() {
    const people = fetch('https://swapi.co/api/people/')
      .then(res => res.json());
    const planets = fetch('https://swapi.co/api/planets/')
      .then(res => res.json());
    const vehicles = fetch('https://swapi.co/api/vehicles/')
      .then(res => res.json());
    const scroll = fetch('https://swapi.co/api/films/')
      .then(res => res.json());

    return Promise.all([people, planets, vehicles, scroll]).then( res => {
      const peopleOrigin = this.fetchHomeworld(res[0].results);
      const planetResidents = this.fetchPlanetResidents(res[1].results);

      return Promise.all([
        peopleOrigin,
        planetResidents,
        vehicles,
        scroll]).then(res => {
        this.setState({ dataSet:
          [res[0],
            res[1],
            res[2].results,
            res[3].results]});
      });
    });
  }

  fetchHomeworld(peopleData) {
    const peopleArray = [];
    peopleData.map((personObj) => {
      return fetch(personObj.homeworld)
        .then(res => res.json())
        .then(res => peopleArray.push(
          Object.assign(personObj, { homeworld: res.name,
            population: res.population }))
        );
    });
    return peopleArray;
  }

  fetchPlanetResidents(planetData) {
    const planetArray = [];
    planetData.map((planetObj) => {
      const planetResidents = planetObj.residents.map((link, index) => {
        return fetch(link).then(res => res.json());
      });

      return Promise.all(planetResidents)
        .then(res => planetArray.push(
          Object.assign(planetObj, {residentArray: res} )));
    });
    return planetArray;
  }

  dataForCards(dataSet) {
    if (dataSet) {
      return [dataSet[0], dataSet[1], dataSet[2]];
    } else {
      return null;
    }
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SWAPIbox</h1>
        </header>
        <main>
          {
            this.state.dataSet.length === 0 ?
              <Loader /> :
              <CardContainer dataForCards={
                this.dataForCards(this.state.dataSet)
              }
              buttonTitles={['People', 'Planets', 'Vehicles']}/>
          }
        </main>
      </div>
    );
  }
}

export default App;
