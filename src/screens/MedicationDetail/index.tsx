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

interface MedicationDetailProps {}

const MedicationDetail = ({}: MedicationDetailProps) => {
  const {navigate} = useNavigation<NavigationProp<MainParamList>>();

  const onRefillPress = () => {
    navigate(ScreenName.DoctorsDirectory);
  };

  return (
    <Screen>
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.topContentArea}>
          <View style={{height: 200, width: 200, backgroundColor: 'red'}} />
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
          LeftElement={<FontAwesome5 name="calendar-times" />}
          RightElement={<DatePicker />}
        />
      </ScrollView>
      <Button label="Request refill" atBottom onPress={onRefillPress} />
    </Screen>
  );
};

export default MedicationDetail;
