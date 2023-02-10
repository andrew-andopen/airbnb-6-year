import React from "react";

import { useState, useEffect } from "react";

import Button from "./components/Button";
import Header from "./components/Header";
import Dots from "./components/Dots";
import Feedback from "./components/Feedback";
import { GlobalFonts } from "./fonts/fonts";
import {
  GlobalStyle,
  StyledContainer,
  StyledTitleContainer,
  StyledFormContainer,
} from "./styles";

import Oprah from "./components/Oprah";
import Form from "./components/Form";

import Images from "./components/Images";
import data from "./data";

function App() {
  const [stat, setStat] = useState(4);
  const updateStat = () => {
    stat < data.length && setStat(stat + 1);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <GlobalFonts />
      <Header setStat={setStat} stat={stat} />
      {stat < data.length ? (
        <StyledContainer>
          <StyledTitleContainer>
            {data[stat].title}
            <Button updateStat={updateStat} data={data} stat={stat} />
          </StyledTitleContainer>
          {(stat === 0 && <Images stat={stat} />) ||
            (stat === 1 && <Dots stat={stat} />) ||
            (stat === 2 && <Feedback stat={stat} />) ||
            (stat === 3 && <Oprah stat={stat} />)}
        </StyledContainer>
      ) : (
        <StyledFormContainer>
          <Form setStat={setStat} />
        </StyledFormContainer>
      )}
    </div>
  );
}

export default App;
