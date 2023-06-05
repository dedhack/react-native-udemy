import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

type Props = {
  title?: string;
  image?: string;
  onPress?: () => void; // modify later
};

const CategoryBox = ({title, image, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(CategoryBox);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: colors.lightGrey,
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  image: {
    width: 32,
    height: 32,
  },
  title: {
    color: colors.grey,
  },
});
