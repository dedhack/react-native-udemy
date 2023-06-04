import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { memo } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {};

const Favorites = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Favorites</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Favorites);

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
