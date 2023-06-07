import {Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import {colors} from '../../../utils/colors';

type Props = {};

const Settings = (props: Props) => {
  const onItemPress = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <SafeAreaView>
      <Header title="Settings" />
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Help Center</Text>
        <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Contact Us"
        />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Privacy & Terms"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Settings);

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.grey,
    marginBottom: 16,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
});
