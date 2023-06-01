import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

type Props = {
  text: string;
};

const Separator = ({text}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Separator;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  text: {
    color: colors.blue,
    fontWeight: '500',
    marginHorizontal: 8,
  },
});
