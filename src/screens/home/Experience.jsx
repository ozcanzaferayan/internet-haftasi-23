import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Experience = ({ item }) => {
  return (
    <View style={styles.experience}>
      <Image
        style={styles.experienceImage}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.experienceTitle}>{item.title}</Text>
        <Text style={styles.experienceCompany}>{item.company}</Text>
        <Text style={styles.experienceDate}>
          {item.startYear} - {item.endYear}
        </Text>
      </View>
    </View>
  );
};

export default Experience;

const styles = StyleSheet.create({
  experience: {
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  experienceImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 16,
  },
  experienceTitle: { fontSize: 18 },
  experienceCompany: { fontSize: 16 },
  experienceDate: { fontSize: 16 },
});
