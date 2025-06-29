import { useState, useContext } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { CustomThemeProvider, CustomThemeContext } from "./Components/Contexts/ThemeContext";
import Loading from "./Components/Loader/loading";

export default function RootLayout() {
  const safetAreaTop = useSafeAreaInsets().top;

  return <CustomThemeProvider>

    <View style={{
      width: '100%',
      height: safetAreaTop,
      backgroundColor: "#00ffff"
    }} />
    <StatusBar style="auto" translucent backgroundColor='transparent' />

    <Stack
      screenOptions={{ headerShown: false }} />


  </CustomThemeProvider >
}
