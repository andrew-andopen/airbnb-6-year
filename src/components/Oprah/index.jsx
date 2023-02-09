import React from "react";

import { useEffect } from "react";
import { gsap } from "gsap";
import { StyledOprah } from "./styles";
import Oprah from "../../images/oprah.gif";

const OprahComp = ({ stat }) => {
  useEffect(() => {
    gsap.fromTo(
      ".oprah",
      {
        scale: 0,
        opacity: 0,
        rotation: 45,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        rotation: 0,
        ease: "elastic.out(1, 0.6)",
      }
    );
  }, [stat]);

  return <StyledOprah src={Oprah} alt="oprah" className="oprah" />;
};

export default OprahComp;
