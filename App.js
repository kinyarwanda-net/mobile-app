import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <PaperProvider>
    <AppContainer />
  </PaperProvider>
);

export default App;
