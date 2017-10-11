import React, { Component } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      category: ''
    };
  }

  changeCategory = (category) => {
    this.setState({ category });
  }

  renderPeople(people) {
    return people.map(person =>
      <Card key={Math.random()}
        title={person.name}
        line1={`Homeworld: ${person.homeworld}`}
        line2={`Homeworld Population: ${person.population}`}
        line3={`Species`}/>);
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
              : 'Residents: none'}/>
        );
      })
    );
  }

  renderCards = () => {
    if (this.state.category) {
      const dataForCards = this.props.dataForCards;
      switch (this.state.category) {
      case 'People':
        return this.renderPeople(dataForCards[0]);
      case 'Planets':
        return this.renderPlanets(dataForCards[1]);
      default:
        return (
          <div></div>
        );
      }

    }
  }

  render() {
    const mappedButtons = this.props.buttonTitles.map((title)=>(
      <Button
        key={Math.random()}
        title={title}
        changeCategory={this.changeCategory}
      />
    ));

    return (
      <div className="card-container">
        {mappedButtons}
        {this.renderCards()}
      </div>
    );
  }
}

CardContainer.propTypes = {
  dataForCards: PropTypes.arrayOf(PropTypes.array),
  buttonTitles: PropTypes.arrayOf(PropTypes.string)
};

export default CardContainer;
