import Main from "ui/Main";
import About from "ui/About";
import React from "react";
import Header from "shared_ui/Header";
import { SafeAreaView, ScrollView } from "react-native";
import Projects from "ui/Projects";
import Contact from "ui/Contact";
import Footer from "ui/Footer";
const App = () => {
  return (
    <>
      <SafeAreaView style={{zIndex: 50}}>
        <Header />
        <ScrollView>
          <Main />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
