import { createStackNavigator, StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import React, { useLayoutEffect } from 'react';
import { View } from "react-native";
import { styles as commonStyles } from '../../../components/common/style';
import { getUIHierarchy } from '../../resources/hierarchy';
import { styles } from "./style";

type JohnStackParamList = {
  'John': {}
};
type JohnScreenNavigationProp = StackNavigationProp<
  JohnStackParamList
>;
type Props = {
  navigation: JohnScreenNavigationProp
};

const JohnStack = createStackNavigator();

const JohnNavigationView = () => {
  return (
    <JohnStack.Navigator>
      <JohnStack.Screen
        name={getUIHierarchy().root.items.main.items.john.view.items.john.name}
        component={JohnView}
      />
    </JohnStack.Navigator>
  );
};

const JohnView = (props: Props) => {
  const navigation = props.navigation;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getUIHierarchy().root.items.main.items.john.view.items.john.title,
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
  JohnNavigationView,
};
