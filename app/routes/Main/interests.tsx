import React, { act, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button, Image, Dimensions } from 'react-native';
import ProfileCard from '@/app/Components/Interests/ProfileCard';
import PageHeader from '@/app/Components/Lists/PageHeader';
import { router } from 'expo-router';

const HEIGHT = Dimensions.get('screen').height

export default function Index() {

    return (

        <View style={{ flex: 1 }}>
            <PageHeader
                title="Interests"
                onBackPress={() => { router.replace('/routes/SettingsPage') }}
                style={{ marginBottom: 30 }}
            />

            <View style={{ flex: 1, position: 'relative' }}>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
            </View>
        </View>
    );
};