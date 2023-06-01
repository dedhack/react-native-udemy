import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

type Props = {
  label: string;
  placeholder: string;
};

const Input = ({label, placeholder}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={placeholder} />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
  },
  input: {
    // borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});
