import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

type JohnStackParamList = {
  John: {}; // navigation root
  // more navigation children can be added here
};
const JohnStack = createStackNavigator<JohnStackParamList>();
const JohnNavigationView = () => {
  return (
    <JohnStack.Navigator>
      {true ? (
        <JohnStack.Screen
          name="John"
          children={() => [<JohnView key={0} test={'test'} />]}
        />
      ) : (
        <JohnStack.Screen name="John" component={JohnView} />
      )}
    </JohnStack.Navigator>
  );
};

type JohnViewProp = {
  test?: string;
};
const JohnView = (props: JohnViewProp) => {
  console.log(`JohnView rendered with property test=${props.test}`);
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'John',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [navigation]);
  return <View style={styles.baseView} />;
};

export {JohnNavigationView};
