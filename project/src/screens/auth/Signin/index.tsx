import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../../../utils/colors';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

type Props = {};

const Signin = (props: Props) => {
  const onBackPress = () => {
    console.log('Pressed');
  };

  const onSignIn = () => {};

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In" onBackPress={onBackPress} />

      <Input label="Email" placeholder="example@gmail.com" />
      <Input label="Password" placeholder="********" isPassword />

      {/* Button */}
      <Button title="Sign In" style={styles.button} />

      {/* Separator */}
      <Separator text="Or sign in with" />

      {/* Google Login Button */}
      <GoogleLogin />

      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text onPress={onSignIn} style={styles.footerLink}>
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default memo(Signin);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    // borderWidth: 1,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 14,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 20,
  },
  footerText: {
    color: colors.blue,
    marginBottom: 56,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold',
  },
});
