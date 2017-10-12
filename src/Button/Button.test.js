import React from 'react';
import Button from './Button';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Button', () => {
  Enzyme.configure({ adapter: new Adapter() });
  const mockFn = jest.fn();
  const wrapper = shallow(<Button
    key={Math.random()}
    title='People'
    category='People'
    changeCategory={mockFn}
    stateCategory='People'
  />);

  it('should be active since statecategory === category', () => {
    const active = wrapper.find('.button-active');

    expect(active.length).toEqual(1);
  });

  it('should be inactive when statecategory !== category', () => {
    const altWrapper = shallow(<Button
      key={Math.random()}
      title='People'
      category='People'
      changeCategory={mockFn}
      stateCategory='People'
    />);
    const button = altWrapper.find('.button-container');
    const active = altWrapper.find('.button-active');

    expect(button.length).toEqual(1);
    expect(active.length).toEqual(1);
  });

  it('should have Link', () => {
    const link = wrapper.find('Link');

    expect(link.length).toEqual(1);
  });

  it('should fire function when clicked', () => {
    const div = wrapper.find('div');

    div.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
