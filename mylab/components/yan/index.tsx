import { createStackNavigator, StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from "react-native";
import { styles as commonStyles } from '../../../components/common/style';
import { getUIHierarchy } from '../../resources/hierarchy';
import { styles } from "./style";

type YanStackParamList = {
  'Yan': {}
};
type YanScreenNavigationProp = StackNavigationProp<
  YanStackParamList
>;
type Props = {
  navigation: YanScreenNavigationProp
};

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

const YanRootView = (props: Props) => {
  const navigation = props.navigation;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: getUIHierarchy().root.items.main.items.yan.view.items.yan.title,
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
  YanView,
};
