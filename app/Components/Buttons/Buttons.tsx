import { ReactNode } from "react"
import { Dimensions, TouchableOpacity, Text, View, StyleSheet, ViewStyle, TextStyle } from "react-native"

const HEIGHT = Dimensions.get('screen').height

interface ButtonProps {
    title: string;
    children?: ReactNode;
    textStyle?: TextStyle | TextStyle[];
    containerStyle?: ViewStyle | ViewStyle[];
    onPress?: () => void;
}

const BasicButton: React.FC<ButtonProps> = ({ title, onPress, containerStyle, textStyle }) => {

    return (<TouchableOpacity
        style={[{
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#40c9a2',
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
        }, containerStyle]}
        onPress={onPress}
    >
        <Text
            style={[{
                fontSize: 18,
                color: '#ffffff',
                width: '100%',
                textAlign: 'center',
                textAlignVertical: 'center',
                alignContent: 'center',
            }, textStyle]}>
            {title}
        </Text>
    </TouchableOpacity>)
}

export const TouchableRegion: React.FC<ButtonProps> = ({ children, onPress, containerStyle }) => {

    return (<TouchableOpacity
        style={[{
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#40c9a2',
            borderRadius: 4,
            height: HEIGHT * 0.09,
            margin: 6,
            marginBottom: '50%',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }, containerStyle]}
        onPress={onPress}
    >
        {children}
    </TouchableOpacity>)
}


export default BasicButton 
