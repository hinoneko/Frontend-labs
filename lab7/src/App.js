import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Image />
      <Gallery />
    </div>
  );
}

export default App;