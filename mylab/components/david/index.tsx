import React from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {DavidDetailsView} from '../demo/david-stack/david-details';
import {TouchableOpacity} from 'react-native-gesture-handler';

type DavidStackParamList = {
  David?: {}; // navigation root
  DavidDetails?: {};
  // more navigation children can be added here
};
type DavidStackNavitationProp = StackNavigationProp<DavidStackParamList>;
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

      <DavidStack.Screen name="DavidDetails" component={DavidDetailsView} />
    </DavidStack.Navigator>
  );
};

type DavidViewProp = {
  test?: string;
};
const DavidView = (props: DavidViewProp) => {
  console.log(`DavidView rendered with property test=${props.test}`);
  const navigation = useNavigation<DavidStackNavitationProp>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'David',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [navigation]);
  return (
    <View style={styles.baseView}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('DavidDetails');
        }}
      >
        <Text>Show Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export {DavidNavigationView};
