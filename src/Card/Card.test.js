import React from 'react';
import Card from './Card';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Card', () => {
  Enzyme.configure({ adapter: new Adapter() });
  let mockFn = jest.fn();
  let wrapper = shallow(<Card title='Leia Organa'
    line1='Homeworld: Alderaan'
    line2='Homeworld Population: 2000000000'
    line3='Species: Human'
    line4=''
    favoriteFunc={mockFn}
    className='favorite'/>);

  it('should render article', () => {
    const article = wrapper.find('article');

    expect(article.length).toEqual(1);
  });

  it('should render img according to className', () => {
    let favorite = wrapper.find('.favorite');
    let img = wrapper.find('img');
    // const src = img.find('src')

    expect(favorite.length).toEqual(1);
    expect(img.html()).toContain('favorite.png');

    const altWrapper = shallow(<Card title='Leia Organa'
      line1='Homeworld: Alderaan'
      line2='Homeworld Population: 2000000000'
      line3='Species: Human'
      line4=''
      favoriteFunc={mockFn}
      className='unfavorite'/>);
    favorite = altWrapper.find('.favorite');
    const unfavorite = altWrapper.find('.unfavorite');
    img = altWrapper.find('img');
    expect(favorite.length).toEqual(0);
    expect(unfavorite.length).toEqual(1);
    expect(img.html()).toContain('not-favorite.png');
  });

  it('should render title', () => {
    const title = wrapper.find('h3');

    expect(title.length).toEqual(1);
    expect(title.text()).toEqual('Leia Organa');
  });

  it('should render 4 <p> with corresponding text', () => {
    const lines = wrapper.find('p');
    const first = lines.first();
    const last = lines.last();
    const second = wrapper.findWhere(lines =>
      lines.text() === 'Homeworld Population: 2000000000');
    const third = wrapper.findWhere(lines => lines.text() === 'Species: Human');


    expect(lines.length).toEqual(4);
    expect(first.text()).toEqual('Homeworld: Alderaan');
    expect(last.text()).toEqual('');
    expect(second).toBeDefined();
    expect(third).toBeDefined();
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
