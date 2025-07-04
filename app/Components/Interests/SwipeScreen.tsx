// SwipeScreen.tsx
import React, { useRef, useState } from 'react';
import { View, Animated, Dimensions, PanResponder, PanResponderGestureState, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const height = Dimensions.get('screen').height;

const SWIPE_THRESHOLD = width / 3;
const SWIPE_THRESHOLD_VERTICAL = height / 5;
const SWIPE_OUT_DURATION = 300;
const SWIPE_OUT_DURATION_VERTICAL = 800;

interface SwipeScreenProps {
  children: React.ReactNode; // Pass in the custom card component here
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  style?: any;
}

const SwipeScreen: React.FC<SwipeScreenProps> = ({ children, onSwipeLeft, onSwipeRight, onSwipeUp, style }) => {
  const [isVisible, setIsVisible] = useState(true);
  const position = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture: PanResponderGestureState) => {
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
      toValue = { x: 0, y: -height * 1.5 };
    }

    Animated.timing(position, {
      toValue,
      duration: direction === 'up' ? SWIPE_OUT_DURATION_VERTICAL : SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = (direction: 'left' | 'right' | 'up') => {
    if (direction === 'up') onSwipeUp?.();
    else if (direction === 'right') onSwipeRight?.();
    else if (direction === 'left') onSwipeLeft?.();

    setIsVisible(false); // hide card
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

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

  if (!isVisible) return null;

  return (
    <Animated.View style={[styles.card, animatedStyle, style]} {...panResponder.panHandlers}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    alignSelf: 'center',
    position: 'absolute',
  },
});

export default SwipeScreen;
