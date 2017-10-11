import React from 'react';
import Card from '../Card/Card';

const CardContainer = ( { dataForCards }) => {
  const mappedCards = (dataSetArray) => {
    if (dataSetArray) {
      dataSetArray.map((dataSet)=>{
        return [
          <Card
            dataSet={dataSet}
            key={Math.random()}
          />
        ];
      });
    }
  };

  return (
    <div className="card-container">
      {mappedCards(dataForCards)}
    </div>
  );
};

export default CardContainer;
