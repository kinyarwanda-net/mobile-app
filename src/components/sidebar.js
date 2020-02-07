import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import styles from 'src/styles/homeScreenStyle';
import logo from '../assets/images/logo/logo.png';
import kinyarwanda from '../assets/images/logo/kinya.png';

export default class SideBar extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    visible: false,
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    return (
      <Provider>
        <View style={styles.iconImage}>
          <Menu
            style={styles.sideMenuContent}
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={<Button onPress={this._openMenu}>Show menu</Button>}
          >
            <View style={styles.textSideMenu}>
              <Image source={logo} style={styles.logoImage} />
              <Image source={kinyarwanda} style={styles.kinyaImage} />
            </View>
            <View style={styles.menuStyle}>
              <Menu.Item onPress={() => {}} title="Home" />
              <Divider />
              <Menu.Item onPress={() => {}} title="About us" />
              <Divider />
              <Menu.Item onPress={() => {}} title="License" />
            </View>
            <View style={styles.rightSideMenu} />
          </Menu>
        </View>
      </Provider>
    );
  }
}
