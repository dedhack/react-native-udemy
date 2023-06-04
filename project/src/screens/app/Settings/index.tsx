import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {};

const Settings = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Settings</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Settings);

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
