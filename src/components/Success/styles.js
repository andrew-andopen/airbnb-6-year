import styled from "styled-components";

export const StyledSuccessContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: #d8dcc4; */
  padding: 80px;

  @media (max-width: 1000px) {
    padding: 40px;
  }

  @media (max-width: 850px) {
    padding: 120px 40px 40px 40px;
    flex-direction: column;
  }
`;

export const SuccessTitleContainer = styled.div`
  max-width: 40%;
  text-align: left;
  margin-bottom: 200px;

  @media (max-width: 850px) {
    max-width: 100%;
    margin-bottom: 0;
  }
`;

export const SuccessH1 = styled.h1`
  font-family: "Leitura 3";
  font-size: 64px;
  margin-bottom: 24px;

  @media (max-width: 1440px) {
    font-size: 48px;
    line-height: 56px;
  }

  @media (max-width: 500px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 16px;
  }
`;
