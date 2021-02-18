import { createStackNavigator, StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from "react-native";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
// import { styles as commonStyles } from '../../../components/common/style';
import { getUIHierarchy } from '../../resources/hierarchy';
import { styles } from "./style";

//
//  EEEEE  L       SSSS    A
//  E      L      S       A A
//  EEEE   L       SSS   A   A
//  E      L          S  AAAAA
//  EEEEE  LLLLL  SSSS   A   A
//

type SettingsStackParamList = {
  'Settings': {
    onTabNavigation: Function
  }
};
type SettingsScreenNavigationProp = StackNavigationProp<
  SettingsStackParamList
>;
type Props = {
  navigation: SettingsScreenNavigationProp
};

const SettingsStack = createStackNavigator<SettingsStackParamList>();

const SettingsNavigationView = () => {
  const onTabNavigation = (name: string) => {
    //
  }
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name='Settings'
        component={SettingsView}
        initialParams={{onTabNavigation: onTabNavigation}}
      />
    </SettingsStack.Navigator>
  );
};

type SettingsListItem = {
  index: number;
  id: 'John' | 'Yan' | 'David' | 'Sophie';
  title: string;
  subtitle?: string;
};

const settingsList: SettingsListItem[] = [
  {
    index: 0,
    id: 'John',
    title: 'John'
  },
  {
    index: 1,
    id: 'Yan',
    title: 'Yan'
  },
  {
    index: 2,
    id: 'David',
    title: 'David'
  },
  {
    index: 3,
    id: 'Sophie',
    title: 'Sophie'
  },
];

const SettingsView = (props: Props) => {
  const navigation = props.navigation;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: getUIHierarchy().root.items.main.items.settings.view.items.settings.title,
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [navigation]);
  return (
    <View style={styles.baseView}>
      <FlatList
        data={settingsList}
        renderItem={({item}) => {
          const itemStyle = item.index % 2 ? styles.flatListItem1 : styles.flatListItem0;
          return (
            <TouchableOpacity
              onPress={() => {}}
            >
              <Text style={itemStyle}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export {
  SettingsNavigationView,
};
