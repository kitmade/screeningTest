import * as React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

interface ScreenProps {
  children: React.ReactNode;
  withSafeView?: boolean;
  transparent?: boolean;
}

const Screen = (props: ScreenProps) => {
  const {withSafeView, children, transparent} = props;

  const containerStyle = [
    styles.container,
    transparent ? styles.transparent : {},
  ];

  if (withSafeView) {
    return <SafeAreaView style={containerStyle}>{children}</SafeAreaView>;
  }
  return <View style={containerStyle}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgb(244,244,244)'},
  transparent: {backgroundColor: 'transparent'},
});
