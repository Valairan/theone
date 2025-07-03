import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ColorValue } from 'react-native';
import { styles as themes } from '../../styles';
import { Animated, PanResponder, PanResponderGestureState } from 'react-native';
import BasicButton from '../Buttons/Buttons';
import { Image } from 'react-native';
import Images from '@/app/ImageDatabase/images';


const { width } = Dimensions.get('window');
const height = Dimensions.get('screen').height


const SWIPE_THRESHOLD = width / 3;
const SWIPE_THRESHOLD_VERTICAL = height / 5;
const SWIPE_OUT_DURATION = 300;
const SWIPE_OUT_DURATION_VERTICAL = 800;

const BUTTON_SIZE = width / 4;
const SMALL_BUTTON_SIZE = BUTTON_SIZE / 2;


interface ProfileCardProps {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeUp?: () => void;
    style?: any;
}

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};


const styles = StyleSheet.create({
    card: {
        width: width * 0.9,
        alignSelf: 'center',
        backgroundColor: 'rgb(77, 77, 77)',
        borderRadius: 32,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        position: 'absolute',
    },
});

const ProfileCard: React.FC<ProfileCardProps> = ({ onSwipeLeft, onSwipeRight, onSwipeUp }) => {
    const [isVisible, setIsVisible] = useState(true);
    const position = useRef(new Animated.ValueXY()).current;
    const [bgColor, setBgColor] = React.useState<string>(getRandomColor());

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gesture: PanResponderGestureState) => {
                // position.setValue({ x: gesture.dx, y: gesture.dy });
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },

            onPanResponderRelease: (_, gesture: PanResponderGestureState) => {
                if (gesture.dx > SWIPE_THRESHOLD) {
                    forceSwipe('right');
                } else if (gesture.dx < -SWIPE_THRESHOLD) {
                    forceSwipe('left');
                } else if (gesture.dy < -SWIPE_THRESHOLD_VERTICAL) {
                    forceSwipe('up');
                } else {
                    resetPosition();
                }
            },
        })
    ).current;

    const forceSwipe = (direction: 'left' | 'right' | 'up') => {
        let toValue;

        if (direction === 'right') {
            toValue = { x: width, y: 0 };
        } else if (direction === 'left') {
            toValue = { x: -width, y: 0 };
        } else {
            toValue = { x: 0, y: -height * 1.5 }; // or use -height if you prefer
        }

        Animated.timing(position, {
            toValue,
            duration: direction == 'up' ? SWIPE_OUT_DURATION_VERTICAL : SWIPE_OUT_DURATION,
            useNativeDriver: false,
        }).start(() => onSwipeComplete(direction));
    };


    const removeCard = () => {
        setIsVisible(false);
    };

    const onSwipeComplete = (direction: 'left' | 'right' | 'up') => {
        if (direction === 'up') {
            onSwipeUp?.();
        } else if (direction === 'right') {
            onSwipeRight?.();
        } else if (direction === 'left') {
            onSwipeLeft?.();
        }

        removeCard(); // hide card after swipe
    };


    const resetPosition = () => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
        }).start();
    };

    // rotation effect
    const rotate = position.x.interpolate({
        inputRange: [-width * 2.5, 0, width * 2.5],
        outputRange: ['-20deg', '0deg', '20deg'],
    });

    const animatedStyle = {
        transform: [
            { translateX: position.x },
            { translateY: position.y },
            { rotate },
        ],
    };

    if (!isVisible) return null; // remove card logic

    return (
        <Animated.View
            style={[styles.card, animatedStyle, { backgroundColor: bgColor }]}
            {...panResponder.panHandlers}
        >

            <BasicButton
                title={'P'}
                textStyle={{
                    fontSize: SMALL_BUTTON_SIZE * 3 / 4,
                    color: themes.night
                }}
                containerStyle={{
                    width: SMALL_BUTTON_SIZE,
                    height: SMALL_BUTTON_SIZE,
                    borderRadius: SMALL_BUTTON_SIZE / 2,
                    backgroundColor: 'yellow',
                    borderWidth: 2,
                    borderColor: themes.white,

                    alignSelf: 'flex-end',
                    // top: -50

                }}
            onPress={() => forceSwipe('up')}
            />

            <Image
                source={Images.splash.s.uri}
                style={{
                    width: styles.card.width * 0.9,
                    height: styles.card.width * 0.9
                }}
                resizeMode="cover"
            />


            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: width / 20,
                }}
            >

                <BasicButton
                    title={'X'}
                    textStyle={{
                        fontSize: BUTTON_SIZE * 3 / 4
                    }}
                    containerStyle={{
                        width: BUTTON_SIZE,
                        height: BUTTON_SIZE,
                        borderRadius: BUTTON_SIZE / 2,
                        backgroundColor: 'red',
                        borderWidth: 2,
                        borderColor: themes.white
                    }}
                    onPress={() => forceSwipe('left')}
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
                        backgroundColor: 'green',
                        borderWidth: 2,
                        borderColor: themes.white
                    }}
                    onPress={() => forceSwipe('right')}
                />

            </View>

        </Animated.View>
    );
};

export default ProfileCard;
