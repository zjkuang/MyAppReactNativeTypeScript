/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SectionList, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles as commonStyles} from '../../../../components/common/style';
import {getUIHierarchy} from '../../../resources/hierarchy';
import {styles} from './style';

type TableOfContentsItem = {
  index: number;
  title: string;
};
type TableOfContentsSection = {
  title: string;
  data: TableOfContentsItem[];
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
          const itemStyle = item.index & 1 ? styles.item1 : styles.item0;
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(
                  `HooksDemoTableOfContentsView onPress: ${JSON.stringify(
                    item,
                  )}`,
                );
              }}>
              <Text style={itemStyle}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

export {HooksDemoTableOfContentsView};
