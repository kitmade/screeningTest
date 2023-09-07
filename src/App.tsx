import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigator/MainNavigator';
import RootNavigator from './navigator';

interface AppProps {}

const App = ({}: AppProps) => {
  return <RootNavigator />;
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
