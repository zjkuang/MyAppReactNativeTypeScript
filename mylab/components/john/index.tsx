import React from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {JohnDetailsView} from '../demo/john-stack/john-details';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackNavigationProp} from '../root/index';

type JohnStackParamList = {
  John?: {}; // navigation root
  JohnDetails?: {};
  // more navigation children can be added here
};
type JohnStackNavitationProp = StackNavigationProp<JohnStackParamList>;
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

      <JohnStack.Screen name="JohnDetails" component={JohnDetailsView} />
    </JohnStack.Navigator>
  );
};

type JohnViewProp = {
  test?: string;
};
const JohnView = (props: JohnViewProp) => {
  console.log(`JohnView rendered with property test=${props.test}`);
  const navigation = useNavigation<JohnStackNavitationProp>();
  const rootNavigation = useNavigation<RootStackNavigationProp>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'John',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [navigation]);
  return (
    <View style={styles.baseView}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('JohnDetails');
        }}
      >
        <Text>Show Detail</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => {
          rootNavigation.navigate("Modal");
        }}
      >
        <Text>Show Modal</Text>
      </TouchableOpacity>
  </View>
  );
};

export {JohnNavigationView};
