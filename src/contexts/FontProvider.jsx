import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";

const FontProvider = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return children;
};

export default FontProvider;

const styles = StyleSheet.create({});
