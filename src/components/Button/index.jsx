import React from "react";

import { useState } from "react";
import { StyledButton } from "./styles";

const Button = ({ updateStat, data, stat }) => {
  return (
    <StyledButton
      onClick={() => (updateStat || data || stat ? updateStat() : null)}
    >
      {updateStat || data || stat ? data[stat].button : "submit"}
    </StyledButton>
  );
};

export default Button;
