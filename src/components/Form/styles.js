import styled from "styled-components";
import { StyledH1 } from "../../styles";

export const StyledForm = styled.form`
  padding: 140px 40px;
  max-width: 800px;
`;

export const StyledFormWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledFormTitle = styled(StyledH1)`
  margin-bottom: 32px;
`;

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledInput = styled.input`
  background: #ffffff90;
  font-size: 24px;
  padding: 12px 24px;
  border: none;
  color: #141414;
  width: 100%;
  margin-bottom: 4px;
  font-family: "Nitti";

  outline: none;

  ::placeholder {
    color: #081d34;
  }

  &:focus,
  &:hover,
  &:not(:placeholder-shown) {
    background: #ffffff;
  }

  @media (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const StyledHalfField = styled(StyledField)`
  max-width: 49.5%;

  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

export const StyledError = styled.div`
  font-size: 12px;
  color: #ff645f;
`;

export const StyledPhoneText = styled.p`
  font-family: "Nitti";
  font-size: 12px;
`;

export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledSelect = styled.select`
  cursor: pointer;
  font-size: 24px;
  padding: 14px 24px;
  border: none;
  color: #141414;
  width: 100%;
  background: #ffffff80;
  background-image: ${(props) => `url(${props.DownArrow})`};
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  appearance: none;
  background-position-x: ${({ $address }) => ($address ? "97%" : "96%")};
  outline: none;

  &:focus,
  &:hover {
    background: #ffffff;
  }

  @media (max-width: 1440px) {
    font-size: 20px;
  }
`;
