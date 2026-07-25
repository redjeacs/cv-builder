import { useState } from "react";
import Header from "./components/header";
import Preview from "./components/preview";
import "./App.css";
import GeneralInformation from "./components/general-information";
import EducationalExperience from "./components/educational-exp";
import PracticalExperience from "./components/practical-exp";

function App() {
  const [data, setData] = useState({
    general: {
      fullName: "Billy Bob",
      email: "example@mail.com",
      phone: "",
      location: "City, Country",
    },
    education: {
      schoolName: "Example University",
      degree: "psychology",
      dateStart: "",
      ongoing: false,
      dateEnd: "",
    },
    practical: {
      position: "intern",
      company: "company inc.",
      responsibilities: "",
      dateStart: "",
      ongoing: false,
      dateEnd: "",
    },
  });

  const updateField = (section, key, value) => {
    setData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [key]: value,
      },
    }));
  };

  return (
    <div className="app">
      <div className="info-editor">
        <Header />
        <GeneralInformation onUpdate={updateField} data={data} />
        <EducationalExperience onUpdate={updateField} data={data} />
        <PracticalExperience onUpdate={updateField} data={data} />
      </div>
      <Preview data={data} />
    </div>
  );
}

export default App;
