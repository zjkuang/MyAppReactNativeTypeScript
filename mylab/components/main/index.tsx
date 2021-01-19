import React from 'react';
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles as commonStyles } from '../../../components/common/style';
import { styles } from "./style";
import { JohnNavigationView } from '../john';
import { YanNavigationView } from '../yan';
import { DavidNavigationView } from '../david';
import { SophieNavigationView } from '../sophie';
import { SettingsNavigationView } from '../settings';
import { getUIHierarchy } from '../../resources/hierarchy';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

type MainTabParamList = {
  'John': {},
  'Yan': {},
  'David': {},
  'Sophie': {},
  'Elsa': {},
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
          const dynamicSize = focused ? 20 : 16;
          if (route.name === 'John') {
            const iconName = 'filter-1';
            return <MaterialIcons name={iconName} color={color} size={dynamicSize} />
          } else if (route.name === 'Yan') {
            const iconName = 'filter-2';
            return <MaterialIcons name={iconName} color={color} size={dynamicSize} />
          } else if (route.name === 'David') {
            const iconName = 'filter-3';
            return <MaterialIcons name={iconName} color={color} size={dynamicSize} />
          } else if (route.name === 'Sophie') {
            const iconName = 'filter-4';
            return <MaterialIcons name={iconName} color={color} size={dynamicSize} />
          } else if (route.name === 'Elsa') {
            const iconName = 'settings';
            // return <Feather name={iconName} color={color} size={20} />
            return <Fontisto name={'snowflake-8'} color={color} size={dynamicSize} />
          }
        }
      })}
    >
      <BottomTab.Screen
        name={getUIHierarchy().root.items.main.items.john.tabItem.name}
        component={JohnNavigationView}
      />
      <BottomTab.Screen
        name={getUIHierarchy().root.items.main.items.yan.tabItem.name}
        component={YanNavigationView}
      />
      <BottomTab.Screen
        name={getUIHierarchy().root.items.main.items.david.tabItem.name}
        component={DavidNavigationView}
      />
      <BottomTab.Screen
        name={getUIHierarchy().root.items.main.items.sophie.tabItem.name}
        component={SophieNavigationView}
      />
      <BottomTab.Screen
        name={'Elsa' || getUIHierarchy().root.items.main.items.settings.tabItem.name}
        component={SettingsNavigationView}
      />
    </BottomTab.Navigator>
  );
};

export {
  MainView,
};
