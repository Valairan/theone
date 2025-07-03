import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';
import { styles as themes } from '../../styles';

const HEIGHT = Dimensions.get('screen').height;

interface ListItemProps {
  label: string;
  onPress?: () => void;
  style?: object;
  textStyle?: object;
}

const ListItem: React.FC<ListItemProps> = ({ label, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>

        <Text style={[styles.label, textStyle]}>{label}</Text>

        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>›</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
    borderRadius: 16
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  arrowContainer: {
    marginLeft: 10,
  },
  arrow: {
    fontSize: 20,
    color: themes.crayola
  },
});

export default ListItem;