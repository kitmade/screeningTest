import * as React from 'react';
import {Text, View, FlatList, Pressable} from 'react-native';
import {Screen} from 'react-native-screens';
import {Avatar, Header, TextInput} from '../../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainParamList, ScreenName} from '../../type/navigator';
import {Doctor} from '../../type/data';
import {Images} from '../../assets';
import {doctors} from '../../utils/data';

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
  const [search, setSearch] = React.useState('');

  const fitleredDoctors = React.useMemo(
    () =>
      search.length === 0
        ? doctors
        : doctors.filter(({name}) =>
            name.toLowerCase().includes(search.toLowerCase()),
          ),
    [search],
  );

  return (
    <Screen>
      <Header
        containerStyle={styles.header}
        MiddleElement={
          <TextInput placeholder="Dentists" onChangeText={setSearch} />
        }
        RightElement={<Avatar source={{uri: Images.userCallImage}} />}
      />

      <FlatList
        data={fitleredDoctors}
        renderItem={({item}) => <DoctorRow {...item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.doctorListContentContainer}
      />
    </Screen>
  );
};

export default DoctorsDirectoryScreen;
