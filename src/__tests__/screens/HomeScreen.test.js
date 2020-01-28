import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from '../../screens/HomeScreen';

jest.mock('../../constants/Colors.js');
describe('Rendering', () => {
  it('should run without failing', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.length).toEqual(1);
  });
});
