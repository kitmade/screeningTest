import * as React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  atBottom?: boolean;
}

const Button = ({
  label = '',
  atBottom,
  ...touchableOpacityProps
}: ButtonProps) => {
  const containerStyle = atBottom
    ? [styles.container, styles.atBottom]
    : [styles.container];

  return (
    <TouchableOpacity style={containerStyle} {...touchableOpacityProps}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'rgb(26, 44, 72)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonLabel: {color: 'white', fontWeight: 'bold'},
  atBottom: {
    marginBottom: 8,
    marginHorizontal: 8,
  },
});
