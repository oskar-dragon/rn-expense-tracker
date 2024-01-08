import { Stack } from 'expo-router';

export default function AppLayout() {
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
