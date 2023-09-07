import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface AppointmentVideoScreenProps {}

const AppointmentVideoScreen = ({}: AppointmentVideoScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>AppointmentVideoScreen</Text>
    </View>
  );
};

export default AppointmentVideoScreen;

const styles = StyleSheet.create({
  container: {},
});
