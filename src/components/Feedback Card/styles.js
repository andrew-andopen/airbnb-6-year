import styled from "styled-components";

export const StyledFeedbackCard = styled.div`
  padding: 32px 40px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  max-width: 600px;
  position: absolute;
  border-radius: 8px;
  font-size: 20px;
  line-height: 24px;

  &.sage {
    max-width: 420px;
    bottom: 10%;
    left: 5%;
    transform: rotate(-18.38deg);
  }

  &.barley {
    max-width: 520px;
    top: 0%;
    left: 0;
    transform: rotate(-18.38deg);
  }

  &.clover {
    max-width: 520px;
    bottom: 50%;
    left: 60%;
    transform: rotate(17.17deg);
  }

  &.acid {
    max-width: 420px;
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
    top: 0%;
    right: 35%;
    transform: rotate(45deg);
  }

  &.terracotta {
    max-width: 320px;
    top: 50%;
    left: 0;
    transform: rotate(-10.09deg);
    z-index: -1;
  }

  &.navy {
    top: 0;
    right: 0;
    transform: rotate(8deg);
  }

  &.forest {
    max-width: 320px;
    top: 34%;
    right: 40%;
    transform: rotate(8deg);
  }

  &.rust {
    max-width: 220px;
    bottom: -5%;
    left: 40%;
    transform: rotate(-18.38deg);
    z-index: -1;
  }

  &.pink {
    max-width: 220px;
    top: 20%;
    left: 10%;
    transform: rotate(-18.38deg);
  }

  &.acid_two {
    max-width: 220px;
    top: 20%;
    right: 10%;
    transform: rotate(-18.38deg);
  }

  &.blush_two {
    max-width: 220px;
    bottom: 25%;
    left: 45%;
    transform: rotate(30.38deg);
    z-index: -1;
  }
`;
