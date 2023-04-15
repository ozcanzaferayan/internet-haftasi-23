import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/home/ExperienceScreen";
import LoginScreen from "./src/screens/login/LoginScreen";
import Providers from "./src/contexts/Providers";
import Router from "./src/navigation/Router";

export default function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}
