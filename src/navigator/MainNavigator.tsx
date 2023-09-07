import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {MainParamList, ScreenName} from '../type/navigator';
import {
  AppointmentVideoScreen,
  DoctorsDirectoryScreen,
  IntroScreen,
  MedicationDetailScreen,
} from '../screens';

interface MainNavigatorProps {}
const MainStack = createNativeStackNavigator<MainParamList>();

// const screens: Array<{name: ScreenName; component: React.ReactNode}> = [
//   {
//     name: ScreenName.Home,
//     component: <IntroScreen />,
//   },
//   {
//     name: ScreenName.PillAlarm,
//     component: <PillAlarmScreen />,
//   },
//   {
//     name: ScreenName.DoctorList,
//     component: <DoctorListScreen />,
//   },
//   {
//     name: ScreenName.InCall,
//     component: <InCallScreen />,
//   },
// ];

const MainNavigator = ({}: MainNavigatorProps) => {
  return (
    <MainStack.Navigator
      initialRouteName={ScreenName.Intro}
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name={ScreenName.Intro} component={IntroScreen} />
      <MainStack.Screen
        name={ScreenName.MedicationDetail}
        component={MedicationDetailScreen}
      />
      <MainStack.Screen
        name={ScreenName.DoctorsDirectory}
        component={DoctorsDirectoryScreen}
      />
      <MainStack.Screen
        name={ScreenName.AppointmentVideo}
        component={AppointmentVideoScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
