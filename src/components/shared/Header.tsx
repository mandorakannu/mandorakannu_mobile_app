import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import logo from "assets/images/logo.png";
import { colors } from "assets/styles/colors";
import { useState } from "react";
import SocialApp from "ui/Social-App";
const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const headerLists = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "My Blogs",
      link: "https://mandorakannu.me",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  const showHamburgerMenu = () => {
    showHamburger ? setShowHamburger(false) : setShowHamburger(true);
  };
  const gotoPage = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.headingText}>Kannu Mandora</Text>
        </View>
        <TouchableOpacity onPress={showHamburgerMenu} style={styles.hamburger}>
          <Text style={styles.hamburgerChild}></Text>
          <Text style={styles.hamburgerChild}></Text>
        </TouchableOpacity>
        <View
          style={[
            styles.hamburgerLists,
            { display: showHamburger ? "flex" : "none" },
          ]}
        >
          {headerLists.map(({ name, link }, index) => (
            <Text
              style={styles.hamburgerParticularChild}
              onPress={() => gotoPage(link)}
              key={index}
            >
              {name}
            </Text>
          ))}
        <SocialApp />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    backgroundColor: "transparent",
    borderColor: colors.blue400,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    fontVariant: ["small-caps"],
    textTransform: "uppercase",
  },
  logo: {
    width: 30,
    height: 30,
    borderColor: colors.blue400,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: colors.blue500,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  hamburger: {
    marginLeft: 8,
    transform: [{ scale: 1.3 }],
  },
  hamburgerChild: {
    backgroundColor: colors.blue400,
    height: 2,
    width: 20,
    margin: 2,
    borderRadius: 2,
  },
  hamburgerLists: {
    display: "none",
    position: "absolute",
    top: 60,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 1,
    width: 300,
    height: "auto",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  hamburgerParticularChild: {
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    textTransform: "uppercase",
    borderBottomColor: colors.blue400,
    borderBottomWidth: 1,
    padding: 10,
    width: "100%",
    textAlign: "right",
    marginBottom: 30,
  },
});

export default Header;
