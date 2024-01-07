import { Pressable } from 'react-native';
import { Href, Link, Route, useRouter } from 'expo-router';

import { cnBase, NWPropsWithChildren } from '@acme/ui';

export function HeaderButton<T>({
  children,
  className,
  href,
}: NWPropsWithChildren<{
  href: Href<T>;
}>) {
  const router = useRouter();

  return (
    <Pressable
      className={cnBase('active:opacity-50', className)}
      onPress={() => router.push(href)}
    >
      {children}
    </Pressable>
  );
}
