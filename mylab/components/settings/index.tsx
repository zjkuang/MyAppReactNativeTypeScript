import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import {
  MainTabChildSiblingName,
  MainTabNavigateToSiblingFunc,
} from '../navigation-index';
import {useNavigation} from '@react-navigation/native';

//
//  EEEEE  L       SSSS    A
//  E      L      S       A A
//  EEEE   L       SSS   A   A
//  E      L          S  AAAAA
//  EEEEE  LLLLL  SSSS   A   A
//

type SettingsStackParamList = {
  Settings: {}; // navigation root
  // more navigation children can be added here
};
type SettingsScreenNavigationProp = StackNavigationProp<SettingsStackParamList>;
type SettingsNavigationViewProps = {
  navigateToSibling?: MainTabNavigateToSiblingFunc;
};

const SettingsStack = createStackNavigator<SettingsStackParamList>();

const SettingsNavigationView = (props: SettingsNavigationViewProps) => {
  const navigation = useNavigation();
  const navigateToSibling: MainTabNavigateToSiblingFunc = (
    name: MainTabChildSiblingName,
  ) => {
    navigation.navigate(name);
  };
  let navigationPerformer:
    | MainTabNavigateToSiblingFunc
    | undefined = navigateToSibling;
  navigationPerformer = props.navigateToSibling; // comment/uncomment this line to perform by self/parent
  return (
    <SettingsStack.Navigator>
      {true ? (
        <SettingsStack.Screen
          name="Settings"
          children={() => [
            <SettingsView key={0} navigateToSibling={navigationPerformer} />,
          ]}
        />
      ) : (
        <SettingsStack.Screen name="Settings" component={SettingsView} />
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
  navigateToSibling?: MainTabNavigateToSiblingFunc;
};

const SettingsView = (props: SettingsViewProps) => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Elsa',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [navigation]);
  const navigationPerformer: 'parent' | 'self' = 'self';
  return (
    <View style={styles.baseView}>
      <FlatList
        data={settingsList}
        renderItem={({item}) => {
          const itemStyle =
            item.index % 2 ? styles.flatListItem1 : styles.flatListItem0;
          return (
            <TouchableOpacity
              onPress={() => {
                if (navigationPerformer === 'self') {
                  navigation.navigate(item.id);
                } else {
                  if (props.navigateToSibling) {
                    props.navigateToSibling(item.id);
                  }
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
