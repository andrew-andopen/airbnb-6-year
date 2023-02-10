import styled from "styled-components";

export const StyledSuccessContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: #d8dcc4; */
  padding: 80px;
`;

export const SuccessTitleContainer = styled.div`
  max-width: 40%;
  text-align: left;
  margin-bottom: 200px;
`;

export const SuccessH1 = styled.h1`
  font-family: "Leitura 3";
  font-size: 64px;
  margin-bottom: 24px;

  @media (max-width: 1440px) {
    font-size: 48px;
    line-height: 56px;
  }
`;
