import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { APIProvider } from '~/libs/api';

import '../styles.css';

export default function RootLayout() {
  return (
    <APIProvider>
      <Stack />
      <StatusBar />
    </APIProvider>
  );
}
