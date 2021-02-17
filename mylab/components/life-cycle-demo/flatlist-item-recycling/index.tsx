import React, { useEffect } from 'react';
import { FlatList, View, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import { styles } from "./style";

type ItemType = {
  key: string,
  title: string,
};

const dataSource = (): ItemType[] => {
  const data: ItemType[] = [];
  for (let i = 0; i < 50; i++) {
    const item: ItemType = {
      key: `${i}`,
      title: `${i}`
    };
    data.push(item);
  }
  return data;
};

type ItemViewPropType = {
  item: ItemType,
};

const ItemView = (prop: ItemViewPropType) => {
  const itemStyle = (parseInt(prop.item.key) & 1) ? styles.item1 : styles.item0;
  useEffect(() => {
    console.log(`onMount of ${prop.item.key}`);
    return (() => {
      console.log(`onUnmount of ${prop.item.key}`);
    });
  }, []);
  return (
    <Text style={itemStyle}>{prop.item.title}</Text>
  );
};

const MyListView = () => {
  return (
    <FlatList
      data={dataSource()}
      renderItem={({item}) => {
        const itemStyle = (parseInt(item.key) & 1) ? styles.item1 : styles.item0;
        return (
        <TouchableOpacity onPress={() => {}}>
          <ItemView item={item}></ItemView>
        </TouchableOpacity>
        );
      }}
    />
  );
};

var dataProvider = (): DataProvider => {
  const data = new DataProvider((r1, r2) => {return r1 !== r2});
  data.cloneWithRows(dataSource());
  return data;
};
const layoutProvider: LayoutProvider = new LayoutProvider(
  (index) => {
    return index
  },
  (type, dim, index) => {
    dim.height = 40;
  }
);

const MyRecyclerListView = () => {
  // https://spectrum.chat/react-native/help/recyclerlistview-scrolls-to-top-onendreached-with-functional-component~ac8ee7aa-c7a3-4ef2-a629-43b2f14a2b85
  return (
    <RecyclerListView
      dataProvider={dataProvider()}
      layoutProvider={layoutProvider}
      rowRenderer={(type, data, index) => {
        const item: ItemType = data;
        return (
          <Text>{item.title}</Text>
        );
      }}
    />
  );
}

const LifeCycleDemoFlatListRecyclingItemView = () => {
  return (
    <View style={styles.container}>
      <MyRecyclerListView />
    </View>
  );
};

export {
  LifeCycleDemoFlatListRecyclingItemView,
};
