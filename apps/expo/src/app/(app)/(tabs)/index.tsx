import { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from 'expo-router';

import { Screen } from '~/components/Screen';

export default function RecentScreen() {
  return (
    <Screen>
      <Text className="font-sans">REcent</Text>
    </Screen>
  );
}
