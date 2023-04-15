import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MyButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#016bff",
    padding: 16,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
