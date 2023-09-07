import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface DatePickerProps {}

const DatePicker = ({}: DatePickerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dateTxt}>Aug 23</Text>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(217,219,223)',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  dateTxt: {fontWeight: 'bold'},
});
