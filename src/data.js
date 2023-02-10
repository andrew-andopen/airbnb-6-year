import React from "react";

import { StyledH1 } from "./styles";

const data = [
  {
    title: (
      <StyledH1>
        Six years on, we’re still going strong — and together we’ve gifted over{" "}
        <span>562,100</span> hosts and guests
      </StyledH1>
    ),
    button: "Tell me more",
  },
  {
    title: (
      <StyledH1>
        You’re part of a global community of <span>21,396</span> active gifters,
        and it’s that teamwork that makes the dream work
      </StyledH1>
    ),
    button: "I’m blushing!",
  },
  {
    title: (
      <StyledH1>
        We’re in the business of making magical moments, and you’ve helped make
        <span> 22,601</span> people especially happy
      </StyledH1>
    ),
    button: "No, you’re crying…",
  },
  {
    title: (
      <StyledH1>
        After all that hard work, we reckon <span>you</span> deserve a gift of
        your own
      </StyledH1>
    ),
    button: "A gift? For me?",
  },
];

export default data;
