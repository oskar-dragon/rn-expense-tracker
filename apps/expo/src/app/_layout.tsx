import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { APIProvider } from '~/libs/api';

import '../styles.css';

import { useEffect } from 'react';

import { customColourHSL, customColours } from '@acme/tailwind-config';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <APIProvider>
      <StatusBar />
      <RootLayoutNav />
    </APIProvider>
  );
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(modal)/addExpense"
        options={{
          headerTitle: 'Add Expense',
          presentation: 'modal',
          headerShown: true,
        }}
      />
    </Stack>
  );
}
