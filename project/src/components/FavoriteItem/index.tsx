import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

type Props = {
  title: string;
  price: number;
  image: string;
  onPress?: () => void;
};

const FavoriteItem = ({title, price, image, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <Image source={require('../../assets/close.png')} style={styles.icon} />
    </Pressable>
  );
};

export default FavoriteItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    // paddingBottom: 16,
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  content: {
    flex: 1,
  },
  title: {
    color: colors.textGrey,
    paddingVertical: 8,
  },
  price: {
    color: colors.black,
    paddingBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
});
