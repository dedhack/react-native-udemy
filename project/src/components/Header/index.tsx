import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo, useState} from 'react';
import {colors} from '../../utils/colors';
import Input from '../Input';

type Props = {
  title: string;
  onBackPress?: () => void;
  onSearch?: React.Dispatch<React.SetStateAction<string>>;
  onLogout?: () => void;
  showLogout?: boolean;
  showSearch?: boolean;
  showBack?: boolean;
  keyword?: string;
};

const Header = ({
  title,
  onBackPress,
  showLogout,
  showSearch,
  showBack,
  keyword,
  onSearch,
}: Props) => {
  // States
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearchClick = () => {
    setShowSearchInput(s => !s);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image
              style={styles.icon}
              source={require('../../assets/back.png')}
            />
          </Pressable>
        ) : showSearch ? (
          <Pressable hitSlop={20} onPress={onSearchClick}>
            <Image
              style={styles.icon}
              source={require('../../assets/search.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
        <Text style={styles.title}>{title}</Text>

        {/*  */}

        {showLogout ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image
              style={styles.icon}
              source={require('../../assets/logout.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>

      {showSearchInput ? (
        <Input
          onChangeText={onSearch}
          value={keyword}
          placeholder="Type your keyword..."
        />
      ) : null}
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  space: {
    width: 24,
  },
});
