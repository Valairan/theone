import React, { act, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button, Image, Dimensions } from 'react-native';
import Images from '@/app/ImageDatabase/images';
import { router } from 'expo-router';
import PageHeader from '@/app/Components/Lists/PageHeader';
import { styles as themes } from '../../styles';
import ProfileField from '@/app/Components/Lists/ProfileFields';
import BasicLabel from '@/app/Components/Lists/BasicLabel';
import BasicButton from '@/app/Components/Buttons/Buttons';
import ProfilePictureButton from '@/app/Components/Lists/ProfilePictureButton';

const HEIGHT = Dimensions.get('screen').height

export default function Index() {

    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            <PageHeader
                title="Create a date"
                onBackPress={() => { router.replace('/routes/SettingsPage') }}
                style={{ marginBottom: 30 }}
            />

            <ProfileField
                category='label #1'
                value='placeholder text #1'
            />
            <ProfileField
                category='label #2'
                value='placeholder text #2'
            />
            <ProfileField
                category='label #3'
                value='placeholder text #3'
            />
            <ProfileField
                category='label #4'
                value='placeholder text #4'
            />
            <ProfileField
                category='label #5'
                value='placeholder text #5'
            />
            <ProfileField
                category='label #6'
                value='placeholder text #6'
            />
            <ProfileField
                category='label #7'
                value='placeholder text #7'
            />
            <ProfileField
                category='label #8'
                value='placeholder text #8'
            />
            <ProfileField
                category='label #9'
                value='placeholder text #9'
            />
            <ProfileField
                category='label #10'
                value='placeholder text #10'
            />

            <BasicButton
                title={'Save'}
                containerStyle={{
                    backgroundColor: themes.crayola,
                    borderRadius: 16
                }}
            />
        </ScrollView >
    );

};



