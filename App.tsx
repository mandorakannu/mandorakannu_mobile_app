import Main from "ui/Main";
import About from "ui/About";
import React from "react";
import Header from "shared_ui/Header";
import { SafeAreaView, ScrollView } from "react-native";
import Projects from "ui/Projects";
import Contact from "ui/Contact";
const App = () => {
  return (
    <>
      <SafeAreaView>
        <Header />
        <ScrollView>
          <Main />
          <About />
          <Projects />
          <Contact />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
