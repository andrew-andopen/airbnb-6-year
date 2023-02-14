import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import FeedbackCard from "../Feedback Card";
import { FeedbackContainer } from "./styles";

const feedbackData = [
  {
    title:
      "The quality of the bag is outstanding. It is durable, simple, slick and is foldable. I appreciate the gift greatly!",
    background: "#D8DCC4",
    color: "#346250",
    className: "sage card",
  },
  {
    title:
      "I looooove it and thank you so much for this kind careful gift, I'm a throw blanket lover. So again thank you so much.",
    background: "#ECE2CE",
    color: "#141414",
    className: "barley card",
  },
  {
    title: "Thank you for the AirbnbLove gift, I LOVE it!",
    background: "#64BCA0",
    color: "#346250",
    className: "clover card",
  },
  {
    title: "THANK YOU!!!",
    background: "#F8FC53",
    color: "#141414",
    className: "acid card",
  },
  {
    title:
      "It was super sweet of my customer service rep to send me a gift after she learned it was my birthday on a call. I'm a new host, so this meant a lot.",
    background: "#A3B4BE",
    color: "#22566D",
    className: "stone card",
  },
  {
    title:
      "Thank you so very much! I love all the Airbnb gifts and they really make me happy!",
    background: "#F7DECC",
    color: "#EE763D",
    className: "blush card",
  },
  {
    title: "Thank you for the AirbnbLove gift, I LOVE it!",
    background: "#B66840",
    color: "#F7DECC",
    className: "terracotta card",
  },
  {
    title:
      "I wasn't expecting anything but it did brighten my day. Thank you for your thoughtfulness.",
    background: "#22566D",
    color: "#C8D8E2",
    className: "navy card",
  },
  {
    title:
      "It was super sweet of my customer service rep to send me a gift after she learned it was my birthday on a call. I'm a new host, so this meant a lot.",
    background: "#346250",
    color: "#D8DCC4",
    className: "forest card",
  },
  {
    title:
      "Loved the gift. It is a great way to make the guest feel more connected to my home.",
    background: "#EE763D",
    color: "#F7DECC",
    className: "rust card",
  },
  {
    title: "Absolutely beautiful! Thank you all so much for everything you do",
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
    title: "Everything was amazing",
    background: "#F7DECC",
    color: "#EE763D",
    className: "blush_two card",
  },
  {
    title:
      "Love this! Such a kind and useful gift that i cant wait to use - thank you!!",
    background: "#ECE2CE",
    color: "#141414",
    className: "barley_two card",
  },
  {
    title:
      "Love this! Such a kind and useful gift that i cant wait to use - thank you!!",
    background: "#A3B4BE",
    color: "#22566D",
    className: "stone_two card",
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
