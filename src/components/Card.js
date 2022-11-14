import React from "react";

const Card = (props) => {
  const { letter, randomizeCards } = props;

  return (
    <p className="card" type="button" onClick={randomizeCards}>{letter}</p>
  );
};

export default Card;
