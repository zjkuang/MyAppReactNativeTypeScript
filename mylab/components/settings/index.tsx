import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from "react-native";
import { styles as commonStyles } from '../../../components/common/style';
import { getUIHierarchy } from '../../resources/hierarchy';
import { styles } from "./style";

const SettingsStack = createStackNavigator();

const SettingsView = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name={getUIHierarchy().root.items.main.items.settings.view.items.settings.name}
        component={SettingsRootView}
      />
    </SettingsStack.Navigator>
  );
};

const SettingsRootView = () => {
  return (
    <View style={styles.baseView} />
  );
};

export {
  SettingsView,
};
