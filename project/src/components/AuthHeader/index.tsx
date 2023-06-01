import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  onBackPress: () => void;
};

const AuthHeader = ({title, onBackPress}: Props) => {
  return (
    <View>
      <Pressable onPress={onBackPress}>
        <Image source={require('../../assets/auth_back.png')} />
      </Pressable>
      <Text>{title}</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {},
  image: {},
  title: {},
});
