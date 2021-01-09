import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from "react-native";
import { styles as commonStyles } from '../../../components/common/style';
import { getUIHierarchy } from '../../resources/hierarchy';
import { styles } from "./style";

const JohnStack = createStackNavigator();

const JohnView = () => {
  return (
    <JohnStack.Navigator>
      <JohnStack.Screen
        name={getUIHierarchy().root.items.main.items.john.view.items.john.name}
        component={JohnRootView}
      />
    </JohnStack.Navigator>
  );
};

const JohnRootView = () => {
  return (
    <View style={styles.baseView} />
  );
};

export {
  JohnView,
};
