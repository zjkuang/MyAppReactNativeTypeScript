
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { styles as commonStyles } from '../common/style';
import { styles } from "./style";
import { NewAppScreenView } from '../new-app-screen/index';

declare const global: {HermesInternal: null | {}};

const RootView = () => {
  const showNewAppScreen = false;
  if (showNewAppScreen) {
    return (
      <PaperProvider>
        <NewAppScreenView/>
      </PaperProvider>
    );
  } else {
    return (
      <PaperProvider>
        <SafeAreaView>
          <View style={styles.baseView}></View>
        </SafeAreaView>
      </PaperProvider>
    );
  }
};

export {
  RootView,
};
