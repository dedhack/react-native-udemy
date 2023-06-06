import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';

type Props = {
  images: string[];
};

const ImageCarousel = ({images}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollEnd = (e: any) => {
    const horizontalOffset = e.nativeEvent.contentOffset.x;
    const index = Math.round(horizontalOffset / width);

    setActiveIndex(index);
  };

  const renderImage = ({item}: {item: string}) => {
    return <Image source={{uri: item}} style={styles.image} />;
  };

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        style={styles.list}
        data={images}
        renderItem={renderImage}
        onMomentumScrollEnd={handleScrollEnd}
      />

      <View style={styles.pagination}>
        {images?.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationLine,
              i === activeIndex ? styles.activeLine : {},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.45,
  },
  list: {},
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  paginationLine: {
    height: 4,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    margin: 5,
  },
  activeLine: {
    backgroundColor: colors.black,
    width: 30,
  },
});
