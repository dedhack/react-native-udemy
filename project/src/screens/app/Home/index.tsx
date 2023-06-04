import React, {memo} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';

type Props = {};

const Home = (props: Props) => {
  const onBackPress = () => {
    console.log('onBackPress');
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header
          title="Find All You Need"
          showSearch
          onBackPress={onBackPress}
        />
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
