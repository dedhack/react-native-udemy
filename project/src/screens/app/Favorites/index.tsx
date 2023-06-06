import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {products, Product} from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';

type Props = {
  navigation: any;
};

const Favorites = ({navigation}: Props) => {
  const renderItem = ({item}: {item: Product}) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };

    return <FavoriteItem onPress={onProductPress} {...item} />;
  };

  return (
    <SafeAreaView>
      <Header title="Favorites" />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(Favorites);

const styles = StyleSheet.create({
  // container: {
  //   padding: 24,
  // },
});
