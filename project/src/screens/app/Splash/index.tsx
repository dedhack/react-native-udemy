import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {styles} from './styles';

type Props = {};

const Splash = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../../assets/Splash.png')}
      />
      <Text style={styles.title}>You'll Find </Text>
      <Text style={[styles.title, styles.innerText]}>All You Need </Text>
      <Text style={styles.title}>Here!</Text>
    </View>
  );
};

export default Splash;

// const styles = StyleSheet.create({});
