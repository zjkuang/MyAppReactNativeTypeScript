import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type YanDetailsViewProp = {
  test?: string;
};
const YanDetailsView = (props: YanDetailsViewProp) => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Details',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [navigation]);
  return (
    <View style={styles.baseView}>
      <TouchableOpacity
        onPress={() => {
            navigation.navigate("John");
        }}
      >
        <Text>Go To John</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
            navigation.goBack();
        }}
      >
        <Text>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
            navigation.navigate("David");
        }}
      >
        <Text>Go To David</Text>
      </TouchableOpacity>
    </View>
  );
};

export {YanDetailsView};
