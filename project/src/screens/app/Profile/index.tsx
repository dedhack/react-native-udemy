import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {};

const Profile = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Profile</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
