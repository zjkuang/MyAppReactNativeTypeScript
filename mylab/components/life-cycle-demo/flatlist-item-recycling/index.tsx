/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { FlatList, View, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { styles } from './style';

const LIST_TYPE: 'FlatList' | 'RecyclerList' = 'FlatList';
const LIST_LEN = 2000;

type ItemType = {
  // it has to go the way of
  //   {type: string, item: {id: number | string}}
  // to make RecyclerListView happy
  type: 'default' | 'type-1' | 'type-2';
  item: {
    id: number;
  };
};

const dataSource = (): ItemType[] => {
  const data: ItemType[] = [];
  for (let i = 0; i < LIST_LEN; i++) {
    const item: ItemType = {
      type: 'default',
      item: {
        id: i,
      },
    };
    data.push(item);
  }
  return data;
};

type ItemViewPropType = {
  item: ItemType,
};

const ItemView = (prop: ItemViewPropType) => {
  useEffect(() => {
    console.log(`onMount of ${prop.item.item.id}`);
    return (() => {
      console.log(`onUnmount of ${prop.item.item.id}`);
    });
  }, []);

  const itemStyle = prop.item.item.id % 2 ? styles.item1 : styles.item0;
  return <Text style={itemStyle}>{prop.item.item.id}</Text>;
};

const MyListView = () => {
  return (
    <FlatList
      data={dataSource()}
      renderItem={({item}) => {
        return (
        <TouchableOpacity onPress={() => {}}>
          <ItemView item={item} />
        </TouchableOpacity>
        );
      }}
      keyExtractor={item => `${item.item.id}`}
    />
  );
};

var dataProvider = (): DataProvider => {
  const data = new DataProvider((r1, r2) => {
    return r1 !== r2;
  }).cloneWithRows(dataSource());
  return data;
};
const SCREEN_WIDTH = Dimensions.get('window').width;
const layoutProvider: LayoutProvider = new LayoutProvider(
  (index) => {
    return index;
  },
  (type, dim, index) => {
    dim.height = 40;
    dim.width = SCREEN_WIDTH;
  }
);

const MyRecyclerListView = () => {
  // https://www.youtube.com/watch?v=32ZM72CKtTE
  return (
    <RecyclerListView
      dataProvider={dataProvider()}
      layoutProvider={layoutProvider}
      rowRenderer={(type, data, index) => {
        const item: ItemType = data;
        return (
          <ItemView item={item} />
        );
      }}
    />
  );
}

const LifeCycleDemoFlatListRecyclingItemView = () => {
  return (
    <View style={styles.container}>
      {(LIST_TYPE === 'FlatList') ? <MyListView /> : <MyRecyclerListView />}
    </View>
  );
};

export {
  LifeCycleDemoFlatListRecyclingItemView,
};
