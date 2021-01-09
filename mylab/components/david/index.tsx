import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from "react-native";
import { styles as commonStyles } from '../../../components/common/style';
import { getUIHierarchy } from '../../resources/hierarchy';
import { styles } from "./style";

const DavidStack = createStackNavigator();

const DavidView = () => {
  return (
    <DavidStack.Navigator>
      <DavidStack.Screen
        name={getUIHierarchy().root.items.main.items.david.view.items.david.name}
        component={DavidRootView}
      />
    </DavidStack.Navigator>
  );
};

const DavidRootView = () => {
  return (
    <View style={styles.baseView} />
  );
};

export {
  DavidView,
};
