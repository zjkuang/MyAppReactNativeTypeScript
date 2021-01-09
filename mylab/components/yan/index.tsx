import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from "react-native";
import { styles as commonStyles } from '../../../components/common/style';
import { getUIHierarchy } from '../../resources/hierarchy';
import { styles } from "./style";

const YanStack = createStackNavigator();

const YanView = () => {
  return (
    <YanStack.Navigator>
      <YanStack.Screen
        name={getUIHierarchy().root.items.main.items.yan.view.items.yan.name}
        component={YanRootView}
      />
    </YanStack.Navigator>
  );
};

const YanRootView = () => {
  return (
    <View style={styles.baseView} />
  );
};

export {
  YanView,
};
