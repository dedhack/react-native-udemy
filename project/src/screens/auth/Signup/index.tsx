import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import AuthHeader from '../../../components/AuthHeader';

type Props = {};

const Signup = (props: Props) => {
  const onBackPress = () => {
    console.log('Pressed');
  };

  return (
    <View>
      <Text>index</Text>
      <AuthHeader title="Sign Up" onBackPress={onBackPress} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
