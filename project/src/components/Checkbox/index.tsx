import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

type Props = {
  checked: boolean;
  onCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

const Checkbox = ({checked, onCheck}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onCheck(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../assets/check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    width: 22,
    height: 22,
  },
  innerContainer: {
    backgroundColor: colors.grey,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 12,
    height: 9,
  },
});
