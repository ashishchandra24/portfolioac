import React from "react";
import Section4 from "./components/Section4";
import Section3 from "./components/Section3";
import Section2 from "./components/Section2";
import Section1 from "./components/Section1";
import Section0 from "./components/Section0";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default App;
