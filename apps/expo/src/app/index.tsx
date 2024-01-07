import { Text, View } from 'react-native';

import { trpc } from '~/libs/api';

export default function Index() {
  const helloQuery = trpc.hello.user.useQuery();

  console.log(helloQuery.data);

  return (
    <View>
      <Text>{helloQuery.data}</Text>
    </View>
  );
}
