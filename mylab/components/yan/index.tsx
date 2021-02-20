import React from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {YanDetailsView} from '../demo/yan-stack/yan-details';
import {TouchableOpacity} from 'react-native-gesture-handler';

type YanStackParamList = {
  Yan?: {}; // navigation root
  YanDetails?: {};
  // more navigation children can be added here
};
type YanStackNavitationProp = StackNavigationProp<YanStackParamList>;
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

      <YanStack.Screen name="YanDetails" component={YanDetailsView} />
    </YanStack.Navigator>
  );
};

type YanViewProp = {
  test?: string;
};
const YanView = (props: YanViewProp) => {
  console.log(`YanView rendered with property test=${props.test}`);
  const navigation = useNavigation<YanStackNavitationProp>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Yan',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [navigation]);
  return (
    <View style={styles.baseView}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('YanDetails');
        }}
      >
        <Text>Show Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export {YanNavigationView};
