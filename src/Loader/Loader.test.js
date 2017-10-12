import React from 'react';
import Loader from './Loader';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Loader', () => {
  Enzyme.configure({ adapter: new Adapter() });
  const wrapper = shallow(<Loader />);

  it('should exist', () => {
    const loader = wrapper.find('.loader-div');

    expect(loader.length).toEqual(1);
  });

  it('should have loading msg', () => {
    const msg = wrapper.find('p');

    expect(msg.length).toEqual(1);
    expect(msg.text()).toEqual('Loading...');
  });

  it('should have logo', () => {
    const logo = wrapper.find('img');

    expect(logo.length).toEqual(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
