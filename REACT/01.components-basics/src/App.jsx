import "./App.css";
import Image from "./Image/Image";
import Paragraph from "./Paragraph/Paragraph";
import SubTitle from "./subTitle/subTitle";
import Title from "./title/title";

const App = () => {
  const iAmTitle = "Welcome to Components ReactJS";
  return (
    <div className="App1">
      <Title />
      <SubTitle />
      <Image />
      <Paragraph />
    </div>
  );
};

export default App;
