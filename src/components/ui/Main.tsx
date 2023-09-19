import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "assets/styles/colors";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Hey, I'm Kannu Mandora</Text>
      <Text style={styles.headingDescription}>
        A Full Stack focused Web Developer building the Full Stack of Websites
        and Web Applications that leads to the success of the overall product.{" "}
      </Text>
      <Text style={styles.projectBtn}>Projects</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    paddingVertical: 50,
    // borderColor: colors.zinc600,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    gap: 20,
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.black,
    textTransform: "capitalize",
  },
  headingDescription: {
    fontSize: 20,
    fontWeight: "normal",
    color: colors.zinc600,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  projectBtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    textTransform: "capitalize",
    marginTop: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: colors.blue400,
  },
});
