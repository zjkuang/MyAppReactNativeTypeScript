import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

type DavidStackParamList = {
  David: {}; // navigation root
  // more navigation children can be added here
};
const DavidStack = createStackNavigator<DavidStackParamList>();
const DavidNavigationView = () => {
  return (
    <DavidStack.Navigator>
      {true ? (
        <DavidStack.Screen
          name="David"
          children={() => [<DavidView key={0} test={'test'} />]}
        />
      ) : (
        <DavidStack.Screen name="David" component={DavidView} />
      )}
    </DavidStack.Navigator>
  );
};

type DavidViewProp = {
  test?: string;
};
const DavidView = (props: DavidViewProp) => {
  console.log(`DavidView rendered with property test=${props.test}`);
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'David',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [navigation]);
  return <View style={styles.baseView} />;
};

export {DavidNavigationView};
