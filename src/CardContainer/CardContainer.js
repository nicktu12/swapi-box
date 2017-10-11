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

  renderCards = () => {
    if (this.state.category) {
      const dataForCards = this.props.dataForCards;
      console.log(dataForCards[0])
      switch (this.state.category) {
        case 'People':
        return (
          dataForCards[0].map(person =>
            <Card key={Math.random()}
              title={person.name}
              line1={`Homeworld: ${person.homeworld}`}
              line2={`Homeworld Population: ${person.population}`}
              line3={`Species`}/>)
            );
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
    const mappedCards = this.props.dataForCards.map((dataSet)=>(
      <Card
        dataSet={dataSet}
        key={Math.random()}
      />));

    return (
      <div className="card-container">
        {mappedButtons}
        {this.renderCards()}
      </div>
    );
  }
}
// const CardContainer = ( { dataForCards, buttonTitles }) => {
//   const mappedButtons = buttonTitles.map((title)=>(
//     <Button
//       key={Math.random()}
//       title={title}
//     />
//   ));
//   const mappedCards = dataForCards.map((dataSet)=>(
//     <Card
//       dataSet={dataSet}
//       key={Math.random()}
//     />));
//
//   return (
//     <div className="card-container">
//       {mappedButtons}
//       {mappedCards}
//     </div>
//   );
// };

CardContainer.propTypes = {
  dataForCards: PropTypes.arrayOf(PropTypes.array),
  buttonTitles: PropTypes.arrayOf(PropTypes.string)
};

export default CardContainer;
