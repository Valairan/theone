import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import auth from '@react-native-firebase/auth';
import PhoneNumberInput from '@/app/Components/Inputs/phonenumberinput';
import BasicButton from '@/app/Components/Buttons/Buttons';
import BasicTextInput from '@/app/Components/Inputs/Inputs';

const HEIGHT = Dimensions.get('screen').height;

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [codeEnter, setCodeEnter] = useState(false)
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const [user, setUser] = useState(null);

  const [confirm, setConfirm] = useState();


  // Handle login
  const onAuthStateChanged = async (user: any) => {
    if (user) {
      const currentUser = "user"; //await retrieveCurrentUser().catch((error) => { console.log(error) });
      sessionStorage.set('user', currentUser);
      router.replace('/routes/Main');
      SplashScreen.hideAsync();
    }
  }
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);
    console.log(auth().app.options);
    console.log("auth().signInWithPhoneNumber =>", auth().signInWithPhoneNumber);
    return unsubscribe; // Cleanup on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber() {
    try {

      //const confirmation = await auth().signInWithPhoneNumber(phone);
      console.log(phone)
      console.log('confirmation', confirmation);
      setConfirm(confirmation);
      setCodeEnter(true)
    } catch (error) {
      console.log(error);

    }
  }


  return (
    <View style={{
      height: '100%',
      width: '100%',

    }}>
      <BasicButton title='Bypass' containerStyle={{ marginTop: '18%' }} onPress={async () => {
        router.replace('/routes/Main')
      }} />
      <Text style={{
        fontSize: 12,
        color: '#000',
        textAlign: 'Left',
        textAlignVertical: 'center',
        alignContent: 'center',
        marginHorizontal: 6,
        marginTop: '25%'
      }}>
        {codeEnter ? "Enter code sent to your phone." : "Enter your phone number"}
      </Text>

      {codeEnter ?
        <BasicTextInput value={code} onChangeText={setCode} placeholder='000000' maxLength={6} style={{ letterSpacing: 20, fontSize: 18, color: "#fff" }} />
        : <PhoneNumberInput value={phone} onChange={setPhone} />}
      <BasicButton title='Submit' containerStyle={{ marginTop: '18%' }} onPress={async () => {
        try {
          if (codeEnter) {
            if (code != null)
              try {
                await confirm.confirm(code);
              } catch (error) {
                console.log('Invalid code.');
              }
          } else {
            if (phone != null) {
              await signInWithPhoneNumber()
              setCodeEnter(true)
            }
          }
        } catch (error) {
          console.log(error)
        }
      }} />
      <View
        style={{
          height: HEIGHT * 0.06,
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <View
          style={{
            flex: 3,
          }} />
        {codeEnter &&
          <BasicButton title='Back'
            containerStyle={{
              flex: 1,
              backgroundColor: '#ff1111',
              height: undefined
            }} onPress={() => {
              setCodeEnter(false)
            }} />}

      </View>
    </View>
  )
};



