import React, { act, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button, Image, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TopTabbedBar from '@/app/Components/Tabs/TabbedHeader';
import Images from '@/app/ImageDatabase/images';
import Card from '@/app/Basic/Card/CardParent';
import { Background, Label } from '@react-navigation/elements';
import { TabButtonType } from '@/app/Components/Tabs/Tabs';
import ListItem from '@/app/Components/Lists/ListItems';
import { router } from 'expo-router';
import PageHeader from '@/app/Components/Lists/PageHeader';
import { styles as themes } from '../../styles';
import ProfileField from '@/app/Components/Lists/ProfileFields';
import BasicLabel from '@/app/Components/Lists/BasicLabel';
import BasicButton from '@/app/Components/Buttons/Buttons';
import ProfilePictureButton from '@/app/Components/Lists/ProfilePictureButton';

const HEIGHT = Dimensions.get('screen').height

export default function Index() {
    const name = 'Martin Odegaard';
    const email = 'captain@example.com'

    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            <PageHeader
                title="Edit Profile"
                onBackPress={() => { router.replace('/routes/SettingsPage') }}
                style={{ marginBottom: 30 }}
            />

            <ProfilePictureButton
                imagePath={Images.splash.s.uri}
                containerStyle={{marginBottom: 16 }}
            />

            <BasicLabel
                title={name}
                style={{
                    justifyContent: 'center'
                }}
                titleStyle={{
                    fontSize: 24,
                }}
            />
            <BasicLabel
                title={email}
                style={{
                    justifyContent: 'center'
                }}
                titleStyle={{
                    fontSize: 20,
                    fontWeight: 'normal',
                    color: 'grey',
                    marginBottom: 16
                }}
            />


            <ProfileField
                category='Name'
                value={name}
            />
            <ProfileField
                category='Email Address'
                value={email}
            />
            <ProfileField
                category='Mobile Number'
                value='(111) 222-3333'
            />
            <ProfileField
                category='Date of Birth'
                value='03/09/2001'
            />
            <ProfileField
                category='Home Address'
                value='Hornsey Rd, London N7 7AJ, UK'
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



