import React, { act, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button, Image, Dimensions } from 'react-native';
import ProfileCard from '@/app/Components/Interests/ProfileCard';
import PageHeader from '@/app/Components/Lists/PageHeader';
import { router } from 'expo-router';

const HEIGHT = Dimensions.get('screen').height

export default function Index() {

    // return (
    //     <View style={{ flex: 1, justifyContent: 'center' }}>
    //         <ProfileCard></ProfileCard>
    //     </View>
    // );

    return (

        // <View>
        //     <PageHeader
        //         title="Edit Profile"
        //         onBackPress={() => { router.replace('/routes/SettingsPage') }}
        //         style={{ marginBottom: 30 }}
        //     />

        //     <View style={{ flex: 1, justifyContent: 'center'}}>
        //         {/* Second (back) card */}
        //         <ProfileCard
        //             style={{ top: 10, zIndex: 0 }}
        //         // onPressRed={() => console.log('Red on card 2')}
        //         // onPressGreen={() => console.log('Green on card 2')}
        //         />

        //         {/* First (top) card */}
        //         <ProfileCard
        //             style={{ zIndex: 1 }}
        //         // onPressRed={() => console.log('Red on card 1')}
        //         // onPressGreen={() => console.log('Green on card 1')}
        //         />
        //     </View>


        // </View>

        <View style={{ flex: 1 }}>
            <PageHeader
                title="Edit Profile"
                onBackPress={() => { router.replace('/routes/SettingsPage') }}
                style={{ marginBottom: 30 }}
            />

            {/* Container for ProfileCards with relative position */}
            <View style={{ flex: 1, position: 'relative' }}>
                {/* Second (back) card */}
                <ProfileCard
                    // style={{ position: 'absolute', top: 10, zIndex: 0 }}
                />

                {/* First (top) card */}
                <ProfileCard
                    // style={{ position: 'absolute', top: 50, zIndex: 1 }}
                />

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