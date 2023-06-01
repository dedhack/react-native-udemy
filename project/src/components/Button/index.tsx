import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  handlePress: () => void;
};

const Button = ({title, handlePress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.6}>
      <Text style={styles.title}>{title}</Text> 
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4F63AC',
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: '100%',
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
