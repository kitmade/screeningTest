import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ViewStyle,
  Image,
} from 'react-native';
import {Images} from '../../assets';
import {Header, Screen} from '../../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import image from '../../assets/image';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {MainParamList, ScreenName} from '../../type/navigator';

interface AppointmentVideoScreenProps {}

const InCallButton = ({
  size = 30,
  style,
  backgroundColor,
  icon,
  onPress,
}: {
  size?: number;
  style?: ViewStyle;
  backgroundColor?: string;
  icon: React.ReactNode;
  onPress?: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        height: size,
        width: size,
        borderRadius: size,
        backgroundColor,
      },
      styles.inCallButton,
      style,
    ]}>
    {icon}
  </TouchableOpacity>
);

const AppointmentVideoScreen = ({}: AppointmentVideoScreenProps) => {
  const {
    params: {
      doctorInfo: {avatar, name},
    },
  } = useRoute<RouteProp<MainParamList, ScreenName.AppointmentVideo>>();

  const {goBack} = useNavigation<NavigationProp<MainParamList>>();

  return (
    <ImageBackground
      source={{uri: avatar ?? Images.videoCallBackground}}
      style={styles.container}>
      <Screen withSafeView transparent>
        <Header />
        <Image
          source={{uri: image.userCallImage}}
          style={styles.userVideoDisplay}
        />
        <View style={styles.inCalInfoContainer}>
          <View style={styles.inCallInfoText}>
            <Text style={[styles.inCallText, styles.nameText]}>
              {name ?? 'Dr.Phil'}
            </Text>
            <Text style={styles.inCallText}>00:19:21</Text>
          </View>
          <View style={styles.inCallButtonContainer}>
            <InCallButton
              size={50}
              backgroundColor={'rgb(133,133,144)'}
              icon={
                <FontAwesome5 size={15} name="microphone" color={'white'} />
              }
            />
            <InCallButton
              onPress={goBack}
              backgroundColor={'rgb(238,87,74)'}
              size={70}
              icon={<FontAwesome5 size={35} name="phone-alt" color={'white'} />}
            />
            <InCallButton
              backgroundColor={'rgb(133,133,144)'}
              size={50}
              icon={<FontAwesome5 size={15} name="video" color={'white'} />}
            />
          </View>
        </View>
      </Screen>
    </ImageBackground>
  );
};

export default AppointmentVideoScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  inCallButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    marginBottom: 32,
  },
  inCallButton: {alignItems: 'center', justifyContent: 'center'},
  inCallInfoText: {alignSelf: 'center', marginBottom: 16},
  inCalInfoContainer: {justifyContent: 'flex-end', flex: 1},
  inCallText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  nameText: {
    fontSize: 28,
  },
  userVideoDisplay: {
    height: 130,
    width: 100,
    borderRadius: 12,
    alignSelf: 'flex-end',
    right: 20,
  },
});
