/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Platform, SafeAreaView} from 'react-native';
import {MainTabView} from '../main/index';

type RootStackParamList = {
  MainTab: {};
  Modal: {};
};
const RootStack = createStackNavigator<RootStackParamList>();
const RootStackView = () => {
  const headerMode = 'none'; // headerMode: 'float' | 'screen' | 'none;
  const mode = 'modal'; // mode: 'card' | 'modal' // card: slide from side; modal: slide from bottom)
  const screenOptions: object =
    Platform.OS === 'ios' ? {...TransitionPresets.ModalPresentationIOS} : {}; // TransitionPresets.ModalPresentationIOS: iOS 13 card modal
  return (
    <RootStack.Navigator
      headerMode={headerMode}
      mode={mode}
      screenOptions={screenOptions}>
      {true ? (
        <RootStack.Screen
          name="MainTab"
          children={() => [<MainTabView key={0} />]}
        />
      ) : (
        <RootStack.Screen name="MainTab" component={MainTabView} />
      )}
      {/* Modal Views go here */}
    </RootStack.Navigator>
  );
};

const RootView = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <RootStackView />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export {RootView};
