import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

type Props = {
  title: string;
  price: string;
  image: string;
  onPress?: () => void;
};

const ProductHomeItem = ({title, price, image, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
};

export default React.memo(ProductHomeItem);

// Styling
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    width: width / 2,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    width: width / 2,
    height: 220,
    borderRadius: 8,
  },
  title: {
    color: colors.textGrey,
  },
  price: {
    color: colors.black,
  },
});
