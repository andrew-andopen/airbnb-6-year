import { useEffect } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { StyledGetAGift } from "./styles";

const GetAGift = ({ stat }) => {
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.fromTo(
      "#test",
      {
        drawSVG: "0",
      },
      {
        duration: 1,
        drawSVG: "100%",
      }
    );
  }, [stat]);

  return <StyledGetAGift></StyledGetAGift>;
};

export default GetAGift;
