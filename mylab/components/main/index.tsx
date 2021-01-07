import React from 'react';
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles as commonStyles } from '../../../components/common/style';
import { styles } from "./style";

const MainView = () => {
  return (
    <SafeAreaView>
      <View style={styles.baseView} />
    </SafeAreaView>
  );
};

export {
  MainView,
};
