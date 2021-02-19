/* eslint-disable @typescript-eslint/no-unused-vars */
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

// https://reactnavigation.org/docs/typescript/

export type RootStackChildSiblingName = 'MainTab' | 'Modal';
export type MainTabChildSiblingName =
  | 'John'
  | 'Yan'
  | 'David'
  | 'Sophie'
  | 'Elsa';
export type MainTabNavigateToSiblingFunc = (
  name: MainTabChildSiblingName,
) => void;

export type NavigationItemType = 'Stack' | 'Screen';

export type NavigationItem = {
  name: string;
  type: NavigationItemType;
  title?: string;
  immediateChildren?: NavigationItem[];
};

const root = 'root';
const mainTab = 'mainTab';
const modal = 'modal';
const johnStack = 'johnStack';
const john = 'john';
const yanStack = 'yanStack';
const yan = 'yan';
const davidStack = 'davidStack';
const david = 'david';
const sophieStack = 'sophieStack';
const sophie = 'sophie';
const elsaStack = 'elsaStack';
const elsa = 'elsa';

const navigationItemJohnScreen: NavigationItem = {
  name: `${root}/${mainTab}/${johnStack}/${john}`,
  title: 'John',
  type: 'Screen',
};

const navigationItemJohnStack: NavigationItem = {
  name: `${root}/${mainTab}/${johnStack}`,
  type: 'Stack',
  immediateChildren: [navigationItemJohnScreen],
};

const navigationItemYanScreen: NavigationItem = {
  name: `${root}/${mainTab}/${yanStack}/${yan}`,
  type: 'Screen',
  title: 'Yan',
};

const navigationItemYanStack: NavigationItem = {
  name: `${root}/${mainTab}/${yanStack}`,
  type: 'Stack',
  immediateChildren: [navigationItemYanScreen],
};

const navigationItemDavidScreen: NavigationItem = {
  name: `${root}/${mainTab}/${davidStack}/${david}`,
  type: 'Screen',
  title: 'David',
};

const navigationItemDavidStack: NavigationItem = {
  name: `${root}/${mainTab}/${davidStack}`,
  type: 'Stack',
  immediateChildren: [navigationItemDavidScreen],
};

const navigationItemSophieScreen: NavigationItem = {
  name: `${root}/${mainTab}/${sophieStack}/${sophie}`,
  type: 'Screen',
  title: 'Sophie',
};

const navigationItemSophieStack: NavigationItem = {
  name: `${root}/${mainTab}/${sophieStack}`,
  type: 'Stack',
  immediateChildren: [navigationItemSophieScreen],
};

const navigationItemElsaScreen: NavigationItem = {
  name: `${root}/${mainTab}/${elsaStack}/${elsa}`,
  type: 'Screen',
  title: 'Elsa',
};

const navigationItemElsaStack: NavigationItem = {
  name: `${root}/${mainTab}/${elsaStack}`,
  type: 'Stack',
  immediateChildren: [navigationItemElsaScreen],
};

const navigationItemMainTabStack: NavigationItem = {
  name: `${root}/${mainTab}`,
  type: 'Stack',
  immediateChildren: [
    navigationItemJohnStack,
    navigationItemYanStack,
    navigationItemDavidStack,
    navigationItemSophieStack,
    navigationItemElsaStack,
  ],
};

const navigationItemModalScreen: NavigationItem = {
  // a single screen hosting different views for different scenarios.
  name: `${root}/${modal}`,
  type: 'Screen',
};

const navigationItemRootStack: NavigationItem = {
  name: `${root}`,
  type: 'Stack',
  immediateChildren: [navigationItemMainTabStack, navigationItemModalScreen],
};

export {
  navigationItemRootStack,
  navigationItemMainTabStack,
  navigationItemModalScreen,
  navigationItemJohnStack,
  navigationItemYanStack,
  navigationItemDavidStack,
  navigationItemSophieStack,
  navigationItemElsaStack,
  navigationItemJohnScreen,
  navigationItemYanScreen,
  navigationItemDavidScreen,
  navigationItemSophieScreen,
  navigationItemElsaScreen,
};
