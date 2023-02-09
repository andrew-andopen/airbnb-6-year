import React from "react";

import { StyledFeedbackCard } from "./styles";

const FeedbackCard = ({ title, background, color, className }) => {
  return (
    <StyledFeedbackCard
      background={background}
      color={color}
      className={className}
    >
      {title}
    </StyledFeedbackCard>
  );
};

export default FeedbackCard;
