import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../../utils/colors';

type Props = {};

const GoogleLogin = (props: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        // onPress={onPress}
        activeOpacity={0.6}>
        <Image
          style={styles.image}
          source={require('../../assets/Google.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(GoogleLogin);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    borderRadius: 14,
    width: '45%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 30,
    height: 30,
  },
});
