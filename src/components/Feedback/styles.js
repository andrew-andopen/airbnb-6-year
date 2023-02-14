import styled from "styled-components";

export const FeedbackContainer = styled.div`
  z-index: -1;
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: 1440px) {
    margin-left: 32px;
  }

  @media (max-width: 850px) {
    margin-top: 120px;
    margin-left: 0;
  }
`;
