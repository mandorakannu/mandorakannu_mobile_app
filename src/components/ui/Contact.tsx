import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "assets/styles/colors";

export default function Contact() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headingText}>Contact</Text>
        <Text style={styles.line}></Text>
        <Text style={styles.description}>
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </Text>
      </View>
      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Your email</Text>
        <TextInput
          placeholderTextColor={colors.zinc600}
          inputMode="email"
          style={styles.inputField}
          placeholder="name@example.com"
        />
        <Text style={styles.label}>Subject</Text>
        <TextInput
          inputMode="text"
          placeholderTextColor={colors.zinc600}
          style={styles.inputField}
          placeholder="Let us know how we can help you"
        />
        <Text style={styles.label}>Your message</Text>
        <TextInput
          inputMode="text"
          placeholderTextColor={colors.zinc600}
          style={styles.inputField}
          placeholder="Leave a comment..."
        />
        <TouchableOpacity>
          <Text style={styles.btn}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: colors.slate100,
    paddingVertical: 40,
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.black,
    textTransform: "capitalize",
  },
  line: {
    width: "10%",
    height: 2,
    backgroundColor: colors.blue400,
    borderRadius: 10,
  },
  description: {
    fontSize: 20,
    color: colors.zinc600,
    textAlign: "center",
    padding: 20,
  },
  form: {
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 20,
    backgroundColor: colors.slate100,
    padding: 40,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    textTransform: "capitalize",
  },
  inputField: {
    fontSize: 20,
    color: colors.zinc600,
    backgroundColor: colors.white,
    width: "100%",
    textAlign: "left",
    paddingHorizontal: 10,
    borderRadius: 10,
    opacity: 0.8,
  },
  btn: {
    fontSize: 20,
    color: colors.white,
    backgroundColor: colors.blue400,
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 20,
  },
});
