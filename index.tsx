import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Layout() {
  return (
    <SafeAreaView>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2e7d32",
        tabBarInactiveTintColor: "#9e9e9e",
      }}
    >
    </Tabs>
    </SafeAreaView>
  );
}
