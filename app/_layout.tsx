import { useState, useContext } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { CustomThemeProvider, CustomThemeContext } from "./Components/Contexts/ThemeContext";
import Loading from "./Components/Contexts/Loader/loading";

export default function RootLayout() {
  const [loading, setLoading] = useState(true)

  return <CustomThemeProvider>

    <StatusBar style="auto" translucent backgroundColor='transparent' />

    <Stack
      screenOptions={{ headerShown: false }} />


  </CustomThemeProvider >
}
