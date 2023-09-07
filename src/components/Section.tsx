import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface SectionProps {
  LeftElement?: React.ReactNode;
  RightElement?: React.ReactNode;
  label?: string;
  labelBold?: boolean;
}

const Section = ({
  LeftElement,
  RightElement,
  label,
  labelBold,
}: SectionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>{LeftElement}</View>
      <Text
        numberOfLines={1}
        style={[styles.labelTxt, {fontWeight: labelBold ? 'bold' : 'normal'}]}>
        {label}
      </Text>

      <View style={styles.rightContainer}>{RightElement}</View>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 16,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 2,
    alignItems: 'center',
  },
  labelTxt: {
    flex: 7,
  },
});
