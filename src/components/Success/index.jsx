import React from "react";
import SuccessIllustration from "../SuccessIllustration";
import Dot from "../Dot";
import Button from "../Button";

import {
  StyledSuccessContainer,
  SuccessTitleContainer,
  SuccessH1,
} from "./styles";
import { StyledH1 } from "../../styles";

const Success = () => {
  return (
    <StyledSuccessContainer>
      <SuccessTitleContainer>
        <SuccessH1>Right, over to us now </SuccessH1>
        <StyledH1>
          We’re putting together something we think you’ll really like…
        </StyledH1>
        <Button>Go to &Open</Button>
      </SuccessTitleContainer>
      <SuccessIllustration />
    </StyledSuccessContainer>
  );
};

export default Success;
