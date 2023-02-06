import { useEffect } from "react";

import { gsap } from "gsap";

import bag from "../../images/bag.jpg";
import blanket from "../../images/blanket.jpg";
import book from "../../images/book.jpg";
import mugs from "../../images/mugs.jpg";
import vase from "../../images/vase.jpg";

import { StyledImageContainer, StyledImage } from "./styles";

const Images = ({stat}) => {
  useEffect(() => {
    gsap.fromTo(
      ".image",
      {
        opacity: 0,
        marginTop: 20,
      },
      {
        marginTop: 0,
        opacity: 1,
        dusation: 0.2,
        stagger: 0.2,
        ease: "linear",
      }
    );
  },[stat]);

  return (
    <StyledImageContainer>
      <StyledImage
        className="image bag"
        style={{
          width: "200px",
          right: "10%",
        }}
        src={bag}
        alt="bag"
      />

      <StyledImage
        className="image blanket"
        style={{
          width: "200px",
          bottom: "10%",
          right: "10%",
        }}
        src={blanket}
        alt="blanket"
      />

      <StyledImage
        className="image book"
        style={{
          width: "200px",
          top: "10%",
          left: "10%",
        }}
        src={book}
        alt="book"
      />

      <StyledImage
        className="image mugs"
        style={{
          width: "200px",
          bottom: "10%",
          left: "10%",
        }}
        src={mugs}
        alt="mugs"
      />

      <StyledImage
        className="image vase"
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
