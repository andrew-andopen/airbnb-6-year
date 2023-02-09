import React from "react";

import { useEffect } from "react";

import { gsap } from "gsap";

import aesop from "../../images/aesop.png";
import belo from "../../images/belo.png";
import guestbook from "../../images/guestbook.png";
import mug from "../../images/mug.png";
import candle from "../../images/candle.png";
import tote from "../../images/tough_tote.png";
import waterbottle from "../../images/waterbottle.png";

import { StyledImageContainer, StyledImage } from "./styles";

const Images = ({ stat }) => {
  useEffect(() => {
    gsap.fromTo(
      ".image",
      {
        scale: 0,
        opacity: 0,
        marginTop: 20,
        rotation: 45,
      },
      {
        marginTop: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        rotation: 0,
        stagger: 0.1,
        ease: "elastic.out(1.1, 0.8)",
      }
    );
  }, [stat]);

  return (
    <StyledImageContainer>
      <StyledImage className="image aesop" src={aesop} alt="bag" />

      <StyledImage className="image belo" src={belo} alt="blanket" />

      <StyledImage className="image guestbook" src={guestbook} alt="book" />

      <StyledImage className="image mug" src={mug} alt="mugs" />

      <StyledImage className="image candle" src={candle} alt="vase" />
      <StyledImage className="image tote" src={tote} alt="vase" />
      <StyledImage className="image waterbottle" src={waterbottle} alt="vase" />
    </StyledImageContainer>
  );
};

export default Images;
