import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import {colors} from '../../../utils/colors';
import EditableBox from '../../../components/EditableBox';
import Button from '../../../components/Button';

type Props = {};

const Settings = (props: Props) => {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({name: 'User', email: 'user@email.com'});

  const onEditPress = () => {
    setEditing(true);
  };

  const onSave = () => {};

  const onItemPress = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {/* Personal Information */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={onEditPress}>
            <Image
              source={require('../../../assets/edit.png')}
              style={styles.icon}
            />
          </Pressable>
        </View>

        <EditableBox label="Name" value="User" editable={editing} />
        <EditableBox label="Email" value="User" editable={editing} />

        {editing ? (
          <Button title="Save" onPress={onSave} style={styles.button} />
        ) : null}

        {/* Help Center */}
        <Text style={[styles.sectionTitle, {marginTop: 40}]}>Help Center</Text>
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    paddingVertical: 12,
    marginTop: 16,
  },
});
