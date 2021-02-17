import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';
import {getUIHierarchy} from '../../resources/hierarchy';
// import { styles as commonStyles } from '../../../components/common/style';
import {styles} from './style';
import {HooksDemoTableOfContentsView} from '../hooks-demo/table-of-contents/index';
import {LifeCycleDemoFlatListRecyclingItemView} from "../life-cycle-demo/flatlist-item-recycling/index";
import {testTypePredicate} from './test-type-predicate';

type JohnStackParamList = {
  John: {};
};
type JohnScreenNavigationProp = StackNavigationProp<JohnStackParamList>;
type Props = {
  navigation: JohnScreenNavigationProp;
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

// const DemoView = HooksDemoTableOfContentsView;
const DemoView = LifeCycleDemoFlatListRecyclingItemView;

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
  testTypePredicate();
  return (
    <View style={styles.baseView}>
      <DemoView />
    </View>
  );
};

export {JohnNavigationView};
