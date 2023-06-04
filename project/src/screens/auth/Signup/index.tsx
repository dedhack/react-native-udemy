import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {memo, useState} from 'react';
import {colors} from '../../../utils/colors';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

type Props = {};

const Signup = (props: Props) => {
  const onBackPress = () => {
    console.log('Pressed');
  };

  const [checked, setChecked] = useState(false);

  const onSignIn = () => {};

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={onBackPress} />
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input label="Password" placeholder="********" isPassword />

      {/* Agreement */}
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
          <Text style={styles.agreeTextBold}>Privacy</Text>
        </Text>
      </View>

      {/* Button */}
      <Button title="Sign Up" style={styles.button} />

      {/* Separator */}
      <Separator text="Or sign up with" />

      {/* Google Login Button */}
      <GoogleLogin />

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text onPress={onSignIn} style={styles.footerLink}>
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
};

export default memo(Signup);

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
