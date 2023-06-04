import React, {memo} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Home);

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
