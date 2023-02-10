import styled from "styled-components";

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -1;
  /* border: 1px solid coral; */

  @media (max-width: 1440px) {
    width: 60%;
    height: 80%;
  }

  @media (max-width: 1200px) {
    height: 60%;
    width: 50%;
  }

  @media (max-width: 850px) {
    height: 100%;
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  border-radius: 8px;
  opacity: 1;
  transform-origin: center center;

  &.mug {
    width: 25%;
    bottom: 0;
    left: 15%;
  }

  &.waterbottle {
    width: 30%;
    bottom: 5%;
    left: 30%;
  }

  &.tote {
    width: 40%;
    bottom: 5%;
    right: 5%;
  }

  &.belo {
    width: 15%;
    bottom: 40%;
    right: 45%;
  }

  &.aesop {
    width: 25%;
    top: 10%;
    right: 15%;
  }

  &.candle {
    width: 25%;
    top: 10%;
    left: 10%;
  }

  &.guestbook {
    width: 18%;
    top: 10%;
    left: 35%;
  }

  @media (max-width: 1440px) {
    &.belo,
    &.aesop,
    &.guestbook {
      width: 25%;
    }

    &.tote {
      width: 50%;
    }
  }

  @media (max-width: 850px) {
    &.belo,
    &.aesop,
    &.guestbook,
    &.tote,
    &.candle,
    &.waterbottle,
    &.mug {
      width: 50%;
    }
  }
`;
