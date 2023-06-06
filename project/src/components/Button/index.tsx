import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../../utils/colors';

type Props = {
  title: string;
  onPress?: () => void;
  style?: any;
};

const Button = ({title, onPress, style}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.6}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: '100%',
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
