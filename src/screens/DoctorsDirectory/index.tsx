import * as React from 'react';
import {Text, View, FlatList, Pressable, TextInput} from 'react-native';
import {Screen} from 'react-native-screens';
import {Header} from '../../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';

interface DoctorsDirectoryScreenProps {}

type Doctor = {
  id: number;
  name: string;
  roles: string[];
};

const doctors = [
  {id: 1, name: 'Dr.Lucas', roles: ['Dentist', 'Dental hygiene']},
  {id: 2, name: 'Dr.Matthew', roles: ['Dental hygiene']},
  {id: 3, name: 'Dr.Greg', roles: ['Ortodontist']},
  {id: 4, name: 'Dr.Eva', roles: ['Dentist', 'Dental hygiene']},
  {id: 5, name: 'Dr.Anna', roles: ['Dentist']},
] as Doctor[];

const DoctorRow = ({name, roles}: Doctor) => {
  return (
    <Pressable style={styles.doctorRowContainer}>
      <View style={styles.doctocPic} />
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
  return (
    <Screen>
      <Header
        containerStyle={{borderBottomWidth: 1}}
        MiddleElement={
          <TextInput
            placeholder="Dentists"
            style={{
              backgroundColor: 'white',
              flex: 1,
              paddingHorizontal: 8,
              borderRadius: 6,
            }}
          />
        }
        RightElement={
          <View
            style={{
              height: 36,
              width: 36,
              borderRadius: 36,
              backgroundColor: 'red',
              marginLeft: 8,
            }}
          />
        }
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
