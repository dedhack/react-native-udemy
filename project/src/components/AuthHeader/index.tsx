import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

type Props = {
  title: string;
  onBackPress: () => void;
};

const AuthHeader = ({title, onBackPress}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress}>
        <Image
          style={styles.image}
          source={require('../../assets/auth_back.png')}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 54,
  },
  image: {
    width: 18,
    height: 18,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: '500',
    paddingHorizontal: 16,
  },
});
