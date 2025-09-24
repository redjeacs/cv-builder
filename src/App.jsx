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

  const handleChange = (e) => {
    const section = e.target.dataset.section;
    const name = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: value,
      },
    }));
  };

  return (
    <div className="app">
      <div className="info-editor">
        <Header />
        <GeneralInformation onChange={handleChange} data={data} />
        <EducationalExperience onChange={handleChange} data={data} />
        <PracticalExperience onChange={handleChange} data={data} />
      </div>
      <Preview data={data} />
    </div>
  );
}

export default App;
