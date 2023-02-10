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
        <a href="https://andopen.co/">
          <Button andopen="Go to &Open">Go to &Open</Button>
        </a>
      </SuccessTitleContainer>
      <SuccessIllustration />
    </StyledSuccessContainer>
  );
};

export default Success;
