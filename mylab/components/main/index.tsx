import React from 'react';
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles as commonStyles } from '../../../components/common/style';
import { styles } from "./style";
import { JohnView } from '../john';
import { YanView } from '../yan';
import { DavidView } from '../david';
import { SophieView } from '../sophie';
import { SettingsView } from '../settings';
import { getUIHierarchy } from '../../resources/hierarchy';

const BottomTab = createBottomTabNavigator();

const MainView = () => {
  return (
    <BottomTab.Navigator>
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
