import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import CardContainer from '../CardContainer/CardContainer';
import logo from '../assets/imp-logo.svg';
import { Route } from 'react-router';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: []
    };
    this.peopleHolder = [];
  }

  componentDidMount() {
    const people = fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .catch(error => console.log(error)
    );
    const planets = fetch('https://swapi.co/api/planets/')
      .then(res => res.json())
      .catch(error => console.log(error)
    );
    const vehicles = fetch('https://swapi.co/api/vehicles/')
      .then(res => res.json())
      .catch(error => console.log(error)
    );
    const scroll = fetch('https://swapi.co/api/films/')
      .then(res => res.json())
      .catch(error => console.log(error)
    );

    return Promise.all([people, planets, vehicles, scroll]).then( res => {
      const peopleInfo = this.squashPeopleArrays(res[0].results);
      const planetInfo = this.fetchPlanetResidents(res[1].results);

      return Promise.all([
        peopleInfo,
        planetInfo,
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

  squashPeopleArrays(peopleData) {
    this.fetchHomeworld(peopleData);
    this.fetchSpecies(peopleData);

    return Promise.all([...this.peopleHolder[0], ...this.peopleHolder[1]])
      .then(res => {
        const homeWorldInfo = res.slice(0, 10);
        const speciesInfo = res.slice(10);
        return homeWorldInfo.map(personObj => {
          const match = speciesInfo.find(specie => {
            return specie.name === personObj.name;
          });
          return Object.assign(personObj, { species: match.species });
        });
      });
  }

  fetchHomeworld(peopleData) {
    const peopleArray = peopleData.map((personObj) => {
      return fetch(personObj.homeworld)
        .then(res => res.json())
        .then(res =>
          Object.assign({}, { name: personObj.name,
            homeworld: res.name,
            population: res.population })
        )
        .catch(error => alert(error));
    });
    this.peopleHolder.push(peopleArray);
  }

  fetchSpecies(peopleData) {
    const speciesArray = peopleData.map(person => {
      return fetch(person.species)
        .then(res => res.json())
        .then(res =>
          Object.assign({}, { name: person.name,
            species: res.name}

          )
        )
        .catch(error => alert(error));
    });

    this.peopleHolder.push(speciesArray);
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
              <CardContainer
                dataForCards={this.dataForCards(this.state.dataSet)}
                buttonTitles={['Favorites', 'People', 'Planets', 'Vehicles']}
                scrollData={this.state.dataSet[3]}
              />
          }
        </main>
      </div>
    );
  }
}

export default App;
