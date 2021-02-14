import React, { useEffect } from 'react';
import { FlatList, View, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
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

const LifeCycleDemoFlatListRecyclingItemView = () => {
  return (
    <View style={styles.container}>
      <MyListView />
    </View>
  );
};

export {
    LifeCycleDemoFlatListRecyclingItemView,
};
