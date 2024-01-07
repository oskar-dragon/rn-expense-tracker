import { Tabs } from 'expo-router';
import { CalendarDays, Hourglass } from 'lucide-react-native';

import { customColourHSL } from '@acme/tailwind-config';

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
        name="allExpenses"
        options={{
          title: 'All Expenese',
          headerTitle: 'All Expenses',
          tabBarIcon: ({ color }) => <CalendarDays color={color} />,
        }}
      />
    </Tabs>
  );
}
