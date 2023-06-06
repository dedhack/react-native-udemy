import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

type Props = {
  title: string;
  subtitle: string;
};

const ListItem = ({title, subtitle}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Image style={styles.arrow} source={require('../../assets/arrow.png')} />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'space-between',
    padding: 16,

    // Shadow
    // ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    // android
    elevation: 6,

    backgroundColor: colors.white,
    // borderWidth: 1,
    marginVertical: 12,
    borderRadius: 4,
  },
  content: {},
  title: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    color: colors.grey,
    fontSize: 12,
  },
  arrow: {
    width: 32,
    height: 32,
  },
});
