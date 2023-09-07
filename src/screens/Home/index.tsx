import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header, Screen} from '../../components';

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <Screen>
      <Header label="MedKit" />
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
