import { useEffect } from "react";

import { gsap } from "gsap";

import bag from "../../images/bag.jpg";
import blanket from "../../images/blanket.jpg";
import book from "../../images/book.jpg";
import mugs from "../../images/mugs.jpg";
import vase from "../../images/vase.jpg";

import { StyledImageContainer, StyledImage } from "./styles";

const Images = () => {
  useEffect(() => {
    gsap.fromTo(
      ".image",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "linear",
      }
    );
  });

  return (
    <StyledImageContainer>
      <StyledImage
        className="image"
        style={{
          width: "200px",
          top: "10%",
          right: "10%",
        }}
        src={bag}
        alt="bag"
      />

      <StyledImage
        style={{
          width: "200px",
          bottom: "10%",
          right: "10%",
        }}
        src={blanket}
        alt="blanket"
      />

      <StyledImage
        style={{
          width: "200px",
          top: "10%",
          left: "10%",
        }}
        src={book}
        alt="book"
      />

      <StyledImage
        style={{
          width: "200px",
          bottom: "10%",
          left: "10%",
        }}
        src={mugs}
        alt="mugs"
      />

      <StyledImage
        style={{
          width: "200px",
          bottom: "10%",
          left: "50%",
        }}
        src={vase}
        alt="vase"
      />
    </StyledImageContainer>
  );
};

export default Images;
