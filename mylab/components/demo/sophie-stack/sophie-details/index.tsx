import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type SophieDetailsViewProp = {
  test?: string;
};
const SophieDetailsView = (props: SophieDetailsViewProp) => {
  console.log(`SophieDetailsView rendered with property test=${props.test}`);
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
            navigation.navigate("David");
        }}
      >
        <Text>Go To David</Text>
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
            navigation.navigate("John");
        }}
      >
        <Text>Go To John</Text>
      </TouchableOpacity>
    </View>
  );
};

export {SophieDetailsView};
