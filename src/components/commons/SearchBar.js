import React from 'react';
import { View, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from 'styles/searchBar';
import SearchButton from './SearchButton';

const SearchBar = () => {
  const { container, textInput, buttonView } = styles;
  return (
    <View style={container}>
      <View>
        <TextInput
          placeholder="Shaka ijambo..."
          placeholderTextColor="rgba(48, 48, 48, 0.47)"
          mode="outlined"
          style={textInput}
          onPress={Keyboard.dismiss}
        />
        <View style={buttonView}>
          <SearchButton />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
