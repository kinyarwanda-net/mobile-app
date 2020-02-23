import React from 'react';
import { View } from 'react-native';
import SearchBar from '../components/commons';

const HomeSearchBar = () => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <SearchBar />
  </View>
);

export default HomeSearchBar;
