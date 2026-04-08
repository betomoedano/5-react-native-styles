import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#fff" },
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#111",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen />
    </Stack>
  );
}
