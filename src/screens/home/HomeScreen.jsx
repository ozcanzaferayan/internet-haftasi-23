import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const HomeScreen = ({ route }) => {
  const user = route.params.user;
  return (
    <SafeAreaView>
      <Text>{user.email}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
