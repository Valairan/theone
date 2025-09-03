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


const HEIGHT = Dimensions.get('screen').height

export default function Index() {


    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            <PageHeader
                title="Settings"
                onBackPress={() => { router.replace('/routes/Main') }}
            />
            <Text style={{ fontSize: 24 }}>mock tabs</Text>
            <ListItem
                label="My Account"
                onPress={() => { }}
            />
            <ListItem
                label="Edit Profile"
                onPress={() => { }}
            />
            <ListItem
                label="Privacy and Security"
                onPress={() => { }}
            />
            <ListItem
                label="Verification"
                onPress={() => { }}
            />
            <ListItem
                label="FAQs"
                onPress={() => { }}
            />
            

            <Text style={{ fontSize: 24, marginTop: 20 }}>testing below</Text>

            <ListItem
                label="myprofile"
                onPress={() => { router.replace('/routes/SettingsPage/myprofile') }}
            />
            <ListItem
                label="interests"
                onPress={() => { router.replace('/routes/Main/interests') }}
            />
        </ScrollView >
    );

};



