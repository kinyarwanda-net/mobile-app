import React from 'react';
import { ImageBackground, Text } from 'react-native';

import styles from 'src/styles/homeScreenStyle';
import images from '../assets/images';

const { homeBgImage } = images.home;

const HomeScreen = () => (
  <ImageBackground source={homeBgImage} style={styles.imageBackground} resizeMode="cover">
    <Text>Search here..</Text>
  </ImageBackground>
);

export default HomeScreen;
