
import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Stats from "./component/Stats/Stats";
import Infor from "./component/Info/Infor";
import Footer from "./component/Footer/footer";
import Card from "./component/Card/Card";
import Info from "./component/Informaition/Info";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Card/>
      <Stats/>
      <Infor />
      <Info/>
      <Footer />
    </>
  );
}

export default App;
