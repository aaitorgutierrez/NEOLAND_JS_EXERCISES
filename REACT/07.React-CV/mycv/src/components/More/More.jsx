import React from "react";
import "./More.css";

const More = ({ languages, abilities, volunteer }) => {
  return (
    <div>
      <div className="languages">
        <h3>Languages</h3>
        <p>Language: {languages.language}</p>
        <p>Writing Level: {languages.wrlevel}</p>
        <p>Speaking Level: {languages.splevel}</p>
      </div>

      <div className="abilities">
        <h3>abilities</h3>
        <ul>
          {abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      </div>

      <div className="volunteer">
        <h3>Volunteer Experience</h3>
        {volunteer.map((item, index) => (
          <div key={index}>
            <p className="name">{item.name}</p>
            <p>{item.where}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
