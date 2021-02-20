import React from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {SophieDetailsView} from '../demo/sophie-stack/sophie-details';
import {TouchableOpacity} from 'react-native-gesture-handler';

type SophieStackParamList = {
  Sophie?: {}; // navigation root
  SophieDetails?: {};
  // more navigation children can be added here
};
type SophieStackNavitationProp = StackNavigationProp<SophieStackParamList>;
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

      <SophieStack.Screen name="SophieDetails" component={SophieDetailsView} />
    </SophieStack.Navigator>
  );
};

type SophieViewProp = {
  test?: string;
};
const SophieView = (props: SophieViewProp) => {
  const navigation = useNavigation<SophieStackNavitationProp>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Sophie',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [navigation]);
  return (
    <View style={styles.baseView}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('SophieDetails');
        }}
      >
        <Text>Show Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export {SophieNavigationView};
