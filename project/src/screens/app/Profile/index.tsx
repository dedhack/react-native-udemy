import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../../utils/colors';

import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';

type Props = {
  navigation: any;
};

const Profile = ({navigation}: Props) => {
  // FIXME: Hardcoded
  const num = 10;

  const onLogout = () => {
    console.log('logout');
  };

  const onSettingsPress = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Profile" showLogout onLogout={onLogout} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>Username</Text>
          <Text style={styles.email}>Useremail</Text>

          <ListItem title="My Listings" subtitle={`You have ${num} listings`} />
          <ListItem
            onPress={onSettingsPress}
            title="Setting"
            subtitle="Account, FAQ, Contact"
          />
        </View>

        <Button style={{flex: 0}} title="Add a new listing" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 12,
  },
  email: {
    fontSize: 14,
    color: colors.grey,
    marginBottom: 16,
  },
});
