import React, { Component } from 'react';
import Card from '../Card/Card';
import Scroll from '../Scroll/Scroll';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { Route } from 'react-router';


class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      faves: []
    };
    this.faves = [];
  }

  changeCategory = (category) => {
    this.setState({ category });
  }

  favoriteACard = (object) => {
    const { faves } = this.state;
    const found = faves.findIndex(currentfave => currentfave.title === object.title);
    found > -1 ? faves.splice(found, 1) : faves.push(object);
    this.setState({ faves });
  }

  renderPeople(people) {
    return people.map(person =>
      <Card key={Math.random()}
        title={person.name}
        line1={`Homeworld: ${person.homeworld}`}
        line2={`Homeworld Population: ${person.population}`}
        line3={`Species: ${person.species}`}
        line4={''}
        favoriteFunc={this.favoriteACard}
        className={
          this.state.faves.find(fave => fave.title === person.name) ? 'favorite' : 'unfavorite'
        }/>);
  }

  renderPlanets(planets) {
    return (
      planets.map(planet => {
        const residentText = planet.residentArray.map(resident => {
          return resident.name;
        }).join(', ');
        return (
          <Card key={Math.random()}
            title={planet.name}
            line1={`Terrain: ${planet.terrain}`}
            line2={`Population: ${planet.population}`}
            line3={`Climate: ${planet.climate}`}
            line4={residentText.length ? `Residents: ${residentText}`
              : 'Residents: none'}
            favoriteFunc={this.favoriteACard}
            className={
              this.state.faves.find(fave => fave.title === planet.name) ? 'favorite' : 'unfavorite'
            }/>
        );
      })
    );
  }

  renderVehicles(vehicles) {
    return (
      vehicles.map(vehicle => {
        return (
          <Card key={Math.random()}
            title={vehicle.name}
            line1={`Model: ${vehicle.model}`}
            line2={`Class: ${vehicle.vehicle_class}`}
            line3={`Maximum Number of Passengers: ${vehicle.passengers}`}
            line4={''}
            favoriteFunc={this.favoriteACard}
            className={
              this.state.faves.find(fave => fave.title === vehicle.name) ? 'favorite' : 'unfavorite'
            }/>
        );
      })
    );
  }

  renderFavorites(array) {
    let favoriteCards = array.map(card =>
      <Card key={Math.random()}
        title={card.title}
        line1={card.line1}
        line2={card.line2}
        line3={card.line3}
        line4={card.line4}
        favoriteFunc={this.favoriteACard}
        className={
          this.state.faves.find(fave => fave.title === card.title) ? 'favorite' : 'unfavorite'
        }/>);
      return (this.state.faves.length ?  favoriteCards : <div>There are no favorites.</div>);
  }

  renderCards = () => {
    if (this.state.category) {
      console.log('cat', this.state.category)
      const dataForCards = this.props.dataForCards;
      switch (this.state.category) {
      case 'People':
        return this.renderPeople(dataForCards[0]);
      case 'Planets':
        return this.renderPlanets(dataForCards[1]);
      case 'Vehicles':
        return this.renderVehicles(dataForCards[2]);
      case 'Favorites':
        return this.renderFavorites(this.state.faves);
      default:
        return (
          <div></div>
        );
      }

    }
  }

  renderButtons() {
    return this.props.buttonTitles.map((title)=>(
      <Button
        key={Math.random()}
        title={(title !== 'Favorites') ? title : `Favorites ${this.state.faves.length}`}
        category={title}
        changeCategory={this.changeCategory}
        stateCategory={this.state.category}
      />
    ));
  }

  render() {
    return (
      <div className="card-container">
        <Scroll scrollData={this.props.scrollData}/>
        {this.renderButtons()}
        {/* {this.renderCards()} */}
        <Route exact path='/People'
          render={ () => this.renderPeople(this.props.dataForCards[0])}
        />
        <Route exact path='/Planets'
          render={ () => this.renderPlanets(this.props.dataForCards[1])}
        />
        <Route exact path='/Vehicles'
          render={ () => this.renderVehicles(this.props.dataForCards[2])}
        />
        <Route exact path='/Favorites'
          render={ () => this.renderFavorites(this.state.faves)}
        />
      </div>
    );
  }
}

CardContainer.propTypes = {
  dataForCards: PropTypes.arrayOf(PropTypes.array),
  buttonTitles: PropTypes.arrayOf(PropTypes.string),
  scrollData: PropTypes.arrayOf(PropTypes.object)
};

export default CardContainer;
