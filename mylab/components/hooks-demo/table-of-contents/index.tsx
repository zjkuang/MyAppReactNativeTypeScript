import React, { useLayoutEffect } from 'react';
import { View } from "react-native";
import { styles as commonStyles } from '../../../../components/common/style';
import { getUIHierarchy } from '../../../resources/hierarchy';
import { styles } from "./style";

const HooksDemoTableOfContentsView = () => {
  return (
    <View style={styles.baseView} />
  );
};

export {
  HooksDemoTableOfContentsView,
}
