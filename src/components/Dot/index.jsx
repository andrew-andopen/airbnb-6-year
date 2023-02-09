import React from "react";

const Dot = () => {
  const styles = {
    dot: {
      background: "#f8fc53",
      width: "40px",
      height: "40px",
      position: "absolute",
      borderRadius: "1000px",
    },
  };

  return <div className="dot" style={styles.dot}></div>;
};

export default Dot;
