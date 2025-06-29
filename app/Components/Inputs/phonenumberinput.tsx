import React, { useState } from 'react';
import { Dimensions, View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';

const HEIGHT = Dimensions.get('screen').height

interface PhoneNumberInputProps extends TextInputProps {
    value: string;
    onChange: (phoneNumber: string) => void;
}

const formatPhoneNumber = (input: string) => {
    const digits = input.replace(/\D/g, '').substring(0, 10);
    const area = digits.substring(0, 3);
    const prefix = digits.substring(3, 6);
    const line = digits.substring(6, 10);

    if (digits.length <= 3) return area;
    if (digits.length <= 6) return `(${area}) ${prefix}`;
    return `(${area}) ${prefix}-${line}`;
};

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ value, onChange, ...props }) => {
    const [rawInput, setRawInput] = useState(value);

    const handleChange = (text: string) => {
        const digits = text.replace(/\D/g, '').substring(0, 10); // max 10 digits
        setRawInput(digits);
        onChange(`+1${digits}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.prefix}>+1</Text>
            <TextInput
                keyboardType="phone-pad"
                placeholder="(123) 456-7890"
                placeholderTextColor={'#ffffffaa'}
                value={formatPhoneNumber(rawInput)}
                onChangeText={handleChange}
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
    prefix: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'right',
        letterSpacing: 5,
        width: '10%',
    },
    input: {
        width: '50%',
        alignSelf: 'center',
        fontSize: 18,
        color: '#fff',
        letterSpacing: 5
    },
});

export default PhoneNumberInput;

/**
 * Converts a phone number to E.164 format (very basic version).
 * Assumes you know the correct country calling code.
 * 
 * @param rawNumber - User-entered phone number (e.g., "(416) 123-4567")
 * @param countryCode - Country calling code (e.g., "1" for US/Canada)
 * @returns E.164 formatted number (e.g., "+14161234567") or null if invalid
 */
export const formatToE164 = (rawNumber: string, countryCode: string): string | null => {
    // Remove all non-numeric characters
    const digitsOnly = rawNumber.replace(/\D/g, '');

    // Basic validation: 10 digits for standard local numbers
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        return null; // likely invalid
    }

    // Return with + prefix and country code
    return `+${countryCode}${digitsOnly}`;
}