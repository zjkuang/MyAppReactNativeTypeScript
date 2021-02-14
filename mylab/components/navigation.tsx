import { StackNavigationProp } from '@react-navigation/stack';

// https://reactnavigation.org/docs/typescript/

export type RootStackParamList = {
  JohnNavigation: {};
    JohnRoot: {};
      JohnHookDemoTableOfContents: {};
        JohnHookDemoUseCallback: {};
        JohnHookDemoUseContext: {};
        JohnHookDemoUseEffect: {};
        JohnHookDemoUseLayoutEffect: {};
        JohnHookDemoUseRef: {};
        JohnHookDemoUseState: {};
  YanNavigation: {};
    YanRoot: {};
  DavidNavigation: {};
    DavidRoot: {};
  SophieNavigation: {};
    SophieRoot: {};
  ElsaNavigation: {};
    ElsaRoot: {};
};

type RootStackNavigationProp = StackNavigationProp<
  RootStackParamList
>;

export type RootStackNavigationProps = {
  navigation: RootStackNavigationProp
};
