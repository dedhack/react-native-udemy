import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

type Props = {
  label: string;
  subtitle?: string;
  value: string;
  onChangeText: (text: string) => void;
  editable: boolean;
  style?: any;
};

const EditableBox = ({label, value, onChangeText, editable, style}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        editable={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default EditableBox;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,

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
    marginVertical: 12,
    borderRadius: 4,
  },
  label: {
    color: colors.grey,
    fontSize: 12,
    marginTop: 6,
  },
  input: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
