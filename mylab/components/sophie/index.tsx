import { createStackNavigator, StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from "react-native";
import { styles as commonStyles } from '../../../components/common/style';
import { getUIHierarchy } from '../../resources/hierarchy';
import { styles } from "./style";

type SophieStackParamList = {
  'Sophie': {}
};
type SophieScreenNavigationProp = StackNavigationProp<
  SophieStackParamList
>;
type Props = {
  navigation: SophieScreenNavigationProp
};

const SophieStack = createStackNavigator();

const SophieNavigationView = () => {
  return (
    <SophieStack.Navigator>
      <SophieStack.Screen
        name={getUIHierarchy().root.items.main.items.sophie.view.items.sophie.name}
        component={SophieView}
      />
    </SophieStack.Navigator>
  );
};

const SophieView = (props: Props) => {
  const navigation = props.navigation;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: getUIHierarchy().root.items.main.items.sophie.view.items.sophie.title,
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
  SophieNavigationView,
};
