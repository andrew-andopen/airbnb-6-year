import Logo from "../../images/logo.svg";

import { StyledHeader, StyledLogo } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="logo" />
    </StyledHeader>
  );
};

export default Header;
