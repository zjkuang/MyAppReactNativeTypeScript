/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler';
import {
  NavigationContainer,
  NavigatorScreenParams,
  CompositeNavigationProp,
} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
  StackNavigationProp,
} from '@react-navigation/stack';
import React, {useCallback, useContext, useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {getUIHierarchy} from '../../resources/hierarchy';
import {MainTabView} from '../main/index';

// import { styles as commonStyles } from "../../../components/common/style";
import {styles} from './style';
import {
  MyLabContext,
  currentContext,
  saveContext,
  loadContext,
} from '../../context';
import {
  deregisterDimensionsChangeListener,
  isLandscape,
  isPortrait,
  registerDimensionsChangeListener,
} from '../../../utilities/device';
import {startListeningDimensionsChange} from '../../../utilities/device';
import {setLanguage} from '../../../resources/strings/strings';

declare const global: {HermesInternal: null | {}};

type RootStackParamList = {
  MainTab: {};
  Modal: {};
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootStackView = () => {
  const headerMode = 'none'; // headerMode: 'float' | 'screen' | 'none;
  const mode = 'modal'; // mode: 'card' | 'modal' // card: slide from side; modal: slide from bottom)
  const screenOptions: object =
    Platform.OS == 'ios' ? {...TransitionPresets.ModalPresentationIOS} : {}; // TransitionPresets.ModalPresentationIOS: iOS 13 card modal
  return (
    <RootStack.Navigator
      headerMode={headerMode}
      mode={mode}
      screenOptions={screenOptions}>
      {true ? (
        <RootStack.Screen
          name='MainTab'
          children={() => [<MainTabView key={0} />]}
        />
      ) : (
        <RootStack.Screen
          name='MainTab'
          component={MainTabView}
        />
      )}
      {/* Modal Views go here */}
    </RootStack.Navigator>
  );
};

const RootView = () => {
  return (
    <MyLabContext.Provider value={currentContext}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <RootStackView />
        </SafeAreaView>
      </NavigationContainer>
    </MyLabContext.Provider>
  );
};

const RootContentView = () => {
  const {setContext} = useContext(MyLabContext);

  const initWithContext = useCallback(() => {
    loadContext().then(() => {
      setContext(currentContext);
    });
  }, [setContext]);

  const dimensionsChangeListener = useCallback(() => {
    console.log(
      `Orientation: ${
        isPortrait() ? 'Portrait' : isLandscape() ? 'Landscape' : 'unknown'
      }`,
    );
  }, []);

  useEffect(() => {
    onboarding();
  });

  useEffect(() => {
    registerDimensionsChangeListener(dimensionsChangeListener);
    return () => {
      deregisterDimensionsChangeListener(dimensionsChangeListener);
    };
  }, [dimensionsChangeListener]);

  initWithContext();

  return (
    <MyLabContext.Provider value={currentContext}>
      <NavigationContainer>
        <SafeAreaView>
          <View style={styles.baseView}></View>
        </SafeAreaView>
      </NavigationContainer>
    </MyLabContext.Provider>
  );
};

const onboarding = () => {
  setLanguage(currentContext.context.language);
  startListeningDimensionsChange();
};

export {RootView};
