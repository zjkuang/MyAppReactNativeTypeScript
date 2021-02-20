/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets, StackNavigationProp} from '@react-navigation/stack';
import {Platform, SafeAreaView} from 'react-native';
import {MainTabView} from '../main/index';
import {ModalView} from '../modal/index';
import {modalControl} from './style';

type RootStackParamList = {
  MainTab?: {};
  Modal?: {
    component: string;
  };
};
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
const RootStack = createStackNavigator<RootStackParamList>();
const RootStackView = () => {
  const headerMode: 'float' | 'screen' | 'none' = 'none';
  // const mode: 'card' | 'modal' = 'modal'; // card: slide from side; modal: slide from bottom)
  // const screenOptions: object =
  //   Platform.OS === 'ios' ? {...TransitionPresets.ModalPresentationIOS} : {}; // TransitionPresets.ModalPresentationIOS: iOS 13 card modal
  const {mode, screenOptions} = modalControl();
  return (
    <RootStack.Navigator
      headerMode={headerMode}
      mode={mode}
      screenOptions={screenOptions}
    >
      {true ? (
        <RootStack.Screen
          name="MainTab"
          children={() => [<MainTabView key={0} />]}
        />
      ) : (
        <RootStack.Screen name="MainTab" component={MainTabView} />
      )}

      { /* Modal Views go here */
        <RootStack.Screen
          name="Modal"
          children={() => [<ModalView key={1} component={''} />]}
        />
      }
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
