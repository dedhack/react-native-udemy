import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Product} from '../../data/products';
import {colors} from '../../utils/colors';
// type Props = {
//   route: any;
// };

type Route = {
  params: {
    product: Product;
  };
};

type Props = {
  route: Route;
};

const ProductDetails = ({route}: Props) => {
  //   console.log('route: ', route);
  //   console.log('navigation: ', navigation);

  const {product} = route?.params || {};
  console.log('product: ', product);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image source={{uri: product?.image}} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: height * 0.45,
  },
  content: {
    backgroundColor: colors.white,
    marginTop: -40,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    color: colors.grey,
    fontWeight: '300',
    marginVertical: 8,
  },
});
