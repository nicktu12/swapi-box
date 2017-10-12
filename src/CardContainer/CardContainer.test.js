import React from 'react';
import CardContainer from './CardContainer';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAppState from '../mockData/mockAppState';
import { withRouter } from 'react-router';
import { MemoryRouter as Router, Link } from 'react-router-dom';


describe('CardContainer', () => {
  // would not use a before each so that tests can build of off previous changes
  Enzyme.configure({ adapter: new Adapter() });
  const cardData = [mockAppState[0], mockAppState[1], mockAppState[2]];
  const WrappedContainer = withRouter(<CardContainer
      dataForCards={cardData}
      buttonTitles={['Favorites', 'People', 'Planets', 'Vehicles']}
      scrollData={mockAppState[3]}
    />);
  const wrapper = mount(<Router><WrappedContainer /></Router>);
  // let wrapper = mount(<CardContainer
  //     dataForCards={cardData}
  //     buttonTitles={['Favorites', 'People', 'Planets', 'Vehicles']}
  //     scrollData={mockAppState[3]}
  //   />);
  // should render scroll
  it('should have a scroll', () => {
    const scroll = wrapper.find('Scroll');

    expect(scroll.length).toEqual(1);
  });
  // should render 4 buttons
  it('should have 4 buttons', () => {
    const buttons = wrapper.find('buttons');

    expect(buttons.length).toEqual(4);
  });
  // should change state when button clicked
  it('should change state when button clicked', () => {
    expect(wrapper.state().category).toEqual('');
    const favoriteButton = wrapper.find('buttons').last();

    favoriteButton.simulate('click');
    expect(wrapper.state().category).toEqual('Favorites');
  });

  it('should change state when button clicked', () => {
    expect(wrapper.state().category).toEqual('');
    const vehiclesButton = wrapper.find('buttons').last();

    vehiclesButton.simulate('click');
    expect(wrapper.state().category).toEqual('Vehicles');
  });
  // should render right set of cards for button clicked
  it('should render people cards when category is people', () => {
    expect(wrapper.state().category).toEqual('Vehicles');
    const vehicleCards = wrapper.find('.vehicles');

    expect(vehicleCards.length).toEqual(mockAppState[2].length);
  });
  // faves should render nothing when nothing in array
  it('should render text when clicking favorite button with nothing in array',
    () => {
      const favoriteButton = wrapper.find('buttons').first();

      favoriteButton.simulate('click');
      expect(wrapper.text()).toContain('There are no favorites.');
    });
  // should add card to faves when clicked- change state
  it('should populate faves in state when card clicked', () => {
    expect(wrapper.state().faves).toEqual([]);
    const vehicleCards = wrapper.find('.vehicles');
    const card = vehicleCards.first();
    card.simulate('click');
    expect(wrapper.state().faves.length).toEqual(1);
  });
  // faves should render something when something in array
  it('should render text when clicking favorite button with nothing in array',
    () => {
      expect(wrapper.state().faves.length).toEqual(1);
      const favoriteButton = wrapper.find('buttons').first();

      favoriteButton.simulate('click');
      const cards = wrapper.find('.favorite');
      expect(cards.length).toEqual(1);
    });
  // snapshot
  it('should match snapskot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
