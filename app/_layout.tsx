import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#fff" },
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#111",
        headerShadowVisible: false,
        headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="linear-gradient"
        options={{ title: "Linear Gradient" }}
      />
      <Stack.Screen name="filter-blur" options={{ title: "Filter" }} />
      <Stack.Screen name="box-shadow" options={{ title: "Box Shadow" }} />
      <Stack.Screen name="flexbox-gap" options={{ title: "Flexbox Gap" }} />
      <Stack.Screen
        name="mix-blend-mode"
        options={{ title: "Mix Blend Mode" }}
      />
    </Stack>
  );
}
