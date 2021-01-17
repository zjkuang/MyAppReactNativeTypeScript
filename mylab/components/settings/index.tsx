import { createStackNavigator, StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from "react-native";
import { styles as commonStyles } from '../../../components/common/style';
import { getUIHierarchy } from '../../resources/hierarchy';
import { styles } from "./style";

type SettingsStackParamList = {
  'Settings': {}
};
type SettingsScreenNavigationProp = StackNavigationProp<
  SettingsStackParamList
>;
type Props = {
  navigation: SettingsScreenNavigationProp
};

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

const SettingsRootView = (props: Props) => {
  const navigation = props.navigation;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: getUIHierarchy().root.items.main.items.settings.view.items.settings.title,
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [navigation]);
  return (
    <View style={styles.baseView} />
  );
};

export {
  SettingsView,
};
