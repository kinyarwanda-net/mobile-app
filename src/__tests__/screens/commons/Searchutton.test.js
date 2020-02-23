import React from 'react';
import { shallow } from 'enzyme';
import SearchButton from '../../../components/commons/SearchButton';

describe('Rendering', () => {
  it('should run without failing', () => {
    const wrapper = shallow(<SearchButton />);
    wrapper.forEach(n => n.find('#testID').simulate('press'));
    expect(wrapper.length).toEqual(1);
  });
});
