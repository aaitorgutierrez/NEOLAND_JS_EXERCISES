import { useState } from "react";
import "./App.css";
import { CV } from "./CV";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  return (
    <div className="App">
      <Hero hero={hero} />
      <Education education={education} />
      <Experience experience={experience} />
      {/* <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />  */}
    </div>
  );
}

export default App;
