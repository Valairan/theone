import Images from '@/app/ImageDatabase/images';
import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSequence,
    withTiming,
    withRepeat,
    Easing,
} from 'react-native-reanimated';

const DOT_SIZE = 200;
const ANIMATION_DURATION = 600;

const Loading: React.FC = () => {
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withRepeat(
            withSequence(
                withTiming(1.2, {
                    duration: ANIMATION_DURATION,
                    easing: Easing.bounce,
                }),
                withTiming(1, {
                    duration: ANIMATION_DURATION,
                    easing: Easing.circle,
                })
            ),
            -1,
            true
        );


    }, []);

    const scaleStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));


    return (
        <View style={styles.container}>
            <Animated.View style={[styles.dot, scaleStyle]} >
                <Image
                    source={Images.splash.s.uri}
                    style={{
                        flex: 1,
                        height: undefined,
                        width: undefined,
                    }}
                    resizeMode='contain'
                >
                </Image>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000aa',
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 25,
    },
    dot: {
        width: DOT_SIZE,
        height: DOT_SIZE,
    },
});

export default Loading;
