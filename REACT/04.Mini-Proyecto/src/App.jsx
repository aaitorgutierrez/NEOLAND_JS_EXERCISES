import { useState } from "react";
import React from "react";
import "./App.css";

const charactersMock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
  },
];

const App = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      {characterList.map((character) => (
        <div className="card" key={character.id}>
          <h2>name: {character.name}</h2>
          <h2>origin: {character.gender}</h2>
        </div>
      ))}
    </>
  );
};

export default App;
