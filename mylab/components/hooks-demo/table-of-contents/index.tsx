import React, { useLayoutEffect } from 'react';
import { SectionList, SectionListData, View, Text } from "react-native";
import { styles as commonStyles } from '../../../../components/common/style';
import { getUIHierarchy } from '../../../resources/hierarchy';
import { styles } from "./style";

type TableOfContentsItem = {
  index: number,
  title: string,
};
type TableOfContentsSection = {
  title: string,
  data: TableOfContentsItem[],
};

const tableOfContents: TableOfContentsSection[] = [
  {
    title: 'Hooks',
    data: [
      {
        index: 0,
        title: 'useCallback',
      },
      {
        index: 1,
        title: 'useContext',
      },
      {
        index: 2,
        title: 'useEffect',
      },
      {
        index: 3,
        title: 'useLayoutEffect',
      },
      {
        index: 4,
        title: 'useRef',
      },
      {
        index: 5,
        title: 'useState',
      },
    ],
  },
];

const HooksDemoTableOfContentsView = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={tableOfContents}
        renderItem={({item}) => {
          return (<Text>{item.title}</Text>)
        }}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

export {
  HooksDemoTableOfContentsView,
}
