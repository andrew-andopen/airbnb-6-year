import { useState } from "react";

import Button from "./components/Button";
import Header from "./components/Header";
import Dots from "./components/Dots";
import { GlobalFonts } from "./fonts/fonts";
import { GlobalStyle, StyledH1, StyledContainer } from "./styles";
import Images from "./components/Images";

const data = [
  "You gifted more than 350,000 hosts and guests in the past 5 years",
  "With  63,000 active gifters across 100 sites",
  "Making 33,000 recipients very happy!",
  "We think You deserve a gift after all your hard work!",
];

function App() {
  const [stat, setStat] = useState(0);
  const updateStat = () => {
    stat >= data.length - 1 ? setStat(0) : setStat(stat + 1);
  };
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalFonts />
      <Header />
      <StyledContainer>
        <StyledH1>{data[stat]}</StyledH1>
        <Button updateStat={updateStat} />
      </StyledContainer>
      <Images />

      {stat === 1 && <Dots />}
    </div>
  );
}

export default App;
