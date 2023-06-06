import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Product} from '../../data/products';
import {colors} from '../../utils/colors';
import Button from '../Button';
import ImageCarousel from '../ImageCarousel';

type Route = {
  params: {
    product: Product;
  };
};

type Props = {
  route: Route;
  navigation: any;
};

const ProductDetails = ({route, navigation}: Props) => {
  const {product} = route?.params || {};
  console.log('product: ', product);

  const onBackPress = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        {/* Conditional render of either single image or an image carousel */}
        {product?.images?.length ? (
          <ImageCarousel images={product?.images} />
        ) : (
          <Image source={{uri: product?.image}} style={styles.image} />
        )}

        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        <Pressable style={styles.backContainer} onPress={onBackPress}>
          <Image
            style={styles.backIcon}
            source={require('../../assets/back.png')}
          />
        </Pressable>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image
            style={styles.bookmarkIcon}
            source={require('../../assets/tabs/bookmark.png')}
          />
        </Pressable>

        <Button title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  safe: {
    borderWidth: 5,
    flex: 1,
    // borderColor: 'red',
  },
  footer: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },

  container: {
    // borderWidth: 5,
  },
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

  bookmarkContainer: {
    backgroundColor: colors.lightGrey,
    padding: 18,
    borderRadius: 8,
    marginRight: 16,
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
  },

  backContainer: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 24,
    borderRadius: 8,
    marginRight: 16,
    position: 'absolute',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});
