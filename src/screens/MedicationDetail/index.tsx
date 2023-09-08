import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {
  Button,
  DatePicker,
  Header,
  Screen,
  Section,
  Switch,
} from '../../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainParamList, ScreenName} from '../../type/navigator';
import {Svg, Path} from 'react-native-svg';

interface MedicationDetailProps {}

const MedicationDetail = ({}: MedicationDetailProps) => {
  const {navigate} = useNavigation<NavigationProp<MainParamList>>();

  const onRefillPress = () => {
    navigate(ScreenName.DoctorsDirectory);
  };

  return (
    <Screen withSafeView>
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.topContentArea}>
          {/* <View style={{alignItems: 'center', justifyContent: 'center'}}> */}
          <Svg height={210} width={210} viewBox="0 0 576 512">
            <Path
              fill={'rgb(32, 79, 245)'}
              d="M112 32C50.12 32 0 82.12 0 143.1v223.1c0 61.88 50.12 111.1 112 111.1s112-50.12 112-111.1V143.1C224 82.12 173.9 32 112 32zM160 256H64V144c0-26.5 21.5-48 48-48s48 21.5 48 48V256zM299.8 226.2c-3.5-3.5-9.5-3-12.38 .875c-45.25 62.5-40.38 150.1 15.88 206.4c56.38 56.25 144 61.25 206.5 15.88c4-2.875 4.249-8.75 .75-12.25L299.8 226.2zM529.5 207.2c-56.25-56.25-143.9-61.13-206.4-15.87c-4 2.875-4.375 8.875-.875 12.38l210.9 210.7c3.5 3.5 9.375 3.125 12.25-.75C590.8 351.1 585.9 263.6 529.5 207.2z"
            />
          </Svg>
          {/* </View> */}
          <Text style={styles.medicationName}>Vitamin C</Text>
        </View>
        <Section
          label="Everyday at 9:00"
          LeftElement={<MaterialCommunityIcons name="bell" size={14} />}
          RightElement={<Switch />}
        />
        <Section
          label="Before meal"
          LeftElement={<View style={styles.redDot} />}
        />
        <Section
          label="Finish course"
          labelBold
          LeftElement={<FontAwesome5 name="calendar-times" solid size={14} />}
          RightElement={<DatePicker />}
        />
      </ScrollView>
      <Button label="Request refill" atBottom onPress={onRefillPress} />
    </Screen>
  );
};

export default MedicationDetail;
