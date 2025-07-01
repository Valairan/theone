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
      <TouchableOpacity onPress={onBackPress} style={styles.arrowButton}>
        <Text style={[styles.arrow, arrowStyle]}>←</Text>
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent',
    // justifyContent: 'space-between',
    position: 'relative'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  arrowButton: {
    padding: 8,
    position: 'absolute',
  },
  arrow: {
    fontSize: 28,
    color: themes.crayola
  },
});

export default PageHeader;