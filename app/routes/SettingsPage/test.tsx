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
import ProfileCard from '@/app/Components/Profile/ProfileCard';

const HEIGHT = Dimensions.get('screen').height

export default function Index() {
    // const name = 'Martin Odegaard';
    // const email = 'captain@example.com'

    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            <PageHeader
                title="temp back button"
                onBackPress={() => { router.replace('/routes/SettingsPage') }}
                style={{ marginBottom: 30 }}
            />

            <ProfileCard
                name={'Martin Ode'}
                age={26}
                uris={[Images.m_pfp.s.uri, Images.m_gallery1.s.uri, Images.m_gallery2.s.uri]}
            />

            <ProfileCard
                name='Billie Eilish'
                age={23}
                uris={[Images.f_pfp.s.uri, Images.f_gallery1.s.uri, Images.f_gallery2.s.uri, Images.f_gallery3.s.uri]}
            // onSwipe={forceSwipe}
            />

        </ScrollView>
    );

};



