import { Stack, Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
    </Tabs>
  );
}
