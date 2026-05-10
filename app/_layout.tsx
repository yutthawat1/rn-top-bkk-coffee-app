import { Kanit_400Regular, Kanit_700Bold } from "@expo-google-fonts/kanit";
import { useFonts } from "expo-font";
import { Stack, } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  // ------------------------load fonts------------------------------------------
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
// ________________________________________________________________________
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{
          title: "Top Bangkok Coffees",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#704214" },
          headerTitleStyle: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
        }} />
        <Stack.Screen name="detail" options={{
          title: "Coffee Detail",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#704214" },
          headerTitleStyle: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
        }} />
      </Stack>
  );
};
