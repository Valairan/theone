import { useContext } from "react";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { CustomThemeProvider, CustomThemeContext } from "./Components/Contexts/ThemeContext";

export default function RootLayout() {
  //const { theme = 'light' } = useContext(CustomThemeContext);

  return <CustomThemeProvider>

    <StatusBar style="auto" translucent backgroundColor='transparent' />
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  </CustomThemeProvider>
}
