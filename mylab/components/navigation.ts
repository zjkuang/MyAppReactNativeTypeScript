import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

// https://reactnavigation.org/docs/typescript/

export type RootStackChildSiblingName = 'MainTab' | 'Modal';
export type MainTabChildSiblingName = 'John' | 'Yan' | 'David' | 'Sophie' | 'Elsa';
export type MainTabNavigateToSiblingFunc = (name: MainTabChildSiblingName) => void;

// export type RootStackParamList = {
//   JohnNavigation: {};
//     JohnRoot: {};
//       JohnHookDemoTableOfContents: {};
//         JohnHookDemoUseCallback: {};
//         JohnHookDemoUseContext: {};
//         JohnHookDemoUseEffect: {};
//         JohnHookDemoUseLayoutEffect: {};
//         JohnHookDemoUseRef: {};
//         JohnHookDemoUseState: {};
//   YanNavigation: {};
//     YanRoot: {};
//   DavidNavigation: {};
//     DavidRoot: {};
//   SophieNavigation: {};
//     SophieRoot: {};
//   ElsaNavigation: {};
//     ElsaRoot: {};
// };

// type RootStackNavigationProp = StackNavigationProp<
//   RootStackParamList
// >;

// export type RootStackNavigationProps = {
//   navigation: RootStackNavigationProp
// };
