import React from 'react';
import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles as commonStyles } from '../../../components/common/style';
import { styles } from "./style";

const JohnView = () => {
  return (
    <SafeAreaView>
      <View style={styles.baseView} />
    </SafeAreaView>
  );
};

export {
  JohnView,
};
