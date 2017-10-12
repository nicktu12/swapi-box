import React from 'react';
import CardContainer from './CardContainer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAppState from '../mockData/mockAppState';

describe('CardContainer', () => {
  Enzyme.configure({ adapter: new Adapter() });
  const cardData = [mockAppState[0], mockAppState[1], mockAppState[2]];

  beforeEach(() => {
    const wrapper = mount(<CardContainer
      dataForCards={cardData}
      buttonTitles={['Favorites', 'People', 'Planets', 'Vehicles']}
      scrollData={mockAppState[3]}
    />);
  });

  // 
});
