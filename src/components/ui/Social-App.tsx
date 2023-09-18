import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import GitHub from "assets/images/github.png";
import Instagram from "assets/images/instagram.png";
import LinkedIn from "assets/images/linkedin.png";
import Twitter from "assets/images/twitter.png";
export default function SocialApp() {
  const socialApps = [
    {
      name: GitHub,
      link: "https://github.com/mandorakannu",
    },
    {
      name: Instagram,
      link: "https://www.instagram.com/mandorakannu/",
    },
    {
      name: LinkedIn,
      link: "https://www.linkedin.com/in/mandorakannu/",
    },
    {
      name: Twitter,
      link: "https://twitter.com/KannuMandora",
    },
  ];
  const gotoPage = (url: string) => Linking.openURL(url);

  return (
    <View style={styles.container}>
      {socialApps.map(({ name, link }, index) => (
        <TouchableOpacity key={index} onPress={() => gotoPage(link)}>
          <Image source={name} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
