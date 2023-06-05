import React, {memo} from 'react';
import {FlatList, ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {categories} from '../../../data/categories';
import {products, Product} from '../../../data/products';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';

type Props = {};

// add interface for category
type Category = {
  id?: number;
  title: string;
  image: string;
};

const Home = (props: Props) => {
  const onBackPress = () => {
    console.log('onBackPress');
  };

  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: Category;
    index: number;
  }) => {
    console.log('item: ', item);

    return (
      <CategoryBox
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };

  const renderProductItem = ({item}: {item: Product}) => {
    return <ProductHomeItem {...item} />;
  };

  return (
    <SafeAreaView>
      {/* <ScrollView style={styles.container}> */}
      <Header title="Find All You Need" showSearch onBackPress={onBackPress} />
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
      />

      <FlatList
        data={products}
        numColumns={2}
        renderItem={renderProductItem}
        keyExtractor={item => String(item.id)}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default memo(Home);

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  list: {
    // borderWidth: 1,
  },
});
