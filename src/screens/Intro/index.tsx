import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Images} from '../../assets';
import {Button, Screen} from '../../components';
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {MainParamList, ScreenName} from '../../type/navigator';

interface IntroScreenProps {}

const IntroScreen = ({}: IntroScreenProps) => {
  const {dispatch} = useNavigation<NavigationProp<MainParamList>>();

  const onStartPress = () => {
    dispatch(StackActions.replace(ScreenName.MedicationDetail));
  };

  return (
    <Screen withSafeView>
      <View style={styles.logoArea}>
        <Image source={{uri: Images.appIcon}} style={styles.logo} />
        <Text style={{fontSize: 50, marginTop: 8}}>
          <Text style={{fontWeight: 'bold'}}>Med</Text>
          Kit
        </Text>
      </View>
      <Button label="Start" onPress={onStartPress} atBottom />
    </Screen>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
});
