import { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from 'expo-router';

import { Screen } from '~/components/Screen';
import { trpc } from '~/libs/api';

export default function ExpensesScreen() {
  const { data } = trpc.hello.user.useQuery();

  console.log({ data });
  return (
    <Screen>
      <Text>AddExpense</Text>
    </Screen>
  );
}
