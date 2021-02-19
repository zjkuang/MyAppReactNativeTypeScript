/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles as commonStyles} from '../../../../components/common/style';
import {getUIHierarchy} from '../../../resources/hierarchy';
import {styles} from './style';

const HooksDemoUseStateView = () => {
  return (
    <View style={styles.container}>
      <Text>useState()</Text>
    </View>
  );
};

export {HooksDemoUseStateView};
