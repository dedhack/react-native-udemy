import React, {memo, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {categories, Category} from '../../../data/categories';
import {products, Product} from '../../../data/products';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';

type Props = {
  navigation: any;
};

const Home = ({navigation}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>();
  const [keyword, setKeyword] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter products based on selected category and keyword
  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(
        product => product?.category === selectedCategory,
      );
      setFilteredProducts(updatedProducts);
    } else if (selectedCategory && keyword) {
      const updatedProducts = products.filter(
        product =>
          product?.category === selectedCategory &&
          product?.title?.toLowerCase().includes(keyword?.toLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedProducts = products.filter(product =>
        product?.title?.toLowerCase().includes(keyword?.toLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!keyword && !selectedCategory) {
      setFilteredProducts(products);
    }
  }, [selectedCategory, keyword]);

  // TODO: To modify the on back press function
  const onBackPress = () => {
    console.log('onBackPress');
  };

  ////////////////////////////
  // Render category item
  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: Category;
    index: number;
  }) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };

  ////////////////////////////
  // Render product item
  const renderProductItem = ({item}: {item: Product}) => {
    const onProductPress = (product: Product) => {
      navigation.navigate('ProductDetails', {product});
    };

    return <ProductHomeItem {...item} onPress={() => onProductPress(item)} />;
  };

  return (
    <SafeAreaView>
      {/* <ScrollView style={styles.container}> */}
      <Header
        title="Find All You Need"
        showSearch
        keyword={keyword}
        onSearch={setKeyword}
        onBackPress={onBackPress}
      />
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
      />

      <FlatList
        data={filteredProducts}
        style={styles.productsList}
        numColumns={2}
        renderItem={renderProductItem}
        keyExtractor={item => String(item.id)}
        ListFooterComponent={<View style={{height: 200}} />}
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
    paddingVertical: 24,
  },
  productsList: {
    paddingHorizontal: 16,
  },
});
