import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "assets/styles/colors";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwindcss",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PHP",
    "MySQL",
    "Git",
    "Github",
    "Vercel",
    "Netlify",
    "VS Code",
  ];
  return (
    <View id="#about" style={styles.container}>
      <Text style={styles.headingText}>About Me</Text>
      <Text style={styles.line}></Text>
      <Text style={styles.description}>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </Text>
      <Text style={styles.headingText}>Get to know me!</Text>
      <Text style={styles.description}>
        I'm a Full Stack [MERN STACK] Web Developer building the Front-end of
        Websites and Web Applications that leads to the success of the overall
        product. Check out some of my work in the Projects section.
      </Text>
      <Text style={styles.description}>
        I also like sharing content related to the stuff that I have learned
        over the years in Web Development so it can help other people of the Dev
        Community. Feel free to Connect or Follow me on my Linkedin where I post
        useful content related to Web Development and Programming
      </Text>
      <Text style={styles.description}>
        I'm open to Job opportunities where I can contribute, learn and grow. If
        you have a good opportunity that matches my skills and experience then
        don't hesitate to contact me.
      </Text>
      <Text style={styles.headingText}>My Skills</Text>
      <View style={styles.skillsView}>
        {skills.map((skill, index) => (
          <Text key={index} style={styles.skills}>
            {skill}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: colors.slate100,
    padding: 20,
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
  skillsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  skills: {
    fontSize: 20,
    margin: 10,
    color: colors.white,
    textAlign: "center",
    padding: 10,
    backgroundColor: colors.blue400,
    borderRadius: 10,
  },
});
