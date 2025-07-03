import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { styles as themes } from '../../styles';
import { Image } from 'react-native';
import Images from '@/app/ImageDatabase/images';

interface ProfilePictureButtonProps {
    imagePath?: any
    containerStyle?: object
}

const imageSize = 120;
const iconSize = 30;
const iconPath = Images.stack.s.uri;

const ProfilePictureButton: React.FC<ProfilePictureButtonProps> = ({ imagePath, containerStyle }) => {
    return (
        <View style={[styles.imageContainer, containerStyle]}>
            {imagePath ? (
                <Image
                    source={imagePath}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : null}
            <Image
                source={iconPath}
                style={styles.icon}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // padding: 16,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignSelf: 'center',

        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: themes.crayola
    },
    image: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    },
    icon: {
        width: iconSize,
        height: iconSize,
        borderRadius: iconSize / 2,
        borderColor: themes.crayola,
        backgroundColor: themes.crayola,
        padding: 4,
        top: imageSize/2 - iconSize/2,
        left: -iconSize
    }
});

export default ProfilePictureButton;