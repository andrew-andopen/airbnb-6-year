import styled from "styled-components";

export const StyledFeedbackCard = styled.div`
  padding: 32px 40px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  max-width: 400px;
  position: absolute;
  border-radius: 8px;
  font-size: 20px;
  line-height: 24px;

  &.sage {
    max-width: 320px;
    bottom: 10%;
    left: 5%;
    transform: rotate(-18.38deg);
  }

  &.barley {
    max-width: 320px;
    top: 15%;
    left: 5%;
    transform: rotate(-18.38deg);
  }

  &.clover {
    max-width: 320px;
    bottom: -10%;
    left: 60%;
    transform: rotate(17.17deg);
  }

  &.acid {
    max-width: 320px;
    bottom: 12%;
    left: 35%;
    transform: rotate(-3deg);
  }

  &.blush {
    max-width: 320px;
    bottom: 20%;
    right: 5%;
    transform: rotate(41deg);
  }

  &.stone {
    max-width: 320px;
    top: 10%;
    right: 5%;
    transform: rotate(18deg);
  }

  &.terracotta {
    top: 50%;
    right: -20%;
    transform: rotate(35.09deg);
  }

  &.navy {
    top: 5%;
    left: 40%;
    transform: rotate(8deg);
  }
`;
