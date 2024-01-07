import { Link, Tabs } from 'expo-router';
import { CalendarDays, Hourglass, PlusIcon } from 'lucide-react-native';

import { customColourHSL } from '@acme/tailwind-config';

import { HeaderButton } from '~/components/HeaderButton';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: {
          color: customColourHSL('foreground'),
        },
        headerStyle: {
          backgroundColor: customColourHSL('background'),
        },
        headerRight: () => {
          return (
            <HeaderButton className="mr-4" href="/(modal)/addExpense">
              <PlusIcon size="20" color={customColourHSL('foreground')} />
            </HeaderButton>
          );
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Recent',
          headerTitle: 'Recent Expenses',
          tabBarIcon: ({ color }) => <Hourglass color={color} />,
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: 'All Expenese',
          headerTitle: 'All Expenses',
          tabBarIcon: ({ color }) => <CalendarDays color={color} />,
        }}
      />
    </Tabs>
  );
}
