import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import PageHeader from '@/app/Components/Lists/PageHeader';
import { router } from 'expo-router';
import SwipeScreen from '@/app/Components/Interests/SwipeScreen';
import Images from '@/app/ImageDatabase/images';
import ProfileCard from '@/app/Components/Interests/ProfileCard';

const HEIGHT = Dimensions.get('screen').height;

export default function Index() {

    return (
        <View style={{ flex: 1 }}>
            <PageHeader
                title="Interests"
                onBackPress={() => { router.replace('/routes/SettingsPage'); }}
                style={{ marginBottom: 30 }}
            />

            <View style={{ flex: 1, position: 'relative' }}>

                {/* <SwipeScreen>
                    <ProfileCard name={'Martin Odegaard'} age={26} uris={[Images.m_pfp.s.uri, Images.m_gallery1.s.uri, Images.m_gallery2.s.uri]} />
                </SwipeScreen>

                <SwipeScreen>
                    <ProfileCard name={'Billie Eilish'} age={23} uris={[Images.f_pfp.s.uri, Images.f_gallery1.s.uri, Images.f_gallery2.s.uri, Images.f_gallery3.s.uri]} />
                </SwipeScreen> */}

                <SwipeScreen>
                    {(forceSwipe) => (
                        <ProfileCard
                            name="Martin Odegaard"
                            age={26}
                            uris={[Images.m_pfp.s.uri, Images.m_gallery1.s.uri, Images.m_gallery2.s.uri]}
                            onSwipe={forceSwipe}
                        />
                    )}
                </SwipeScreen>

                <SwipeScreen>
                    {(forceSwipe) => (
                        <ProfileCard
                            name='Billie Eilish'
                            age={23}
                            uris={[Images.f_pfp.s.uri, Images.f_gallery1.s.uri, Images.f_gallery2.s.uri, Images.f_gallery3.s.uri]}
                            onSwipe={forceSwipe}
                        />
                    )}
                </SwipeScreen>

            </View>
        </View>
    );
}
