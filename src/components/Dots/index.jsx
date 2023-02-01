import styled from "styled-components";
import { gsap } from "gsap";
import { useEffect } from "react";

import Dot from "../Dot";

export const StyledDotsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Dots = () => {
  const matrix = [...Array(120).keys()];

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  useEffect(() => {
    gsap.fromTo(
      ".dot",
      {
        x: `random(0, ${vw}, 1)`,
        y: `random(0, ${vh}, 1)`,
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "linear",
        backgroundColor: gsap.utils.random(
          [
            "#F8FC53",
            "#E19F9A",
            "#E1EBF0",
            "#EE763D",
            "#346250",
            "#F7DECC",
            "#64BCA0",
            "#ECE2CE",
            "#A3B4BE",
          ],
          true
        ),
        duration: 0.3,
        stagger: 0.08,
      }
    );
  });

  return (
    <StyledDotsContainer>
      {matrix.map((dot, index) => (
        <Dot key={index} />
      ))}
    </StyledDotsContainer>
  );
};

export default Dots;
