import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../../utils/colors';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

type Props = {};

const GoogleLogin = (props: Props) => {
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo: ', userInfo);
      // setState({userInfo});
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={handleGoogleLogin}
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
    marginBottom: 64,
  },
  image: {
    width: 30,
    height: 30,
  },
});
