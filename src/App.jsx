import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header";
import Preview from "./components/preview";
import "./App.css";
import GeneralInformation from "./components/general-information";
import EducationalExperience from "./components/educational-exp";
import PracticalExperience from "./components/practical-exp";

function App() {
  return (
    <div className="app">
      <div className="info-editor">
        <Header />
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </div>
      <Preview></Preview>
    </div>
  );
}

export default App;
