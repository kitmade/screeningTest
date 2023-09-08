import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigator from './MainNavigator';
import {ApplicationParamList, StackName} from '../type/navigator';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

interface RootNavigatorProps {}

const RootStack = createNativeStackNavigator<ApplicationParamList>();

const RootNavigator = ({}: RootNavigatorProps) => {
  return (
    <NavigationContainer>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name={StackName.Main} component={MainNavigator} />
        </RootStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgb(244,244,244)'},
});
