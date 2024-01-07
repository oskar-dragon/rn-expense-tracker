import { View } from 'react-native';

import { NWPropsWithChildren } from '@acme/ui';

export function Screen(props: NWPropsWithChildren) {
  return <View {...props} className="flex flex-1 flex-col bg-background" />;
}
