import "./App.css";
import { useState, useEffect } from "react";
import Figure from "./components/Figure/Figure";

import axios from "axios";

const App = () => {
  //Recuperamos la fecha actual en un formato ISO -> 2022-01-01
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  const [apod, setApod] = useState({});

  const [date, setDate] = useState(today);

  const NASA_URL = "https://api.nasa.gov/";

  const NASA_API_KEY = "xg6FXne7MqDTKzCM0ULsGIM7pctQsAUh4ggrKCqT";
  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);
  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  const logo = "/NASA-logo.png";

  return (
    <div className="App">
      <div className="title">
        <h1>NASA API</h1>
        <img src={logo} className="logo" alt="NASA LOGO" />
      </div>

      <h2>Imagen del día</h2>

      <input type="date" id="photo-date" onChange={handleInput} />

      {date > today ? <h2>Porfavor elige otro día</h2> : <Figure data={apod} />}
    </div>
  );
};

export default App;
