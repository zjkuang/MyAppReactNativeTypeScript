import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from "react-native";
import { styles as commonStyles } from '../../../components/common/style';
import { getUIHierarchy } from '../../resources/hierarchy';
import { styles } from "./style";

const SophieStack = createStackNavigator();

const SophieView = () => {
  return (
    <SophieStack.Navigator>
      <SophieStack.Screen
        name={getUIHierarchy().root.items.main.items.sophie.view.items.sophie.name}
        component={SophieRootView}
      />
    </SophieStack.Navigator>
  );
};

const SophieRootView = () => {
  return (
    <View style={styles.baseView} />
  );
};

export {
  SophieView,
};
