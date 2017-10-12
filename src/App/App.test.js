import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockVehicleData from '../mockData/mockVehicleData';
import mockPeopleData from '../mockData/mockPeopleData';
import mockPlanetData from '../mockData/mockPlanetData';
import mockFilmData from '../mockData/mockFilmData';
import fetchMock from 'fetch-mock';

describe('App', ()=>{
  Enzyme.configure({ adapter: new Adapter() });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should initialize with empty state', ()=>{
    const wrapper = shallow(<App />);

    expect(wrapper.state().dataSet.length).toEqual(0);
  });

  it.only('should render only a loader component when state is empty', ()=>{
    const wrapper = shallow(<App />);

    expect(wrapper.find('main').children().length).toEqual(1);
  });

  it('should populate state with data after API calls', async () => {
    fetchMock.get('https://swapi.co/api/people/', {
      status: 200,
      body: mockPeopleData
    });
    fetchMock.get('https://swapi.co/api/planets/', {
      status: 200,
      body: mockPlanetData
    });
    fetchMock.get('https://swapi.co/api/vehicles/', {
      status: 200,
      body: mockVehicleData
    });
    fetchMock.get('https://swapi.co/api/films/', {
      status: 200,
      body: mockFilmData
    });

    const wrapper = shallow(<App />);
    await wrapper.update();

    expect(wrapper.state().dataSet.length).toEqual(4);
  });

  it('should render card container when state is not empty', async ()=>{
    let wrapper = shallow(<App />);
    wrapper.state().dataSet = [
      mockPeopleData,
      mockPlanetData,
      mockVehicleData,
      mockFilmData
    ];

    await wrapper.update();

    expect(wrapper.find('main').html()).toContain('CardContainer');
  });

  it('should have a function that returns null if no dataSet is available',
    async ()=>{
      let wrapper = shallow(<App />);
      wrapper.state().dataSet = [];


      expect(wrapper.instance().dataForCards()).toEqual(null);
    });

  it('should have a function that returns 3 of 4 dataSets in state',
    async ()=>{
      let wrapper = shallow(<App />);
      wrapper.state().dataSet = [
        mockPeopleData,
        mockPlanetData,
        mockVehicleData,
        mockFilmData
      ];

      expect(wrapper.instance().dataForCards().length).toEqual(3);
    });

});
