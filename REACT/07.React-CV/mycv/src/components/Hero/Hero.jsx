import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="" />
      <div className="card">
        <h2>
          {hero.name} {hero.surname}
        </h2>
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>tony@starkindustries.com</a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>
          💾<a href={hero.gitHub}>GitHub</a>
        </p>
        <br />
        <div className="aboutMe">
          <h3>About me:</h3>
          {hero.aboutMe.map((item, index) => (
            <p key={index}>{item.info}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
