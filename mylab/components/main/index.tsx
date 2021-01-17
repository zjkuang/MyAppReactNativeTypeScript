import React from 'react';
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles as commonStyles } from '../../../components/common/style';
import { styles } from "./style";
import { JohnView } from '../john';
import { YanView } from '../yan';
import { DavidView } from '../david';
import { SophieView } from '../sophie';
import { SettingsView } from '../settings';
import { getUIHierarchy } from '../../resources/hierarchy';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type MainTabParamList = {
  'John': {},
  'Yan': {},
  'David': {},
  'Sophie': {},
  'Settings': {},
};
type JohnTabScreenRouteProp = RouteProp<
  MainTabParamList,
  'John'
>;

const BottomTab = createBottomTabNavigator();

const MainView = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'John') {
            const iconName = 'filter-1';
            return <MaterialIcons name={iconName} color={color} size={20} />
          } else if (route.name === 'Yan') {
            const iconName = 'filter-2';
            return <MaterialIcons name={iconName} color={color} size={20} />
          } else if (route.name === 'David') {
            const iconName = 'filter-3';
            return <MaterialIcons name={iconName} color={color} size={20} />
          } else if (route.name === 'Sophie') {
            const iconName = 'filter-4';
            return <MaterialIcons name={iconName} color={color} size={20} />
          } else if (route.name === 'Settings') {
            const iconName = 'settings';
            return <Feather name={iconName} color={color} size={20} />
          }
        }
      })}
    >
      <BottomTab.Screen
        name={getUIHierarchy().root.items.main.items.john.tabItem.name}
        component={JohnView}
      />
      <BottomTab.Screen
        name={getUIHierarchy().root.items.main.items.yan.tabItem.name}
        component={YanView}
      />
      <BottomTab.Screen
        name={getUIHierarchy().root.items.main.items.david.tabItem.name}
        component={DavidView}
      />
      <BottomTab.Screen
        name={getUIHierarchy().root.items.main.items.sophie.tabItem.name}
        component={SophieView}
      />
      <BottomTab.Screen
        name={getUIHierarchy().root.items.main.items.settings.tabItem.name}
        component={SettingsView}
      />
    </BottomTab.Navigator>
  );
};

export {
  MainView,
};
