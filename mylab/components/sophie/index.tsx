import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

type SophieStackParamList = {
  Sophie: {}; // navigation root
  // more navigation children can be added here
};
const SophieStack = createStackNavigator<SophieStackParamList>();
const SophieNavigationView = () => {
  return (
    <SophieStack.Navigator>
      {true ? (
        <SophieStack.Screen
          name="Sophie"
          children={() => [<SophieView key={0} test={'test'} />]}
        />
      ) : (
        <SophieStack.Screen name="Sophie" component={SophieView} />
      )}
    </SophieStack.Navigator>
  );
};

type SophieViewProp = {
  test?: string;
};
const SophieView = (props: SophieViewProp) => {
  console.log(`SophieView rendered with property test=${props.test}`);
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Sophie',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [navigation]);
  return <View style={styles.baseView} />;
};

export {SophieNavigationView};
