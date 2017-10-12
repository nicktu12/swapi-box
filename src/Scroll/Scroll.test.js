import React from 'react';
import Scroll from './Scroll';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockFilmData from '../mockData/mockFilmData';

describe('Scroll', () => {
  Enzyme.configure({ adapter: new Adapter() });
  const wrapper = shallow(<Scroll scrollData={[mockFilmData[0]]} />);
  const scrollDiv = wrapper.find('.scroll-text');

  it('should exist', () => {
    expect(scrollDiv.length).toEqual(1);
  });

  it('should have inner text corresponding to prop', () => {
    expect(scrollDiv.text()).toEqual(
      mockFilmData[0].opening_crawl +
      mockFilmData[0].title +
      mockFilmData[0].release_date
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
