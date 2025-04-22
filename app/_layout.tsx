import { Slot, Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='(tabs)'
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name='index'
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name='meditate/[id]'
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
