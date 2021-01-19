import { createStackNavigator, StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from "react-native";
import { styles as commonStyles } from '../../../components/common/style';
import { getUIHierarchy } from '../../resources/hierarchy';
import { styles } from "./style";

type DavidStackParamList = {
  'David': {}
};
type DavidScreenNavigationProp = StackNavigationProp<
  DavidStackParamList
>;
type Props = {
  navigation: DavidScreenNavigationProp
};

const DavidStack = createStackNavigator();

const DavidNavigationView = () => {
  return (
    <DavidStack.Navigator>
      <DavidStack.Screen
        name={getUIHierarchy().root.items.main.items.david.view.items.david.name}
        component={DavidView}
      />
    </DavidStack.Navigator>
  );
};

const DavidView = (props: Props) => {
  const navigation = props.navigation;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: getUIHierarchy().root.items.main.items.david.view.items.david.title,
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
  DavidNavigationView,
};
