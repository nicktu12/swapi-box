import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import PropTypes from 'prop-types';


const CardContainer = ( { dataForCards }) => {
  const mappedButtons = dataForCards.map((dataSet)=>(
    <Button
      key = {Math.random()}
    />
  ));
  const mappedCards = dataForCards.map((dataSet)=>(
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
};

CardContainer.propTypes = {
  dataForCards: PropTypes.arrayOf(PropTypes.array)
};

export default CardContainer;
