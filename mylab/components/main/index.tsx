import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {JohnNavigationView} from '../john';
import {YanNavigationView} from '../yan';
import {DavidNavigationView} from '../david';
import {SophieNavigationView} from '../sophie';
import {SettingsNavigationView} from '../settings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {MainTabChildSiblingName} from '../navigation-index';

type MainTabParamList = {
  John: {};
  Yan: {};
  David: {};
  Sophie: {};
  Elsa: {};
};
const BottomTab = createBottomTabNavigator<MainTabParamList>();
const MainTabView = () => {
  const navigation = useNavigation();
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
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
          children={() => [
            <SettingsNavigationView
              key={0}
              navigateToSibling={(name: MainTabChildSiblingName) => {
                navigation.navigate(name, {});
              }}
            />,
          ]}
        />
      ) : (
        <BottomTab.Screen name={'Elsa'} component={SettingsNavigationView} />
      )}
    </BottomTab.Navigator>
  );
};

export {MainTabView};
