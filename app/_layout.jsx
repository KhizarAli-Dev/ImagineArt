import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Welcome/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="Screens/Models/ModelOne"
        options={{ title: "Stable Diffusion 3.5 Large Turbo" }}
      />
        <Stack.Screen
        name="Screens/Models/ModelTwo"
        options={{ title: "Model Two" }}
      />
        <Stack.Screen
        name="Screens/Models/ModelThree"
        options={{ title: "Model Three" }}
      />
    </Stack>
  );
}
