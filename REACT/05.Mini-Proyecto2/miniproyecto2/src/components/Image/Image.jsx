import React from "react";
import "./image.css";

const Image = ({ data }) => {
  return <img className="imgRick" src={data} alt="React logo" />;
};

export default Image;
