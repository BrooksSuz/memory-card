import React from "react";

const Card = (props) => {
  const { letter } = props;

  return (
    <p className="card">{letter}</p>
  );
};

export default Card;
