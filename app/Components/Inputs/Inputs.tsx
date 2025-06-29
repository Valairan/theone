import React, { useState } from 'react';
import { Dimensions, View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';

const HEIGHT = Dimensions.get('screen').height



const BasicTextInput: React.FC<TextInputProps> = ({ value, onChangeText, placeholder, ...props }) => {

    return (
        <View style={styles.container}>
            <TextInput
                keyboardType="phone-pad"
                placeholder={placeholder}
                placeholderTextColor={'#ffffffaa'}
                value={value}
                onChangeText={onChangeText}
                returnKeyType='done'
                submitBehavior='blurAndSubmit'
                maxLength={14} // formatted max length
                style={styles.input}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ea3c53',
        borderRadius: 4,
        height: HEIGHT * 0.09,
        margin: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default BasicTextInput;
