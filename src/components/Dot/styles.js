import styled from "styled-components";

export const StyledDot = styled.div`
  background: #f8fc53;
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 1000px;

  @media (max-width: 850px) {
    width: 24px;
    height: 24px;
  }
`;
