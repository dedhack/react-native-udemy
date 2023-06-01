import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';

type Props = {};

const Signup = (props: Props) => {
  const onBackPress = () => {
    console.log('Pressed');
  };

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={onBackPress} />
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input label="Password" placeholder="********" />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    // borderWidth: 1,
  },
});
