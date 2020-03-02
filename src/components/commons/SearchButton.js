import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import styles from 'styles/searchBar';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchButton = () => {
  const { button } = styles;
  return (
    <View>
      <TouchableOpacity style={button}>
        <Button id="testID" title="" icon={<Icon name="search" color="white" />} onPress="" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchButton;
