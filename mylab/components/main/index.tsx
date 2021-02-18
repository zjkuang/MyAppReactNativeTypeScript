/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import { styles as commonStyles } from '../../../components/common/style';
import {styles} from './style';
import {JohnNavigationView} from '../john';
import {YanNavigationView} from '../yan';
import {DavidNavigationView} from '../david';
import {SophieNavigationView} from '../sophie';
import {SettingsNavigationView} from '../settings';
import {getUIHierarchy} from '../../resources/hierarchy';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {StackNavigationProp} from '@react-navigation/stack';

type MainTabSibblingName = 'John' | 'Yan' | 'David' | 'Sophie' | 'Elsa';
type MainTabParamList = {
  John: {};
  Yan: {};
  David: {};
  Sophie: {};
  Elsa: {};
};
type JohnTabScreenRouteProp = RouteProp<MainTabParamList, 'John'>;
type YanTabScreenRouteProp = RouteProp<MainTabParamList, 'Yan'>;
type DavidTabScreenRouteProp = RouteProp<MainTabParamList, 'David'>;
type SophieTabScreenRouteProp = RouteProp<MainTabParamList, 'Sophie'>;
type ElsaTabScreenRouteProp = RouteProp<MainTabParamList, 'Elsa'>;

type MainTabScreenNavigationProp = StackNavigationProp<MainTabParamList>;
type MainViewProps = {
  navigation: MainTabScreenNavigationProp;
};

const BottomTab = createBottomTabNavigator<MainTabParamList>();

const MainView = (props: MainViewProps) => {
  const navigation = props.navigation;
  const navigateToSibbling = (name: MainTabSibblingName) => {
    navigation.navigate(name, {});
  };
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const dynamicSize = focused ? 20 : 16;
          if (route.name === 'John') {
            const iconName = 'filter-1';
            return (
              <MaterialIcons name={iconName} color={color} size={dynamicSize} />
            );
          } else if (route.name === 'Yan') {
            const iconName = 'filter-2';
            return (
              <MaterialIcons name={iconName} color={color} size={dynamicSize} />
            );
          } else if (route.name === 'David') {
            const iconName = 'filter-3';
            return (
              <MaterialIcons name={iconName} color={color} size={dynamicSize} />
            );
          } else if (route.name === 'Sophie') {
            const iconName = 'filter-4';
            return (
              <MaterialIcons name={iconName} color={color} size={dynamicSize} />
            );
          } else if (route.name === 'Elsa') {
            const iconName = 'settings';
            // return <Feather name={iconName} color={color} size={20} />
            return (
              <Fontisto name={'snowflake-8'} color={color} size={dynamicSize} />
            );
          }
        },
      })}>
      <BottomTab.Screen name="John" component={JohnNavigationView} />
      <BottomTab.Screen name="Yan" component={YanNavigationView} />
      <BottomTab.Screen name="David" component={DavidNavigationView} />
      <BottomTab.Screen name="Sophie" component={SophieNavigationView} />
      {true ? (
        <BottomTab.Screen
          name={'Elsa'}
          children={() => [<SettingsNavigationView key={0} />]}
        />
      ) : (
        <BottomTab.Screen name={'Elsa'} component={SettingsNavigationView} />
      )}
    </BottomTab.Navigator>
  );
};

export {MainView};
