import React from 'react';
import { ImageBackground } from 'react-native';
import HomeSearchBar from 'container/HomeSearchBar';
import styles from 'src/styles/homeScreenStyle';
import images from 'assets/images';

const HomeScreen = () => {
  const { homeBgImage } = images.home;
  return (
    <ImageBackground source={homeBgImage} style={styles.imageBackground} resizeMode="cover">
      <HomeSearchBar />
    </ImageBackground>
  );
};

export default HomeScreen;
