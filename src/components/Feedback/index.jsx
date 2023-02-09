import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import FeedbackCard from "../Feedback Card";
import { FeedbackContainer } from "./styles";

const feedbackData = [
  {
    title:
      "They are super cute but my favorite is how they were designed and made so ethically- very glad to be introduced to this brand and will be buying more from them",
    background: "#D8DCC4",
    color: "#346250",
    className: "sage card",
  },
  {
    title:
      "Cool gift. Something a bit different than the average “corporate gift”. We appreciate it!",
    background: "#ECE2CE",
    color: "#141414",
    className: "barley card",
  },
  {
    title:
      "“They are super cute but my favorite is how they were designed and made so ethically- very glad to be introduced to this brand and will be buying more from them””. We appreciate it!",
    background: "#64BCA0",
    color: "#346250",
    className: "clover card",
  },
  {
    title: "“Hands down, the best gift I've received”",
    background: "#F8FC53",
    color: "#141414",
    className: "acid card",
  },
  {
    title:
      "“Very neat and well made packaging and the blanket is wonderful both in terms of colors and materials. Last but not least: the fast and very detailed shipping. A thousand thanks.”",
    background: "#A3B4BE",
    color: "#22566D",
    className: "stone card",
  },
  {
    title:
      "“I think it’s great that you guys offered the option of donating to a charity :)”",
    background: "#F7DECC",
    color: "#EE763D",
    className: "blush card",
  },
  {
    title:
      "“I think it’s great that you guys offered the option of donating to a charity",
    background: "#B66840",
    color: "#F7DECC",
    className: "terracotta card",
  },
  {
    title:
      "“I think it’s great that you guys offered the option of donating to a charity",
    background: "#22566D",
    color: "#C8D8E2",
    className: "navy card",
  },
  {
    title:
      "“They are super cute but my favorite is how they were designed and made so ethically- very glad to be introduced to this brand and will be buying more from them”",
    background: "#346250",
    color: "#D8DCC4",
    className: "forest card",
  },
  {
    title:
      "“Cool gift. Something a bit different than the average “corporate gift”. We appreciate it!”",
    background: "#EE763D",
    color: "#F7DECC",
    className: "rust card",
  },
  {
    title:
      "“Cool gift. Something a bit different than the average “corporate gift”. We appreciate it!”",
    background: "#F8FC53",
    color: "#141414",
    className: "acid_two card",
  },
  {
    title:
      "“Cool gift. Something a bit different than the average “corporate gift”. We appreciate it!”",
    background: "#E19F9A",
    color: "#F7DECC",
    className: "pink card",
  },
  {
    title:
      "“I think it’s great that you guys offered the option of donating to a charity :)”",
    background: "#F7DECC",
    color: "#EE763D",
    className: "blush_two card",
  },
];

const Feedback = ({ stat }) => {
  const vw = window.innerWidth / 2;
  const vh = window.innerHeight;

  useEffect(() => {
    gsap.fromTo(
      ".card",
      {
        scale: 0,
      },
      {
        duration: 1,
        scale: 1,
        stagger: 0.1,
        ease: "elastic.out(1.1, 0.8)",
      }
    );
  }, [stat]);

  return (
    <FeedbackContainer>
      {feedbackData.map((card, index) => (
        <FeedbackCard
          index={index}
          title={card.title}
          background={card.background}
          color={card.color}
          className={card.className}
        />
      ))}
    </FeedbackContainer>
  );
};

export default Feedback;
