import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: 32px;
  padding: 24px 64px;
  border-radius: 1000px;
  background: #141414;
  color: #fff;
  font-family: Nitti;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0px 8px 0px #16161629;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;
