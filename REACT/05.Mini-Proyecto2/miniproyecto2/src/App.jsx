import { useState } from "react";
import React from "react";
import "./App.css";
import { CharacterList } from "./components/CharacterList";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Image from "./components/Image/Image";
import Paragraph from "./components/Paragraph/Paragraph";
import SubTitle from "./components/subTitle/subTitle";
import Title from "./components/title/title";

const App = () => {
  const iAmTitle = "Welcome to Rick&Morty";
  const iAmSubTitle = "estos son los personajes de la serie";

  const image =
    "https://forum.craftersland.net/uploads/monthly_2017_10/rick-and-morty-top-banner-two-1.png.a82332698fcb055607e7475254feb2f3.png";
  const iAmParragraph = "Pedro si lees esto me debes una CocaCola";

  return (
    <>
      <Header>
        <Title data={iAmTitle} />
        <SubTitle data={iAmSubTitle} />
        <Image data={image} />
      </Header>
      <Main>
        <CharacterList />
      </Main>
    </>
  );
};

export default App;
