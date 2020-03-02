import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../../components/commons';

describe('Rendering', () => {
  it('should run without failing', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.length).toEqual(1);
  });
});
