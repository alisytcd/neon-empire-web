import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TabContent from "./components/TabContent";
import { useState } from "react";

function App() {
  const [loginFormVisible, setLoginFormVisibility] = useState(false);

  return (
    <>
      <Header setLoginFormVisibility={setLoginFormVisibility} />
      <Hero />
      <TabContent />
      <Footer />
    </>
  );
}

export default App;
