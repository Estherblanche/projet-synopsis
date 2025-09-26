import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';



export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        
        <Stack.Screen name="screens/login"/>
        <Stack.Screen name="screens/login/index"/>
        <Stack.Screen name="screens/login/password"/>
        <Stack.Screen name="screens/services"/>
        <Stack.Screen name="screens/services/Gestion presence"/>
        <Stack.Screen name="screens/services/ Gestion conges"/>
        <Stack.Screen name="screens/(tabs)"/>
       
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>

  )
};
