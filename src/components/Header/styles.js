import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 40px 80px;
  position: absolute;
  background-color: ${(props) => props.color};
  @media (max-width: 1000px) {
    padding: 40px 40px;
  }
`;

export const StyledLogo = styled.img`
  width: 120px;
  cursor: pointer;

  @media (max-width: 1000px) {
    width: 80px;
  }
`;
