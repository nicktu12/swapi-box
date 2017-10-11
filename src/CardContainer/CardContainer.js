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
        {mappedCards}
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
