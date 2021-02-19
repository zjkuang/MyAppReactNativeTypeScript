import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

type YanStackParamList = {
  Yan: {}; // navigation root
  // more navigation children can be added here
};
const YanStack = createStackNavigator<YanStackParamList>();
const YanNavigationView = () => {
  return (
    <YanStack.Navigator>
      {true ? (
        <YanStack.Screen
          name="Yan"
          children={() => [<YanView key={0} test={'test'} />]}
        />
      ) : (
        <YanStack.Screen name="Yan" component={YanView} />
      )}
    </YanStack.Navigator>
  );
};

type YanViewProp = {
  test?: string;
};
const YanView = (props: YanViewProp) => {
  console.log(`YanView rendered with property test=${props.test}`);
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Yan',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [navigation]);
  return <View style={styles.baseView} />;
};

export {YanNavigationView};
