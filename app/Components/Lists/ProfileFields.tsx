import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';
import { styles as themes } from '../../styles';

const HEIGHT = Dimensions.get('screen').height;

interface ProfileFieldProps {
    value: string;
    category: string;
    onPress?: () => void;
    style?: object;
    valueStyle?: object;
    categoryStyle?: object;
}

const ProfileField: React.FC<ProfileFieldProps> = ({ value, category, onPress, style, valueStyle, categoryStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.content}>

                {/* <Text style={[styles.label, textStyle]}>{label}</Text> */}
                <Text style={[styles.category, categoryStyle]}>{category}</Text>
                <Text style={[styles.value, valueStyle]}>{value}</Text>

                {/* <View style={styles.arrowContainer}>
                    <Text style={styles.arrow}>›</Text>
                </View> */}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: themes.crayola,
        borderRadius: 16,
        marginBottom: 16
    },
    content: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    //   label: {
    //     flex: 1,
    //     fontSize: 16,
    //     color: '#000',
    //   },
    value: {
        // flex: 1,
        fontSize: 20,
        color: '#000',
        marginTop: 8
    },
    category: {
        // flex: 1,
        fontSize: 16,
        color: themes.crayola,
        // marginBottom: 20
    },
    arrowContainer: {
        marginLeft: 10,
    },
    arrow: {
        fontSize: 20,
        color: themes.crayola
    },
});

export default ProfileField;