import React from "react";

import { useState } from "react";
import { StyledButton } from "./styles";

const Button = ({ updateStat, data, stat, submit, andopen }) => {
  return (
    <StyledButton
      onClick={() => (updateStat || data || stat ? updateStat() : null)}
    >
      {(data && data[stat].button) ||
        (submit && submit) ||
        (andopen && andopen)}
    </StyledButton>
  );
};

export default Button;
