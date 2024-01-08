import { Text } from 'react-native';

import { Screen } from '~/components/Screen';
import { trpc } from '~/libs/api';

export default function addExpenseModal() {
  const user = trpc.user.get.useQuery({ userId: '1' });
  console.log(user.data);

  return (
    <Screen>
      <Text>Modal</Text>
    </Screen>
  );
}
