import Logo from "../../images/logo.svg";

import { StyledHeader, StyledLogo } from "./styles";

const Header = ({ setStat }) => {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="logo" onClick={() => setStat(0)} />
    </StyledHeader>
  );
};

export default Header;
