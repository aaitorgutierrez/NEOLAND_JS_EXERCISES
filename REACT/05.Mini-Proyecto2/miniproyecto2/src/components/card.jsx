import React from "react";

export const Card = (props) => {
  const { character } = props;

  return (
    <div>
      <li>
        <h2>id: {character.id}</h2>
        <h3>name: {character.name}</h3>
        <p>status: {character.status}</p>
      </li>
    </div>
  );
};

export default Card;
