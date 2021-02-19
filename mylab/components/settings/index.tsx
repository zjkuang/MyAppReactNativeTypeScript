/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
// import { styles as commonStyles } from '../../../components/common/style';
import {getUIHierarchy} from '../../resources/hierarchy';
import {styles} from './style';
import {MainTabChildSiblingName, MainTabNavigateToSiblingFunc} from '../navigation';

//
//  EEEEE  L       SSSS    A
//  E      L      S       A A
//  EEEE   L       SSS   A   A
//  E      L          S  AAAAA
//  EEEEE  LLLLL  SSSS   A   A
//

type SettingsStackParamList = {
  Settings: {};
};
type SettingsScreenNavigationProp = StackNavigationProp<SettingsStackParamList>;
type SettingsNavigationViewProps = {
  navigation?: SettingsScreenNavigationProp;
  navigateToSibling?: MainTabNavigateToSiblingFunc;
};

const SettingsStack = createStackNavigator<SettingsStackParamList>();

const SettingsNavigationView = (props: SettingsNavigationViewProps) => {
  return (
    <SettingsStack.Navigator>
      {true ? (
        <SettingsStack.Screen
          name="Settings"
          children={() => [<SettingsView key={0} navigateToSibling={props.navigateToSibling}/>]}
        />
      ) : (
        <SettingsStack.Screen
          name="Settings"
          component={SettingsView}
        />
      )}
    </SettingsStack.Navigator>
  );
};

type SettingsListItem = {
  index: number;
  id: MainTabChildSiblingName;
  title: string;
  subtitle?: string;
};

const settingsList: SettingsListItem[] = [
  {
    index: 0,
    id: 'John',
    title: 'John',
  },
  {
    index: 1,
    id: 'Yan',
    title: 'Yan',
  },
  {
    index: 2,
    id: 'David',
    title: 'David',
  },
  {
    index: 3,
    id: 'Sophie',
    title: 'Sophie',
  },
];

type SettingsViewProps = {
  navigation?: SettingsScreenNavigationProp;
  navigateToSibling?: MainTabNavigateToSiblingFunc;
};

const SettingsView = (props: SettingsViewProps) => {
  React.useLayoutEffect(() => {
    props.navigation?.setOptions({
      title: getUIHierarchy().root.items.main.items.settings.view.items.settings
        .title,
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, []);
  return (
    <View style={styles.baseView}>
      <FlatList
        data={settingsList}
        renderItem={({item}) => {
          const itemStyle =
            item.index % 2 ? styles.flatListItem1 : styles.flatListItem0;
          return (
            <TouchableOpacity onPress={() => {
              if (props.navigateToSibling) {
                props.navigateToSibling(item.id);
              }
            }}>
              <Text style={itemStyle}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

export {SettingsNavigationView};
