import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { styles as themes } from '../../styles';

interface BasicLabelProps {
  title: string;
  style?: object;
  titleStyle?: object;
}

const BasicLabel: React.FC<BasicLabelProps> = ({ title, style, titleStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 16,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  }
});

export default BasicLabel;