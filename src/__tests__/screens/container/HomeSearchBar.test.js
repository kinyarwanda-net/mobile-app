import React from 'react';
import { shallow } from 'enzyme';
import HomeSearchBar from '../../../container/HomeSearchBar';

describe('Rendering', () => {
  it('should run without failing', () => {
    const wrapper = shallow(<HomeSearchBar />);

    wrapper.find('SearchButton');
    expect(wrapper.length).toEqual(1);
  });
});
