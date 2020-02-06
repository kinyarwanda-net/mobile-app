import React from 'react';
import { Image } from 'react-native';

import styles from 'src/styles/homeScreenStyle';
import images from '../assets/images';

const { homeBgImage } = images.home;

const HomeScreen = () => (
  <Image source={homeBgImage} style={styles.imageBackground} resizeMode="cover" />
);

export default HomeScreen;
