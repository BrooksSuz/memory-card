import React from "react";

const Scoreboard = (props) => {
  const { currentScore, bestScore } = props;
  return (
    <div className="scoreboard">

      <p>{bestScore}</p>
      <p>{currentScore}</p>

    </div>
  );
};

export default Scoreboard;
