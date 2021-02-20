/* eslint-disable @typescript-eslint/no-unused-vars */
export type MainTabChildSiblingName =
  | 'John'
  | 'Yan'
  | 'David'
  | 'Sophie'
  | 'Elsa';
export type MainTabNavigateToSiblingFunc = (
  name: MainTabChildSiblingName,
) => void;
