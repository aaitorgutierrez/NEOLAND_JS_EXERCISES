import { useState } from "react";
import "./App.css";
import Image from "./Image/Image";
import Paragraph from "./Paragraph/Paragraph";
import SubTitle from "./subTitle/subTitle";
import Title from "./title/title";

const App = (data) => {
  const iAmTitle = "Welcome to Components ReactJS";
  const iAmSubTitle = "esto es un prop bien bacano";
  const Image2 =
    "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png";
  const iAmParragraph = "Pedro si lees esto me debes una CocaCola";
  return (
    <div className="App1">
      <Title data={iAmTitle} />
      <SubTitle data={iAmSubTitle} />
      <Image data={Image2} />
      <Paragraph dataP={iAmParragraph} />
    </div>
  );
};

export default App;
