import * as React from 'react';
import {Text, View, FlatList, Pressable} from 'react-native';
import {Avatar, Header, Screen, TextInput} from '../../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainParamList, ScreenName} from '../../type/navigator';
import {Doctor} from '../../type/data';
import {Images} from '../../assets';
// import {doctors} from '../../utils/data';
import {getDoctors} from '../../services/doctors';

interface DoctorsDirectoryScreenProps {}

const DoctorRow = ({...doctorInfo}: Doctor) => {
  const {avatar, name, roles} = doctorInfo;
  const {navigate} = useNavigation<NavigationProp<MainParamList>>();
  const onRowPress = () => {
    navigate(ScreenName.AppointmentVideo, {doctorInfo});
  };

  return (
    <Pressable style={styles.doctorRowContainer} onPress={onRowPress}>
      <Avatar isSquare source={{uri: avatar}} />
      <View style={styles.doctorInfoContainer}>
        <Text style={styles.doctorName}>{name}</Text>
        <Text>
          {roles
            .map((role, index) => (index > 0 ? role.toLowerCase() : role))
            .join(', ')}
        </Text>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={26} />
    </Pressable>
  );
};

const DoctorsDirectoryScreen = ({}: DoctorsDirectoryScreenProps) => {
  const [doctors, setDoctors] = React.useState<Doctor[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const res = await getDoctors();
        setDoctors(res);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, []);

  const onSearchChange = async (text: string) => {
    getDoctors(text).then(setDoctors);
  };

  return (
    <Screen withSafeView>
      <Header
        containerStyle={styles.header}
        MiddleElement={
          <TextInput placeholder="Dentists" onChangeText={onSearchChange} />
        }
        RightElement={<Avatar source={{uri: Images.userCallImage}} />}
      />

      <FlatList
        data={doctors}
        renderItem={({item}) => <DoctorRow {...item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.doctorListContentContainer}
      />
    </Screen>
  );
};

export default DoctorsDirectoryScreen;
