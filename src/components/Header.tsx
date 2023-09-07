import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface HeaderProps {
  label?: string;
  RightElement?: React.ReactNode;
  MiddleElement?: React.ReactNode;
  containerStyle?: ViewStyle;
}

const Header = ({
  label = '',
  RightElement,
  MiddleElement,
  containerStyle,
}: HeaderProps) => {
  const {canGoBack, goBack} = useNavigation();

  const onBackPress = () => {
    if (canGoBack()) {
      goBack();
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={onBackPress} style={styles.sideContainer}>
        <MaterialCommunityIcons name="chevron-left" size={25} />
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        {MiddleElement ?? <Text style={styles.labelTxt}>{label}</Text>}
      </View>
      <View style={styles.sideContainer}>{RightElement}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  sideContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  centerContainer: {
    flex: 7,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  labelTxt: {textAlign: 'center'},
});
