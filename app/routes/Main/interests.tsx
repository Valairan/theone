// import React, { act, useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button, Image, Dimensions } from 'react-native';
// // import ProfileCard from '@/app/Components/Interests/ProfileCard';
// import PageHeader from '@/app/Components/Lists/PageHeader';
// import { router } from 'expo-router';
// import SwipeScreen from '@/app/Components/Interests/SwipeScreen';
// import ProfileCard from '@/app/Components/Interests/card';
// import Images from '@/app/ImageDatabase/images';

// const HEIGHT = Dimensions.get('screen').height

// export default function Index() {

//     // return (

//     //     <View style={{ flex: 1 }}>
//     //         <PageHeader
//     //             title="Interests"
//     //             onBackPress={() => { router.replace('/routes/SettingsPage') }}
//     //             style={{ marginBottom: 30 }}
//     //         />

//     //         <View style={{ flex: 1, position: 'relative' }}>
//     //             <ProfileCard/>
//     //             <ProfileCard/>
//     //             <ProfileCard/>
//     //             <ProfileCard/>
//     //             <ProfileCard/>
//     //             <ProfileCard/>
//     //             <ProfileCard/>
//     //             <ProfileCard/>
//     //         </View>
//     //     </View>
//     // );

//     return (

//         <View style={{ flex: 1 }}>

//             <PageHeader
//                 title="Interests"
//                 onBackPress={() => { router.replace('/routes/SettingsPage') }}
//                 style={{ marginBottom: 30 }}
//             />


//             <View style={{ flex: 1, position: 'relative' }}></View>

//             <SwipeScreen
//             // onSwipeLeft={handleSwipeLeft}
//             // onSwipeRight={handleSwipeRight}
//             // onSwipeUp={handleSwipeUp}
//             >

//                 <View style={{ flex: 1, position: 'relative' }}>

//                     <ProfileCard
//                         name='Jane Doe'
//                         age={26}
//                         uris={[Images.splash.s.uri, Images.blurb.s.uri, Images.favicon.s.uri]}
//                     />

//                     <ProfileCard
//                         name='Joe Doe'
//                         age={26}
//                         uris={[Images.splash.s.uri, Images.blurb.s.uri, Images.favicon.s.uri]}
//                     />

//                     <ProfileCard
//                         name='Moe Doe'
//                         age={26}
//                         uris={[Images.splash.s.uri, Images.blurb.s.uri, Images.favicon.s.uri]}
//                     />

//                 </View>
//             </SwipeScreen>

//         </View>
//     );
// };

import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import PageHeader from '@/app/Components/Lists/PageHeader';
import { router } from 'expo-router';
import SwipeScreen from '@/app/Components/Interests/SwipeScreen';
// import ProfileCard from '@/app/Components/Interests/card';
import Images from '@/app/ImageDatabase/images';
import ProfileCard from '@/app/Components/Interests/card';

const HEIGHT = Dimensions.get('screen').height;

// const profiles = [
//   {
//     name: 'Jane Doe',
//     age: 26,
//     uris: [Images.splash.s.uri, Images.blurb.s.uri, Images.favicon.s.uri]
//   },
//   {
//     name: 'Joe Doe',
//     age: 27,
//     uris: [Images.blurb.s.uri, Images.favicon.s.uri, Images.splash.s.uri]
//   },
//   {
//     name: 'Moe Doe',
//     age: 28,
//     uris: [Images.favicon.s.uri, Images.splash.s.uri, Images.blurb.s.uri]
//   }
// ];

export default function Index() {
    //   const [profileIndex, setProfileIndex] = useState(0);

    //   const handleSwipe = () => {
    //     setProfileIndex((prev) => prev + 1);
    //   };

    //   const currentProfile = profiles[profileIndex];

    return (
        <View style={{ flex: 1 }}>
            <PageHeader
                title="Interests"
                onBackPress={() => { router.replace('/routes/SettingsPage'); }}
                style={{ marginBottom: 30 }}
            />

            <View style={{ flex: 1, position: 'relative' }}>

                <SwipeScreen>
                    <ProfileCard name={'martin'} age={26} uris={[Images.m_pfp.s.uri, Images.m_gallery1.s.uri, Images.m_gallery2.s.uri]} />
                </SwipeScreen>

                <SwipeScreen>
                    <ProfileCard name={'billi'} age={23} uris={[Images.f_pfp.s.uri, Images.f_gallery1.s.uri, Images.f_gallery2.s.uri, Images.f_gallery3.s.uri]} />
                </SwipeScreen>
            </View>
        </View>
    );
}
