import { useState } from "react";
import { StyledButton } from "./styles";

const Button = ({ updateStat, data, stat }) => {
  return (
    <StyledButton onClick={() => updateStat()}>
      {data[stat].button}
    </StyledButton>
  );
};

export default Button;
