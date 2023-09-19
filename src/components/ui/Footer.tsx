import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "assets/styles/colors";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>
        © {year} Kannu Mandora. All Right Reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    textAlign: "center",
    backgroundColor: colors.white,
    marginTop: 20,
    height: 100
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
  },
});
