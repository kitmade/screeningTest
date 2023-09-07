import React, {useRef, useState} from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Switch as SwitchRN,
} from 'react-native';

interface SwitchProps {
  borderColor?: string;
  thumbColor?: string;
}

const Switch = ({
  borderColor = 'rgb(26, 44, 72)',
  thumbColor = 'rgb(26, 44, 72)',
}: SwitchProps) => {
  const [isSwitched, setSwitched] = useState(false);
  const thumbValue = useRef(new Animated.Value(0));
  const onSwitchPress = () => {
    setSwitched(prev => {
      thumbAnimation(prev ? 0 : 1);

      return !prev;
    });
  };

  const thumbAnimation = (value: number) =>
    Animated.spring(thumbValue.current, {
      toValue: value,
      useNativeDriver: true,
    }).start();

  return (
    <Pressable
      onPress={onSwitchPress}
      style={[styles.container, {borderColor}]}>
      <Animated.View
        style={[
          styles.thumb,
          {
            backgroundColor: thumbColor,
            transform: [
              {
                translateX: thumbValue.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: [2, 21],
                }),
              },
            ],
          },
        ]}
      />
    </Pressable>
  );
};

export default Switch;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 20,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
  },
  thumb: {
    height: 15,
    width: 15,
    borderRadius: 20,
  },
});
