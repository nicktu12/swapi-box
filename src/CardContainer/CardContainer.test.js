import React from 'react';
import CardContainer from './CardContainer';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAppState from '../mockData/mockAppState';
import { withRouter } from 'react-router';
import { MemoryRouter as Router, Link } from 'react-router-dom';


describe('CardContainer', () => {
  Enzyme.configure({ adapter: new Adapter() });
  const cardData = [mockAppState[0], mockAppState[1], mockAppState[2]];
  const WrappedContainer = withRouter(<CardContainer
      dataForCards={cardData}
      buttonTitles={['Favorites', 'People', 'Planets', 'Vehicles']}
      scrollData={mockAppState[3]}
    />);
  const wrapper = mount(<CardContainer
      dataForCards={cardData}
      buttonTitles={['Favorites', 'People', 'Planets', 'Vehicles']}
      scrollData={mockAppState[3]}
    />);
  // let wrapper = mount(<CardContainer
  //     dataForCards={cardData}
  //     buttonTitles={['Favorites', 'People', 'Planets', 'Vehicles']}
  //     scrollData={mockAppState[3]}
  //   />);
  // should render scroll
  it('should have a scroll', () => {
    console.log(wrapper.debug())
  });
  // should render 3 buttons
  // should render right set of cards for button clicked
  // should change state when button clicked
  // should add card to faves when clicked- change state
  // faves should render nothing when nothing in array
  // faves should render something when something in array
  // snapshot
});
