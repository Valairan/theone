import React, { act, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button, Image, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TopTabbedBar from './Components/Tabs/TabbedHeader';
import Images from '@/app/ImageDatabase/images';
import Card from '@/app/Basic/Card/CardParent';
import { Background } from '@react-navigation/elements';
import { TabButtonType } from './Components/Tabs/Tabs';


const HEIGHT = Dimensions.get('screen').height

export default function Index() {
  return (
    <View style={{
      height: '100%',
      width: '100%',
      backgroundColor: '#004455'
    }}>

    </View>
  )
};



