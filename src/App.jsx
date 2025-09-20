import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header";
import Preview from "./components/preview";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="info-editor">
        <Header></Header>
      </div>
      <Preview></Preview>
    </div>
  );
}

export default App;
