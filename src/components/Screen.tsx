import * as React from 'react';
import {View, StyleSheet} from 'react-native';

interface ScreenProps {
  children: React.ReactNode;
}

const Screen = (props: ScreenProps) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgb(244,244,244)'},
});
