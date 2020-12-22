/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { RootView } from './components/root/index';
import { startListeningDimensionsChange } from "./utilities/device";

const onboarding = () => {
  startListeningDimensionsChange();
};

const App = () => {
  onboarding();
  return (
    <RootView />
  );
};

export default App;
