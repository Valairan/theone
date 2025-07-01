import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';
import { styles as themes } from '../../styles';

const HEIGHT = Dimensions.get('screen').height;

interface ListItemProps {
  label: string;
  onPress?: () => void;
  style?: object; // Custom styles for the container
  textStyle?: object; // Custom styles for the label
}

const ListItem: React.FC<ListItemProps> = ({ label, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>

        {/* Label Text */}
        <Text style={[styles.label, textStyle]}>{label}</Text>

        {/* Arrow icon at the right */}
        <View style={styles.arrowContainer}>
          {/* You can use an icon library here, e.g., react-native-vector-icons */}
          {/* For simplicity, using a Unicode arrow */}
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
    // color: '#999',
    color: themes.crayola
  },
});

export default ListItem;