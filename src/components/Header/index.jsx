import React, { useEffect } from "react";
import { useState } from "react";

import Logo from "../../images/logo.svg";

import { StyledHeader, StyledLogo } from "./styles";

const Header = ({ setStat, stat }) => {
  const [color, setColor] = useState("#ffffff00");

  useEffect(() => {
    stat === 5 ? setColor("#F2EBE0") : setColor("#ffffff00");
  }, [stat]);

  return (
    <StyledHeader color={color}>
      <StyledLogo src={Logo} alt="logo" onClick={() => setStat(0)} />
    </StyledHeader>
  );
};

export default Header;
