
import React, { useCallback, useEffect } from 'react';
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
import { deregisterDimensionsChangeListener, isLandscape, isPortrait, registerDimensionsChangeListener } from "../../utilities/device";

declare const global: {HermesInternal: null | {}};

const RootView = () => {
  const dimensionsChangeListener = useCallback(() => {
    console.log(`Orientation: ${isPortrait() ? 'Portrait' : (isLandscape() ? 'Landscape' : 'unknown')}`);
  }, []);
  useEffect(() => {
    registerDimensionsChangeListener(dimensionsChangeListener);
    return (() => {
      deregisterDimensionsChangeListener(dimensionsChangeListener);
    });
  }, [dimensionsChangeListener]);

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
