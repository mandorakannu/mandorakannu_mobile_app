import Main from "ui/Main";
import About from "ui/About";
import React from "react";
import Header from "shared_ui/Header";
import { SafeAreaView, ScrollView } from "react-native";
const App = () => {
  return (
    <>
      <SafeAreaView>
        <Header />
        <ScrollView>
          <Main />
          <About />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
