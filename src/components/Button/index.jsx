import { StyledButton } from "./styles";

const Button = ({ updateStat }) => {
  return <StyledButton onClick={() => updateStat()}>Tell me more</StyledButton>;
};

export default Button;
