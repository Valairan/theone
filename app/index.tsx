import React, { act, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button, Image, Dimensions, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import messaging from '@react-native-firebase/messaging';
import auth, { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { addOnboardingInformation, retrieveCurrentUser } from './secure/user';
import Loading from './Components/Loader/loading';
import { CustomThemeProvider } from './Components/Contexts/ThemeContext';
import BasicButton from './Components/Buttons/Buttons';

const HEIGHT = Dimensions.get('screen').height

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true)

  const onAuthStateChanged = async (user: any) => {
    if (false) {
      console.log("Some inside user")
      const currentUser = user //await retrieveCurrentUser().catch((error) => { console.log(error) });
      sessionStorage.set('user', currentUser);
      router.replace('/routes/Main');
      SplashScreen.hideAsync();
      return
    }
    router.replace('/routes/Auth');
    SplashScreen.hideAsync();
  }

  useEffect(() => {
    getFCMToken();
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return unsubscribe; // Cleanup on unmount
  }, []);

  const getFCMToken = async (): Promise<void> => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      const token = await messaging().getToken();
      console.log(token)
      //await addOnboardingInformation('fcmtoken', token);
    } else {
      console.warn('Permission not granted for push notifications');
    }
  };



  return (

    <View style={{
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignContent: 'center',
    }}>
    </View>
  )
};



