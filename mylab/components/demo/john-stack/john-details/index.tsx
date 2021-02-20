import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type JohnDetailsViewProp = {
  test?: string;
};
const JohnDetailsView = (props: JohnDetailsViewProp) => {
  console.log(`JohnDetailsView rendered with property test=${props.test}`);
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
          navigation.navigate("Sophie");
        }}
      >
        <Text>Go To Sophie</Text>
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
          navigation.navigate("Yan");
        }}
      >
        <Text>Go To Yan</Text>
      </TouchableOpacity>

      { /* Depending on whether YanDetails is rendered, this may be safe or may cause a crash */
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("YanDetails");
          }}
        >
          <Text>Go To Yan Details (May or may not crash)</Text>
        </TouchableOpacity>
      }
    </View>
  );
};

export {JohnDetailsView};
