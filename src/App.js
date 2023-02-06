import { useState, useEffect } from "react";

import Button from "./components/Button";
import Header from "./components/Header";
import Dots from "./components/Dots";
import Feedback from "./components/Feedback";
import { GlobalFonts } from "./fonts/fonts";
import {
  GlobalStyle,
  StyledH1,
  StyledContainer,
  StyledTitleContainer,
  StyledH1Emphasised,
} from "./styles";
import Images from "./components/Images";
import data from "./data";
import GetAGift from "./components/Get a Gift";

function App() {
  const [stat, setStat] = useState(0);
  const updateStat = () => {
    stat >= data.length - 1 ? setStat(0) : setStat(stat + 1);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <GlobalFonts />
      <Header setStat={setStat}/>
      <StyledContainer>
        <StyledTitleContainer>
          {data[stat].title}
          <Button updateStat={updateStat} data={data} stat={stat} />
        </StyledTitleContainer>
      </StyledContainer>

      {stat === 0 ? (
        <Images stat={stat}/>
      ) : stat === 1 ? (
        <Dots stat={stat}/>
      ) : stat === 2 ? (
        <Feedback stat={stat}/>
      ) : stat === 3 ? (
        <GetAGift stat={stat}/>
      ) : null}
    </div>
  );
}

export default App;
