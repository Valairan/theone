import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { styles as themes } from '../../styles';

interface PageHeaderProps {
  title: string;
  onBackPress?: () => void;
  style?: object;
  titleStyle?: object;
  arrowStyle?: object;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, onBackPress, style, titleStyle, arrowStyle }) => {
  return (
    <View style={[styles.container, style]}>
      {/* Title Text */}
      <Text style={[styles.title, titleStyle]}>{title}</Text>

      {/* Arrow icon (clickable) */}
      <TouchableOpacity onPress={onBackPress} style={styles.arrowButton}>
        <Text style={[styles.arrow, arrowStyle]}>←</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent', // transparent background
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24, // larger text
    fontWeight: 'bold',
    color: '#000',
  },
  arrowButton: {
    padding: 8,
  },
  arrow: {
    fontSize: 28,
    // color: '#000',
    color: themes.crayola
  },
});

export default PageHeader;