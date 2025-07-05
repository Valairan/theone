import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';
import { styles as themes } from '../../styles';
import { Image } from 'react-native';
import Images from '@/app/ImageDatabase/images';
import BasicButton from '../Buttons/Buttons';

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const CARD_WIDTH = WIDTH * 0.9
const CARD_HEIGHT = WIDTH * 1.5

const BUTTON_SIZE = WIDTH / 5
const SMALL_BUTTON_SIZE = BUTTON_SIZE / 2

interface ProfileCardProps {
  name: string;
  age: number;
  style?: object;
  titleStyle?: object;
  uris: any[];

  onSwipe?: (dir: 'left' | 'right' | 'up') => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, age, style, titleStyle, uris, onSwipe }) => {

  const [imageIndex, setImageIndex] = useState(0);

  function NextPic() {
    if (imageIndex < uris.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  }

  function PreviousPic() {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  }

  const imagesBarsToRender = [];
  if (uris.length > 1) {
    for (let i = 0; i < uris.length; i++) {
      imagesBarsToRender.push(
        <View
          style={[styles.imageBar, {
            width: (WIDTH * 0.7) / uris.length,
            height: 8,
            backgroundColor: i == imageIndex ? themes.crayola : themes.white,
          }]}
        />

      );
    }
  }

  return (
    <View style={[styles.container, style]}>

      <View style={styles.imageWrapper}>
        <Image source={uris[imageIndex]} style={styles.image} />

        <TouchableOpacity
          style={styles.leftTouchable}
          onPress={() => {
            PreviousPic();
          }}
        />
        <TouchableOpacity
          style={styles.rightTouchable}
          onPress={() => {
            NextPic()
          }}
        />

        <View style={styles.fakeGradientOverlay} />
      </View>

      <View style={styles.imageBarsOverlay}>
        {imagesBarsToRender}
      </View>

      <View style={styles.buttonOverlayContainer}>
        <BasicButton
          title={'X'}
          textStyle={{
            fontSize: BUTTON_SIZE * 3 / 4
          }}
          containerStyle={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            borderRadius: BUTTON_SIZE / 2,
            backgroundColor: themes.persian,
            borderWidth: 2,
            borderColor: themes.white
          }}
        onPress={() => onSwipe?.('left')}
        />

        <BasicButton
          title={'✓'}
          textStyle={{
            fontSize: BUTTON_SIZE * 3 / 4
          }}
          containerStyle={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            borderRadius: BUTTON_SIZE / 2,
            backgroundColor: themes.celadon,
            borderWidth: 2,
            borderColor: themes.white
          }}
        onPress={() => onSwipe?.('right')}
        />
      </View>

      <View style={styles.profileButtonOverlayContainer}>
        <BasicButton
          title={'P'}
          textStyle={{
            fontSize: SMALL_BUTTON_SIZE * 3 / 4,
            // color: themes.night
            color: themes.white
          }}
          containerStyle={{
            width: SMALL_BUTTON_SIZE,
            height: SMALL_BUTTON_SIZE,
            borderRadius: SMALL_BUTTON_SIZE / 2,
            backgroundColor: themes.blue,
            borderWidth: 2,
            borderColor: themes.white,
            alignSelf: 'flex-end',
          }}
          onPress={() => onSwipe?.('up')}
        />
      </View>

      <View style={styles.textOverlayContainer}>
        <Text style={[styles.title, titleStyle]}>{name}</Text>
        <Text style={[styles.title, titleStyle]}>{age}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: CARD_WIDTH,
    alignSelf: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: themes.white,
  },
  buttonOverlayContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: CARD_WIDTH / 20,
    width: '100%'
  },
  profileButtonOverlayContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  textOverlayContainer: {
    position: 'absolute',
    top: CARD_HEIGHT * 0.75,
    left: 10,
    padding: 5
  },
  imageBarsOverlay: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    top: 10,
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  imageBar: {
    borderRadius: 8,
  },

  imageWrapper: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 32,
    overflow: 'hidden',
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  fakeGradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: CARD_HEIGHT * 0.25,
    backgroundColor: themes.night,
    opacity: 0.5,
  },

  leftTouchable: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '20%',
    height: CARD_HEIGHT * 0.75,
    zIndex: 2,
    // backgroundColor: 'rgba(255, 0, 0, 0.2)'
  },

  rightTouchable: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: '20%',
    height: CARD_HEIGHT * 0.75,
    zIndex: 2,
    // backgroundColor: 'rgba(0, 255, 0, 0.2)'
  },


});

export default ProfileCard;