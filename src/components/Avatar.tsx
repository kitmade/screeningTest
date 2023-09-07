import * as React from 'react';
import {StyleSheet, Image, ImageSourcePropType} from 'react-native';

interface AvatarProps {
  size?: number;
  isSquare?: boolean;
  source?: ImageSourcePropType;
}

const Avatar = ({size = 36, isSquare, source}: AvatarProps) => {
  const avatarStyle = [
    styles.avatar,
    {height: size, width: size, borderRadius: isSquare ? size / 5 : size},
  ];

  return <Image style={avatarStyle} source={source ?? {uri: undefined}} />;
};

export default Avatar;

const styles = StyleSheet.create({
  container: {},
  avatar: {
    height: 36,
    width: 36,
    backgroundColor: 'red',
    borderRadius: 36,
  },
});
