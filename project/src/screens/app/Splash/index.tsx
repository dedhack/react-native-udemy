import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

// import {styles} from './styles';
import Button from '../../../components/Button';
import {colors} from '../../../utils/colors';

type Props = {
  navigation: any;
};

const Splash = ({navigation}: Props) => {
  console.log('Splash');
  const onSignup = () => {
    navigation.navigate('Signup');
  };

  const onSignin = () => {
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../../assets/Splash.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find </Text>
        <Text style={[styles.title, styles.innerText]}>All You Need </Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <View style={styles.buttonCont}>
        <Button title="Sign Up" onPress={onSignup} />
      </View>

      <Pressable onPress={onSignin} hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    // borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    marginVertical: 54,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerText: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
  buttonCont: {
    width: '100%',
    flexDirection: 'row',
  },
});
