import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Fragment } from "react";
import { colors } from "assets/styles/colors";

export default function Projects() {
  const projects = [
    {
      title: "Kannu Mandora Tech Blogs",
      description:
        "Kannu Mandora Tech Blogs is a complex project and it is based on MERN Stack.",
      link: "https://mandorakannu.me/",
    },
    {
      title: "Shri Ram College",
      description:
        "Shri Ram College is a MERN Stack College project based on Students, teachers and admins.",
      link: "https://shriramcollege.cyclic.cloud",
    },
    {
      title: "Covid Stats Checker",
      description:
        "Covid Stats Checker is a simple project based on React.Js. It shows the stats of Covid-19 in any country.",
      link: "https://covid.mandorakannu.tech",
    },
    {
      title: "MK Store",
      description:
        "MK Store is a simple project based on Next.Js. It is a E-Commerce website.",
      link: "https://mandorakannu.rocks",
    },
    {
      title: "API Ninja Hub",
      description:
        "API Ninja Hub is a simple project based on Next.Js. It is a API website.",
      link: "https://api.mandorakannu.tech",
    },
  ];
  const gotoPage = (link: string) => Linking.openURL(link);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Projects</Text>
      <Text style={styles.line}></Text>
      <Text style={styles.description}>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </Text>
      <View>
        {projects.map(({ title, description, link }) => (
          <Fragment key={link}>
            <Text style={styles.projectTitle}>{title}</Text>
            <Text style={styles.projectDescription}>{description}</Text>
            <TouchableOpacity onPress={() => gotoPage(link)}>
              <Text style={styles.projects}>View Project</Text>
            </TouchableOpacity>
          </Fragment>
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
    backgroundColor: colors.white,
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
  projects: {
    fontSize: 20,
    margin: 10,
    color: colors.white,
    backgroundColor: colors.blue400,
    textAlign: "center",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    textTransform: "capitalize",
    textAlign: "center",
    paddingVertical: 10,
  },
  projectDescription: {
    paddingHorizontal: 20,
    fontSize: 20,
  },
});
