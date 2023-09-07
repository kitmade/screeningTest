import * as React from 'react';
import {
  View,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

interface TextInputProps extends RNTextInputProps {}

const TextInput = ({...props}: TextInputProps) => {
  return (
    <View style={styles.container}>
      <RNTextInput style={styles.textInput} {...props} />
      <Entypo name="magnifying-glass" size={20} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,

    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    flex: 1,

    borderRadius: 6,
  },
});
