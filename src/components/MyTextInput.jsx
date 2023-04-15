import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const MyTextInput = ({ placeholder, icon, value, onChangeText, inputMode }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        inputMode={inputMode}
        secureTextEntry={inputMode === "password"}
      />
    </>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
});
